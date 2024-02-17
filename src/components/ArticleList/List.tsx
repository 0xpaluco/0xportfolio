// import { Article } from 'lib/types/cms'
import { Card } from '@components/index'
import { getBlogLink, getDateStr } from '@helpers/notion'
import { SanityDocument } from 'next-sanity'

import { Post } from '@/sanity/lib/queries'

interface ArticleProps {
  article: SanityDocument<Post>
}

const Article = ({ article }: ArticleProps) => {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={getBlogLink(article.slug)}>
          {article.title}
        </Card.Title>
        <Card.Eyebrow as="time" className="md:hidden" decorate>
          {getDateStr(article.publishedAt)}
        </Card.Eyebrow>
        <Card.Description>{article.excerpt}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow as="time" className="mt-1 hidden md:block" decorate={false}>
        {getDateStr(article.publishedAt)}
      </Card.Eyebrow>
    </article>
  )
}

interface ArticleListProps {
  articles: SanityDocument<Post>[]
}

const ArticleList = ({ articles }: ArticleListProps) => {
  return (
    <div className="md:border-l-2 md:border-gray-400/40 md:pl-6">
      <div className="flex max-w-3xl flex-col space-y-16">
        {articles?.map((article) => (
          <Article key={article._id} article={article} />
        ))}
      </div>
    </div>
  )
}

export default ArticleList
