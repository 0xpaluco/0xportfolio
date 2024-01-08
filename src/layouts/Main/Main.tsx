'use client'

import { Footer } from '@components/shared'
import React from 'react'
import { Topbar } from './components'

interface Props {
  children: React.ReactNode
  themeMode: string
  themeToggler: Function
  className?: string
}

const Main = ({
  themeMode,
  themeToggler,
  children,
  className,
}: Props): JSX.Element => {
  return (
    <div
      className={`${themeMode} relative bg-c-bg-light h-screen overflow-auto`}
    >
      <Topbar
        themeMode={themeMode}
        themeToggler={themeToggler}
        className={className}
      />
      {children}
      <Footer />
    </div>
  )
}

export default Main
