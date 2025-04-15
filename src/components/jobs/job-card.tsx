"use client"

import { useRouter } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Briefcase, Clock, MapPin } from "lucide-react"

interface JobCardProps {
  id: number
  title: string
  company: string
  location: string
  type: string
  hours: string
  description: string
  skills: string[]
  salary?: string
}

export function JobCard({ id, title, company, location, type, hours, description, skills, salary }: JobCardProps) {
  const router = useRouter()

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden hover:shadow-md transition-all duration-200 h-full flex flex-col">
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-gray-500 dark:text-gray-400">{company}</p>
          </div>
          <Avatar className="h-10 w-10 border border-gray-200 dark:border-gray-800">
            <AvatarFallback className="bg-nexapurple-100 text-nexapurple-700 dark:bg-nexapurple-900 dark:text-nexapurple-300">
              {company.substring(0, 2)}
            </AvatarFallback>
          </Avatar>
        </div>

        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {skills.map((skill, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="bg-nexapurple-100 text-nexapurple-700 dark:bg-nexapurple-900/30 dark:text-nexapurple-300"
            >
              {skill}
            </Badge>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-2 text-sm text-gray-500 dark:text-gray-400 mt-auto">
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-1 text-gray-400" />
            {location}
          </div>
          <div className="flex items-center">
            <Briefcase className="h-4 w-4 mr-1 text-gray-400" />
            {type}
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1 text-gray-400" />
            {hours}
          </div>
        </div>
      </div>

      <div className="p-4 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
        <Button
          className="w-full bg-nexapurple-600 hover:bg-nexapurple-700 text-white"
          onClick={() => router.push(`/jobs/${id}`)}
        >
          View Details
        </Button>
      </div>
    </div>
  )
}
