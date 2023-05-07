import { AuthView } from '@views/index'
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Connect Wallet',
    description: 'Welcome to Next.js',
  };

export default async function Page() {
  return <AuthView />
}

Page.auth = false