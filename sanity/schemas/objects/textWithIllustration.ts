import { defineField, defineType } from 'sanity'
import { RiGalleryFill } from 'react-icons/ri'

export default defineType({
  name: 'textWithIllustration',
  type: 'object',
  title: 'Text with Illustration',
  icon: RiGalleryFill,
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
    }),
    defineField({
      name: 'tagline',
      type: 'string',
    }),
    defineField({
      name: 'excerpt',
      type: 'text',
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      tagline: 'tagline',
      image: 'image',
    },
    prepare({ title, image }) {
      return {
        title: title || 'Untitled',
        subtitle: 'Promo',
        media: image,
      }
    },
  },
})
