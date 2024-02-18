import { defineField, defineType } from 'sanity'
import { MdOutlineCategory } from 'react-icons/md'

export default defineType({
  name: 'category',
  title: 'Categories',
  type: 'document',
  icon: MdOutlineCategory,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
})
