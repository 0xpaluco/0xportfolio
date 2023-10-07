import { AuthView } from '@views/index'
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Connect Wallet',
    robots: {
      index: false,
      follow: false,
      
    }
  };

export default async function Page() {
  return <AuthView />
}

Page.auth = false