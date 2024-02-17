import { groq } from 'next-sanity'

const postFields = groq`
  _id,
  title,
  publishedAt,
  _updatedAt,
  excerpt,
  content,
  mainImage,
  "slug": slug.current,
  "author": author->{name, image},
  "categories": categories[]->{_id, title, "slug": slug.current}
`

const projectFields = groq`
  _id,
  title,
  publishedAt,
  _updatedAt,
  excerpt,
  content,
  mainImage,
  appUrl,
  repoUrl,
  "slug": slug.current,
  "author": author->{name, image},
  "categories": categories[]->{_id, title, "slug": slug.current}
`

const profileFields = groq`
  _id,
  fullName,
  headline,
  image,
  profileImage {alt, "image": asset->url},
  shortBio,
  location,
  fullBio,
  email,
  "resumeURL": resumeURL.asset->url,
  "links": links[]->{_id, label, url},
  skills
`

export const settingsQuery = groq`*[_type == "settings"][0]`

export const indexQuery = groq`
*[_type == "post"] | order(publishedAt desc, _updatedAt desc) {
  ${postFields}
}`

export const postAndMoreStoriesQuery = groq`
{
  "post": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${postFields}
  },
  "morePosts": *[_type == "post" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
    content,
    ${postFields}
  }
}`

export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`

export const postBySlugQuery = groq`
*[_type == "post" && slug.current == $slug][0] {
  ${postFields}
}
`

export const HOME_POSTS_QUERY = groq`*[_type == "post" && defined(slug.current)][0..2] | order(publishedAt desc, _updatedAt desc) {
  ${postFields}
}`

export const POSTS_QUERY = groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc, _updatedAt desc) {
  ${postFields}
}`

export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0] { ${postFields} }`

/** Projects */
export const HOME_PROJECTS_QUERY = groq`*[_type == "project" && defined(slug.current)][0..2] | order(publishedAt desc, _updatedAt desc) {
  ${projectFields}
}`

export const PROJECTS_QUERY = groq`*[_type == "project" && defined(slug.current)] | order(publishedAt desc, _updatedAt desc) {
  ${projectFields}
}`

export const PROJECT_QUERY = groq`*[_type == "project" && slug.current == $slug][0] { ${projectFields} }`

export const PROFILE_QUERY = groq`*[_type == "profile"][0] { ${profileFields} }`

export const PAGE_BY_SLUG = groq`*[_type == "page" && slug.current == $slug][0]{
  title,
  "slug": slug.current,
  pageBuilder[]{
    // "hero" in an "object" from which we can "pick" fields
    _type == "hero" => {
      _type,
      heading,
      subheading,
      tagline,
      image
    },
    _type == "callToAction" => @-> {
      _type,
      title,
      link
    }
  },
}`

export const PROCESS_QUERY = groq`*[_type == "process"][0]`

const homePageFields = groq`
title,
description,
image,
hero,
"links": links[]->{_id, label, url}
`
export const HOME_PAGE_QUERY = groq`*[_type == "home"][0] { ${homePageFields} }`

export const BLOG_PAGE_QUERY = groq`*[_type == "blog"][0]`

export const WORK_PAGE_QUERY = groq`*[_type == "work"][0]`

export const CONTACT_PAGE_QUERY = groq`*[_type == "contact"][0]`

export interface Author {
  name?: string
  image?: any
}

export interface Post {
  _id: string
  title?: string
  mainImage?: any
  publishedAt: string
  _updatedAt?: string
  excerpt: string
  author?: Author
  slug: string
  content?: string
  categories: Category[]
}

export interface Project {
  _id: string
  title?: string
  mainImage?: any
  publishedAt: string
  _updatedAt?: string
  excerpt: string
  author?: Author
  slug: string
  content?: string
  appUrl?: string
  repoUrl?: string
  categories: Category[]
}

export interface Category {
  _id: string
  title: string
  slug: string
  description: string
}

export interface Settings {
  title?: string
  description?: any[]
  ogImage?: {
    title?: string
    imageUrl?: string
  }
}

export interface SocialLinkType {
  _id: string
  label: string
  url: string
}

export type ProfileType = {
  _id: string
  fullName: string
  headline: string
  image: any
  profileImage: {
    alt: string
    image: any
  }
  shortBio: string
  email: string
  fullBio: string
  location: string
  resumeURL: string
  links: SocialLinkType[]
  skills: string[]
}

export type HeroType = {
  heading: string
  subheading: string
  tagline: string
  mainImage?: any
  _type: string
}

export type HomePageType = {
  title: string
  description: string
  image: any
  hero: HeroType
  links: SocialLinkType[]
}

export type ProcessStepType = {
  title: string
  excerpt: string
  description: string
  image: {
    alt: string
    image: string
  }
  deliverables: {
    title: string
    description: string
  }[]
}

export type ProcessPageType = {
  title: string
  description: string
  image: any
  steps: ProcessStepType[]
}

export type PageDataType = {
  title: string
  description: string
  image: any
}

export type ContactPageDataType = {
  title: string
  description: string
  image: any
  eventUrl: string
}
