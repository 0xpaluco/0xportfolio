import { ReactElement } from 'react'
import { GetStaticProps } from "next";
import { NextPageWithLayout } from '@/types'
import { ArticleView, BlogView } from '@views/index'
import WithLayout, { Explore, Simple, Home } from 'src/layouts'
import { Aside } from '@components/index'
import { catchPromise } from '@helpers/utils';
import { Article, Meta, StrapiArticleData } from 'lib/types/strapi-schema';
import { articles, articlesBySlug, categories } from '@helpers/strapi';
import Error from 'next/error';


const LIMIT = 3;

interface PageProps {
  article: Article
  error?: Error
  //children?: ReactNode;
}

export const getStaticProps: GetStaticProps<PageProps> = async ({ params }) => {
  const slug  = params?.article as string;
  const [articleData, error] = await catchPromise(articlesBySlug(slug));
  if(error){
    return {
      props: {
        article: { } as Article,
        error: JSON.parse(JSON.stringify(error))
      } // will be passed to the page component as props
    }
  }

  let article = (articleData as StrapiArticleData).data
    .find((_article) => {
      return _article.attributes.slug === params?.article?.toString()
    })

  if (!article) {
      return {
        notFound: true,
      }
  }
  
  return {
      props: {
        article,
      },
      revalidate: 10,
  }
}

export async function getStaticPaths() {
    const [articleData, error] = await catchPromise(articles());

    return {
      paths: (articleData as StrapiArticleData).data.map((_article) => ({
        params: {
          article: _article.attributes.slug,
        }
      })),
      fallback: 'blocking',
    }
  }


const BlogPage: NextPageWithLayout<PageProps> = ({ article }) => {
  return <ArticleView article={article}></ArticleView>
}

BlogPage.getLayout = function getLayout(page: ReactElement<PageProps>) {
  return <WithLayout layout={Home} component={page} aside={Aside}/>
}

BlogPage.auth = false;

export default BlogPage
