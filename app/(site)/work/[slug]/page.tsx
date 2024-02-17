import { getProjectLink } from '@helpers/notion'
import { ProjectView } from '@views/index'
import type { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { SanityDocument } from 'next-sanity'

import { urlForImage } from '@/sanity/lib/image'
import { Project, PROJECT_QUERY, PROJECTS_QUERY } from '@/sanity/lib/queries'
import { loadQuery } from '@/sanity/lib/store'

export const revalidate = 60 // revalidate this page every 60 seconds
export const dynamicParams = true
export const dynamic = "force-dynamic"

export async function generateStaticParams() {
  const projects = await loadQuery<SanityDocument<Project[]>>(PROJECTS_QUERY)
  return projects.data.map(({ slug }) => ({ params: { slug } }))
}
const siteURL = process.env.APP_URL

export async function generateMetadata({ params }): Promise<Metadata> {
  const project = await loadQuery<SanityDocument<Project>>(
    PROJECT_QUERY,
    params,
    {},
  )
  return {
    title: `${project.data.title}`,
    description: project.data.excerpt,
    openGraph: {
      type: 'website',
      url: `${siteURL}${getProjectLink(project.data.slug)}`,
      title: `${project.data.title} | 0xpaluco`,
      description: project.data.excerpt,
      images: [
        {
          url: urlForImage(project.data?.mainImage),
        },
      ],
    },
    alternates: {
      canonical: `${siteURL}${getProjectLink(project.data.slug)}`,
    },
    robots: {
      index: true,
      follow: true,
    },
    twitter: {
      card: 'summary_large_image',
      title: project.data.title,
      description: project.data.excerpt,
      images: [
        {
          url: urlForImage(project.data?.mainImage),
        },
      ],
    },
  }
}

export default async function Page({ params }) {
  const initial = await loadQuery<SanityDocument<Project>>(
    PROJECT_QUERY,
    params,
    {
      // Because of Next.js, RSC and Dynamic Routes this currently
      // cannot be set on the loadQuery function at the "top level"
      perspective: draftMode().isEnabled ? 'previewDrafts' : 'published',
    },
  )
  return <ProjectView project={initial.data} />
}

Page.auth = false
