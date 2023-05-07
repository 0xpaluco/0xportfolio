'use client';

import '../styles/globals.css'
import '@rainbow-me/rainbowkit/styles.css';

import { createClient, configureChains, WagmiConfig } from 'wagmi';
import { polygon, polygonMumbai, localhost } from "wagmi/chains";
import { publicProvider } from 'wagmi/providers/public';

import { SessionProvider } from 'next-auth/react';
import { darkTheme, getDefaultWallets, RainbowKitProvider, Theme } from '@rainbow-me/rainbowkit';
import { RainbowKitSiweNextAuthProvider, GetSiweMessageOptions } from '@rainbow-me/rainbowkit-siwe-next-auth';
import { ReactNode } from 'react';
import { ThemeOptions } from '@rainbow-me/rainbowkit/dist/themes/baseTheme';
import { merge } from 'lodash';

import WithLayout, { Main } from '@/layouts'

const { provider, webSocketProvider, chains } = configureChains(
  [polygon, polygonMumbai, localhost],
  [
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
    domain: process.env.NEXT_PUBLIC_APP_DOMAIN!,
    statement: 'Please sign this message to confirm your identity.',
    uri: process.env.NEXT_PUBLIC_NEXTAUTH_URL!,
    timeout: 60
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

interface LayoutProps {
  children: ReactNode;
}

export const revalidate = 0



export default function RootLayout({ children }: LayoutProps) {

  return (
    <html lang="en">
      <head>
        {/* Used to be added by default, now we need to add manually */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        {/* 
          Anything we add in layout will appear on EVERY PAGE. At present it can not be overridden lower down the tree.
          This can be useful for things like favicons, or other meta tags that are the same on every page.
        */}
        
      </head>
      <body>

      <WagmiConfig client={client}>
        <SessionProvider refetchInterval={0}>
          <RainbowKitSiweNextAuthProvider getSiweMessageOptions={getSiweMessageOptions} enabled={false}>
            <RainbowKitProvider chains={chains} theme={myTheme}>
              
              <WithLayout layout={Main} component={children} />

            </RainbowKitProvider>
          </RainbowKitSiweNextAuthProvider>
        </SessionProvider>
      </WagmiConfig>

          
      </body>
    </html>
  );
}
