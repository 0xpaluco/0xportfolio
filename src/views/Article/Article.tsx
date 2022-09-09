
import { HomeIcon } from '@heroicons/react/solid'
import { Markdown } from '@components/index'
import { Article } from 'lib/types/strapi-schema'
import Link from 'next/link'


interface ArticleViewProps {
    article: Article
}

const BreadCrumbs = ({ article }: ArticleViewProps) => {

    const pages = [
        { name: 'Blog', href: '/blog', current: false },
        { name: article.attributes.title, href: `/${article.attributes.slug}`, current: true },
      ]

    return (
        <nav className="flex" aria-label="Breadcrumb">
          <ol role="list" className="flex items-center space-x-4 w-full">
            <li>
              <div>
                <Link href={'/'}>
                    <a className="text-gray-400 hover:text-gray-500">
                        <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                        <span className="sr-only">Home</span>
                    </a>
                </Link>
                
              </div>
            </li>
            {pages.map((page) => (
              <li key={page.name}>
                <div className="flex items-center">
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-gray-300"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                  </svg>
                  <a
                    href={page.href}
                    className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                    aria-current={page.current ? 'page' : undefined}
                  >
                    {page.name}
                  </a>
                </div>
              </li>
            ))}
          </ol>
        </nav>
      )
}

const ArticleView = ({ article }: ArticleViewProps) => {

    
    return (
        <div className="relative overflow-hidden bg-c-bg text-white py-16">
            <div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full">
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
            
            <div className="relative px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-prose text-lg mb-8 w-full flex items-center align-middle">
                    <BreadCrumbs article={article}></BreadCrumbs>
                </div>

                <div className="mx-auto max-w-prose text-lg">

                    <h1>
                        
                        
                        
                        <span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-white sm:text-4xl">
                            {article.attributes.title}
                        </span>
                        <div className='inline-flex items-center align-middle w-full justify-center mt-4'>   
                            {article.attributes.categories.data.map((cat) => (
                                <span key={cat.id} className="inline-flex items-center rounded bg-c-l-primary px-2 py-0.5 text-xs font-bold text-c-d-primary mx-2">
                                    <Link href={`/c/${cat.attributes.slug}`}>
                                        <a>{cat.attributes.slug}</a>
                                    </Link>  
                                </span>
                            
                            
                            ))}
                        </div>
                    </h1>
                    <p className="mt-8 text-xl leading-8 text-gray-400">
                        {article.attributes.summary}
                    </p>
                </div>

                <div className='prose prose-lg prose-white mx-auto mt-6 text-white'>
                    <Markdown>{article.attributes.content}</Markdown>
                </div>
                
            </div>
        </div>

    )
}

export default ArticleView
