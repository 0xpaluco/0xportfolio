import { defineField, defineType } from 'sanity'
import { PiLinkSimpleBold } from "react-icons/pi";

export default defineType({
  name: 'link',
  title: 'Links',
  type: 'document',
  icon: PiLinkSimpleBold,
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
    }),
    defineField({
      name: 'external',
      title: 'External',
      type: 'boolean',
    }),
  ],
  preview: {
    select: {
      title: 'label',
    },
    prepare({ title }) {
      return {
        title: title || 'Untitled',
        media: PiLinkSimpleBold,
      }
    },
  },
})
