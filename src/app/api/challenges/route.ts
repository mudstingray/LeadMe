/**
 * GET /api/challenges - Get all challenges
 * POST /api/challenges - Create new challenge (admin only)
 */

import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/db"
import { ChallengeSchema } from "@/lib/validations"

/**
 * GET - Retrieve all challenges
 * Query params:
 *   - difficulty: FOUNDATIONAL | INTERMEDIATE | ADVANCED
 *   - type: INDIVIDUAL | TEAM
 *   - skip: number (pagination)
 *   - take: number (pagination)
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    
    const difficulty = searchParams.get("difficulty")
    const type = searchParams.get("type")
    const skip = parseInt(searchParams.get("skip") || "0")
    const take = parseInt(searchParams.get("take") || "10")

    const where: any = {}
    if (difficulty) where.difficulty = difficulty
    if (type) where.type = type

    const challenges = await prisma.challenge.findMany({
      where,
      skip,
      take,
      include: {
        participants: true,
      },
    })

    return NextResponse.json(challenges)
  } catch (error) {
    console.error("Error fetching challenges:", error)
    return NextResponse.json(
      { error: "Failed to fetch challenges" },
      { status: 500 }
    )
  }
}

/**
 * POST - Create new challenge (admin only)
 * Body: { title, description, type, difficulty, content }
 */
export async function POST(request: NextRequest) {
  try {
    // TODO: Check user is admin
    // const session = await getSession()
    // if (session?.user?.role !== 'ADMIN') {
    //   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    // }

    const body = await request.json()
    const validatedData = ChallengeSchema.parse(body)

    const challenge = await prisma.challenge.create({
      data: validatedData,
    })

    return NextResponse.json(challenge, { status: 201 })
  } catch (error) {
    console.error("Error creating challenge:", error)
    return NextResponse.json(
      { error: "Failed to create challenge" },
      { status: 500 }
    )
  }
}
