import { Card } from "@components/index"
import { FolderIcon, CodeBracketIcon, BookOpenIcon, EnvelopeIcon } from "@heroicons/react/24/outline"
import { Article } from "lib/types/cms"
import moment from "moment"
import Link from "next/link"

interface FeaturedWorkProps {
  projects: any[]
  articles: Article[]
}

export default function FeaturedWork({ projects, articles }: FeaturedWorkProps) {
  return (
    <div className="py-12 bg-c-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-10">

          <div className="mt-6 lg:grid lg:grid-cols-2 lg:gap-y-8">

            <ArticleList articles={articles} />

            <div className="md:px-8 md:pb-8">
              <Form />
              <ProjectList projects={projects} />
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

interface ListProps {
  projects: any[]
}
const ProjectList = ({ projects }: ListProps) => {
  return (
    <div className="p-4 border-gray-400/40 border-2 rounded-lg">
      <div className="mt-2 inline-flex items-center text-c-l-primary">
        <CodeBracketIcon className="w-5 h-5 mr-2" />
        <h2 className="text-sm font-semibold">MY WORK</h2>
      </div>
      <div className="mt-6 flow-root">
        <ul role="list" className="-my-5 divide-y divide-gray-400">
          {projects?.map((project) => (

            <li key={project.id} className="py-5">
              <div className="relative">
                <FolderIcon className="w-8 h-8 text-c-l-primary mb-2" />
                <h3 className="text-sm font-semibold text-white">
                  <Link href={`/projects/${project.attributes.slug}`}
                     className="hover:underline focus:outline-none">
                      {/* Extend touch target to entire panel */}
                      <span className="absolute inset-0" aria-hidden="true" />
                      {project.attributes.slug}
                  </Link>
                </h3>
                <p className="mt-1 text-sm text-gray-400 line-clamp-2">{project.attributes.description}</p>
              </div>
            </li>

          ))}
        </ul>
      </div>
      <div className="mt-6">
        <Link href={'/projects'}
            className="flex w-full items-center justify-center rounded-md border-2 border-c-bg bg-c-bg-light px-4 py-2 text-sm font-medium text-white shadow-sm hover:border-c-primary/40"
          >
            View all projects
        </Link>

      </div>
    </div>
  )
}

interface ArticleProps {
  article: Article
}

const Article = ({ article }: ArticleProps) => {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/blog/${article.slug}`}>
          {article.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="block"
          decorate
        >
          {moment(article.date).format("MMMM D, YYYY")}
        </Card.Eyebrow>
        <Card.Description>{article.summary}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
    </article>
  )
}

interface ArticleListProps {
  articles: Article[]
}

const ArticleList = ({ articles }: ArticleListProps) => {
  return (
    <div className="mb-10">
      <div className="md:border-l-2 md:border-gray-400/40 md:pl-6">
        <div className="inline-flex items-center text-c-l-primary">
          <BookOpenIcon className="w-5 h-5 mr-2" />
          <h2 className="text-sm font-semibold">LATEST ARTICLES</h2>
        </div>
        <div className="flex flex-col space-y-16 mt-12 md:mt-8">
          {articles?.map((article) => (
            <Article key={article.id} article={article} />
          ))}
        </div>
      </div>
    </div>
  )
}

const Form = () => {
  return (
    <div className="border-gray-400/40 border-2 rounded-lg p-4 mb-6">
      <form action="#" className="sm:max-w-xl sm:mx-auto lg:mx-0">
        <div className="mt-2 inline-flex items-center text-c-l-primary">
          <EnvelopeIcon className="w-5 h-5 mr-2" />
          <h2 className="text-sm font-semibold">STAY UP TO DATE</h2>
        </div>
        <p className="my-3 text-sm text-gray-400">
          Get notified when I publish something new, and unsubscribe at any time.
        </p>
        <div className="sm:flex sm:mt-4">
          <div className="min-w-0 flex-1">
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              type="email"
              disabled={true}
              placeholder="Email address"
              className="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-c-d-primary focus:ring-offset-gray-900"
            />
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <button
              type="submit"
              disabled={true}
              className="block w-full py-3 px-4 rounded-md shadow bg-c-primary text-white font-medium hover:bg-c-d-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900"
            >
              Join Us
            </button>
          </div>
        </div>

      </form>
    </div>
  )
}