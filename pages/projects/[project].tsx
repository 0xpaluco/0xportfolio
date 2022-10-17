import { ReactElement } from 'react'
import { GetStaticProps } from "next";
import { NextPageWithLayout } from '@/types'
import { ArticleView, BlogView, ProjectDetailView } from '@views/index'
import WithLayout, { Explore, Simple, Home } from 'src/layouts'
import { Aside } from '@components/index'
import { catchPromise } from '@helpers/utils';
import { Project, Meta, StrapiProjectData } from 'lib/types/strapi-schema';
import { articles, articlesBySlug, categories, projectsBySlug } from '@helpers/strapi';
import Error from 'next/error';


const LIMIT = 3;

interface PageProps {
  project: Project
  error?: Error
  //children?: ReactNode;
}

export const getStaticProps: GetStaticProps<PageProps> = async ({ params }) => {
  const slug  = params?.project as string;
  const [projectData, error] = await catchPromise(projectsBySlug(slug));

  if(error){
    return {
      props: {
        project: { } as Project,
        error: JSON.parse(JSON.stringify(error))
      } // will be passed to the page component as props
    }
  }

  let project = (projectData as StrapiProjectData).data
    .find((_project) => {
      return _project.attributes.slug === params?.project?.toString()
    })

  if (!project) {
      return {
        notFound: true,
      }
  }
  
  return {
      props: {
        project: project,
      },
      revalidate: 10,
  }
}

export async function getStaticPaths() {
    const [projectData, error] = await catchPromise(articles());

    return {
      paths: (projectData as StrapiProjectData).data.map((_project) => ({
        params: {
          project: _project.attributes.slug,
        }
      })),
      fallback: 'blocking',
    }
  }


const BlogPage: NextPageWithLayout<PageProps> = ({ project }) => {
  return <ProjectDetailView project={project}></ProjectDetailView>
}

BlogPage.getLayout = function getLayout(page: ReactElement<PageProps>) {
  return <WithLayout layout={Home} component={page} aside={Aside}/>
}

BlogPage.auth = false;

export default BlogPage
