import { defineField, defineType } from 'sanity'
import { FaWrench } from 'react-icons/fa'

export default defineType({
  name: 'project',
  title: 'Projects',
  type: 'document',
  icon: FaWrench,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.max(96).required(),
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
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' },
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
      ],
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'markdown',
      description: 'A Github flavored markdown field with image uploading',
      options: {
        imageUrl: (imageAsset) => `${imageAsset.url}?w=400&h=400`,
      },
    }),
    defineField({
      name: 'repoUrl',
      title: 'Repo Url',
      type: 'url',
    }),
    defineField({
      name: 'appUrl',
      title: 'App Url',
      type: 'url',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { author } = selection
      return { ...selection, subtitle: author && `by ${author}` }
    },
  },
})
