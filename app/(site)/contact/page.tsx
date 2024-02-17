import { ContactView } from '@views/index'
import type { Metadata } from 'next'
import { SanityDocument } from 'next-sanity'

import { urlForImage } from '@/sanity/lib/image'
import { CONTACT_PAGE_QUERY, ContactPageDataType } from '@/sanity/lib/queries'
import { loadQuery } from '@/sanity/lib/store'

const siteURL = process.env.APP_URL

export async function generateMetadata({ params }): Promise<Metadata> {
  const contactPageData =
    await loadQuery<SanityDocument<ContactPageDataType>>(CONTACT_PAGE_QUERY)

  return {
    title: 'Contact',
    description: contactPageData.data.title,
    alternates: {
      canonical: `${siteURL}/contact`,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type: 'website',
      url: `${siteURL}/contact`,
      title: contactPageData.data.title,
      description: contactPageData.data.description,
      images: [
        {
          url: urlForImage(contactPageData.data?.image),
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: contactPageData.data.title,
      description: contactPageData.data.description,
      images: [
        {
          url: urlForImage(contactPageData.data?.image),
        },
      ],
    },
  }
}
export default async function Page() {
  const contactPageData =
    await loadQuery<SanityDocument<ContactPageDataType>>(CONTACT_PAGE_QUERY)

  return <ContactView pageData={contactPageData.data} />
}

Page.auth = false
