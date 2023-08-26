export default async function handler(req, res) {
  const path = req.query.path
  console.info("revalidate path: ", path)
  try {
    await res.revalidate(path)
    return res.json({ revalidate: true })
  } catch (e) {
    console.error(e.message)
    return res.status(500).send("error revalidating")
  }
}
