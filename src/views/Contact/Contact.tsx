'use client';

import { useState } from "react";
import { InlineWidget, useCalendlyEventListener } from "react-calendly";

const Contact = () => {
  return (
    <div className="relative isolate dark:bg-c-bg-light">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">We’d love to hear from you!</h2>
            <p className="mt-6 text-lg leading-8 text-gray-400">
              Schedule a 15-minute zoom meeting to talk shop and nerd out over software development.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-400">
              Choose a date and time that works better for you.
              During the meeting, we’ll dive into your project requirements, timelines, and other nerdy stuff.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-400">
              A confirmation email with all the deets will be sent to you. Can’t wait to geek out with you!
            </p>
          </div>
        </div>
        <Calendly />
      </div>
    </div>
  )
}

const Calendly = () => {

  const eventUrl = process.env.NEXT_PUBLIC_CALENDLY_EVENT_URL!;
  const baseHeight = "750px"
  const [height, setHeight] = useState<string>(baseHeight)

  useCalendlyEventListener({
    onProfilePageViewed: () => setHeight(baseHeight),
    onEventTypeViewed: () => setHeight(baseHeight),
    onEventScheduled: (e) => setHeight(baseHeight),
    onDateAndTimeSelected: (e) => setHeight("1100px"),
  });

  return (
    <div className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
      {/* <!-- Calendly inline widget begin --> */}
      <InlineWidget
        url={eventUrl}
        pageSettings={{
          backgroundColor: '272f40',
          hideEventTypeDetails: true,
          hideLandingPageDetails: false,
          primaryColor: 'a731c2',
          textColor: 'fdfdfd'
        }}
        styles={{ height }}
      />
      {/* <!-- Calendly inline widget end --> */}
    </div>
  )
}

export default Contact;