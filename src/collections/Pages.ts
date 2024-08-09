import { slugValidator } from '@/helpers/validation'
import type { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      unique: true,
      validate: slugValidator,
      required: true,
    },
    {
      name: 'content',
      label: 'Content',
      type: 'richText',
    },
  ],
}
