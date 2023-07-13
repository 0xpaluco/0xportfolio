'use client';

import '../styles/globals.css'
import '@rainbow-me/rainbowkit/styles.css';
import { ReactNode } from 'react';
import { Web3Provider } from '@/components';
import WithLayout, { Main } from '@/layouts'

interface LayoutProps {
  children: ReactNode;
}

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
        <Web3Provider>
          <WithLayout layout={Main} component={children} />
        </Web3Provider>
      </body>
    </html>
  );
}
