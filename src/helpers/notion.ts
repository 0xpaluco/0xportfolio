export const getBlogLink = (slug: string) => {
  return `/blog/${slug}`
}

export const getProjectLink = (slug: string) => {
  return `/project/${slug}`
}


export const getDateStr = (date: string | number | Date) => {
  return new Date(date).toLocaleString('en-US', {
    month: 'long',
    day: '2-digit',
    year: 'numeric',
  })
}
