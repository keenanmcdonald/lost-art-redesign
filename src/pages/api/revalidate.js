export default async function handler(req, res) {
  const path = req.query.path
  await res.revalidate("/archive")
  return res.json({ revalidate: true })
}
