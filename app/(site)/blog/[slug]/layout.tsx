import { ReactNode } from 'react'

import { ArticleLayout } from '@/layouts'

interface LayoutProps {
  children: ReactNode
}

export default async function Layout({ children }: LayoutProps) {
  return <ArticleLayout>{children}</ArticleLayout>
}
