import { AuthView } from '@views/index'
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Connect Wallet',
  };

export default async function Page() {
  return <AuthView />
}

Page.auth = false