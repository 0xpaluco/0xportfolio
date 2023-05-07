import { AboutView } from '@views/index'
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About',
    description: 'Welcome to Next.js',
  };

export default async function Page() {
  const projectData: any[] = []
  const articleData: any[] = []

  return <AboutView />
}

Page.auth = false