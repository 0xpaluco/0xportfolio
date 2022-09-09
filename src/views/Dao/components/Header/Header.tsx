import {
  CurrencyDollarIcon,
  DocumentAddIcon,
  GlobeAltIcon,
  UserGroupIcon,
} from '@heroicons/react/solid'
import { UserAddIcon } from "@heroicons/react/outline";

const Header = () => {

    return (
        <header className="bg-c-bg py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:flex xl:items-center xl:justify-between">
            <div className="flex-1 min-w-0">
              
              <h1 className="mt-2 text-2xl font-bold leading-7 text-white sm:text-3xl sm:truncate">
                0xGovernance DAO
              </h1>
              <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-8">
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <GlobeAltIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                  Global - Open
                </div>
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <UserGroupIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                  11 Members
                </div>
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <CurrencyDollarIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                  Tresury Balance: 120K Ξ
                </div>
              </div>
            </div>
            <div className="mt-5 flex xl:mt-0 xl:ml-4">
              <span className="block">
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-black bg-white hover:bg-gray-100"
                >
                  <UserAddIcon className="-ml-1 mr-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                  Join
                </button>
              </span>

              <span className="block ml-3">
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 rounded-md shadow-sm text-sm font-medium text-white bg-c-primary hover:bg-c-d-primary  focus:ring-c-primary"
                >
                  <DocumentAddIcon className="-ml-1 mr-2 h-5 w-5 text-white" aria-hidden="true" />
                  Make Proporsal
                </button>
              </span>
              
            </div>
          </div>
        </header>
    )
}

export default Header;