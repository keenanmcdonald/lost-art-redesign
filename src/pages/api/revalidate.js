export default async function handler(req, res) {
  const path = req.query.path
  console.info({ path })
  await res.revalidate(path)
  return res.json({ revalidate: true })
}
