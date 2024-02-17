'use client'

import Markdown from '@components/Markdown'
import { icons,SocialLink } from '@components/SocialIcons'
import { CalendarDaysIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import { SanityDocument } from 'next-sanity'

import { urlForImageSqr } from '@/sanity/lib/image'
import { ProfileType } from '@/sanity/lib/queries'

interface AboutViewProps {
  profile: SanityDocument<ProfileType>
}

const AboutView = ({ profile }: AboutViewProps) => {
  return (
    <>
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
                      {profile.profileImage ? (
                        <Image
                          src={urlForImageSqr(profile.profileImage.image)}
                          width={500}
                          height={500}
                          alt={profile.profileImage.alt || 'author'}
                          title={profile.profileImage.alt || 'author'}
                          sizes="(min-width: 1024px) 32rem, 20rem"
                          className="aspect-square rotate-3 rounded-2xl object-cover bg-zinc-800"
                        />
                      ) : null}
                    </div>
                  </div>
                  <div className="lg:order-first lg:row-span-2">
                    <h1 className="text-3xl tracking-tight font-extrabold text-white sm:text-5xl max-w-4xl">
                      {profile.headline}
                    </h1>

                    <section className="mt-6 space-y-7 text-base text-gray-400">
                      <Markdown>{profile.fullBio}</Markdown>
                    </section>

                    <section className="mt-16 max-w-2xl text-white">
                      <h2 className="font-semibold text-2xl mb-4">Expertise</h2>
                      <p className="max-w-lg">
                        I&apos;ve spent few years working on my skills. In no
                        particular order, here are a few of them.
                      </p>

                      <ul className="flex flex-wrap items-center gap-3 mt-8 text-white">
                        {profile.skills.map((skill, id) => (
                          <li
                            key={id}
                            className="inline-flex rounded bg-c-l-primary px-2 py-0.5 text-sm font-bold text-c-d-primary mr-2"
                          >
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </section>
                  </div>
                  <div className="lg:pl-20">
                    <ul role="list">
                      {profile.links?.map((item) => (
                        <SocialLink
                          key={item._id}
                          href={item.url}
                          icon={icons[item.label.toLowerCase()]}
                        >
                          Follow on {item.label}
                        </SocialLink>
                      ))}

                      <SocialLink
                        href="/contact"
                        icon={CalendarDaysIcon}
                        target="_self"
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
