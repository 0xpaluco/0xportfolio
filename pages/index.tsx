import { ReactElement } from 'react'
import { NextPageWithLayout } from '@/types'
import {  HomeView } from '@views/index'
import WithLayout, { Home } from 'src/layouts'
import { Aside } from '@components/index'
import { Meta, StrapiProjectData } from 'lib/types/strapi-schema'
import { catchPromise } from '@helpers/utils'
import { featuredProjects } from '@helpers/strapi'
import { GetStaticProps } from 'next'


const LIMIT: number = 3;

interface PageProps {
  projectData: StrapiProjectData
  error?: Error
  //children?: ReactNode;
}

export const getStaticProps: GetStaticProps<PageProps> = async () => {

  const [projectData, error] = await catchPromise(featuredProjects(LIMIT));
  
  if(error){
    return {
      props: {
        projectData: { data: [], meta: {} as Meta } as StrapiProjectData,
        error: JSON.parse(JSON.stringify(error))
      } // will be passed to the page component as props
    }
  }
  return {
    props: {
      projectData,
    } // will be passed to the page component as props
  }
}


const HomePage: NextPageWithLayout<PageProps> = ({ projectData, error }) => {
  return <HomeView projectData={projectData}/>
}

HomePage.getLayout = function getLayout(page: ReactElement<PageProps>) {
  return <WithLayout layout={Home} component={page} aside={Aside}/>
}

HomePage.auth = false;

export default HomePage
