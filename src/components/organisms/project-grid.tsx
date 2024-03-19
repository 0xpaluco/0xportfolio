import { getCategoryLink, getProjectLink } from '@helpers/notion'
import { classNames } from '@helpers/ui'
import { FolderIcon } from '@heroicons/react/24/outline'
import {
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
} from '@heroicons/react/24/solid'
import Link from 'next/link'
import { SanityDocument } from 'next-sanity'

import { Project } from '@/sanity/lib/queries'

interface ProjectCardProps {
  project: Project
}
const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div
      key={project._id}
      className={classNames(
        'relative group bg-c-bg p-6 focus-within:ring-1 focus-within:ring-inset focus-within:ring-white hover:rounded-xl hover:bg-c-bg-light hover:scale-105',
      )}
    >
      <div>
        <FolderIcon
          className="h-10 w-10 text-c-l-primary"
          strokeWidth={'1px'}
        />
      </div>
      <div className="my-8">
        <h3 className="text-lg font-medium text-white">
          <Link
            href={getProjectLink(project.slug)}
            className="hover:underline focus:outline-none"
          >
            <span className="absolute inset-0" aria-hidden="true" />
            {project.slug}
          </Link>
        </h3>

        <p className="mt-2 text-sm text-gray-400 line-clamp-4">
          {project.excerpt}
        </p>
      </div>
      <div className="absolute bottom-2">
        <p className="mt-2 text-sm text-gray-400 inline-flex items-center align-middle mb-2">
          <span className="inline-flex items-center mr-1 rounded text-sm font-medium text-gray-400">
            ..
          </span>

          {project.categories?.map((tag) => (
            <Link
              href={getCategoryLink(tag.slug)}
              key={tag._id}
              className="hover:underline mr-1 inline-flex items-center rounded text-sm font-medium text-c-l-primary before:mr-1 before:text-slate-400 before:content-['/']"
            >
              {tag.slug}
            </Link>
          ))}
        </p>
      </div>
      <span
        className="absolute top-6 right-6 text-gray-300 inline-flex items-center"
        aria-hidden="true"
      >
        {project.repoUrl && (
          <Link
            href={project.repoUrl}
            className="hover:text-gray-400 hover:cursor-pointer mx-2"
            target={'_blank'}
          >
            <CodeBracketIcon className="h-6 w-6" strokeWidth={'1px'} />
          </Link>
        )}

        {project.appUrl && (
          <Link
            href={project.appUrl}
            className="hover:text-gray-400 hover:cursor-pointer mx-2"
            target={'_blank'}
          >
            <ArrowTopRightOnSquareIcon
              className="h-6 w-6"
              strokeWidth={'1px'}
            />
          </Link>
        )}
      </span>
    </div>
  )
}

interface ProjectGridProps {
  projects: SanityDocument<Project>[]
}

const ProjectGrid = ({ projects }: ProjectGridProps) => {
  return (
    <div className="mt-16 overflow-hidden divide-y divide-c-bg-light sm:divide-y-0 sm:grid sm:grid-cols-3 sm:gap-3">
      {projects.map((project) => (
        <ProjectCard project={project} key={project._id}></ProjectCard>
      ))}
    </div>
  )
}

export default ProjectGrid
