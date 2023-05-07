'use client';

import { ArticleList } from "@components/index";
import { Article } from "lib/types/cms";
interface BlogProps {
  articleData: Article[] 
}

const Blog = ({ articleData }: BlogProps) => {


  return (
    <>
      <div className="relative bg-c-bg rounded-md shadow-lg pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
          <div className="h-1/3 sm:h-2/3" />
        </div>
        <div className="relative  max-w-7xl mx-auto">
          <div className="text-left mb-16 md:mb-32">
            <h2 className="text-3xl tracking-tight font-extrabold text-white sm:text-5xl max-w-4xl">Writing on software engineering, startup life, artificial intelligence and web3 technology.</h2>
            <p className="mt-3 max-w-4xl text-md text-gray-400 sm:mt-4">
              All of my long-form thoughts on programming, leadership, product development, and more, collected in chronological order.
            </p>
          </div>

          <ArticleList articles={articleData} />
        </div>
      </div>
    </>
  )
}

export default Blog;