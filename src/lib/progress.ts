/**
 * Progress tracking utilities
 * Calculate and track student leadership development milestones
 */

export interface Milestone {
  id: string
  stage: "FOUNDATIONAL" | "INTERMEDIATE" | "ADVANCED"
  name: string
  description: string
  required_challenges: number
  required_assessments: number
}

/**
 * Define all milestones in the leadership development journey
 */
export const MILESTONES: Milestone[] = [
  // Foundational Stage
  {
    id: "found_1",
    stage: "FOUNDATIONAL",
    name: "Self-Awareness",
    description: "Understand your own leadership strengths and weaknesses",
    required_challenges: 2,
    required_assessments: 1,
  },
  {
    id: "found_2",
    stage: "FOUNDATIONAL",
    name: "Basic Communication",
    description: "Develop clear and effective communication skills",
    required_challenges: 2,
    required_assessments: 1,
  },
  {
    id: "found_3",
    stage: "FOUNDATIONAL",
    name: "Teamwork Fundamentals",
    description: "Learn to collaborate effectively in small groups",
    required_challenges: 2,
    required_assessments: 1,
  },
  
  // Intermediate Stage
  {
    id: "inter_1",
    stage: "INTERMEDIATE",
    name: "Decision Making",
    description: "Make sound decisions with available information",
    required_challenges: 3,
    required_assessments: 2,
  },
  {
    id: "inter_2",
    stage: "INTERMEDIATE",
    name: "Team Leadership",
    description: "Guide a team toward goals and manage dynamics",
    required_challenges: 3,
    required_assessments: 2,
  },
  {
    id: "inter_3",
    stage: "INTERMEDIATE",
    name: "Problem Solving",
    description: "Identify and resolve complex team problems",
    required_challenges: 3,
    required_assessments: 2,
  },
  
  // Advanced Stage
  {
    id: "adv_1",
    stage: "ADVANCED",
    name: "Strategic Thinking",
    description: "Develop long-term vision and strategy",
    required_challenges: 4,
    required_assessments: 3,
  },
  {
    id: "adv_2",
    stage: "ADVANCED",
    name: "Organizational Leadership",
    description: "Lead across multiple teams and departments",
    required_challenges: 4,
    required_assessments: 3,
  },
  {
    id: "adv_3",
    stage: "ADVANCED",
    name: "Innovation & Change",
    description: "Drive innovation and manage organizational change",
    required_challenges: 4,
    required_assessments: 3,
  },
]

/**
 * Get all milestones for a specific stage
 */
export function getMilestonesByStage(stage: string): Milestone[] {
  return MILESTONES.filter(m => m.stage === stage)
}

/**
 * Calculate progress percentage for a user
 * @returns Progress 0-100
 */
export function calculateProgressPercentage(
  completed: number,
  total: number
): number {
  if (total === 0) return 0
  return Math.round((completed / total) * 100)
}

/**
 * Determine next recommended stage based on current progress
 */
export function getNextStage(
  currentStage: string,
  completedMilestones: number
): "FOUNDATIONAL" | "INTERMEDIATE" | "ADVANCED" | null {
  const foundationalMilestones = getMilestonesByStage("FOUNDATIONAL").length
  const intermediateMilestones = getMilestonesByStage("INTERMEDIATE").length
  
  if (currentStage === "FOUNDATIONAL" && completedMilestones >= foundationalMilestones) {
    return "INTERMEDIATE"
  }
  
  if (currentStage === "INTERMEDIATE" && completedMilestones >= intermediateMilestones) {
    return "ADVANCED"
  }
  
  return null
}

/**
 * Calculate time to next milestone
 */
export function estimateTimeToMilestone(
  challengesPerWeek: number,
  challengesNeeded: number
): number {
  if (challengesPerWeek === 0) return Infinity
  return Math.ceil(challengesNeeded / challengesPerWeek)
}
