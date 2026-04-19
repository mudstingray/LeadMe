/**
 * Authentication utilities
 * Manage user sessions, roles, and permissions
 */

import { type NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

/**
 * Role-based permission checker
 * Usage: if (hasRole(session, 'ADMIN')) { ... }
 */
export function hasRole(session: any, role: string): boolean {
  return session?.user?.role === role
}

/**
 * Check if user has any of the specified roles
 * Usage: if (hasAnyRole(session, ['ADMIN', 'MENTOR'])) { ... }
 */
export function hasAnyRole(session: any, roles: string[]): boolean {
  return roles.includes(session?.user?.role)
}

/**
 * NextAuth configuration
 * Configure your auth provider (email, password, OAuth, etc)
 * This is a template - customize for your needs
 */
export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // TODO: Implement your own credential verification
        // This should check against your database (Prisma)
        // Example:
        // const user = await prisma.user.findUnique({
        //   where: { email: credentials?.email }
        // })
        // if (user && comparePassword(credentials?.password, user.password)) {
        //   return { id: user.id, email: user.email, name: user.name, role: user.role }
        // }
        return null
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role
      }
      return session
    },
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
}
