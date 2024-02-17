import { type SchemaTypeDefinition } from 'sanity'

// Documents
import {
  authors,
  categories,
  links,
  posts,
  projects,
  promotions,
} from './schemas/documents'

// Pages
import { about, blog, contact, home, process, work } from './schemas/pages'

// Singleton
import settings from './schemas/settings'

// Custom Objects
import {
  formType,
  hero,
  imageGallery,
  textWithIllustration,
  videoType,
} from './schemas/objects'
import {
  processStepType,
  processDeliverableType,
} from './schemas/pages/process'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Pages
    home,
    about,
    blog,
    contact,
    process,
    work,

    // Singleton
    settings,

    // Documents
    authors,
    categories,
    links,
    posts,
    projects,
    promotions,

    // Page Types
    formType,
    hero,
    imageGallery,
    textWithIllustration,
    videoType,
    processStepType,
    processDeliverableType,
  ],
}
