import configPromise from '@payload-config'
import { getPayload } from 'payload'
import RichText from '@/components/RichText'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const payload = await getPayload({
    config: configPromise,
  })
  const { docs } = await payload.find({
    collection: 'albums',
  })

  return docs.map(({ slug }) => ({
    slug,
  }))
}

export default async function InfoPage({ params }) {
  const payload = await getPayload({
    config: configPromise,
  })

  const albums = await payload.find({
    collection: 'albums',
    where: { slug: { equals: params.slug } },
  })

  if (!albums.docs.length) {
    notFound()
  }

  const { title } = albums.docs[0]

  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}
