'use client'

import React from 'react'

import { MainNav, Footer } from '@components/shared'
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
