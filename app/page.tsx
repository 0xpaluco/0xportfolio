// import 'server-only'
import { getAllProjects, getAllPublishedArticles } from '@helpers/notion';
import { HomeView } from '@views/index'
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '0xPaluco | Web3 Development',
  description: 'Welcome to Next.js',
};

export default async function Page() {
  const projects = await getAllProjects(3)
  const articles = await getAllPublishedArticles(3)

  return <HomeView projectData={projects} articleData={articles} />
}

Page.auth = false