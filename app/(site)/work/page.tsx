import { WorkView } from '@views/index'
import type { Metadata } from 'next'
import { SanityDocument } from 'next-sanity'

import { urlForImage } from '@/sanity/lib/image'
import {
  PageDataType,
  Project,
  PROJECTS_QUERY,
  WORK_PAGE_QUERY,
} from '@/sanity/lib/queries'
import { loadQuery } from '@/sanity/lib/store'

export const revalidate = 60 // revalidate this page every 60 seconds

const siteURL = process.env.APP_URL

export async function generateMetadata({ params }): Promise<Metadata> {
  const workPageData =
    await loadQuery<SanityDocument<PageDataType>>(WORK_PAGE_QUERY)

  return {
    title: 'Work',
    description: 'Things I’ve made trying to put my dent in the universe.',
    alternates: {
      canonical: `${siteURL}/work`,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type: 'website',
      url: `${siteURL}/work`,
      title: workPageData.data.title,
      description: workPageData.data.description,
      images: [
        {
          url: urlForImage(workPageData.data?.image),
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: workPageData.data.title,
      description: workPageData.data.description,
      images: [
        {
          url: urlForImage(workPageData.data?.image),
        },
      ],
    },
  }
}

export default async function Page() {
  const workPageData =
    await loadQuery<SanityDocument<PageDataType>>(WORK_PAGE_QUERY)
  const projects = await loadQuery<SanityDocument<Project>[]>(PROJECTS_QUERY)

  return <WorkView pageData={workPageData.data} projectData={projects.data} />
}

Page.auth = false
