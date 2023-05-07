// import 'server-only'
import { HomeView } from '@views/index'
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '0xPaluco | Web3 Development',
  description: 'Welcome to Next.js',
};

export default async function Page() {
  const projectData: any[] = []
  const articleData: any[] = []

  return <HomeView projectData={projectData} articleData={articleData} />
}

Page.auth = false