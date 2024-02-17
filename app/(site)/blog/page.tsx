import { BlogView } from '@views/index'
import type { Metadata } from 'next'
import { SanityDocument } from 'next-sanity'

import { urlForImage } from '@/sanity/lib/image'
import {
  BLOG_PAGE_QUERY,
  PageDataType,
  Post,
  POSTS_QUERY,
} from '@/sanity/lib/queries'
import { loadQuery } from '@/sanity/lib/store'

export const revalidate = 60 // revalidate this page every 60 seconds

const siteURL = process.env.APP_URL

export async function generateMetadata({ params }): Promise<Metadata> {
  const blogPageData =
    await loadQuery<SanityDocument<PageDataType>>(BLOG_PAGE_QUERY)

  return {
    title: 'Blog',
    description: blogPageData.data.title,
    alternates: {
      canonical: `${siteURL}/blog`,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type: 'website',
      url: `${siteURL}/blog`,
      title: blogPageData.data.title,
      description: blogPageData.data.description,
      images: [
        {
          url: urlForImage(blogPageData.data?.image),
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Blog',
      description: blogPageData.data.title,
      images: [
        {
          url: urlForImage(blogPageData.data?.image),
        },
      ],
    },
  }
}

export default async function Page() {
  const blogPageData =
    await loadQuery<SanityDocument<PageDataType>>(BLOG_PAGE_QUERY)
  const articles = await loadQuery<SanityDocument<Post>[]>(POSTS_QUERY)

  return <BlogView pageData={blogPageData.data} articleData={articles.data} />
}

Page.auth = false
