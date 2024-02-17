import { defineField, defineType } from 'sanity'
import { FaStar } from "react-icons/fa";

export default defineType({
  name: 'promotion',
  type: 'document',
  title: 'Promotions',
  icon: FaStar,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'link',
      type: 'url',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: title || 'Untitled',
        subtitle: 'Promo',
        media: FaStar,
      }
    },
  },
})
