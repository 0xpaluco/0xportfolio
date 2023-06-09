'use client';

import { Markdown } from '@components/index'
import { getCategoryLink, getDateStr } from '@helpers/notion';
import { Article } from 'lib/types/cms'
import Link from 'next/link';

interface ArticleViewProps {
  article: Article
}


interface AuthorProps {
  author: Article['author']
}

const Author = ({ author }: AuthorProps) => {
  return (
    <div className="relative flex items-center gap-x-4 mt-8">
      <img src={author.avatar_url} alt="" className="h-8 w-8 rounded-full bg-gray-50" />
      <div className="text-sm leading-6">
        <p className="font-semibold text-gray-400">
          <>
            <span className="absolute inset-0" />
            {author.name}
          </>
        </p>
      </div>
    </div>

  )
}

const ArticleView = ({ article }: ArticleViewProps) => {

  return (
    <div className="relative overflow-hidden bg-c-bg text-white py-16">
      <div className="hidden lg:inset-y-0 lg:block lg:h-full lg:w-full">
        <div className="relative mx-auto h-full max-w-prose text-lg" aria-hidden="true">
          <svg
            className="absolute top-12 left-full translate-x-32 transform"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={384} fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
          </svg>
          <svg
            className="absolute top-1/2 right-full -translate-y-1/2 -translate-x-32 transform"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={384} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
          </svg>
          <svg
            className="absolute bottom-12 left-full translate-x-32 transform"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="d3eb07ae-5182-43e6-857d-35c643af9034"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={384} fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
          </svg>
        </div>
      </div>

      <div className='mx-4'>
        <div className="mt-16 lg:mt-32">
          <div className="xl:relative">
            <div className="mx-auto max-w-2xl">

              <article>
                <header className="flex flex-col">
                  <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                    {article.title}
                  </h1>
                  <Author author={article.author}/>
                  <p className="mt-8 text-xl leading-8 text-gray-400">
                    {article.summary}
                  </p>
                  <div className='mt-4 flex w-full'>
                  <div className='w-full align-middle items-center flex'>
                    {article.tags.map((tag) => (
                      <Link href={getCategoryLink(tag.slug)} key={tag.id} className="inline-flex rounded bg-c-l-primary px-2 py-0.5 text-sm font-bold text-c-d-primary mr-2">
                        {tag.title}
                      </Link>
                    ))}
                  </div>
                  </div>
                  
                  <time
                    dateTime={article.date}
                    className="order-first flex items-center text-base text-gray-400"
                  >
                    <span className="h-4 w-0.5 rounded-full bg-gray-200" />
                    <span className="ml-3">{getDateStr(article.date)}</span>
                  </time>
                </header>
                <div className='prose prose-lg prose-white mx-auto mt-6 text-white'>
                  <Markdown>{article.content || ""}</Markdown>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>

    </div>

  )
}

export default ArticleView
