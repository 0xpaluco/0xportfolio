import { ExternalLinkIcon } from '@heroicons/react/solid'
import Link from 'next/link'

const metrics = [
    { id: 1, stat: '8K+', emphasis: 'Companies', rest: 'use laoreet amet lacus nibh integer quis.' },
    { id: 2, stat: '25K+', emphasis: 'Countries around the globe', rest: 'lacus nibh integer quis.' },
    { id: 3, stat: '98%', emphasis: 'Customer satisfaction', rest: 'laoreet amet lacus nibh integer quis.' },
    { id: 4, stat: '12M+', emphasis: 'Issues resolved', rest: 'lacus nibh integer quis.' },
  ]
  
  export default function CTA() {
    return (
      <div className="relative bg-c-bg">
        <div className="h-56 bg-c-bg sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
        
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&blend=272f40&sat=-100&blend-mode=multiply"
            alt=""
          />
          
        </div>
      <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      

        <div className="md:ml-auto md:w-1/2 md:pl-10">
          <h2 className="text-base font-semibold uppercase tracking-wider text-c-l-primary">Building the future</h2>
          <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">We are here to help</p>
          <p className="mt-3 text-lg text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a
            scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum
            tincidunt duis.
          </p>
          <div className="mt-8">
            <div className="inline-flex rounded-md shadow">
              <Link href="/contact">
                <a
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-c-primary hover:bg-c-d-primary"
                >
                  Let's Work together
                </a>
              </Link>
              
            </div>
          </div>
        </div>
        
      </div>
    </div>
    )
  }