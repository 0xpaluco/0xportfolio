import { classNames } from "@helpers/ui";
import { FolderIcon } from "@heroicons/react/24/outline";
import { LinkIcon, CodeBracketIcon } from "@heroicons/react/24/solid";
import { Project } from "lib/types/strapi-schema";
import Link from "next/link";


interface ProjectCardProps {
  project: Project
}
const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div
      key={project.id}
      className={classNames(
        'relative group bg-c-bg p-6 focus-within:ring-1 focus-within:ring-inset focus-within:ring-c-d-primary hover:rounded-xl hover:bg-c-bg-light hover:scale-105'
      )}
    >
      <div>

        <FolderIcon className="h-10 w-10 text-c-l-primary" strokeWidth={"1px"} />

      </div>
      <div className="my-8">
        <h3 className="text-lg font-medium text-white">
          <Link href={`/projects/${project.attributes.slug}`} className="hover:underline focus:outline-none">
              <span className="absolute inset-0" aria-hidden="true" />
              {project.attributes.slug}
          </Link>
        </h3>

        <p className="mt-2 text-sm text-gray-400">
          {project.attributes.description}
        </p>

      </div>
      <div className="absolute bottom-2">

        <p className="mt-2 text-sm text-gray-400 inline-flex items-center align-middle mb-2">

          <span className="inline-flex items-center mr-1 rounded text-sm font-medium text-gray-400">
            ..
          </span>

          {project.attributes.categories?.data.map((cat) => (
            <Link href={`/c/${cat.attributes.slug}`} key={cat.id} className="hover:underline mr-1 inline-flex items-center rounded text-sm font-medium text-c-l-primary before:mr-1 before:text-slate-400 before:content-['/']">
              {cat.attributes.slug}
            </Link>

          ))}

        </p>
      </div>
      <span
        className="absolute top-6 right-6 text-gray-300 inline-flex items-center"
        aria-hidden="true"
      >



        {project.attributes.repositoryUrl && (
          <Link href={project.attributes.repositoryUrl} className="hover:text-gray-400 hover:cursor-pointer mx-2" target={"_blank"}>
              <CodeBracketIcon className="h-6 w-6" strokeWidth={"1px"} />
          </Link>
        )}

        {project.attributes.appUrl && (
          <Link href={project.attributes.repositoryUrl} className="hover:text-gray-400 hover:cursor-pointer mx-2" target={"_blank"}>
              <LinkIcon className="h-6 w-6" strokeWidth={"1px"} />
          </Link>
        )}

      </span>
    </div>
  )
}

interface ProjectGridProps {
  projects: Project[]
}

const ProjectGrid = ({ projects }: ProjectGridProps) => {

  return (
    <div className="mt-16 overflow-hidden divide-y divide-c-bg-light sm:divide-y-0 sm:grid sm:grid-cols-3 sm:gap-3">
      {projects.map((project) => (
        <ProjectCard project={project} key={project.id}></ProjectCard>
      ))}
    </div>
  )
}

export default ProjectGrid;