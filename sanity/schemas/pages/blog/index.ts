import { defineField, defineType } from 'sanity'
import { FaNewspaper } from 'react-icons/fa6'

export default defineType({
  name: 'blog',
  title: 'Blog Page',
  type: 'document',
  icon: FaNewspaper,
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
  ],
})
