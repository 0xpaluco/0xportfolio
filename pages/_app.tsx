import '../styles/globals.css'
import '@rainbow-me/rainbowkit/styles.css';

import { AppPropsWithLayout } from '@/types'
import { AuthView } from "@views/index";

import { createClient, configureChains, defaultChains, WagmiConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { infuraProvider } from 'wagmi/providers/infura'
import { SessionProvider, useSession } from 'next-auth/react';
import { darkTheme, getDefaultWallets, RainbowKitProvider, Theme } from '@rainbow-me/rainbowkit';
import { RainbowKitSiweNextAuthProvider, GetSiweMessageOptions } from '@rainbow-me/rainbowkit-siwe-next-auth';
import { useEffect, ReactElement, ReactNode } from 'react';
import { ThemeOptions } from '@rainbow-me/rainbowkit/dist/themes/baseTheme';
import { merge } from 'lodash';


const { provider, webSocketProvider, chains } = configureChains(
  defaultChains,
  [
    infuraProvider({ apiKey: process.env.INFURA_API_KEY, priority: 0 }),
    publicProvider({ priority: 1})
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

const themeConfig: ThemeOptions = {
  accentColor: '#A731C2',
  accentColorForeground: '#FDFDFD',
  borderRadius: 'medium',
  fontStack: 'system',
  overlayBlur: 'small',
}

const myTheme = merge(darkTheme(themeConfig), {
  fonts: {
    body: ''
  }
} as Theme);


if (typeof window !== 'undefined') {
  // we only want to call this init function on the frontend, so we check typeof window !== 'undefined'
}


function App({ Component, session, pageProps: {  ...pageProps } }: AppPropsWithLayout) {
  
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <WagmiConfig client={client}>
      <SessionProvider session={session} refetchInterval={0}>
        <RainbowKitSiweNextAuthProvider getSiweMessageOptions={getSiweMessageOptions}>
          <RainbowKitProvider chains={chains} 
            theme={myTheme}>
            {Component.auth ? (
              <Auth>
                {getLayout( <Component { ...pageProps } /> )}
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

interface AuthProps {
  children: any
}
function Auth({ children }: AuthProps) {
  
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
    return children;
  }

  // Session is being fetched, or no user.
  // If no user, useEffect() will redirect.
  return <AuthView />
}

export default App
