'use client'

import React from 'react'

import { MainNav, Footer } from '@components/shared'

interface Props {
  children: React.ReactNode
  className?: string
}

const MainLayout = ({ children, className }: Props): JSX.Element => {
  return (
    <div className="relative bg-c-bg-light h-screen overflow-auto">
      <MainNav className={className} />
      {children}
      <Footer links={[]} />
    </div>
  )
}

export default MainLayout
