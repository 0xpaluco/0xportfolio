'use client'

import Image from 'next/image'
import Link from 'next/link'

import { SanityDocument } from 'next-sanity'
import {
  HomePageType,
  Post,
  Project,
  SocialLinkType,
} from '@/sanity/lib/queries'
import { urlForImage } from '@/sanity/lib/image'

import { NewsLetterForm } from '@components/newsletter-form'
import { RecentArticleList } from '@components/recent-article-list'
import { ProjectList } from '@components/project-list'

import { icons, SocialLink } from '@components/SocialIcons'
import { ChevronRightIcon } from '@heroicons/react/24/solid'

interface HomeProps {
  projectData: SanityDocument<Project>[]
  articleData: SanityDocument<Post>[]
  pageData: SanityDocument<HomePageType>
}

const HomeView = ({ projectData, articleData, pageData }: HomeProps) => {
  return (
    <main>
      <Hero {...pageData.hero} links={pageData.links} />

      <div className="py-12 bg-c-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-10">
            <div className="mt-6 lg:grid lg:grid-cols-2 lg:gap-2">
              <div className="col-span-1">
                <RecentArticleList articles={articleData} />
              </div>

              <div className="col-span-1">
                <div className="">
                  <NewsLetterForm />
                </div>
                <div className="">
                  <ProjectList projects={projectData} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
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
      <div className="mx-auto max-w-7xl lg:px-8">
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
