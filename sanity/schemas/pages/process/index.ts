import { defineField, defineType } from 'sanity'
import { GrSteps } from "react-icons/gr";

export const processDeliverableType = defineType({
  name: 'deliverable',
  title: 'Deliverables',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
  ],
})

export const processStepType = defineType({
  name: 'step',
  title: 'Step',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'markdown',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Step Image',
      type: 'image',
      description: 'Upload image',
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
      name: 'deliverables',
      title: 'Deliverables',
      type: 'array',
      description: 'Process Steps Deliverables',
      of: [{ type: 'deliverable' }],
    }),
  ],
})

export default defineType({
  name: 'process',
  title: 'Process Page',
  type: 'document',
  icon: GrSteps,
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
    {
      name: 'steps',
      title: 'Steps',
      type: 'array',
      description: 'Process Steps',
      of: [{ type: 'step' }],
      options: {
        collapsed: false,
        collapsible: true,
        columns: 1,
      },
    },
  ],
})
