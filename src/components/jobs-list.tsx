import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, DollarSign, ExternalLink } from "lucide-react"
import Link from "next/link"

interface Job {
  id: string
  title: string
  client: string
  deadline: string
  progress: number
  payment: string
  status: "pending" | "in-progress" | "completed"
}

interface JobsListProps {
  jobs: Job[]
}

export default function JobsList({ jobs }: JobsListProps) {
  return (
    <div className="space-y-4">
      {jobs.map((job) => (
        <Card key={job.id}>
          <CardContent className="p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold">{job.title}</h3>
                  {job.status === "pending" && (
                    <Badge variant="outline" className="text-yellow-500 border-yellow-500">
                      Pending
                    </Badge>
                  )}
                  {job.status === "in-progress" && (
                    <Badge variant="outline" className="text-blue-500 border-blue-500">
                      In Progress
                    </Badge>
                  )}
                  {job.status === "completed" && (
                    <Badge variant="outline" className="text-green-500 border-green-500">
                      Completed
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">Client: {job.client}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{job.deadline}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <DollarSign className="h-3 w-3" />
                    <span>{job.payment}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                {job.status === "in-progress" && (
                  <div className="flex flex-col gap-1 w-32">
                    <div className="flex items-center justify-between text-xs">
                      <span>Progress</span>
                      <span>{job.progress}%</span>
                    </div>
                    <Progress value={job.progress} className="h-2" />
                  </div>
                )}
                <Link href={`/dashboard/jobs/${job.id}`}>
                  <Button variant="outline" size="sm" className="gap-1">
                    <ExternalLink className="h-3 w-3" />
                    Details
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
