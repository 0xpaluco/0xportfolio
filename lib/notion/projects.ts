import { Project } from 'lib/types/cms'
import { Client } from '@notionhq/client'
import { NotionToMarkdown } from 'notion-to-md'
import { getTags } from './utils'
import { getCategories } from './categories'

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})
const n2m = new NotionToMarkdown({ notionClient: notion })

const getProjectPageMetaData = async (project) => {
  const cats = await getCategories(project.properties.Categories.relation)
  return {
    id: project.id,
    title: project.properties['Project Name'].title[0].plain_text,
    tags: cats,
    description: project.properties.Description?.rich_text[0]?.plain_text,
    cover: project.cover[`${project.cover.type}`]?.url,
    slug: project.properties.Slug?.rich_text[0]?.plain_text,
    repo: project.properties['Repo Url'].formula.string,
    appUrl: project.properties['App Url'].url,
  } as Project
}

export const getAllProjects = async (page_size: number = 100) => {
  const projects = await notion.databases.query({
    database_id: process.env.NOTION_PROJECTS_DB_ID!,
    filter: {
      and: [
        {
          property: 'Tags',
          multi_select: {
            does_not_contain: 'Client',
          },
        },
        {
          or: [
            {
              property: 'Status',
              status: {
                equals: 'Published',
              },
            },
            {
              property: 'Status',
              status: {
                equals: 'Development',
              },
            },
          ],
        },
      ],
    },
    page_size,
  })
  const allProjects = projects.results
  const projectList: Project[] = []
  for (let i = 0; i < allProjects.length; i++) {
    const project = allProjects[i]
    projectList.push(await getProjectPageMetaData(project))
  }
  return projectList
}

export const projectBySlug = async (slug: string) => {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_PROJECTS_DB_ID!,
    filter: {
      property: 'Slug',
      formula: {
        string: {
          equals: slug,
        },
      },
    },
  })

  const project = response.results[0]
  const metadata = await getProjectPageMetaData(project)
  const mdblocks = await n2m.pageToMarkdown(project.id)
  const content = n2m.toMarkdownString(mdblocks)

  return {
    ...metadata,
    content: content.parent,
  } as Project
}
