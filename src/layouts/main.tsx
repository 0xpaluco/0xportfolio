'use client'
import { Footer, MainNav } from '@components/organisms'
import React from 'react'

import { SocialLinkType } from '@/sanity/lib/queries'

interface Props {
  children: React.ReactNode
  className?: string
  links: SocialLinkType[]
}

const MainLayout = ({ children, links, className }: Props): JSX.Element => {
  return (
    <div className="relative bg-c-bg-light h-screen overflow-auto">
      <MainNav className={className} />
      {children}
      <Footer links={links} />
    </div>
  )
}

export default MainLayout
