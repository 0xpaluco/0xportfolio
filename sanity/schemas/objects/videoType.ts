import { defineField, defineType } from 'sanity'
import { FaVideo } from "react-icons/fa";

export default defineType({
  name: 'video',
  type: 'object',
  icon: FaVideo,
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
        media: FaVideo,
      }
    },
  },
})
