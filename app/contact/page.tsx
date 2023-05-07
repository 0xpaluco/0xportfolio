import { ContactView } from '@views/index'
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact',
    description: 'Welcome to Next.js',
  };

export default async function Page() {
  const projectData: any[] = []
  const articleData: any[] = []

  return <ContactView />
}

Page.auth = false