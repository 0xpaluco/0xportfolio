'use client'

import { SanityDocument } from 'next-sanity'
import { useState } from 'react'
import { InlineWidget, useCalendlyEventListener } from 'react-calendly'

import { ContactPageDataType } from '@/sanity/lib/queries'

type ContactPageProps = {
  pageData: SanityDocument<ContactPageDataType>
}

const Contact = ({ pageData }: ContactPageProps) => {
  return (
    <div className="relative isolate dark:bg-c-bg-light">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              {pageData.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-400">
              {pageData.description}
            </p>
          </div>
        </div>
        <Calendly url={pageData.eventUrl} />
      </div>
    </div>
  )
}

const Calendly = ({ url }: { url: string }) => {
  const baseHeight = '750px'
  const [height, setHeight] = useState<string>(baseHeight)

  useCalendlyEventListener({
    onProfilePageViewed: () => setHeight(baseHeight),
    onEventTypeViewed: () => setHeight(baseHeight),
    onEventScheduled: (e) => setHeight(baseHeight),
    onDateAndTimeSelected: (e) => setHeight('1100px'),
  })

  return (
    <div className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
      {/* <!-- Calendly inline widget begin --> */}
      <InlineWidget
        url={url}
        pageSettings={{
          backgroundColor: '272f40',
          hideEventTypeDetails: true,
          hideLandingPageDetails: false,
          primaryColor: 'a731c2',
          textColor: 'fdfdfd',
        }}
        styles={{ height }}
      />
      {/* <!-- Calendly inline widget end --> */}
    </div>
  )
}

export default Contact
