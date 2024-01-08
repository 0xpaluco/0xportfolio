import { getAllPublishedArticles } from '@lib/notion'
import { BlogView } from '@views/index'
import type { Metadata } from 'next'

export const revalidate = 60 // revalidate this page every 60 seconds

export const metadata: Metadata = {
  title: '0xPaluco | Blog',
  description:
    'Software Engineering, Startup Life, Artificial Intelligence, and Web3 Technology: The Future of Tech',
  keywords: 'Software Engineering, Startup, Artificial Intelligence, Web3',
  alternates: {
    canonical: `https://www.0xpalu.co/blog`,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default async function Page() {
  const articles = await getAllPublishedArticles()
  return <BlogView articleData={articles} />
}

Page.auth = false
