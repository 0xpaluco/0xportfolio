import { GiNinjaHeroicStance } from 'react-icons/gi'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'hero',
  type: 'object',
  title: 'Hero',
  icon: GiNinjaHeroicStance,
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
    }),
    defineField({
      name: 'subheading',
      type: 'string',
    }),
    defineField({
      name: 'tagline',
      type: 'string',
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
      image: 'image',
    },
    prepare({ title, image }) {
      return {
        title: title || 'Untitled',
        subtitle: 'Hero',
        media: image || GiNinjaHeroicStance,
      }
    },
  },
})
