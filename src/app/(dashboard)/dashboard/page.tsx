import { Button } from '@/components/ui/button'

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold">Welcome to LeadMe</h2>
        <p className="text-muted-foreground">
          Your journey to becoming a great leader starts here.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 border rounded-lg">
          <h3 className="font-medium">Progress</h3>
          <p className="text-sm text-muted-foreground">Track your leadership development</p>
        </div>
        <div className="p-4 border rounded-lg">
          <h3 className="font-medium">Challenges</h3>
          <p className="text-sm text-muted-foreground">Complete hands-on challenges</p>
        </div>
        <div className="p-4 border rounded-lg">
          <h3 className="font-medium">Teams</h3>
          <p className="text-sm text-muted-foreground">Collaborate with your team</p>
        </div>
      </div>

      <Button>Get Started</Button>
    </div>
  )
}