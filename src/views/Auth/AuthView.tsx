/* This example requires Tailwind CSS v2.0+ */
import { Account, ConnectWallet } from '@components/Web3';
import { XIcon, ExclamationCircleIcon } from '@heroicons/react/solid'
import { useSession, signOut } from 'next-auth/react';


export default function AuthView() {

  const { status, data } = useSession();

  if (status === "authenticated") {
    return (
      <>
        Signed in as {data.user.address} <br />
        <button onClick={() => signOut()}>Logout</button>
      </>
    )
  }

  return (
    <>
    <div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8 dark">
        <div className="sm:mx-auto sm:w-full sm:max-w-md py-8 rounded-md shadow-md shadow-c-bg">
          <ExclamationCircleIcon className='mx-auto dark:text-c-primary text-c-secondary h-12 w-12'></ExclamationCircleIcon>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">Connect with Wallet</h2>
          <div className='inline-flex items-center justify-center mt-4 w-full'>
            <Account />
          </div>
        </div>
      </div>
    </>
  )
}
