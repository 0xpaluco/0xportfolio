import { getProjectLink } from '@helpers/notion'
import { CodeBracketIcon, FolderIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { SanityDocument } from 'next-sanity'

import { Project } from '@/sanity/lib/queries'

interface ListProps {
  projects: SanityDocument<Project>[]
}

export const ProjectList = ({ projects }: ListProps) => {
  return (
    <div className="p-4 border-gray-400/40 border-2 rounded-lg bg-c-bg shadow-md shadow-c-bg">
      <div className="mt-2 inline-flex items-center text-c-l-primary">
        <CodeBracketIcon className="w-5 h-5 mr-2" />
        <h2 className="text-sm font-semibold">MY WORK</h2>
      </div>
      <div className="mt-6 flow-root">
        <ul role="list" className="-my-5 divide-y divide-gray-400">
          {projects?.map((project) => (
            <li key={project._id} className="py-5">
              <div className="relative flex">
                <FolderIcon className="w-8 h-8 text-c-l-primary mb-2" />
                <div className="flex-1 ml-4 px-2">
                  <h3 className="text-base text-white">
                    <Link
                      href={getProjectLink(project.slug)}
                      className="hover:underline focus:outline-none"
                    >
                      {/* Extend touch target to entire panel */}
                      <span className="absolute inset-0" aria-hidden="true" />
                      {project.slug}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-400 line-clamp-2">
                    {project.excerpt}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6">
        <Link
          href={'/work'}
          className="flex w-full items-center justify-center rounded-md border-2 border-c-bg bg-c-bg-light px-4 py-2 text-sm font-medium text-white shadow-sm hover:border-c-primary/40"
        >
          View all projects
        </Link>
      </div>
    </div>
  )
}
