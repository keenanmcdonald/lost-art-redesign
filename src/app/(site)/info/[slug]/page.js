import configPromise from '@payload-config'
import { getPayload } from 'payload'
import RichText from '@/components/RichText'
import { notFound } from 'next/navigation'
import { Typography, Box, Button } from '@mui/material'

export async function generateStaticParams() {
  const payload = await getPayload({
    config: configPromise,
  })
  const { docs } = await payload.find({
    collection: 'pages',
  })

  return docs.map(({ slug }) => ({
    slug,
  }))
}

export default async function InfoPage({ params }) {
  const payload = await getPayload({
    config: configPromise,
  })

  const pages = await payload.find({
    collection: 'pages',
    where: { slug: { equals: params.slug } },
  })

  if (!pages.docs.length) {
    notFound()
  }

  const { title, content } = pages.docs[0]

  return (
    <Box>
      <Typography variant="h1">{title}</Typography>
      <RichText content={content} />
    </Box>
  )
}
