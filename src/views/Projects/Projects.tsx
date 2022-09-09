import { StrapiProjectData } from "lib/types/strapi-schema";
import { useState } from "react";
import { ProjectGrid } from "@components/index";

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

        <ProjectGrid projects={projects}></ProjectGrid>

      </div>
    </div>
  )
}

export default Projects;