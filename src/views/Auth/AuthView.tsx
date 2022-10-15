/* This example requires Tailwind CSS v2.0+ */
import { Account } from '@components/Web3';
import { ExclamationCircleIcon } from '@heroicons/react/solid'


export default function AuthView() {

  return (
    <>
    <div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-c-bg h-screen">
        <div className="sm:mx-auto sm:w-full sm:max-w-md py-8 rounded-md shadow-md shadow-c-bg">
          <ExclamationCircleIcon className='mx-auto text-c-primary h-12 w-12'></ExclamationCircleIcon>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">Connect with Wallet</h2>
          <div className='inline-flex items-center justify-center mt-4 w-full'>
            <Account />
          </div>
        </div>
      </div>
    </>
  )
}
