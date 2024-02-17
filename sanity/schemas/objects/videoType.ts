import { defineField, defineType } from 'sanity'
import { DocumentVideoIcon } from '@sanity/icons'

export default defineType({
  name: 'video',
  type: 'object',
  icon: DocumentVideoIcon,
  fields: [
    defineField({
      name: 'videoLabel',
      type: 'string',
    }),
    defineField({
      name: 'url',
      type: 'string',
      title: 'URL',
    }),
  ],
  preview: {
    select: {
      title: 'videoLabel',
    },
    prepare({ title }) {
      return {
        title: title || 'Untitled',
        subtitle: 'Form',
        media: DocumentVideoIcon,
      }
    },
  },
})
