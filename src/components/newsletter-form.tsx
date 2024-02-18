import { EnvelopeIcon } from '@heroicons/react/24/outline'

export const NewsLetterForm = () => {
  return (
    <div className="border-gray-400/40 border-2 rounded-lg p-4 bg-c-bg shadow-md shadow-c-bg">
      <form action="#" className="sm:max-w-xl sm:mx-auto lg:mx-0">
        <div className="mt-2 inline-flex items-center text-c-l-primary">
          <EnvelopeIcon className="w-5 h-5 mr-2" />
          <h2 className="text-sm font-semibold">STAY UP TO DATE</h2>
        </div>
        <p className="my-3 text-sm text-gray-400">
          Get notified when I publish something new.
        </p>
        <div className="sm:flex sm:mt-4 mb-2">
          <div className="min-w-0 flex-1">
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              type="email"
              disabled={true}
              placeholder="Email address"
              className="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-c-d-primary focus:ring-offset-gray-900"
            />
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <button
              type="submit"
              disabled={true}
              className="block w-full py-3 px-4 rounded-md shadow bg-c-primary text-white font-medium hover:bg-c-d-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900"
            >
              Join
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
