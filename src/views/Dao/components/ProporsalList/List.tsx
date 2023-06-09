
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ChevronRightIcon,
  IdentificationIcon

} from '@heroicons/react/24/solid'
import { classNames } from "@helpers/ui";
import Link from 'next/link';


const tabs = [
    { name: 'All', href: '#', count: '7', current: false },
    { name: 'Open', href: '#',  count: '2', current: false },
    { name: 'Passed', href: '#', count: '4', current: false },
    { name: 'Not Passed', href: '#', count: '1', current: true },
]
const candidates = [

    {
        name: 'Should we accept new members?',
        address: '0xAB1223C...dfeer12341',
        imageUrl:
        'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        applied: 'January 7, 2020',
        appliedDatetime: '2020-07-01T15:34:56',
        status: 'Voting Completed',
    }
// More candidates...
]
  

const ProporsalTabs = () => {
    return (
      <div className="px-4 sm:px-0">
        <h2 className="text-lg font-medium text-white">Proporsals</h2>
  
        {/* Tabs */}
        <div className="sm:hidden">
          <label htmlFor="tabs" className="sr-only">
            Select a tab
          </label>
          {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
          <select
            id="tabs"
            name="tabs"
            className="mt-4 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm rounded-md"
            defaultValue={tabs.find((tab) => tab.current)?.name}
          >
            {tabs.map((tab) => (
              <option key={tab.name}>{tab.name}</option>
            ))}
          </select>
        </div>
        <div className="hidden sm:block">
          <div className="border-b border-gray-200">
            <nav className="mt-2 -mb-px flex space-x-8" aria-label="Tabs">
              {tabs.map((tab) => (
                <Link
                  key={tab.name}
                  href={tab.href}
                  className={classNames(
                    tab.current
                      ? 'border-c-primary text-c-primary'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200',
                    'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm'
                  )}
                >
                  {tab.name}
                  {tab.count ? (
                    <span
                      className={classNames(
                        tab.current ? 'bg-c-l-primary text-c-primary' : 'bg-gray-100 text-gray-900',
                        'hidden ml-2 py-0.5 px-2.5 rounded-full text-xs font-medium md:inline-block'
                      )}
                    >
                      {tab.count}
                    </span>
                  ) : null}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    )
  }
  
  const ProporsalList = () => {
    return (
      <>
        {/* Stacked list */}
        <ul role="list" className="mt-5 border-t border-gray-200 divide-y divide-gray-200 sm:mt-0 sm:border-t-0">
          {candidates.map((candidate) => (
            <li key={candidate.address}>
              <Link href="#" className="group block">
                <div className="flex items-center py-5 px-4 sm:py-6 sm:px-0">
                  <div className="min-w-0 flex-1 flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-12 w-12 rounded-full group-hover:opacity-75"
                        src={candidate.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                      <div>
                        <p className="text-sm font-medium text-white truncate">{candidate.name}</p>
                        <p className="mt-2 flex items-center text-sm text-gray-500">
                          <IdentificationIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                          <span className="truncate">{candidate.address}</span>
                        </p>
                      </div>
                      <div className="hidden md:block">
                        <div>
                          <p className="text-sm text-gray-400">
                            Closes on <time dateTime={candidate.appliedDatetime}>{candidate.applied}</time>
                          </p>
                          <p className="mt-2 flex items-center text-sm text-gray-400">
                            <CheckCircleIcon
                              className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                              aria-hidden="true"
                            />
                            {candidate.status}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <ChevronRightIcon
                      className="h-5 w-5 text-gray-400 group-hover:text-gray-700"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </>
    )
  }

const Pagination = () => {
    return (
        <>
             {/* Pagination */}
             <nav
              className="border-t border-gray-200 px-4 flex items-center justify-between sm:px-0"
              aria-label="Pagination"
            >
              <div className="-mt-px w-0 flex-1 flex">
                <Link
                  href="#"
                  className="border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-200"
                >
                  <ArrowLeftIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                  Previous
                </Link>
              </div>
              <div className="hidden md:-mt-px md:flex">
                <Link
                  href="#"
                  className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
                >
                  1
                </Link>
                {/* Current: "border-purple-500 text-purple-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200" */}
                <Link
                  href="#"
                  className="border-purple-500 text-purple-600 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
                  aria-current="page"
                >
                  2
                </Link>
                
              </div>
              <div className="-mt-px w-0 flex-1 flex justify-end">
                <Link
                  href="#"
                  className="border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-200"
                >
                  Next
                  <ArrowRightIcon className="ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                </Link>
              </div>
            </nav>
        </>
    )
}

const List = () => {
    return (
        <main className="pt-8 pb-16">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <ProporsalTabs/>
            <ProporsalList/>
            <Pagination/>
          </div>
        </main>
           
    )
}

export default List