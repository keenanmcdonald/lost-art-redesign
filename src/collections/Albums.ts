import { slugValidator } from '@/helpers/validation'
import type { CollectionConfig } from 'payload'

export const Albums: CollectionConfig = {
  slug: 'albums',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'artist',
      label: 'Artist',
      type: 'text',
      required: true,
    },
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
      validate: slugValidator,
      required: true,
    },
    {
      name: 'catalogNumber',
      label: 'Catalog Number',
      type: 'text',
    },
    {
      name: 'description',
      label: 'Description',
      type: 'richText',
      required: true,
    },
    {
      name: 'cover',
      label: 'Cover',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'product',
      type: 'array',
      label: 'Product',
      labels: {
        singular: 'Product',
        plural: 'Products',
      },
      fields: [
        {
          name: 'format',
          label: 'Format',
          type: 'text',
          required: true,
        },
        {
          name: 'price',
          label: 'Price',
          type: 'number',
          required: true,
        },
        {
          name: 'paypalId',
          label: 'Paypal ID',
          type: 'text',
          required: true,
        },
        {
          name: 'available',
          label: 'Available',
          type: 'checkbox',
          defaultValue: true,
          required: true,
        },
        {
          name: 'image',
          label: 'Image',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'description',
          label: 'Description',
          type: 'text',
        },
      ],
    },
    {
      name: 'streamingWidget',
      label: 'Streaming Widget',
      type: 'group',
      fields: [
        {
          name: 'provider',
          label: 'Provider',
          type: 'select',
          options: [
            {
              label: 'Spotify',
              value: 'spotify',
            },
            {
              label: 'Bandcamp',
              value: 'bandcamp',
            },
          ],
          required: true,
        },
        {
          name: 'streamingId',
          label: 'ID',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'videoImbed',
      label: 'Video Imbed',
      type: 'text',
    },
  ],
}
