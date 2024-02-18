'use client'

import React from 'react'
import { TableOfContents } from '@components/shared'

interface Props {
  children: React.ReactNode
  className?: string
}

const ArticleLayout = ({ children, className }: Props): JSX.Element => {
  return (
    <div className="flex min-h-full flex-col bg-c-bg">
      <div className="mx-auto flex w-full max-w-7xl items-start gap-x-8 px-4 py-10 sm:px-6 lg:px-8">
        <aside className="sticky top-8 hidden shrink-0 lg:block">
          {<TableOfContents />}
        </aside>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  )
}

export default ArticleLayout
