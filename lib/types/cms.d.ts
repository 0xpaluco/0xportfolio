export type Article = {
  id: string
  title: string
  slug: string
  keywords: string
  tags: Category[]
  summary: string
  cover: string
  content?: string
  date: string
  author: User
}

export type Project = {
  id: string
  title: string
  slug: string
  tags: Category[]
  description: string
  cover: string
  content?: string
  repo: string
  appUrl?: string
  content?: string
}

export type User = {
  name: string
  avatar_url: string
}

export type Category = {
  id: string
  title: string
  slug: string
  description: string
  content?: string
}
