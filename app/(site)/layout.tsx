import '../../styles/globals.css'

import type { Metadata } from 'next'
import { SanityDocument } from 'next-sanity'
import { ReactNode } from 'react'

import { MainLayout } from '@/layouts'
import { PROFILE_QUERY, ProfileType } from '@/sanity/lib/queries'
import { loadQuery } from '@/sanity/lib/store'

interface LayoutProps {
  children: ReactNode
}

const siteURL = process.env.APP_URL

export const metadata: Metadata = {
  title: {
    default: '0xpaluco',
    template: '%s - 0xpaluco',
  },
  description: 'Come and learn with me!',
  twitter: {
    card: 'summary_large_image',
  },
  alternates: {
    canonical: siteURL,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default async function RootLayout({ children }: LayoutProps) {
  const profile = await loadQuery<SanityDocument<ProfileType>>(PROFILE_QUERY)

  return (
    <html lang="en">
      <head>
        {/* Used to be added by default, now we need to add manually */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        {/* 
          Anything we add in layout will appear on EVERY PAGE. At present it can not be overridden lower down the tree.
          This can be useful for things like favicons, or other meta tags that are the same on every page.
        */}
      </head>
      <body>
        <MainLayout links={profile.data.links}>{children}</MainLayout>
      </body>
    </html>
  )
}
