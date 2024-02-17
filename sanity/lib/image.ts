import createImageUrlBuilder from '@sanity/image-url'
import type { Image } from 'sanity'

import { dataset, projectId } from '../env'

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
})

export const urlForImage = (source: Image) => {
  return imageBuilder
    ?.image(source)
    .auto('format')
    .fit('max')
    .quality(100)
    .url()
}

export const urlForImageSqr = (source: Image) => {
  return imageBuilder
    ?.image(source)
    .auto('format')
    .fit('max')
    .quality(100)
    .width(500)
    .height(500)
    .url()
}
