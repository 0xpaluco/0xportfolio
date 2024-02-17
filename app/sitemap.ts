import { getBlogLink, getProjectLink } from '@helpers/notion'
import { MetadataRoute } from 'next'
import { SanityDocument } from 'next-sanity'

import {
  Post,
  POSTS_QUERY,
  Project,
  PROJECTS_QUERY,
} from '@/sanity/lib/queries'
import { loadQuery } from '@/sanity/lib/store'

type Sitemap = Array<{
  url: string
  lastModified?: string | Date
}>

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // const projects = await getAllProjects()
  // const articles = await getAllPublishedArticles()

  const articles = await loadQuery<SanityDocument<Post>[]>(POSTS_QUERY)
  const projects = await loadQuery<SanityDocument<Project>[]>(PROJECTS_QUERY)

  const articlesMap: Sitemap = articles.data.map(({ slug }) => ({
    url: `https://0xpalu.co${getBlogLink(slug)}`,
    lastModified: new Date(),
  }))
  const projectsMap: Sitemap = projects.data.map(({ slug }) => ({
    url: `https://0xpalu.co${getProjectLink(slug)}`,
    lastModified: new Date(),
  }))

  return [
    {
      url: 'https://0xpalu.co',
      lastModified: new Date(),
    },
    {
      url: 'https://0xpalu.co/about',
      lastModified: new Date(),
    },
    {
      url: 'https://0xpalu.co/blog',
      lastModified: new Date(),
    },
    ...articlesMap,
    {
      url: 'https://0xpalu.co/contact',
      lastModified: new Date(),
    },
    {
      url: 'https://0xpalu.co/work',
      lastModified: new Date(),
    },
    ...projectsMap,
    {
      url: 'https://0xpalu.co/process',
      lastModified: new Date(),
    },
  ]
}
