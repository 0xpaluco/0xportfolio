import { Card } from '@components/index'
import { getBlogLink, getDateStr } from '@helpers/notion'
import { BookOpenIcon } from '@heroicons/react/24/outline'
import { SanityDocument } from 'next-sanity'
import { Post } from '@/sanity/lib/queries'
import { urlForImageSqr } from '@/sanity/lib/image'

interface ArticleProps {
  article: SanityDocument<Post>
}
const ArticleCard = ({ article }: ArticleProps) => {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline py-2 px-1">
      <Card className="md:col-span-4 grid grid-cols-4">
        <div className="col-span-4 sm:col-span-3 pr-2">
          <Card.Title href={getBlogLink(article.slug)}>
            {article.title}
          </Card.Title>
          <Card.Eyebrow as="time" className="block" decorate={false}>
            {getDateStr(article.publishedAt)}
          </Card.Eyebrow>
          <Card.Description>{article.excerpt}</Card.Description>
          <Card.Cta>Read article</Card.Cta>
        </div>

        <div className="lg:col-span-1 pl-2 rounded-md z-20 hidden lg:block">
          <Card.Media
            src={urlForImageSqr(article.mainImage)}
            alt={article.title || ''}
          ></Card.Media>
        </div>
      </Card>
    </article>
  )
}
interface ArticleListProps {
  articles: SanityDocument<Post>[]
}
export const RecentArticleList = ({ articles }: ArticleListProps) => {
  return (
    <div className="md:px-3 ">
      <div className="border-gray-400/40 border-2 rounded-lg p-4 mb-6 bg-c-bg shadow-md shadow-c-bg">
        <div className="sm:max-w-xl sm:mx-auto lg:mx-0">
          <div className="mt-2 inline-flex items-center text-c-l-primary">
            <BookOpenIcon className="w-5 h-5 mr-2" />
            <h2 className="text-sm font-semibold">LATEST ARTICLES</h2>
          </div>
          <div className="flex flex-col space-y-14 mt-12 md:mt-8">
            {articles?.map((article) => (
              <ArticleCard key={article._id} article={article} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
