import { Project } from "lib/types/strapi-schema"
import Link from "next/link"

interface FeaturedWorkProps {
  projects: Project[]
}

export default function FeaturedWork({ projects } : FeaturedWorkProps) {
  return (
    <div className="py-12 bg-c-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-c-l-primary font-semibold tracking-wide uppercase">My Work</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Some Things I've Built
          </p>
          <p className="mt-4 max-w-2xl text-lg text-gray-300 lg:mx-auto">
            <Link href="/projects" >
              <a className="hover:border-b border-c-l-primary pb-1 hover:cursor-pointer">View other projects.</a>
            </Link>
            
          </p>
        </div>

        <div className="mt-10">
          <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-3">
            
            {projects.map((product) => (
              <div key={product.id} className="relative group">
                <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden bg-gray-100">
                  <img src={`${product.attributes.coverImage.data?.attributes.url}`} alt={product.attributes.coverImage.data?.attributes.alternativeText} className="object-center object-cover" />
                  <div className="flex items-end opacity-0 p-4 group-hover:opacity-100" aria-hidden="true">
                    
                    {/* <Link href={product.attributes.repositoryUrl} target="_blank">
                      <a className="w-full border-c-primary border-2 bg-white bg-opacity-75 backdrop-filter backdrop-blur py-2 px-4 rounded-md text-sm font-medium text-black text-center mx-1">
                        Code
                      </a>
                    </Link> */}
                    
                    
                      <button className="w-full bg-c-primary bg-opacity-75 backdrop-filter backdrop-blur py-2 px-4 rounded-md text-sm font-medium text-white text-center mx-1">
                        View Project
                      </button>
                    
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between text-base font-medium text-white space-x-8">
                  <h3>
                  <Link href={product.attributes.appUrl}>
                    <a>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.attributes.title}
                    </a>
                  </Link>

                  </h3>
                  <div>
                    <p >
                      {product.attributes.categories.data.map((cat) => (
                        <span className="inline-flex items-center px-2.5 mx-1 py-0.5 rounded text-xs font-medium bg-c-l-primary text-c-d-primary">
                          {cat.attributes.name}
                        </span> 
                      ))}
                    </p>
                  </div>
                  
                </div>
                <p className="mt-1 text-sm text-gray-400">{product.attributes.description}</p>
              </div>
            ))}

          </dl>
        </div>
      </div>
    </div>
  )
}
