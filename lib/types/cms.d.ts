export type Article = {
    id: string
    title: string
    slug: string
    tags: string[]
    summary: string
    banner: string
    content?: string
    date: Date
}