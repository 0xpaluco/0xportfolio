import { BlogView } from '@views/index'
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Blog',
    description: 'Welcome to Next.js'
};

export default async function Page() {
  const articleData: any[] = []

  return <BlogView articleData={articleData} />
}

Page.auth = false