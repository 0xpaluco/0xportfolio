import { ReactElement } from 'react'
import { GetStaticProps } from "next";
import { NextPageWithLayout } from '@/types'
import { BlogView } from '@views/index'
import WithLayout, { Home } from 'src/layouts'
import { Aside } from '@components/index'
import { catchPromise } from '@helpers/utils';
import { Meta, StrapiArticleData } from 'lib/types/strapi-schema';
import { articles } from '@helpers/strapi';

interface PageProps {
  articleData: StrapiArticleData
  error?: Error
  //children?: ReactNode;
}

export const getStaticProps: GetStaticProps<PageProps> = async () => {

  const [articleData, error] = await catchPromise(articles());
  if(error){
    return {
      props: {
        articleData: { data: [], meta: {} as Meta} as StrapiArticleData,
        error: JSON.parse(JSON.stringify(error))
      } // will be passed to the page component as props
    }
  }

  return {
    props: {
      articleData,
    } // will be passed to the page component as props
  }
}


const BlogPage: NextPageWithLayout<PageProps> = ({ articleData }) => {
  return <BlogView articleData={articleData}></BlogView>
}

BlogPage.getLayout = function getLayout(page: ReactElement<PageProps>) {
  return <WithLayout layout={Home} component={page} aside={Aside}/>
}

BlogPage.auth = false;

export default BlogPage
