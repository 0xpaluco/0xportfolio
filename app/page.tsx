// import 'server-only'
import { getAllPublishedArticles } from '@helpers/notion';
import { HomeView } from '@views/index'
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '0xPaluco | Web3 Development',
  description: 'Welcome to Next.js',
};

export default async function Page() {
  const projectData: any[] = []
  const articles = await getAllPublishedArticles()

  return <HomeView projectData={projectData} articleData={articles} />
}

Page.auth = false