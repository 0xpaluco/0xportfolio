import { defineField, defineType } from 'sanity'
import { HomeIcon } from '@sanity/icons'

export default defineType({
  name: 'home',
  title: 'Home Page',
  type: 'document',
  icon: HomeIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Title of the page',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Description of the page',
      validation: (rule) => rule.required().min(70),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'Upload OG Image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Alt',
          type: 'string',
        },
      ],
    }),
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'hero',
      description: 'Hero for the Home Page',
    }),
    defineField({
      name: 'links',
      title: 'Social Links',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'link' } }],
    }),
  ],
})
