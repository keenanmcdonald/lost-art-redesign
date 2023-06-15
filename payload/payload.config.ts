import path from 'path';
import { buildConfig } from 'payload/config'

export default buildConfig({
  collections: [
    {
      slug: 'links', 
      fields: [{name: 'title', type: 'text', required: true}, {name: 'href', type: 'text', required: true}], 
      hooks: {
        afterChange: [(doc) => {
          console.log(doc)
          // fetch(process.env.BASE_URL + '/api/revalidate')
          return doc
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
