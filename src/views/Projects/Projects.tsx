import { classNames } from "@helpers/ui";
import Link from "next/link";
import {
  AcademicCapIcon,
  BadgeCheckIcon,
  CashIcon,
  ClockIcon,
  ReceiptRefundIcon,
  UsersIcon,
  CodeIcon, FolderIcon
} from '@heroicons/react/outline'
import { ArrowRightIcon, ExternalLinkIcon } from "@heroicons/react/solid";
import { Icons } from "@components/shared";
import { StrapiProjectData } from "lib/types/strapi-schema";
import { useState } from "react";

interface ProjectsProps {
  projectData: StrapiProjectData
}

const Projects = ({ projectData }: ProjectsProps) => {

  const [projects, setProjects] = useState(projectData.data);
   
    return (
        <div className="relative bg-c-bg rounded-md shadow-lg pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
            <div className="absolute inset-0">
                <div className=" h-1/3 sm:h-2/3" />
            </div>
            <div className="relative  max-w-7xl mx-auto">
                <div className="text-center">
                  <h2 className="text-3xl tracking-tight font-extrabold text-white sm:text-4xl">Projects</h2>
                  <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-400 sm:mt-4">
                      Some of the things I've built.
                  </p>
                </div>

                <div className="mt-12 rounded-lg  overflow-hidden shadow divide-y divide-c-bg sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px">
                  {projects.map((project, actionIdx: number) => (
                    <div
                      key={project.id}
                      className={classNames(
                        actionIdx === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '',
                        actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
                        actionIdx === projects.length - 2 ? 'sm:rounded-bl-lg' : '',
                        actionIdx === projects.length - 1 ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none' : '',
                        'relative group bg-c-bg-light p-6 focus-within:ring-1 focus-within:ring-inset focus-within:ring-c-d-primary'
                      )}
                    >
                      <div>
                        
                      <FolderIcon className="h-10 w-10 text-c-l-primary" strokeWidth={"1px"}/>

                      </div>
                      <div className="my-8">
                        <h3 className="text-lg font-medium text-white">
                          {project.attributes.title}
                        </h3>
                        <p className="mt-2 text-sm text-gray-400">
                          {project.attributes.description}
                        </p>
                        
                      </div>
                      <div className="absolute bottom-2">
                        
                        <p className="mt-2 text-sm text-gray-400 inline-flex items-center align-middle mb-2">
                        
                          <span className="inline-flex items-center mr-2 rounded text-sm font-medium text-gray-400">
                            ...
                          </span>

                          {project.attributes.categories.data.map((cat) => (
                            <Link href={`/c/${cat.attributes.slug}`}>
                              <a className="hover:underline mr-1 inline-flex items-center rounded text-sm font-medium text-c-l-primary before:mr-1 before:text-slate-400 before:content-['/']">
                                {cat.attributes.slug} 
                              </a> 
                            </Link>
                            
                          ))}

                         
                         
                        </p>
                      </div>
                      <span
                        className="absolute top-6 right-6 text-gray-300 inline-flex items-center"
                        aria-hidden="true"
                      >
                        

                        <Link href={project.attributes.repositoryUrl} target="_blank">
                          <a className="hover:text-gray-400 hover:cursor-pointer mx-2" target={"_blank"}>
                            <Icons.github.icon className="h-6 w-6"/>
                          </a>
                        </Link>

                        <Link href={project.attributes.appUrl}>
                          <a className="hover:text-gray-400 hover:cursor-pointer mx-2">
                            <ArrowRightIcon className="h-6 w-6" />
                          </a>
                        </Link>
                        
                        
                      </span>
                    </div>
                  ))}
                </div>

            </div>
        </div>
    )
}

export default Projects;