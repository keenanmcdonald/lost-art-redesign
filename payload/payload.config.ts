import path from 'path';
import { buildConfig } from 'payload/config'
import { Block } from 'payload/types';

const LinkBlock: Block =   {
  slug: 'link',
  interfaceName: 'Link',
  fields: [
  {
    name: 'title',
    type: 'text',
    required: true,
  },
  {
    name: 'url',
    type: 'text',
    required: true
  },
],
}

export default buildConfig({
  collections: [
    {slug: 'merch',
    fields: [
      {
        name: 'name',
        type: 'text',
        required: true,
      },
      {
        name: 'image',
        type: 'upload',
        relationTo: 'images',
        required: true,
      },
      { 
        name: 'description', 
        type: 'richText',
        required: false,
      },
  ]},
  {slug: 'images',
  upload: {
    staticURL: '/images',
    staticDir: 'public/images'
  },
  fields: [    {
    name: 'alt',
    type: 'text',
  },
],
  }
  ],
  globals: [
    {
      slug: 'archive',
      fields:     [{
        name: 'archive', 
        type: 'blocks',
        minRows: 1,
        maxRows: 100,
        blocks: [
          LinkBlock,
        ],
      }],
      hooks: {
        afterChange: [() => fetch(process.env.BASE_URL + '/api/revalidate?' + new URLSearchParams({
          path: '/archive',
      }))],
      }
    }
  ],
  typescript: {
    outputFile: path.resolve(__dirname, '../payload-types.ts'),
  },
});
