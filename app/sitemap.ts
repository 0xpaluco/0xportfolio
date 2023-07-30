import { getBlogLink, getProjectLink } from '@helpers/notion';
import { getAllProjects, getAllPublishedArticles } from '@lib/notion';
import { MetadataRoute } from 'next'

type Sitemap = Array<{
    url: string
    lastModified?: string | Date
  }>

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    
    const projects = await getAllProjects();
    const articles = await getAllPublishedArticles();

    const articlesMap: Sitemap = articles.map(({ slug }) => ({ url: `https://0xpalu.co${getBlogLink(slug)}`, lastModified: new Date() }));
    const projectsMap: Sitemap = projects.map(({ slug }) => ({ url: `https://0xpalu.co${getProjectLink(slug)}`, lastModified: new Date() }));

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
            url: 'https://0xpalu.co/projects',
            lastModified: new Date(),
        },
        ...projectsMap
    ]
}
