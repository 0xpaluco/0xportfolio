import { defineField, defineType } from 'sanity'
import { TfiGallery } from 'react-icons/tfi'

export default defineType({
  name: 'gallery',
  type: 'object',
  title: 'Gallery',
  icon: TfiGallery,
  fields: [
    {
      name: 'images',
      type: 'array',
      of: [
        defineField({
          name: 'image',
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
              icon: TfiGallery,
            },
          ],
        }),
      ],
      options: {
        layout: 'grid',
      },
    },
  ],
})
