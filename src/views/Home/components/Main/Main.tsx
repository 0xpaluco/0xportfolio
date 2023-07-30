'use client';

import { socialNavigation } from '@helpers/routes'
import { ChevronRightIcon } from '@heroicons/react/24/solid'
import Image from 'next/image';
import Link from 'next/link'

const Main = () => {

  return (
    <main>
      <div className="pt-10 bg-c-bg-light sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
              <div className="lg:py-24">
                <Link href="/contact"
                  className="inline-flex items-center text-white bg-c-bg rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200" >
                    <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-c-primary rounded-full">
                      Hey there 👋
                    </span>
                    <span className="ml-4 text-sm">Let’s work together</span>
                    <ChevronRightIcon className="ml-2 w-5 h-5 text-gray-500" aria-hidden="true" />
                </Link>

                <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                  <span className="block">Hi, I’m Paluco</span>{' '}
                  <span className="block text-c-l-primary">I build things for the future of the web.</span>
                </h1>
                <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  I’m a software engineer <span className="font-bold">specializing in building</span>{' '}exceptional <span className="font-bold">Web3 experiences.</span>{' '}
                </p>

                <SocialLinks></SocialLinks>


              </div>
            </div>
            <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                <Image
                  className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                  src="https://tailwindui.com/img/component-images/cloud-illustration-indigo-400.svg"
                  alt="hero image"
                  width={100}
                  height={75}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* More main page content here... */}
    </main>
  )
}

const SocialLinks = () => {
  return (
    <div className="mt-8 flex space-x-6">
      {socialNavigation.map((item) => (
        <Link key={item.name} href={item.href} target="_blank">
          <item.icon className='w-6 h-6 text-white'></item.icon>
        </Link>

      ))}
    </div>
  )
}

export default Main