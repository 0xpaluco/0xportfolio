import { ReactElement } from 'react'
import { NextPageWithLayout } from '@/types'
import {  HomeView } from '@views/index'
import WithLayout, { Home, Simple } from 'src/layouts'
import { Aside } from '@components/index'
import { Meta, StrapiArticleData, StrapiProjectData } from 'lib/types/strapi-schema'
import { catchPromise } from '@helpers/utils'
import { featuredProjects, newestArticles } from '@helpers/strapi'
import { GetStaticProps } from 'next'


const LIMIT: number = 3;

interface PageProps {
  projectData: StrapiProjectData
  articleData: StrapiArticleData
  error?: Error
  //children?: ReactNode;
}

export const getStaticProps: GetStaticProps<PageProps> = async () => {

  const [ projectData, articleData ] = await Promise.all([
    featuredProjects(LIMIT),
    newestArticles(LIMIT)
  ]);
  
  return {
    props: {
      projectData,
      articleData
    } // will be passed to the page component as props
  }
}


const HomePage: NextPageWithLayout<PageProps> = ({ projectData, articleData }) => {
  return <HomeView projectData={projectData} articleData={articleData} />
}

HomePage.getLayout = function getLayout(page: ReactElement<PageProps>) {
  return <WithLayout layout={Home} component={page} aside={Aside}/>
}

HomePage.auth = false;

export default HomePage
