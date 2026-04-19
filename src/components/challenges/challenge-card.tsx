"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface ChallengeCardProps {
  id: string
  title: string
  description?: string
  difficulty: "FOUNDATIONAL" | "INTERMEDIATE" | "ADVANCED"
  type: "INDIVIDUAL" | "TEAM"
  participantCount?: number
  onStart?: () => void
}

export function ChallengeCard({
  id,
  title,
  description,
  difficulty,
  type,
  participantCount = 0,
  onStart,
}: ChallengeCardProps) {
  const difficultyColors = {
    FOUNDATIONAL: "bg-green-100 text-green-800",
    INTERMEDIATE: "bg-yellow-100 text-yellow-800",
    ADVANCED: "bg-red-100 text-red-800",
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
          <Badge className={difficultyColors[difficulty]}>
            {difficulty}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex gap-2">
            <Badge variant="outline">{type}</Badge>
            <Badge variant="secondary">{participantCount} participants</Badge>
          </div>
          <Button onClick={onStart} className="w-full">
            Start Challenge
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
