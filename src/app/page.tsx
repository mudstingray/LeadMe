import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-black dark:to-gray-900">
      <header className="border-b bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400">
            LeadMe
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Develop leadership skills through experiential learning
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Welcome to LeadMe
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            The program helping students become great leaders through hands-on challenges,
            team collaboration, and continuous growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>📊 Track Progress</CardTitle>
              <CardDescription>Monitor your leadership development</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Follow your journey through foundational, intermediate, and advanced leadership stages.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>🎯 Complete Challenges</CardTitle>
              <CardDescription>Hands-on learning experiences</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Engage in real-world challenges that develop critical leadership skills.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>👥 Collaborate with Teams</CardTitle>
              <CardDescription>Learn together, grow together</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Work with peers in team-based challenges and build collaboration skills.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white dark:bg-gray-950 rounded-lg p-8 mb-12">
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Getting Started</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">For Students</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Sign up and begin your leadership journey. Complete challenges, earn badges, and track your progress.
              </p>
              <Button asChild>
                <Link href="/dashboard">Go to Dashboard</Link>
              </Button>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">For Administrators</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Manage content, create challenges, and track student progress across your program.
              </p>
              <Button asChild variant="outline">
                <Link href="/admin">Admin Panel</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            Learn More About the LeadMe Structure
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Check out the STRUCTURE.md file in the web directory for detailed documentation.
          </p>
        </div>
      </main>

      <footer className="bg-white dark:bg-gray-950 border-t mt-16">
        <div className="container mx-auto px-4 py-8 text-center text-gray-600 dark:text-gray-400">
          <p>&copy; 2026 LeadMe. Helping students become great leaders.</p>
        </div>
      </footer>
    </div>
  )
}
