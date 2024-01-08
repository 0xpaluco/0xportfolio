import { Category } from '@lib/types/cms'
import { Client } from '@notionhq/client'
import { NotionToMarkdown } from 'notion-to-md'

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})
const n2m = new NotionToMarkdown({ notionClient: notion })

export const getCategories = async (relations: any[]) => {
  let categories: Category[] = []
  for (let i = 0; i < relations.length; i++) {
    const relation = relations[i]
    const cat = await notion.pages.retrieve({ page_id: relation.id })
    categories.push(getCategoryPageMetaData(cat))
  }
  return categories
}

const getCategoryPageMetaData = (category) => {
  // console.log(category)
  return {
    id: category.id,
    title: category.properties.Name.title[0]?.plain_text,
    slug: category.properties.Slug?.rich_text[0]?.plain_text,
    description: category.properties.Description.rich_text[0]?.plain_text,
  } as Category
}

export const getAllCategories = async (page_size: number = 100) => {
  const categories = await notion.databases.query({
    database_id: process.env.NOTION_CATEGORIES_ID!,
    page_size,
  })
  const allCategories = categories.results
  const categoryList: Category[] = []
  for (let i = 0; i < allCategories.length; i++) {
    const category = allCategories[i]
    categoryList.push(getCategoryPageMetaData(category))
  }
  return categoryList
}

export const categoryBySlug = async (slug: string) => {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_CATEGORIES_ID!,
    filter: {
      property: 'Slug',
      formula: {
        string: {
          equals: slug,
        },
      },
    },
  })

  const category = response.results[0]
  const metadata = getCategoryPageMetaData(category)
  const mdblocks = await n2m.pageToMarkdown(category.id)
  const content = n2m.toMarkdownString(mdblocks)

  return {
    ...metadata,
    content: content.parent,
  } as Category
}
