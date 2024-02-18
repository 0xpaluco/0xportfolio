import { defineField, defineType } from 'sanity'
import { FaEnvelope } from 'react-icons/fa'

export default defineType({
  name: 'form',
  type: 'object',
  icon: FaEnvelope,
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
    }),
    defineField({
      name: 'label',
      type: 'string',
    }),
    defineField({
      name: 'form',
      type: 'string',
      description: 'Select form type',
      options: {
        list: ['newsletter', 'register', 'contact'],
      },
    }),
  ],
  preview: {
    select: {
      title: 'form',
    },
    prepare({ title }) {
      return {
        title: title || 'Untitled',
        subtitle: 'Form',
        media: FaEnvelope,
      }
    },
  },
})
