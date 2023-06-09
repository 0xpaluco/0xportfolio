import { secondaryNavigation, socialNavigation } from '@helpers/routes'
import Link from 'next/link'

const Footer = () => {
    
    return(
      <footer className="bg-c-bg-light mt-12">
        <div className="max-w-7xl mx-auto py-6 px-4 overflow-hidden sm:px-6 lg:px-8">
          <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
            {secondaryNavigation.map((item) => (
              <div key={item.name} className="px-5 py-2">
                <Link href={item.href} className="text-sm text-white hover:text-gray-400">
                    {item.name}
                </Link>
              </div>
            ))}
          </nav>
          <div className="mt-8 flex justify-center space-x-6">
            {socialNavigation.map((item) => (

              <Link key={item.name} href={item.href} target="_blank">
                  <item.icon className='w-6 h-6 text-white'></item.icon>
              </Link>
              
            ))}
          </div>
          <p className="mt-8 text-center text-base text-gray-400">&copy; 2022 0xpaluco - All rights reserved.</p>
        </div>
      </footer>
    )
}

export default Footer