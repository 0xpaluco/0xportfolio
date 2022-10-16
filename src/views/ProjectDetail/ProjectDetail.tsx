
import { HomeIcon } from '@heroicons/react/solid'
import { Markdown } from '@components/index'
import { Project } from 'lib/types/strapi-schema'
import Link from 'next/link'
import moment from 'moment'
import { FolderIcon } from '@heroicons/react/outline'


interface ProjectDetailProps {
  project: Project
}

const ProjectDetail = ({ project }: ProjectDetailProps) => {

  return (
    <div className="relative bg-c-bg py-16 sm:py-24">
      <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
        <div className="relative sm:py-16 lg:py-0">
          <div aria-hidden="true" className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
            <div className="absolute inset-y-0 right-1/2 w-full rounded-r-3xl bg-c-bg lg:right-72" />
            <svg
              className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
              width={404}
              height={392}
              fill="none"
              viewBox="0 0 404 392"
            >
              <defs>
                <pattern
                  id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={392} fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
            </svg>
          </div>
          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
            {/* Testimonial card*/}
            <div className="relative overflow-hidden rounded-2xl pt-64 pb-10 shadow-xl">
              <img
                className="absolute inset-0 h-full w-full object-cover"
                src={project.attributes.coverImage.data?.attributes.url}
                alt=""
              />
              <div className="absolute inset-0 bg-c-l-primary mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-c-l-primary via-c-l-primary opacity-20" />
              <div className="relative px-8">
                <blockquote className="mt-8">
                  
                 

                </blockquote>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
          {/* Content area */}
          <div className="pt-12 sm:pt-16 lg:pt-20">
            <article>
              <header className="flex flex-col">
                <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  {project.attributes.title}
                </h1>
                <p className="mt-8 text-xl leading-8 text-gray-400">
                  {project.attributes.description}

                  {/* <div className='inline-flex w-full'>   
                      {article.attributes.categories.data.map((cat) => (
                          <span key={cat.id} className="inline-flex rounded bg-c-l-primary px-2 py-0.5 text-xs font-bold text-c-d-primary mx-2">
                              <Link href={`/c/${cat.attributes.slug}`}>
                                  <a>{cat.attributes.slug}</a>
                              </Link>  
                          </span>
                      ))}
                    </div> */}

                </p>
                
              </header>
              <div className='prose prose-lg prose-white mx-auto mt-6 text-white'>
                <Markdown>{project.attributes.description}</Markdown>
              </div>
            </article>
          </div>

          {/* Stats section */}

          <div className="mt-10">
            <Link href={project.attributes.appUrl} target={'_blank'}>
              <a target='_blank' className="text-base font-medium text-c-l-primary">
                Go to App
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </Link>
          </div>

        </div>
      </div>
    </div>



  )
}

export default ProjectDetail
