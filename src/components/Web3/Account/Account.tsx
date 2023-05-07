'use client';

import { useEffect } from 'react'
import { signIn, useSession, signOut  } from 'next-auth/react';
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount, useSignMessage, useNetwork } from 'wagmi'
import { useRouter } from 'next/navigation'
import axios from 'axios';
import { useAuthRequestChallengeEvm } from "@moralisweb3/next";

interface AccountProps { }

const Account = () => {

  
  const { isConnected, address } = useAccount();
  const { chain } = useNetwork();
  const { status } = useSession();
  const { signMessageAsync } = useSignMessage();
  const { push } = useRouter();
  const { requestChallengeAsync } = useAuthRequestChallengeEvm();


  useEffect(() => {
    const handleAuth = async () => {
      
      if (!address) {
        throw new Error("No account found");
      }
      if (!chain) {
        throw new Error("No chain found");
      }

      const challenge = await requestChallengeAsync({
        address: address,
        chainId: chain.id,
      });
      const message = challenge?.message ?? "";
      const signature = await signMessageAsync({ message });

      // redirect user after success authentication to '/user' page
      const x = await signIn("moralis-auth", {
        message,
        signature,
        redirect: false,
        callbackUrl: "/wallet",
      });
      // /**
      //  * instead of using signIn(..., redirect: "/user")
      //  * we get the url from callback and push it to the router to avoid page refreshing
      //  */
      push(x?.url!);
    };
    
    if (status === "unauthenticated" && isConnected) {
      handleAuth();
    }

    if (!isConnected && status === "authenticated"){
      signOut()
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