import path from 'path';
import { buildConfig } from 'payload/config'
import { revalidatePath } from 'next/cache'


export default buildConfig({
  collections: [
    {
      slug: 'links', 
      fields: [{name: 'title', type: 'text', required: true}, {name: 'href', type: 'text', required: true}], 
      hooks: {
        afterChange: [() => {
          console.log('after change links')
          revalidatePath('/archive')
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
