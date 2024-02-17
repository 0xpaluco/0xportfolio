import { AboutView } from '@views/index'
import type { Metadata } from 'next'
import { SanityDocument } from 'next-sanity'

import { urlForImage } from '@/sanity/lib/image'
import { PROFILE_QUERY, ProfileType } from '@/sanity/lib/queries'
import { loadQuery } from '@/sanity/lib/store'

const siteURL = process.env.APP_URL

export async function generateMetadata({ params }): Promise<Metadata> {
  const profile = await loadQuery<SanityDocument<ProfileType>>(PROFILE_QUERY)

  return {
    title: 'About',
    description: profile.data.shortBio,
    alternates: {
      canonical: `${siteURL}/about`,
    },
    publisher: profile.data.fullName,
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type: 'website',
      url: `${siteURL}/about`,
      title: profile.data.headline,
      description: profile.data.shortBio,
      images: [
        {
          url: urlForImage(profile.data.image),
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: profile.data.headline,
      description: profile.data.shortBio,
      images: [
        {
          url: urlForImage(profile.data.image),
        },
      ],
    },
  }
}

export default async function Page() {
  const profile = await loadQuery<SanityDocument<ProfileType>>(PROFILE_QUERY)
  return <AboutView profile={profile.data} />
}

Page.auth = false
