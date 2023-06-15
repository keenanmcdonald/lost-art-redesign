import { revalidatePath } from "next/cache"

export default async function handler(req, res) {
  const path = req.query.path
  await revalidatePath("/archive")
  return res.json({ revalidate: true })
}
