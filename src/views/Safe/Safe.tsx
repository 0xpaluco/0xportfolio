/* This example requires Tailwind CSS v2.0+ */
import { MetaTags } from '@components/shared';
import { getEllipsisTxt } from '@helpers/formater';
import { LockClosedIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router';
import Link from 'next/link';
import { NFTList } from './components';
import { useSession } from 'next-auth/react';



export default function Safe() {

  const { data: session, status } = useSession();
  const account = session?.user!.address;
  
  const router = useRouter();
  const data = router.query as unknown as Safe;
  
    return (
        <div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6">

            <MetaTags title={"Safe"} description="Web3 Research and Development" />
            <Banner safe={data} />
            <NFTList address={data.from} />
        </div>
    )
}

interface Safe {
  id: number
  from: string
  to: string
}

interface SafeProps {
    safe: Safe
    logout?: () => Promise<void>
}

function Banner(props: SafeProps) {

  const from = props.safe.from;
  const to = props.safe.to;
  const id = props.safe.id;
  const name = "ens name"

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8">
      <div className="flex items-center space-x-5">
        <div className="flex-shrink-0">
          <div className="relative">
            {/* <LockOpenIcon className="h-16 w-16 rounded-full dark:text-c-d-primary text-c-d-secondary" /> */}
            <LockClosedIcon className="h-16 w-16 rounded-full dark:text-c-primary text-c-d-secondary" />
            <span className="absolute inset-0 shadow-inner rounded-full" aria-hidden="true" />
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Safe #{id}</h1>
          <p className="text-sm font-medium text-gray-500">
            Rescue Tokens from:{' '}
            <Link href="#">
              <a className="text-gray-900">
                {name ? name : getEllipsisTxt(from)} 
              </a>
            </Link>
            {' '}
          </p>
          
        </div>
      </div>
      <div className="mt-6 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-reverse sm:space-y-0 sm:space-x-3 md:mt-0 md:flex-row md:space-x-3">
        <button
          type="button"
          className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
        >
          Unlock
        </button>
        <button
          type="button"
          className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm dark:bg-c-primary bg-c-d-secondary text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
        >
          Rescue Tokens
        </button>
      </div>
    </div>
  )
}




