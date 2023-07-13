'use client';

import * as React from 'react';
import {
    RainbowKitProvider,
    getDefaultWallets,
    connectorsForWallets,
    darkTheme,
    Theme
} from '@rainbow-me/rainbowkit';
import { ThemeOptions } from '@rainbow-me/rainbowkit/dist/themes/baseTheme';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
    mainnet,
    polygon,
    polygonMumbai,
    localhost,
    goerli,
} from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

import { SessionProvider } from 'next-auth/react';
import { RainbowKitSiweNextAuthProvider, GetSiweMessageOptions } from '@rainbow-me/rainbowkit-siwe-next-auth';


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

const myTheme = {
    ...darkTheme(themeConfig),
    fonts: {
        body: ''
    },
} as Theme;


const { chains, publicClient, webSocketPublicClient } = configureChains(
    [
        mainnet,
        polygon,
        ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [goerli, polygonMumbai] : []),
        ...(process.env.NEXT_PUBLIC_ENABLE_LOCAL === 'true' ? [localhost] : []),
    ],
    [publicProvider()]
);

const projectId = process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID ?? "";

const { wallets } = getDefaultWallets({
    appName: '0xpaluco',
    projectId,
    chains,
});

const demoAppInfo = {
    appName: '0xpaluco',
};

const connectors = connectorsForWallets([
    ...wallets,
]);

const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient,
    webSocketPublicClient,
});

export default function Web3Provider({ children }: { children: React.ReactNode }) {
    const [mounted, setMounted] = React.useState(false);
    React.useEffect(() => setMounted(true), []);
    return (
        <WagmiConfig config={wagmiConfig}>
            <SessionProvider refetchInterval={0}>
                <RainbowKitSiweNextAuthProvider getSiweMessageOptions={getSiweMessageOptions} enabled={false}>
                    <RainbowKitProvider chains={chains} appInfo={demoAppInfo} theme={myTheme} modalSize='compact'>
                        {mounted && children}
                    </RainbowKitProvider>
                </RainbowKitSiweNextAuthProvider>
            </SessionProvider>
        </WagmiConfig >
    );
}
