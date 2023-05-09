'use client';

import Image from 'next/image'
import portraitImage from '@images/portrait.jpg'
import { socialNavigation } from '@helpers/routes'
import { SocialLink } from '@components/SocialIcons'
import { EnvelopeIcon, CalendarDaysIcon } from '@heroicons/react/24/solid'
import { MetaTags } from '@components/shared'

interface AboutViewProps {
}

const AboutView = ({ }: AboutViewProps) => {

  return (
    <>

      <MetaTags
        title='About'
        description='I’m Paluco. I live in Puerto Rico, where I design the future.' />

      <div className="relative bg-c-bg rounded-md shadow-lg pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
          <div className="h-1/3 sm:h-2/3" />
        </div>
        <div className="relative  max-w-7xl mx-auto">

          <div className="bg-c-bg rounded-lg shadow shadow-c-bg">
            <main className="lg:relative">
              <div className="">
                <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                  <div className="lg:pl-20">
                    <div className="max-w-xs px-2.5 lg:max-w-none">
                      <Image
                        src={portraitImage}
                        alt=""
                        sizes="(min-width: 1024px) 32rem, 20rem"
                        className="aspect-square rotate-3 rounded-2xl object-cover bg-zinc-800"
                      />
                    </div>
                  </div>
                  <div className="lg:order-first lg:row-span-2">
                    <h2 className="text-3xl tracking-tight font-extrabold text-white sm:text-5xl max-w-4xl">
                      Software Engineer Building the Future with Web3 and AI Technology
                    </h2>

                    <div className="mt-6 space-y-7 text-base text-gray-400">
                      <p>
                        Hi there, I’m Paluco - a software engineer, app builder, and Web3/AI fan based in sunny Puerto Rico. 
                        When I’m not buried in code, you can find me sipping piña coladas on the beach (okay, maybe not always).
                      </p>
                      <p>
                        From a young age, I was tinkering with computers and dreaming up big ideas. 
                        Fast forward to now, and I’m the founder of <span className='text-c-l-primary'>0xResearch Labs </span> 
                        - a company dedicated to building decentralized solutions that promote ownership, transparency, and innovation.
                      </p>

                      <p>
                        With my expertise in Web3 and AI technology, I’m on a mission to revolutionize the way we interact with digital content. 
                        But don’t worry, I haven’t let my tech geek status go to my head (at least not yet). 
                        When I’m not building apps, I’m probably gaming, binge-watching Netflix, or trying to teach my dog new tricks.
                      </p>
                    </div>
                  </div>
                  <div className="lg:pl-20">
                    <ul role="list">

                      {socialNavigation.map((item) => (

                        <SocialLink
                          key={item.name}
                          href={item.href}
                          icon={item.icon}
                        >
                          Follow on {item.name}
                        </SocialLink>

                      ))}

                      <SocialLink
                        href="/contact"
                        icon={CalendarDaysIcon}
                        target='_self'
                        className="my-8 border-t pt-8 border-zinc-700/40"
                      >
                        Let’s Work Together
                      </SocialLink>
                    </ul>
                  </div>
                </div>
              </div>
            </main>
          </div>

        </div>
      </div>



    </>

  )
}

export default AboutView
