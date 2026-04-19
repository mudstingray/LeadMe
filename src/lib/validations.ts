/**
 * Form validation schemas using Zod
 * Use these to validate user input before saving to database
 */

import { z } from "zod"

// User validation
export const UserSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  role: z.enum(["STUDENT", "MENTOR", "ADMIN"]),
})

export type User = z.infer<typeof UserSchema>

// Challenge validation
export const ChallengeSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().optional(),
  type: z.enum(["INDIVIDUAL", "TEAM"]),
  difficulty: z.enum(["FOUNDATIONAL", "INTERMEDIATE", "ADVANCED"]),
  content: z.string().optional(),
})

export type Challenge = z.infer<typeof ChallengeSchema>

// Team validation
export const TeamSchema = z.object({
  name: z.string().min(2, "Team name must be at least 2 characters"),
})

export type Team = z.infer<typeof TeamSchema>

// Login validation
export const LoginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
})

export type Login = z.infer<typeof LoginSchema>

// Profile update validation
export const ProfileSchema = z.object({
  name: z.string().min(2).optional(),
  email: z.string().email().optional(),
  avatar: z.string().url().optional(),
})

export type Profile = z.infer<typeof ProfileSchema>
