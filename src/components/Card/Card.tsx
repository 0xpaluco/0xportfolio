import Link from 'next/link'
import clsx from 'clsx'
import { ChevronRightIcon } from '@heroicons/react/24/solid'
import { ReactNode } from 'react'
import { Url } from 'url'

interface CardProps {
  as?: any
  className: string
  children: ReactNode
}

export default function Card({
  as: Component = 'div',
  className,
  children,
}: CardProps) {
  return (
    <Component
      className={clsx(className, 'group relative flex flex-col items-start')}
    >
      {children}
    </Component>
  )
}

interface CardLinkProps {
  children: ReactNode
  href: Url
}

Card.Link = function CardLink({ children, href, ...props }: CardLinkProps) {
  return (
    <>
      <div className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:bg-c-bg-light group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl" />
      <Link href={href}>
        <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl" />
        <span className="relative z-10">{children}</span>
      </Link>
    </>
  )
}

interface CardTitleProps {
  as?: any
  children: ReactNode
  href?: any
}

Card.Title = function CardTitle({
  as: Component = 'h2',
  href,
  children,
}: CardTitleProps) {
  return (
    <Component className="text-base font-semibold tracking-tight text-white">
      {href ? <Card.Link href={href}>{children}</Card.Link> : children}
    </Component>
  )
}

interface CardDescriptionProps {
  children: ReactNode
}

Card.Description = function CardDescription({
  children,
}: CardDescriptionProps) {
  return <p className="relative z-10 mt-2 text-sm text-gray-400">{children}</p>
}

interface CardCTAProps {
  children: ReactNode
}
Card.Cta = function CardCta({ children }: CardCTAProps) {
  return (
    <div
      aria-hidden="true"
      className="relative z-10 mt-4 flex items-center text-sm font-medium text-c-l-primary"
    >
      {children}
      <ChevronRightIcon className="ml-1 h-4 w-4 stroke-current" />
    </div>
  )
}

interface CardEyebrowProps {
  as?: any
  children: ReactNode
  decorate: boolean
  className: string
}

Card.Eyebrow = function CardEyebrow({
  as: Component = 'p',
  decorate = false,
  className,
  children,
  ...props
}: CardEyebrowProps) {
  return (
    <Component
      className={clsx(
        className,
        'relative z-10 order-first mb-3 flex items-center text-sm text-gray-400',
        decorate && 'pl-3.5',
      )}
      {...props}
    >
      {decorate && (
        <span
          className="absolute inset-y-0 left-0 flex items-center"
          aria-hidden="true"
        >
          <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
        </span>
      )}
      {children}
    </Component>
  )
}
