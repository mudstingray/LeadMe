/**
 * GET /api/challenges/[id] - Get specific challenge
 * PUT /api/challenges/[id] - Update challenge (admin only)
 * DELETE /api/challenges/[id] - Delete challenge (admin only)
 */

import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/db"

interface Params {
  params: { id: string }
}

/**
 * GET - Get specific challenge by ID
 */
export async function GET(request: NextRequest, { params }: Params) {
  try {
    const challenge = await prisma.challenge.findUnique({
      where: { id: params.id },
      include: {
        participants: {
          include: {
            user: {
              select: {
                id: true,
                name: true,
                email: true,
              },
            },
          },
        },
      },
    })

    if (!challenge) {
      return NextResponse.json(
        { error: "Challenge not found" },
        { status: 404 }
      )
    }

    return NextResponse.json(challenge)
  } catch (error) {
    console.error("Error fetching challenge:", error)
    return NextResponse.json(
      { error: "Failed to fetch challenge" },
      { status: 500 }
    )
  }
}

/**
 * PUT - Update challenge (admin only)
 */
export async function PUT(request: NextRequest, { params }: Params) {
  try {
    // TODO: Check user is admin
    const body = await request.json()

    const challenge = await prisma.challenge.update({
      where: { id: params.id },
      data: body,
    })

    return NextResponse.json(challenge)
  } catch (error) {
    console.error("Error updating challenge:", error)
    return NextResponse.json(
      { error: "Failed to update challenge" },
      { status: 500 }
    )
  }
}

/**
 * DELETE - Delete challenge (admin only)
 */
export async function DELETE(request: NextRequest, { params }: Params) {
  try {
    // TODO: Check user is admin
    await prisma.challenge.delete({
      where: { id: params.id },
    })

    return NextResponse.json({ message: "Challenge deleted" })
  } catch (error) {
    console.error("Error deleting challenge:", error)
    return NextResponse.json(
      { error: "Failed to delete challenge" },
      { status: 500 }
    )
  }
}
