import { AboutView } from '@views/index'
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '0xPaluco | About',
  description: 'Hi there, I’m Paluco - a software engineer, app builder, and Web3/AI fan based in sunny Puerto Rico.',
};

export default async function Page() {
  const projectData: any[] = []
  const articleData: any[] = []

  return <AboutView />
}

Page.auth = false