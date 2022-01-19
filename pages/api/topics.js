import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async function handle(req, res) {
  const topics = await prisma.topic.findMany()
  res.json(topics)
}