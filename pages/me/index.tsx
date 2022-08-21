import type { ReactElement } from 'react'
import { ProfileView } from '@views/index'
import WithLayout, { Simple } from 'src/layouts'
import Moralis from 'moralis';
import { GetServerSideProps } from 'next';
import { ERC20Token } from '@/types';
import { getSession } from 'next-auth/react';
import { getToken } from 'next-auth/jwt';
import { catchPromise } from '@helpers/utils';


export interface ProfileProps {
  address: string;
  ens?: string;
  nativeBalance: string;
  tokenBalances: Array<ERC20Token>;
  nftBalances: Array<any>
}

export const getServerSideProps: GetServerSideProps = async (context) => {

  const session = await getSession(context)
  const token = await getToken({ req: context.req });
  const address = token?.sub ?? "0x0";
  
  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  await Moralis.start({ apiKey: process.env.MORALIS_API_KEY });
  // Promise.all() for receiving data async from two endpoints
  const [nativeBalance, tokenBalances, nftBalances] = await Promise.all([
      Moralis.EvmApi.account.getNativeBalance({ address }),
      Moralis.EvmApi.account.getTokenBalances({ address }),
      Moralis.EvmApi.account.getNFTs({ address }),
  ]);

  const resolvePromise = Moralis.EvmApi.resolve.resolveAddress({ address });
  const [response, error] = await catchPromise(resolvePromise);

  return {
    props: {
      address,
      nativeBalance: nativeBalance.result.balance.ether,
      tokenBalances: tokenBalances.result.map((token) => JSON.parse(JSON.stringify(token.toJSON())) ),
      nftBalances: nftBalances.result.map((token) => JSON.parse(JSON.stringify(token.toJSON())) ),
      ens: response ? response.result.name : ""
    }
  }
}

const Me = (props: ProfileProps) => {
  return (
    <ProfileView 
      address={props.address}
      nativeBalance={props.nativeBalance}
      tokenBalances={props.tokenBalances}
      nftBalances={props.nftBalances}
      ens={props.ens}
    />
  )
}

Me.getLayout = function getLayout(page: ReactElement) {
  return <WithLayout layout={Simple} component={page} />
}

Me.auth = true;

export default Me
