import { Article } from "lib/types/strapi-schema";
import moment from "moment";
import { Card } from "@components/index";

interface ArticleProps {
  article: Article
}

const Article = ({ article }: ArticleProps) => {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/${article.attributes.slug}`}>
          {article.attributes.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.attributes.publishedAt}
          className="md:hidden"
          decorate
        >
          {moment(article.attributes.publishedAt).format("MMMM D, YYYY")}
        </Card.Eyebrow>
        <Card.Description>{article.attributes.summary}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.attributes.publishedAt}
        className="mt-1 hidden md:block"
        decorate={false}
      >
        {moment(article.attributes.publishedAt).format("MMMM D, YYYY")}
      </Card.Eyebrow>
    </article>
  )
}

interface ArticleListProps {
  articles: Article[]
}

const ArticleList = ({ articles }: ArticleListProps) => {
  return (
    <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
      <div className="flex max-w-3xl flex-col space-y-16">
        {articles.map((article) => (
          <Article key={article.id} article={article} />
        ))}
      </div>
    </div>
  )
}


export default ArticleList;