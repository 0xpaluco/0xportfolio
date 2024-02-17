'use client'

import { Markdown } from '@components/index'
import { AlertBanner, TableOfContents } from '@components/shared'
import { getCategoryLink, getDateStr } from '@helpers/notion'
import Image from 'next/image'
import Link from 'next/link'
import { SanityDocument } from 'next-sanity'
import { useState } from 'react'

import { urlForImage } from '@/sanity/lib/image'
import { Post } from '@/sanity/lib/queries'

// export interface ArticleViewProps {
//   article: SanityDocument<Post>
//   recentArticles?: SanityDocument<Post>[]
//   preview?: boolean
//   loading?: boolean
// }

export type ArticleViewProps = {
  data?: SanityDocument<Post>
}

interface AuthorProps {
  author: SanityDocument<Post>['author']
}

const Author = ({ author }: AuthorProps) => {
  return (
    <div className="relative flex items-center gap-x-2">
      {author?.image ? (
        <Image
          src={urlForImage(author?.image)}
          width={300}
          height={300}
          alt={author.name || 'author'}
          title={author.name || 'author'}
          className="h-8 w-8 rounded-full bg-gray-50"
        />
      ) : null}
      <div className="text-sm leading-6">
        <p className="font-semibold text-gray-400">
          <span className="absolute inset-0" />
          {author?.name}
        </p>
      </div>
    </div>
  )
}

type TopicBadgesProps = {
  categories: Post['categories']
}
const TopicBadges = ({ categories }: TopicBadgesProps) => {
  return (
    <div className="flex w-full">
      <div className="w-full align-middle items-center flex">
        {categories?.map((category) => (
          <Link
            href={getCategoryLink(category.slug)}
            key={category._id}
            className="inline-flex rounded bg-c-l-primary px-2 py-0.5 text-sm font-bold text-c-d-primary mr-2"
          >
            {category.title}
          </Link>
        ))}
      </div>
    </div>
  )
}

const ArticleView = (props: ArticleViewProps) => {
  if (!props.data) {
    console.log(`ArticleView data empty: ${JSON.stringify(props)}`)
    return null
  }

  const article = props.data

  return (
    <div className="relative isolate overflow-hidden bg-c-bg px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10 ">
        <div className="lg:col-span-6 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-1 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-3xl">
              <p className="text-base font-semibold leading-7 text-c-primary">
                <time
                  dateTime={article?.publishedAt}
                  className="order-first flex items-center text-base text-gray-400"
                >
                  <span className="h-4 w-0.5 rounded-full bg-gray-200" />
                  <span className="ml-3">
                    {getDateStr(article?.publishedAt!)}
                  </span>
                </time>
              </p>
              <div className="w-full">
                {article?.mainImage ? (
                  <Image
                    className="float-left m-0 w-full mr-4 rounded-lg my-4"
                    src={urlForImage(article?.mainImage)}
                    width={1600}
                    height={900}
                    alt={article.mainImage.alt || ''}
                    title={article.mainImage.alt || ''}
                  />
                ) : null}
              </div>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {article?.title}
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-400">
                {article?.excerpt}
              </p>
              <p className="mt-6 flex gap-x-8 items-center align-middle">
                <Author author={article.author} />
                <TopicBadges categories={article.categories} />
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-3 lg:row-span-2 lg:row-start-1 lg:overflow-hidden lg:max-w-lg">
          <TableOfContents />
        </div>
        <div className="lg:col-span-6 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 prose-white lg:max-w-3xl">
              {article?.content ? (
                <Markdown>{article.content || ''}</Markdown>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticleView
