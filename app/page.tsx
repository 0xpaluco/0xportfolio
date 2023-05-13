// import 'server-only'
import { getAllProjects, getAllPublishedArticles } from '@lib/notion';
import { HomeView } from '@views/index'
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '0xPaluco | Software Engineer',
  description: 'Hi there, I’m Paluco - a software engineer, app builder, and Web3/AI fan based in sunny Puerto Rico.',
};

export default async function Page() {
  const projects = await getAllProjects(3)
  const articles = await getAllPublishedArticles(3)

  return <HomeView projectData={projects} articleData={articles} />
}

Page.auth = false