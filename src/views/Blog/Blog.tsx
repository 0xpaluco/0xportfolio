import { ArticleGrid } from "@components/index";
import { StrapiArticleData } from "lib/types/strapi-schema";
import { useState } from "react";

interface BlogProps {
  articleData: StrapiArticleData
}

const Blog = ({ articleData }: BlogProps) => {

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

        <ArticleGrid articles={articles}/>

      </div>
    </div>
  )
}

export default Blog;