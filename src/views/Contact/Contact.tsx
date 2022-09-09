import { Listbox, Transition } from "@headlessui/react";
import { classNames } from "@helpers/ui";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import Script from "next/script";
import { Fragment, useState } from "react";
import { InlineWidget, useCalendlyEventListener } from "react-calendly";

const Contact = () => {
    return (
        <div className="relative dark:bg-c-bg-light">
            <div className="lg:absolute lg:inset-0">
                <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <img
                    className="h-56 w-full object-cover lg:absolute lg:h-full"
                    src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
                    alt=""
                />
                </div>
            </div>
            <div className="relative py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-32 lg:grid lg:grid-cols-2">
                <div className="lg:pr-8">
                <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
                    <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-white">Lets work together</h2>
                    <p className="mt-4 text-lg text-gray-400 sm:mt-3">
                        We’d love to hear from you! Schedule a meeting and tell us how we can help you. 
                    </p>
                    <Calendly/>
                </div>
                </div>
            </div>
        </div>
    )
}

const Calendly = () => {

    const eventUrl = process.env.CALENDLY_EVENT_URL || "";
    const baseHeight = "750px"
    const [height, setHeight] = useState<string>(baseHeight)

    useCalendlyEventListener({
        onProfilePageViewed: () => setHeight(baseHeight),
        onEventTypeViewed: () => setHeight(baseHeight),
        onEventScheduled: (e) => setHeight(baseHeight),
        onDateAndTimeSelected: (e) =>  setHeight("1100px"),
      });

    return (
        <div className="mt-8">
            {/* <!-- Calendly inline widget begin --> */}
            <div className="shadow-md shadow-c-bg">
                <InlineWidget 
                    url={eventUrl}
                    pageSettings={{
                        backgroundColor: '272f40',
                        hideEventTypeDetails: true,
                        hideLandingPageDetails: true,
                        primaryColor: 'a731c2',
                        textColor: 'fdfdfd'
                    }}
                    styles={{
                        height: height
                    }}
                />
            </div>
            {/* <!-- Calendly inline widget end --> */}
        </div>
    )
} 

export default Contact;