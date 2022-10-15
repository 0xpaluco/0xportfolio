
import { useState } from "react";
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
            <Form />
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
    onDateAndTimeSelected: (e) => setHeight("1100px"),
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

const Form = () => {
  return (
    <form action="#" method="POST" className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
      <div>
        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
          First name
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="first-name"
            id="first-name"
            autoComplete="given-name"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
      </div>
      <div>
        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
          Last name
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="last-name"
            id="last-name"
            autoComplete="family-name"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <div className="mt-1">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="company" className="block text-sm font-medium text-gray-700">
          Company
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="company"
            id="company"
            autoComplete="organization"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
      </div>
      <div className="sm:col-span-2">
        <div className="flex justify-between">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone
          </label>
          <span id="phone-description" className="text-sm text-gray-500">
            Optional
          </span>
        </div>
        <div className="mt-1">
          <input
            type="text"
            name="phone"
            id="phone"
            autoComplete="tel"
            aria-describedby="phone-description"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
      </div>
      <div className="sm:col-span-2">
        <div className="flex justify-between">
          <label htmlFor="how-can-we-help" className="block text-sm font-medium text-gray-700">
            How can we help you?
          </label>
          <span id="how-can-we-help-description" className="text-sm text-gray-500">
            Max. 500 characters
          </span>
        </div>
        <div className="mt-1">
          <textarea
            id="how-can-we-help"
            name="how-can-we-help"
            aria-describedby="how-can-we-help-description"
            rows={4}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            defaultValue={''}
          />
        </div>
      </div>
      <fieldset className="sm:col-span-2">
        <legend className="block text-sm font-medium text-gray-700">Expected budget</legend>
        <div className="mt-4 grid grid-cols-1 gap-y-4">
          <div className="flex items-center">
            <input
              id="budget-under-25k"
              name="budget"
              defaultValue="under_25k"
              type="radio"
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label htmlFor="budget-under-25k" className="ml-3">
              <span className="block text-sm text-gray-700">Less than $25K</span>
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="budget-25k-50k"
              name="budget"
              defaultValue="25k-50k"
              type="radio"
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label htmlFor="budget-25k-50k" className="ml-3">
              <span className="block text-sm text-gray-700">$25K – $50K</span>
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="budget-50k-100k"
              name="budget"
              defaultValue="50k-100k"
              type="radio"
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label htmlFor="budget-50k-100k" className="ml-3">
              <span className="block text-sm text-gray-700">$50K – $100K</span>
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="budget-over-100k"
              name="budget"
              defaultValue="over_100k"
              type="radio"
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label htmlFor="budget-over-100k" className="ml-3">
              <span className="block text-sm text-gray-700">$100K+</span>
            </label>
          </div>
        </div>
      </fieldset>
      <div className="sm:col-span-2">
        <label htmlFor="how-did-you-hear-about-us" className="block text-sm font-medium text-gray-700">
          How did you hear about us?
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="how-did-you-hear-about-us"
            id="how-did-you-hear-about-us"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
      </div>
      <div className="text-right sm:col-span-2">
        <button
          type="submit"
          className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </div>
    </form>
  )
}

export default Contact;