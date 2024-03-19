'use client'
import { icons, SocialLink } from '@components/shared/social-icons'

import { SocialLinkType } from '@/sanity/lib/queries'

type FooterProps = {
  links: SocialLinkType[]
}
const Footer = ({ links }: FooterProps) => {
  return (
    <footer className="bg-c-bg-light">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {links?.map((item) => (
            <SocialLink
              key={item._id}
              href={item.url}
              icon={icons[item.label.toLowerCase()]}
            />
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-sm leading-5 text-gray-400">
            &copy; 2024 0xpaluco - All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
