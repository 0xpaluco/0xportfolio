export type Article = {
    id: string
    title: string
    slug: string
    tags: string[]
    summary: string
    cover: string
    content?: string
    date: Date
}

export type Project = {
    id: string
    title: string
    slug: string
    tags: string[]
    description: string
    cover: string
    content?: string
    repo: string
    appUrl?: string
    content?: string
}