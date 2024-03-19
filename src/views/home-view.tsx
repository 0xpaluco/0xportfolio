'use client'

import { NewsLetterForm } from '@components/molecules'
import { ProjectList, RecentArticleList } from '@components/organisms'
import { icons, SocialLink } from '@components/shared/social-icons'
import { ChevronRightIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import Link from 'next/link'
import { SanityDocument } from 'next-sanity'

import { urlForImage } from '@/sanity/lib/image'
import {
  HomePageType,
  Post,
  Project,
  SocialLinkType,
} from '@/sanity/lib/queries'

interface HomeProps {
  projectData: SanityDocument<Project>[]
  articleData: SanityDocument<Post>[]
  pageData: SanityDocument<HomePageType>
}

const HomeView = ({ projectData, articleData, pageData }: HomeProps) => {
  return (
    <main>
      <Hero {...pageData.hero} links={pageData.links} />

      <div className="py-10 bg-c-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-10">
            <div className="grid md:grid-cols-3 gap-2">
              <div className="grid md:grid-cols-3 md:col-span-3 gap-2">
                <div className="md:col-span-2">
                  <RecentArticleList articles={articleData} />
                </div>
                <div className="md:col-span-1 grid md:grid-rows-4 gap-y-2">
                  <div className="md:row-span-1">
                    <NewsLetterForm />
                  </div>
                  <div className="md:row-span-3">
                    <ProjectList projects={projectData} />
                  </div>
                </div>
              </div>
              <div className="md:col-span-3">
                <CTA />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

const CTA = () => {
  return (
    <div className="border-gray-400/40 border-2 rounded-lg bg-c-bg shadow-md shadow-c-bg">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Thinking of Bringing Your MVP to Life?
          <br />
          Let’s Discuss How.
        </h2>
        <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
          <Link
            href="/contact"
            className="rounded-md bg-c-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-c-d-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Let’s Talk
          </Link>
          <Link
            href="/process"
            className="text-sm font-semibold leading-6 text-gray-300"
          >
            Learn more <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

type HeroProps = {
  heading: string
  subheading: string
  tagline: string
  image?: any
  links: SocialLinkType[]
}
const Hero = (props: HeroProps) => {
  return (
    <div className="pt-10 bg-c-bg-light sm:pt-16 lg:pt-8 lg:overflow-hidden">
      <div className="mx-auto max-w-7xl lg:px-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
            <div className="lg:py-24">
              <Link
                href="/contact"
                className="inline-flex items-center text-white bg-c-bg rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
              >
                <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-c-primary rounded-full">
                  Hey there 👋
                </span>
                <span className="ml-4 text-sm">Let’s Talk</span>
                <ChevronRightIcon
                  className="ml-2 w-5 h-5 text-gray-500"
                  aria-hidden="true"
                />
              </Link>

              <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                <span className="block"> {props.heading}</span>{' '}
                <span className="block text-c-l-primary">
                  {props.subheading}
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                {props.tagline}
              </p>

              <SocialLinks links={props.links}></SocialLinks>
            </div>
          </div>
          <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
              {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
              <Image
                className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src={urlForImage(props.image)}
                alt="hero image"
                width={750}
                height={750}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

type SocialLinksProps = {
  links: HeroProps['links']
}
const SocialLinks = ({ links }: SocialLinksProps) => {
  return (
    <div className="mt-8 flex space-x-0">
      {links.map((item) => (
        <SocialLink
          key={item._id}
          href={item.url}
          icon={icons[item.label.toLowerCase()]}
        />
      ))}
    </div>
  )
}

export default HomeView
