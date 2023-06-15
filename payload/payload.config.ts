import path from 'path';
import { buildConfig } from 'payload/config'

export default buildConfig({
  collections: [
    {
      slug: 'links', 
      fields: [{name: 'title', type: 'text', required: true}, {name: 'href', type: 'text', required: true}], 
      hooks: {
        afterChange: [() => {
          console.log('revalidate: ', process.env.BASE_URL + '/api/revalidate')
          fetch(process.env.BASE_URL + '/api/revalidate')
        }]
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
