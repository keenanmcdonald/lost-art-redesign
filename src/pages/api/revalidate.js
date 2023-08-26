export default async function handler(req, res) {
  try {
    await res.revalidate(req.query.path)
    return res.json({ revalidate: true })
  } catch (e) {
    return res.status(500).send("error revalidating")
  }
}
