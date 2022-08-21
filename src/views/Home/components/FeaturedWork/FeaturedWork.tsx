import { ArrowSmRightIcon } from "@heroicons/react/solid"
import Link from "next/link"

const products = [
  {
    id: 1,
    name: 'NFT Factory',
    description: 'Deploy and Manage your own NFT Collection.',
    href: '#',
    category: 'NFT',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-05-related-product-01.jpg',
    imageAlt:
      'Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.',
  },
  {
    id: 2,
    name: 'COMP Farmer',
    description: 'Lend and Borrow to collect rewards in COMP tokens.',
    href: '#',
    category: 'DeFi',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-05-related-product-01.jpg',
    imageAlt:
      'Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.',
  },
  {
    id: 3,
    name: 'Token Recovery',
    description: 'Rescue kidnapped tokens from a compromised wallet.',
    href: '#',
    category: 'Security',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-05-related-product-01.jpg',
    imageAlt:
      'Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.',
  }
]

export default function FeaturedWork() {
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
            
            {products.map((product) => (
              <div key={product.id} className="relative group">
                <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden bg-gray-100">
                  <img src={product.imageSrc} alt={product.imageAlt} className="object-center object-cover" />
                  <div className="flex items-end opacity-0 p-4 group-hover:opacity-100" aria-hidden="true">
                    <div className="w-full border-c-primary border-2 bg-white bg-opacity-75 backdrop-filter backdrop-blur py-2 px-4 rounded-md text-sm font-medium text-black text-center mx-1">
                      Code
                    </div>
                    <div className="w-full bg-c-primary bg-opacity-75 backdrop-filter backdrop-blur py-2 px-4 rounded-md text-sm font-medium text-white text-center mx-1">
                      View Project
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between text-base font-medium text-white space-x-8">
                  <h3>
                    <a href="#">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-c-l-primary text-c-d-primary">
                      {product.category}
                    </span>
                  </p>
                  
                </div>
                <p className="mt-1 text-sm text-gray-400">{product.description}</p>
              </div>
            ))}

          </dl>
        </div>
      </div>
    </div>
  )
}
