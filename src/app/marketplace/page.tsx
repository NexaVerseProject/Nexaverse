import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Briefcase, Clock, DollarSign, Filter, Search } from "lucide-react"
import Link from "next/link"

export default function Marketplace() {
  return (
    <div className="container py-10">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Job Marketplace</h1>
          <p className="text-muted-foreground">Find blockchain and DeFi projects that match your skills</p>
        </div>

        <div className="flex flex-col gap-4 md:flex-row">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search for jobs..." className="w-full bg-background pl-8" />
            </div>
          </div>
          <div className="flex gap-2">
            <Select defaultValue="newest">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="budget-high">Budget: High to Low</SelectItem>
                <SelectItem value="budget-low">Budget: Low to High</SelectItem>
                <SelectItem value="deadline">Deadline: Soonest</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="gap-1">
              <Filter className="h-4 w-4" />
              Filters
            </Button>
          </div>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList>
            <TabsTrigger value="all">All Jobs</TabsTrigger>
            <TabsTrigger value="development">Development</TabsTrigger>
            <TabsTrigger value="design">Design</TabsTrigger>
            <TabsTrigger value="writing">Writing</TabsTrigger>
            <TabsTrigger value="marketing">Marketing</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="space-y-4 mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {jobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
            <div className="flex justify-center">
              <Button variant="outline">Load More Jobs</Button>
            </div>
          </TabsContent>
          <TabsContent value="development" className="space-y-4 mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {jobs
                .filter((job) => job.category === "Development")
                .map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
            </div>
          </TabsContent>
          <TabsContent value="design" className="space-y-4 mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {jobs
                .filter((job) => job.category === "Design")
                .map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
            </div>
          </TabsContent>
          <TabsContent value="writing" className="space-y-4 mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {jobs
                .filter((job) => job.category === "Writing")
                .map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
            </div>
          </TabsContent>
          <TabsContent value="marketing" className="space-y-4 mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {jobs
                .filter((job) => job.category === "Marketing")
                .map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

interface Job {
  id: string
  title: string
  company: string
  location: string
  category: string
  tags: string[]
  budget: string
  deadline: string
  posted: string
  description: string
}

interface JobCardProps {
  job: Job
}

function JobCard({ job }: JobCardProps) {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg">{job.title}</CardTitle>
            <p className="text-sm text-muted-foreground">{job.company}</p>
          </div>
          <Badge className="bg-purple-600">{job.category}</Badge>
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-sm mb-4 line-clamp-3">{job.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {job.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="space-y-2">
          <div className="flex items-center text-sm">
            <DollarSign className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>{job.budget}</span>
          </div>
          <div className="flex items-center text-sm">
            <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>Deadline: {job.deadline}</span>
          </div>
          <div className="flex items-center text-sm">
            <Briefcase className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>Posted: {job.posted}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Link href={`/marketplace/${job.id}`} className="w-full">
          <Button className="w-full bg-purple-600 hover:bg-purple-700">Apply Now</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

const jobs: Job[] = [
  {
    id: "1",
    title: "Smart Contract Developer",
    company: "DeFi Protocol",
    location: "Remote",
    category: "Development",
    tags: ["Solidity", "Ethereum", "Smart Contracts", "DeFi"],
    budget: "$3,000 - $5,000",
    deadline: "2 weeks",
    posted: "2 days ago",
    description:
      "We're looking for an experienced Solidity developer to build and audit smart contracts for our DeFi protocol. You'll be responsible for implementing secure, gas-efficient contracts that interact with our existing ecosystem.",
  },
  {
    id: "2",
    title: "Blockchain Frontend Developer",
    company: "CryptoExchange",
    location: "Remote",
    category: "Development",
    tags: ["React", "Web3.js", "TypeScript", "Blockchain"],
    budget: "$4,000 - $6,000",
    deadline: "1 month",
    posted: "1 week ago",
    description:
      "We need a frontend developer with experience in blockchain applications to build our new exchange interface. You should be familiar with React, Web3.js, and have a good understanding of blockchain concepts.",
  },
  {
    id: "3",
    title: "NFT Marketplace UI Designer",
    company: "ArtChain",
    location: "Remote",
    category: "Design",
    tags: ["UI/UX", "Figma", "NFT", "Web3"],
    budget: "$2,500 - $4,000",
    deadline: "3 weeks",
    posted: "3 days ago",
    description:
      "Design a modern and intuitive UI for our NFT marketplace. The design should be visually appealing, user-friendly, and align with Web3 design principles. Experience with NFT platforms is a plus.",
  },
  {
    id: "4",
    title: "Tokenomics Consultant",
    company: "StartupDAO",
    location: "Remote",
    category: "Writing",
    tags: ["Tokenomics", "Whitepaper", "Economics", "Research"],
    budget: "$5,000 - $8,000",
    deadline: "1 month",
    posted: "5 days ago",
    description:
      "We're seeking a tokenomics expert to design and document our token economic model. You'll work closely with our team to create a sustainable and effective token economy, and produce a comprehensive whitepaper.",
  },
  {
    id: "5",
    title: "Blockchain Marketing Specialist",
    company: "ChainProtocol",
    location: "Remote",
    category: "Marketing",
    tags: ["Marketing", "Growth", "Social Media", "Crypto"],
    budget: "$3,500 - $5,500",
    deadline: "Ongoing",
    posted: "1 day ago",
    description:
      "Develop and execute marketing strategies for our blockchain protocol. You should have experience in crypto marketing, community building, and growth hacking. Knowledge of DeFi and blockchain technology is required.",
  },
  {
    id: "6",
    title: "Solana dApp Developer",
    company: "SolanaVentures",
    location: "Remote",
    category: "Development",
    tags: ["Solana", "Rust", "Blockchain", "Web3"],
    budget: "$6,000 - $9,000",
    deadline: "2 months",
    posted: "4 days ago",
    description:
      "Build a decentralized application on Solana blockchain. Strong knowledge of Rust and Solana's programming model is required. You'll be responsible for both smart contract development and integration with frontend.",
  },
]
