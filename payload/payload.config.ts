import path from 'path';
import { buildConfig } from 'payload/config'

export default buildConfig({
  collections: [
    {
      slug: 'links', 
      fields: [{name: 'title', type: 'text', required: true}, {name: 'href', type: 'text', required: true}], 
      hooks: {
        afterChange: [() => fetch(process.env.BASE_URL + '/api/revalidate?path=/archive')],
        afterDelete: [() => fetch(process.env.BASE_URL + '/api/revalidate?path=/archive')]
      }
    }
  ],
  globals: [
    // Your globals here
  ],
  typescript: {
    outputFile: path.resolve(__dirname, '../payload-types.ts'),
  },
});
