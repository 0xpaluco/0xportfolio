import { getAllPublishedArticles } from '@helpers/notion';
import { BlogView } from '@views/index'
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Blog',
    description: 'Welcome to Next.js'
};

export default async function Page() {
  const articles = await getAllPublishedArticles()
  return <BlogView articleData={articles} />
}

Page.auth = false