import { defineField, defineType } from 'sanity'
import { MdContactPage } from "react-icons/md";

export default defineType({
  name: 'contact',
  title: 'Contact Page',
  type: 'document',
  icon: MdContactPage,
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
      name: 'eventUrl',
      title: 'Calendly Event Url',
      type: 'url',
      validation: (rule) => rule.required(),
    }),
  ],
})
