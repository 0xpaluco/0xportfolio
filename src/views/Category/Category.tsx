'use client'

import { CategoryContent } from 'lib/types/strapi-schema'
import { classNames } from '@helpers/ui'
import { FolderIcon, BookOpenIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import {
  CodeBracketIcon,
  ArrowLeftOnRectangleIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/solid'
import { Category } from '@lib/types/cms'
interface CardProps {
  content: CategoryContent
}

const Card = ({ content }: CardProps) => {
  return (
    <div
      key={content.id}
      className={classNames(
        'relative group bg-c-bg-light p-6 focus-within:ring-1 focus-within:ring-inset focus-within:ring-c-d-primary',
      )}
    >
      <div>
        {content.attributes.type === 'article' && (
          <BookOpenIcon
            className="h-10 w-10 text-c-l-primary"
            strokeWidth={'1px'}
          />
        )}
        {content.attributes.type === 'project' && (
          <FolderIcon
            className="h-10 w-10 text-c-l-primary"
            strokeWidth={'1px'}
          />
        )}
      </div>
      <div className="my-8">
        <h3 className="text-lg font-medium text-white">
          {content.attributes.slug}
        </h3>

        <p className="mt-2 text-sm text-gray-400">
          {content.attributes.description}
        </p>
      </div>
      <div className="absolute bottom-2">
        <p className="mt-2 text-sm text-gray-400 inline-flex items-center align-middle mb-2">
          <span className="inline-flex items-center mr-2 rounded text-sm font-medium text-gray-400">
            ...
          </span>

          {content.attributes.categories?.data.map((cat) => (
            <Link
              key={cat.id}
              href={`/c/${cat.attributes.slug}`}
              className="hover:underline mr-1 inline-flex items-center rounded text-sm font-medium text-c-l-primary before:mr-1 before:text-slate-400 before:content-['/']"
            >
              {cat.attributes.slug}
            </Link>
          ))}
        </p>
      </div>
      <span
        className="absolute top-6 right-6 text-gray-300 inline-flex items-center"
        aria-hidden="true"
      >
        {content.attributes.repositoryUrl && (
          <Link
            href={content.attributes.repositoryUrl}
            target="_blank"
            className="hover:text-gray-400 hover:cursor-pointer mx-2"
          >
            <CodeBracketIcon className="h-6 w-6" strokeWidth={'1px'} />
          </Link>
        )}

        {content.attributes.appUrl && (
          <Link
            href={content.attributes.appUrl}
            target="_blank"
            className="hover:text-gray-400 hover:cursor-pointer mx-2"
          >
            <ArrowLeftOnRectangleIcon className="h-6 w-6" strokeWidth={'1px'} />
          </Link>
        )}

        {content.attributes.articleUrl && (
          <Link
            href={content.attributes.articleUrl}
            target="_blank"
            className="hover:text-gray-400 hover:cursor-pointer mx-2"
          >
            <ArrowRightIcon className="h-6 w-6" strokeWidth={'1px'} />
          </Link>
        )}
      </span>
    </div>
  )
}

interface GridProps {
  contentList: CategoryContent[]
}

const Grid = ({ contentList }: GridProps) => {
  return (
    <div className="mt-12 overflow-hidden shadow divide-y divide-c-bg sm:divide-y-0 sm:grid sm:grid-cols-3 sm:gap-2">
      {contentList.map((content) => (
        <Card content={content} key={content.id}></Card>
      ))}
    </div>
  )
}

interface CategoryViewProps {
  category: Category
  contentList: CategoryContent[]
}

const CategoryView = ({ category, contentList }: CategoryViewProps) => {
  return (
    <div className="relative bg-c-bg rounded-md shadow-lg pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className=" h-1/3 sm:h-2/3" />
      </div>
      <div className="relative  max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl tracking-tight font-extrabold text-white sm:text-4xl">
            {category.title}
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-400 sm:mt-4">
            {category.description}
          </p>
        </div>

        <Grid contentList={contentList}></Grid>
      </div>
    </div>
  )
}

export default CategoryView
