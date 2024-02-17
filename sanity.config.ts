/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { DRAFT_MODE_ROUTE, apiVersion, dataset, projectId } from './sanity/env'
import { schema } from './sanity/schema'

import settingsType from './sanity/schemas/settings'
import {
  about,
  blog,
  contact,
  home,
  process,
  work,
} from './sanity/schemas/pages'

import { locate } from './sanity/plugins/locate'
import { previewDocumentNode } from './sanity/plugins/previewPane'

import {
  singletonOptions,
  singletonStructure,
} from './sanity/plugins/singleton'

import { presentationTool } from 'sanity/presentation'
import { markdownSchema } from 'sanity-plugin-markdown'

const title = 'CMS Dashboard'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  title,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    structureTool({
      structure: singletonStructure([
        home,
        about,
        blog,
        contact,
        process,
        work,
        settingsType,
      ]),
      defaultDocumentNode: previewDocumentNode(),
    }),

    presentationTool({
      locate,
      previewUrl: {
        draftMode: {
          enable: DRAFT_MODE_ROUTE,
        },
      },
    }),

    // Configures the global "new document" button, and document actions, to suit the Settings document singleton
    // settingsPlugin({ type: settingsType.name }),
    singletonOptions({ type: home.name }),
    singletonOptions({ type: about.name }),
    singletonOptions({ type: blog.name }),
    singletonOptions({ type: contact.name }),
    singletonOptions({ type: process.name }),
    singletonOptions({ type: work.name }),
    singletonOptions({ type: settingsType.name }),

    // Markdown content type
    markdownSchema(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})
