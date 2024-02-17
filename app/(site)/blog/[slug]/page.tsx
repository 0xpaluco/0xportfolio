import { LiveQueryWrapper } from '@components/shared'
import { getBlogLink } from '@helpers/notion'
import { ArticleViewProps } from '@views/Article/Article'
import { ArticleView } from '@views/index'
import type { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { SanityDocument } from 'next-sanity'

import { urlForImage } from '@/sanity/lib/image'
import { Post, POST_QUERY, POSTS_QUERY } from '@/sanity/lib/queries'
import { loadQuery } from '@/sanity/lib/store'

export const revalidate = 60 // revalidate this page every 60 seconds
export const dynamicParams = true
export const dynamic = "force-dynamic"

export async function generateStaticParams() {
  const articles = await loadQuery<SanityDocument<Post[]>>(POSTS_QUERY)
  return articles.data.map(({ slug }) => ({ params: { slug } }))
}

const siteURL = process.env.APP_URL

export async function generateMetadata({ params }): Promise<Metadata> {
  const article = await loadQuery<SanityDocument<Post>>(POST_QUERY, params, {})

  return {
    title: article.data.title,
    description: article.data.excerpt,
    // keywords: article.data.title?.split(' ', 6),
    alternates: {
      canonical: `${siteURL}${getBlogLink(article.data.slug)}`,
    },
    publisher: '0xpaluco',
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type: 'website',
      url: `${siteURL}${getBlogLink(article.data.slug)}`,
      title: `${article.data.title} | 0xpaluco`,
      description: article.data.excerpt,
      images: [
        {
          url: urlForImage(article.data?.mainImage),
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.data.title,
      description: article.data.excerpt,
      images: [
        {
          url: urlForImage(article.data?.mainImage),
        },
      ],
    },
  }
}

export default async function Page({ params }) {
  const { isEnabled } = draftMode()
  const initial = await loadQuery<ArticleViewProps['data']>(
    POST_QUERY,
    params,
    {
      // Because of Next.js, RSC and Dynamic Routes this currently
      // cannot be set on the loadQuery function at the "top level"
      perspective: isEnabled ? 'previewDrafts' : 'published',
      next: { tags: ['blog'] },
    },
  )

  return (
    <LiveQueryWrapper
      isEnabled={isEnabled}
      query={isEnabled ? POST_QUERY : ''}
      params={isEnabled ? params : {}}
      initial={initial}
    >
      <ArticleView data={initial.data} />
    </LiveQueryWrapper>
  )
}

Page.auth = false
