import '../styles/globals.css'
import '@rainbow-me/rainbowkit/styles.css';

import { AppPropsWithLayout } from '@/types'
import { AuthView } from "@views/index";

import { createClient, configureChains, defaultChains, WagmiConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { SessionProvider, useSession } from 'next-auth/react';
import { darkTheme, getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { RainbowKitSiweNextAuthProvider, GetSiweMessageOptions } from '@rainbow-me/rainbowkit-siwe-next-auth';
import { useEffect } from 'react';



const { provider, webSocketProvider, chains } = configureChains(
  defaultChains,
  [
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
    appName: '0xPaluco Dapp',
    chains,
});
const client = createClient({
  provider,
  webSocketProvider,
  autoConnect: true,
  connectors
});

const getSiweMessageOptions: GetSiweMessageOptions = () => ({
  statement: 'Sign in to 0xPaluco Dapp',
});

if (typeof window !== 'undefined') {
  // we only want to call this init function on the frontend, so we check typeof window !== 'undefined'
  
}

function App({ Component, pageProps: { session, ...pageProps } }: AppPropsWithLayout) {
  
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <WagmiConfig client={client}>
      <SessionProvider session={pageProps.session} refetchInterval={0}>
        <RainbowKitSiweNextAuthProvider getSiweMessageOptions={getSiweMessageOptions}>
          <RainbowKitProvider chains={chains} theme={darkTheme()} >
            {Component.auth ? (
              <Auth>
                {getLayout( <Component {...pageProps} /> )}
              </Auth>
            ) : (
                getLayout( <Component {...pageProps} /> )
            )}
          </RainbowKitProvider>
        </RainbowKitSiweNextAuthProvider>
      </SessionProvider>
    </WagmiConfig>
  ) 
}

function Auth({ children }: any) {
  
  const { status } = useSession({ required: true })
  const isLoading = status === "loading";
  const isAuthenticated = status === "authenticated";

  useEffect(() => {
    console.log(`isAuthenticated: ${isAuthenticated}`);
    console.log(`isLoading: ${isLoading}`);
  },[isLoading, isAuthenticated])

  if (isLoading) {
    return <div>Authenticating...</div>
  }

  if (isAuthenticated) {
    return children
  }

  // Session is being fetched, or no user.
  // If no user, useEffect() will redirect.
  return <AuthView />
}

export default App
