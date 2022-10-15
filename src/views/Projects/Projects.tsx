import { StrapiProjectData } from "lib/types/strapi-schema";
import { useState } from "react";
import { ProjectGrid } from "@components/index";
import { MetaTags } from "@components/shared";

interface ProjectsProps {
  projectData: StrapiProjectData
}

const Projects = ({ projectData }: ProjectsProps) => {

  const [projects, setProjects] = useState(projectData.data);

  return (
    <>
      <MetaTags
        title="Projects"
        description="Things I’ve made trying to put my dent in the universe."
      />
      <div className="relative bg-c-bg rounded-md shadow-lg pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
          <div className="h-1/3 sm:h-2/3" />
        </div>
        <div className="relative  max-w-7xl mx-auto">
          <div className="text-left mb-4">
            <h2 className="text-3xl tracking-tight font-extrabold text-white sm:text-5xl max-w-4xl">Things I’ve made trying to put my dent in the universe.</h2>
            <p className="mt-3 max-w-4xl text-md text-gray-400 sm:mt-4">
              I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved.
            </p>
          </div>

          <ProjectGrid projects={projects}></ProjectGrid>

        </div>
      </div>
    </>
  )
}

export default Projects;