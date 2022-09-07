import { StrapiArticleData } from "lib/types/strapi-schema";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";



interface BlogProps {
  articleData: StrapiArticleData
}

const Blog = ({ articleData } : BlogProps) => {

  const [articles, setArticles] = useState(articleData.data);


    return (
        <div className="relative bg-c-bg pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
            <div className="absolute inset-0">
                <div className="bg-c-bg h-1/3 sm:h-2/3" />
            </div>
            <div className="relative max-w-7xl mx-auto">
                <div className="text-center">
                <h2 className="text-3xl tracking-tight font-extrabold text-white sm:text-4xl">From the Blog</h2>
                <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-400 sm:mt-4">
                    Here you can find tutorials and project ideas.
                </p>
                </div>
                <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                {articles.map((article) => (
                    <div key={article.attributes.slug} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                    <div className="flex-shrink-0 bg-c-bg">
                        <img className="h-48 w-full object-cover" src={`${article.attributes.coverImage.data?.attributes.url}`} alt="" />
                    </div>
                    <div className="flex-1 bg-c-bg-light p-6 flex flex-col justify-between">
                        <div className="flex-1">
                        <p className="text-sm font-medium text-c-primary">

                        {article.attributes.categories.data.map((cat) => (
                            <Link href={`/c/${cat.attributes.slug}`}>
                             <a className="hover:underline">
                              {cat.attributes.name} 
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
                        {/* <div className="mt-6 flex items-center">
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
                                <Link href={article.attributes.author?.data.attributes.name}>
                                  <a  className="hover:underline">
                                    View on Etherscan
                                </a>
                                </Link>
                              </p>
                              <div className="flex space-x-1 text-sm text-gray-500">
                                
                                <span>{article.attributes.createdAt.toString()}</span>
                              </div>
                          </div>
                        </div> */}
                    </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}

export default Blog;