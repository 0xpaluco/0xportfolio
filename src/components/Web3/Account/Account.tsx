import { useEffect } from 'react'
import { signIn, useSession } from 'next-auth/react';
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount, useSignMessage, useNetwork } from 'wagmi'
import { useRouter } from 'next/router'
import axios from 'axios'

interface AccountProps { }

const Account = () => {

  const { data: session, status } = useSession();
  const { isConnected, address } = useAccount();
  const { chain } = useNetwork();
  const { signMessageAsync } = useSignMessage();
  const { push } = useRouter();

  useEffect(() => {
    const handleAuth = async () => {
      const userData = { address, chain: chain?.id, network: 'evm' }

      const { data } = await axios.post('/api/auth/request-message', userData, {
        headers: {
          'content-type': 'application/json',
        },
      })

      const message = data.message
      const signature = await signMessageAsync({ message })

      // redirect user after success authentication to '/user' page
      const signInData = await signIn('credentials', {
        message,
        signature,
        redirect: false,
        callbackUrl: '/me',
      })
      /**
       * instead of using signIn(..., redirect: "/me")
       * we get the url from callback and push it to the router to avoid page refreshing
       */
      push(signInData?.url!)
    }
    if (status === 'unauthenticated' && isConnected) {
      handleAuth()
    }
  }, [status, isConnected])

  return (
    <div className="flex items-center">
      <ConnectButton 
        label={"Connect Wallet"}
        chainStatus={{ smallScreen: 'icon', largeScreen: 'icon' }}
        accountStatus={{ smallScreen: 'avatar', largeScreen: 'full' }} 
        showBalance={{ smallScreen: false, largeScreen: true }}
      />
    </div>
  );

}

export default Account;