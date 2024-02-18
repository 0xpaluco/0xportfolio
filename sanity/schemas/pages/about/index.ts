import { defineField, defineType } from 'sanity'
import { FaUser } from 'react-icons/fa'

export default defineType({
  name: 'profile',
  title: 'About Page',
  type: 'document',
  icon: FaUser,
  fields: [
    defineField({
      name: 'fullName',
      title: 'Full Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
      description: 'In one short sentence, what do you do?',
      validation: (Rule) => Rule.required().min(40).max(50),
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
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      description: 'Upload a profile picture',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Alt',
          type: 'string',
        },
      ],
    },
    {
      name: 'shortBio',
      title: 'Short Bio',
      type: 'text',
      rows: 4,
    },
    {
      name: 'email',
      title: 'Email Address',
      type: 'string',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
    },
    {
      name: 'fullBio',
      title: 'Full Bio',
      type: 'markdown',
    },
    {
      name: 'resumeURL',
      title: 'Upload Resume',
      type: 'file',
    },
    defineField({
      name: 'links',
      title: 'Social Links',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'link' } }],
    }),
    {
      name: 'skills',
      title: 'Skills',
      type: 'array',
      description: 'Add a list of skills',
      of: [{ type: 'string' }],
    },
  ],
})
