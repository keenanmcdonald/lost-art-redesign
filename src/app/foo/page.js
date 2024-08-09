import configPromise from '@payload-config'
import { getPayload } from 'payload'

export default async function Homepage() {
  const payload = await getPayload({
    config: configPromise,
  })

  const products = await payload.find({
    collection: 'products',
  })

  const { name, description, image } = products.docs[0]

  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
      <img src={image.url} alt={image.alt} />
    </div>
  )
}
