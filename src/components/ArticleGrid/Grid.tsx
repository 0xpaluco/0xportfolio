import { Article } from "lib/types/strapi-schema";
import moment from "moment";
import Link from "next/link";


interface ArticleCardProps {
  article: Article
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <div key={article.attributes.slug} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div className="flex-shrink-0 bg-c-bg">
        <img className="h-48 w-full object-cover" src={`${article.attributes.coverImage.data?.attributes.url}`} alt="" />
      </div>
      <div className="flex-1 bg-c-bg-light p-6 flex flex-col justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-c-l-primary">
            <span className="inline-flex items-center mr-2 rounded text-sm font-medium text-gray-400">
              ...
            </span>
            {article.attributes.categories.data.map((cat) => (
              <Link href={`/c/${cat.attributes.slug}`} key={cat.id}>
                <a className="hover:underline mr-2 before:mr-1 before:text-slate-400 before:content-['/']">
                  {cat.attributes.slug}
                </a>
              </Link>
            ))}


          </p>
          <Link href={article.attributes.slug}>
            <a className="block mt-2">
              <p className="text-xl font-semibold text-white">{article.attributes.title}</p>
              <p className="mt-3 text-base text-gray-400">{article.attributes.summary}</p>
            </a>
          </Link>

        </div>
        <div className="mt-6 flex items-center">
          <div className="flex-shrink-0">
              <Link href={article.attributes.slug}>
                <a >
                  <span className="sr-only">{article.attributes.author?.data.attributes.name}</span>
                  <div className="h-10 w-10 rounded-full bg-black" />
                </a>
              </Link>
          </div>
          <div className="ml-3">
              <p className="text-sm font-medium text-white">
                <Link href={article.attributes.author?.data.attributes.name || ""}>
                  <a  className="hover:underline">
                    paluco.eth
                </a>
                </Link>
              </p>
              <div className="flex space-x-1 text-sm text-gray-500">
                
                <span>{moment(article.attributes.publishedAt.toString()).calendar()}</span>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

interface ArticleGridProps {
  articles: Article[]
}

const ArticleGrid = ({ articles }: ArticleGridProps) => {
  return (
    <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
      {articles.map((article) => (
        <ArticleCard article={article} key={article.id}></ArticleCard>
      ))}
    </div>
  )
}


export default ArticleGrid;