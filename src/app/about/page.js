import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { Text } from 'slate'

export default async function Homepage() {
  const payload = await getPayload({
    config: configPromise,
  })

  const pages = await payload.find({
    collection: 'pages',
  })

  const { name, content } = pages.docs[0]

  return (
    <div>
      <h1>{name}</h1>
      {content.map((block, i) => (
        <p key={i}>{block.children[0].text}</p>
      ))}
    </div>
  )
}
