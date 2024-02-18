import { HomeView } from '@views/index'
import type { Metadata } from 'next'
import { SanityDocument } from 'next-sanity'

import { urlForImage } from '@/sanity/lib/image'
import {
  HOME_PAGE_QUERY,
  HOME_POSTS_QUERY,
  HOME_PROJECTS_QUERY,
  HomePageType,
  Post,
  PROFILE_QUERY,
  ProfileType,
  Project,
} from '@/sanity/lib/queries'
import { loadQuery } from '@/sanity/lib/store'

const siteURL = process.env.APP_URL

export async function generateMetadata(): Promise<Metadata> {
  const profile = await loadQuery<SanityDocument<ProfileType>>(PROFILE_QUERY)
  const homePage =
    await loadQuery<SanityDocument<HomePageType>>(HOME_PAGE_QUERY)
  return {
    title: homePage.data.title,
    description: profile.data.shortBio,
    alternates: {
      canonical: `${siteURL}`,
    },
    publisher: profile.data.fullName,
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type: 'website',
      url: `${siteURL}`,
      title: profile.data.headline,
      description: profile.data.shortBio,
      images: [
        {
          url: urlForImage(homePage.data.image),
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: profile.data.headline,
      description: profile.data.shortBio,
      images: [
        {
          url: urlForImage(homePage.data.image),
        },
      ],
    },
  }
}

export default async function Page() {
  const articles = await loadQuery<SanityDocument<Post>[]>(HOME_POSTS_QUERY)
  const projects =
    await loadQuery<SanityDocument<Project>[]>(HOME_PROJECTS_QUERY)
  const homePage =
    await loadQuery<SanityDocument<HomePageType>>(HOME_PAGE_QUERY)

  return (
    <HomeView
      pageData={homePage.data}
      projectData={projects.data}
      articleData={articles.data}
    />
  )
}

Page.auth = false
