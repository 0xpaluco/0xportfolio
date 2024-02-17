'use client'

import { SanityDocument } from 'next-sanity'
import { Fragment } from 'react'

import { HomePageType,Post, Project } from '@/sanity/lib/queries'

import { FeaturedWork, Hero } from './components'

interface HomeProps {
  projectData: SanityDocument<Project>[]
  articleData: SanityDocument<Post>[]
  pageData: SanityDocument<HomePageType>
}

const HomeView = ({ projectData, articleData, pageData }: HomeProps) => {
  return (
    <Fragment>
      <Hero {...pageData.hero} links={pageData.links} />
      <FeaturedWork projects={projectData} articles={articleData} />
    </Fragment>
  )
}

export default HomeView
