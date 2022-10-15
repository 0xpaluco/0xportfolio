import type { ReactElement } from 'react'
import { ProfileView } from '@views/index'
import WithLayout, { Simple, Home } from 'src/layouts'
import Moralis from 'moralis';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import { catchPromise } from '@helpers/utils';
import { ERC20Token } from '@/types';

interface PageProps {
  address: string;
  ens?: string;
  nativeBalance: string;
  tokenBalances: Array<ERC20Token>;
  nftBalances: Array<any>
}


export const getServerSideProps: GetServerSideProps<PageProps> = async (context) => {

  const session = await getSession(context)
  const address = session?.user?.address ?? "";

  if (!address) {
    return {
      props: {
        address,
        nativeBalance: "",
        tokenBalances: [],
        nftBalances: [],
        ens: ""
      }
    }
  }

  await Moralis.start({ apiKey: process.env.MORALIS_API_KEY });
  // Promise.all() for receiving data async from two endpoints
  const [nativeBalance, tokenBalances, nftBalances] = await Promise.all([
      Moralis.EvmApi.balance.getNativeBalance({ address }),
      Moralis.EvmApi.token.getWalletTokenBalances({ address }),
      Moralis.EvmApi.nft.getWalletNFTs({ address }),
  ]);

  const resolvePromise = Moralis.EvmApi.resolve.resolveAddress({ address });
  const [response, error] = await catchPromise(resolvePromise);

  return {
    props: {
      address,
      nativeBalance: nativeBalance.result.balance.ether,
      tokenBalances: tokenBalances.result.map((_token) => JSON.parse(JSON.stringify(_token.toJSON())) ),
      nftBalances: nftBalances.result.map((_token) => JSON.parse(JSON.stringify(_token.toJSON())) ),
      ens: response ? response.result.name : ""
    }
  }
}

const Portfolio = (props: PageProps) => {
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

Portfolio.getLayout = function getLayout(page: ReactElement<PageProps>) {
  return <WithLayout layout={Home} component={page} />
}

Portfolio.auth = true;

export default Portfolio
