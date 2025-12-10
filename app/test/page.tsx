import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function TestPage() {
  return (
    <div className="container mx-auto p-6 max-w-4xl">
      {/* Page Header */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-2">GitHub Collaboration Test Page</h1>
        <p className="text-muted-foreground">A simple page for testing team collaboration workflows</p>
      </header>

      {/* Main Content with Tabs */}
      <Tabs defaultValue="welcome" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="welcome">Welcome</TabsTrigger>
          <TabsTrigger value="features">Features</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
        </TabsList>

        {/* Welcome Tab */}
        <TabsContent value="welcome">
          <Card>
            <CardHeader>
              <CardTitle>Welcome to the Test Page</CardTitle>
              <CardDescription>This page is designed for testing GitHub collaboration</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>This simple page can be used by your team to practice:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Creating branches</li>
                <li>Making commits</li>
                <li>Opening pull requests</li>
                <li>Reviewing code changes</li>
                <li>Merging updates</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Features Tab */}
        <TabsContent value="features">
          <Card>
            <CardHeader>
              <CardTitle>Key Features</CardTitle>
              <CardDescription>What makes this a good test page</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold mb-1">Simple Structure</h3>
                  <p className="text-sm text-muted-foreground">Easy to understand code that anyone can modify</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Clear Components</h3>
                  <p className="text-sm text-muted-foreground">Uses standard UI components from the project</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Room to Experiment</h3>
                  <p className="text-sm text-muted-foreground">
                    Plenty of space to add new features and practice collaboration
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Team Tab */}
        <TabsContent value="team">
          <Card>
            <CardHeader>
              <CardTitle>Team Collaboration</CardTitle>
              <CardDescription>Tips for working together</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Here are some things your team can try:</p>
              <div className="space-y-2">
                <p className="text-sm">
                  <strong>Suggestion 1:</strong> jasdalsjdlasdas
                </p>
                <p className="text-sm">
                  <strong>Suggestion 2:</strong> This is a test for github collab
                </p>
                <p className="text-sm">
                  <strong>Suggestion 3:</strong> More tests for github and collab
                </p>
                <p className="text-sm">
                  <strong>Suggestion 4:</strong> My name is Rafael Alvizo
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Footer */}
      <footer className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground">
        <p>Feel free to modify this page as needed for your collaboration tests!</p>
      </footer>
    </div>
  )
}
