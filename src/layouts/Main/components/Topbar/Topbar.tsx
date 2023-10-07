'use client';

import { Account } from '@components/Web3';
import { DarkModeToggler } from '@components/index'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import { navigation } from '@helpers/routes';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Divider } from '@components/shared';
import { classNames } from '@helpers/ui';

interface Props {
  className?: string;
  themeMode: string;
  themeToggler: Function;
};

export default function Topbar({ themeMode, themeToggler, className, ...rest }: Props) {

  const pathname = usePathname();


  return (
    <div>
      {/*  Topbar Nav */}
      <Popover as="header" className="relative">
        <div className="bg-transparent pt-6">
          <nav
            className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 mb-2"
            aria-label="Global"
          >
            <div className="flex items-center flex-1">
              <div className="flex items-center w-full md:w-auto">

                <Link href="/">
                  <span className="sr-only">0xpaluco</span>
                  <span className="h-8 w-auto sm:h-10 text-white text-2xl tracking-tight font-extrabold">0xpaluco</span>
                </Link>

                <div className="flex items-center md:hidden mx-4">
                  <Popover.Button className="rounded-md inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    <ChevronDownIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>


              </div>
              <div className="hidden space-x-8 md:flex md:ml-10">
                {navigation.map((item) => (
                  
                  <Link key={item.name} href={item.href} className={classNames(pathname?.startsWith(item.href) ? "underline text-c-l-primary underline-offset-4" : "text-white", "text-base font-medium hover:text-c-l-primary hover:underline underline-offset-4")}>
                    {item.name}
                  </Link>

                ))}
              </div>
            </div>
            <div className="flex md:items-center md:space-x-6">
              <Account />
            </div>
          </nav>
        </div>

        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >

          <Popover.Panel focus className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top md:hidden">
            <div className="rounded-lg shadow-md bg-c-bg ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="px-5 pt-4 flex items-center ">

                <div className="mr-2">
                  <Popover.Button className="bg-c-bg rounded-md inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>

                <div>
                  <span className="sr-only">0xpaluco</span>
                  <h1 className="h-8 w-auto sm:h-10 text-white text-xl tracking-tight font-extrabold"> 0xpaluco</h1>
                </div>

              </div>
              <div className="pt-5 pb-6">

                <div className="px-2 space-y-1">
                  {navigation.map((item) => (
                    <Link key={item.name} href={item.href} className={classNames(pathname?.startsWith(item.href) ? "text-c-l-primary" : "text-white", "block px-3 py-2 rounded-md text-base font-medium")}>
                      {item.name}
                    </Link>

                  ))}
                </div>



                <div className="mt-6 px-5">
                  <Divider title="" />
                  <Link key={'contact'} href={'/contact'} className="block text-center w-full py-3 px-4 rounded-md shadow bg-c-primary text-white font-medium hover:bg-c-l-primary">
                      Lets Work together
                  </Link>

                </div>
                {/* <div className="mt-6 px-5">
                  <p className="text-center text-base font-medium text-white">
                    Existing customer?{' '}
                    <Link href="#" className="text-white hover:underline">
                      Login
                    </Link>
                  </p>
                </div> */}



              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  )
}


