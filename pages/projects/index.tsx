import { ReactElement, ReactNode, useState } from 'react'
import { GetServerSideProps, GetStaticProps } from "next";
import { NextPageWithLayout } from '@/types'
import { FeedView, HomeView, BlogView, ProjectsView } from '@views/index'
import WithLayout, { Explore, Simple, Home } from 'src/layouts'
import { DUMMY_POSTS } from 'lib/dummy'
import { feedTabs } from '@helpers/routes'
import { Aside } from '@components/index'
import { catchPromise } from '@helpers/utils';
import { projects } from '@helpers/strapi';
import Error from 'next/error';
import { Meta, StrapiProjectData } from 'lib/types/strapi-schema';


const LIMIT = 3;

interface PageProps {
  projectData: StrapiProjectData
  error?: Error
  //children?: ReactNode;
}

export const getStaticProps: GetStaticProps<PageProps> = async () => {

  const [projectData, error] = await catchPromise(projects());
  if(error){
    return {
      props: {
        projectData: { data: [], meta: {} as Meta} as StrapiProjectData,
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


const ProjectsPage: NextPageWithLayout<PageProps> = ({ projectData }) => {
  return <ProjectsView projectData={projectData}></ProjectsView>
}

ProjectsPage.getLayout = function getLayout(page: ReactElement<PageProps>) {
  return <WithLayout layout={Home} component={page} aside={Aside}/>
}

ProjectsPage.auth = false;

export default ProjectsPage
