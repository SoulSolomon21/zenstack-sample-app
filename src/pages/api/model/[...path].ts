import { NextRequestHandler } from "@zenstackhq/server/next";
import { enhance } from "@zenstackhq/runtime";
import type { NextApiRequest, NextApiResponse } from "next";
import { getServerAuthSession } from "~/server/auth";
import { prisma } from "~/server/db";

async function getPrisma(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerAuthSession({req,res})
  return enhance(prisma, {user: session?.user})
}

export default NextRequestHandler({getPrisma})