import { ProcessView } from '@views/index'
import type { Metadata } from 'next'
import { SanityDocument } from 'next-sanity'

import { urlForImage } from '@/sanity/lib/image'
import { PROCESS_QUERY, ProcessPageType } from '@/sanity/lib/queries'
import { loadQuery } from '@/sanity/lib/store'

export const revalidate = 60 // revalidate this page every 60 seconds

const siteURL = process.env.APP_URL

export async function generateMetadata(): Promise<Metadata> {
  const processPagedata =
    await loadQuery<SanityDocument<ProcessPageType>>(PROCESS_QUERY)

  return {
    title: 'Process',
    description: 'Your Path to an Awesome, Focused MVP',
    alternates: {
      canonical: `${siteURL}/process`,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type: 'website',
      url: `${siteURL}/process`,
      title: processPagedata.data.title,
      description: processPagedata.data.description,
      images: [
        {
          url: urlForImage(processPagedata.data.image),
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: processPagedata.data.title,
      description: processPagedata.data.description,
      images: [
        {
          url: urlForImage(processPagedata.data.image),
        },
      ],
    },
  }
}

export default async function Page() {
  const processPagedata =
    await loadQuery<SanityDocument<ProcessPageType>>(PROCESS_QUERY)
  return <ProcessView pageData={processPagedata.data} />
}

Page.auth = false
