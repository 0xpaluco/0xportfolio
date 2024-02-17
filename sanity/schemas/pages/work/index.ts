import { defineField, defineType } from 'sanity'
import { IoMdCodeWorking } from "react-icons/io";

export default defineType({
  name: 'work',
  title: 'Work Page',
  type: 'document',
  icon: IoMdCodeWorking,
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
