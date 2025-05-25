"use client"


import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ChevronRight,ArrowRight , Clock, MapPin, Briefcase } from "lucide-react"
import { useRouter } from "next/navigation"
const featuredJobs = [
  {
    id: 1,
    title: "Blockchain Developer",
    company: "DeFi Innovations",
    location: "Remote",
    type: "Contract",
    hours: "40 hr/Wk",
    description:
      "We are looking for an experienced blockchain developer with expertise in Solidity and smart contract development. You'll be working on cutting-edge DeFi protocols.",
    skills: ["Solidity", "Ethereum", "Smart Contracts", "DeFi"],
    salary: "$70-90k",
  },
  {
    id: 2,
    title: "Full-stack Web3 Developer",
    company: "Crypto Exchange",
    location: "Full-time",
    type: "Contract",
    hours: "40 hr/Wk",
    description:
      "Join our team to build the next generation of decentralized applications. Experience with React, Node.js, and blockchain technologies required.",
    skills: ["React", "Node.js", "Web3.js", "TypeScript"],
    salary: "$80-100k",
  },
  {
    id: 3,
    title: "NFT Project Manager",
    company: "ArtBlock Chain",
    location: "Remote",
    type: "Contract",
    hours: "30 hr/Wk",
    description:
      "Lead our NFT marketplace development from concept to launch. You'll work with artists, developers, and marketing teams to create a successful platform.",
    skills: ["Project Management", "NFTs", "Marketing", "Blockchain"],
    salary: "$65-85k",
  },
]

export function Jobs() {
  const router = useRouter()
  return (
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-nexapurple-100 px-3 py-1 text-sm dark:bg-nexapurple-900/30">
                Explore Opportunities
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Discover a world of opportunity</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Find blockchain and Web3 jobs from companies worldwide
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 flex space-x-2 z-10">
              <Button variant="outline" size="icon" className="rounded-full bg-white dark:bg-gray-900 shadow-md">
                <ChevronRight className="h-4 w-4 rotate-180" />
                <span className="sr-only">Previous</span>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full bg-white dark:bg-gray-900 shadow-md">
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Next</span>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {featuredJobs.map((job) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden hover:shadow-md transition-all duration-200 h-full flex flex-col">
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold">{job.title}</h3>
                          <p className="text-gray-500 dark:text-gray-400">{job.company}</p>
                        </div>
                        <Avatar className="h-10 w-10 border border-gray-200 dark:border-gray-800">
                          <AvatarFallback className="bg-nexapurple-100 text-nexapurple-700 dark:bg-nexapurple-900 dark:text-nexapurple-300">
                            {job.company.substring(0, 2)}
                          </AvatarFallback>
                        </Avatar>
                      </div>

                      <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{job.description}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {job.skills.map((skill, index) => (
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
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <Briefcase className="h-4 w-4 mr-1 text-gray-400" />
                          {job.type}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1 text-gray-400" />
                          {job.hours}
                        </div>
                      </div>
                    </div>

                    <div className="p-4 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
                      <Button
                        className="w-full bg-nexapurple-600 hover:bg-nexapurple-700 text-white"
                        onClick={() => router.push(`/jobs/${job.id}`)}
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center mt-10">
              <Button
                variant="outline"
                className="border-nexapurple-600 text-nexapurple-600 hover:bg-nexapurple-50 dark:border-nexapurple-400 dark:text-nexapurple-400 dark:hover:bg-nexapurple-950/50"
                onClick={() => router.push("/marketplace")}
              >
                View All Jobs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
  )
}
