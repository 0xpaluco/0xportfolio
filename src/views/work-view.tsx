'use client'

import { ProjectGrid } from '@components/index'
import { SanityDocument } from 'next-sanity'

import { PageDataType, Project } from '@/sanity/lib/queries'

interface ProjectsProps {
  projectData: SanityDocument<Project>[]
  pageData: SanityDocument<PageDataType>
}

const Work = ({ projectData, pageData }: ProjectsProps) => {
  return (
    <>
      <div className="relative bg-c-bg rounded-md shadow-lg pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
          <div className="h-1/3 sm:h-2/3" />
        </div>
        <div className="relative  max-w-7xl mx-auto">
          <div className="text-left mb-4">
            <h1 className="text-3xl tracking-tight font-extrabold text-white sm:text-5xl max-w-4xl">
              {pageData.title}
            </h1>
            <p className="mt-3 max-w-4xl text-md text-gray-400 sm:mt-4">
              {pageData.description}
            </p>
            <h2 className="sr-only">Projects</h2>
          </div>
          <ProjectGrid projects={projectData}></ProjectGrid>
        </div>
      </div>
    </>
  )
}

export default Work
