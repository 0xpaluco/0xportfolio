import clsx from 'clsx'
import React from 'react'

interface ContainerProps {
  children: React.ReactNode
  className: string
}

const Container = ({ className, children }: ContainerProps) => {
  return (
    <section className={clsx('mx-auto max-w-7xl px-6 lg:px-8', className)}>
      <div className="mx-auto max-w-2xl lg:max-w-none">{children}</div>
    </section>
  )
}

export default Container
