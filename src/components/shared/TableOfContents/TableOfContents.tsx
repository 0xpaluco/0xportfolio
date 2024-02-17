'use client'

import { Disclosure } from '@headlessui/react'
import { classNames } from '@helpers/ui'
import { ArrowDownIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

type Heading = {
  text: string
  id: string
  level: number
  tagName: string
}

const TableOfContents: React.FC = () => {
  const [activeId, setActiveId] = useState('')
  const [headings, setHeadings] = useState<Heading[]>([])

  useEffect(() => {
    // Fetch headings from the document
    const fetchedHeadings: Heading[] = Array.from(
      document.querySelectorAll('h2, h3, h4'),
    ).map((heading) => ({
      text: heading.textContent || '',
      id: heading.id,
      level: parseInt(heading.tagName[1], 10),
      tagName: heading.tagName,
    }))
    setHeadings(fetchedHeadings)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-50% 0px -50% 0px' },
    )

    fetchedHeadings.forEach((heading) => {
      const element = document.getElementById(heading.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="text-white border border-white lg:mx-8 rounded-md">
      <dl className="mt-4 space-y-2 divide-y divide-gray-900/10 p-4 px-6">
        <span className="text-base font-semibold leading-7">
          Table Of Contents
        </span>
        <nav className="flex flex-1 flex-col" aria-label="Table Of Contents">
          <ul role="list" className="-mx-2 space-y-1">
            {headings.map((heading) => (
              <li key={heading.id} className={`pl-${heading.level}`}>
                <Link
                  href={`#${heading.id}`}
                  scroll={true}
                  className={classNames(
                    activeId === heading.id
                      ? 'bg-gray-50 text-indigo-600'
                      : 'text-gray-400 hover:text-indigo-600 hover:bg-gray-50',
                    'group flex gap-x-3 rounded-md p-2 pl-3 text-sm leading-6 font-semibold',
                  )}
                >
                  {heading.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </dl>
    </div>
  )
}

export default TableOfContents
