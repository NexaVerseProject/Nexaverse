"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Search, 
  Plus, 
  Filter, 
  MoreVertical, 
  Briefcase, 
  Users, 
  Clock, 
  MapPin, 
  DollarSign, 
  Eye 
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import DashboardLayout from "@/components/dashboard/dashboard-layout";

// Mock data for jobs - In a real app, this would be fetched from an API
const ALL_JOBS = [
  {
    id: "job-1",
    title: "Senior React Developer for DeFi Project",
    type: "Contract",
    location: "Remote",
    postedDate: "2 days ago",
    applicants: 14,
    views: 342,
    status: "Active",
    budget: "$4,000 - $6,000",
    description: "We are looking for an experienced React developer with Web3 knowledge..."
  },
  {
    id: "job-2",
    title: "Smart Contract Auditor",
    type: "One-time",
    location: "Remote",
    postedDate: "5 days ago",
    applicants: 8,
    views: 189,
    status: "Active",
    budget: "$2,500",
    description: "Need a security expert to audit our ERC-20 token and staking contracts..."
  },
  {
    id: "job-3",
    title: "Blockchain Technical Writer",
    type: "Part-time",
    location: "Remote",
    postedDate: "1 week ago",
    applicants: 26,
    views: 512,
    status: "Closed",
    budget: "$40/hr",
    description: "Looking for a technical writer to document our new protocol specification..."
  },
  {
    id: "job-4",
    title: "NFT Marketplace UI Designer",
    type: "Contract",
    location: "Remote",
    postedDate: "2 weeks ago",
    applicants: 42,
    views: 890,
    status: "Closed",
    budget: "$3,000",
    description: "Redesign our NFT marketplace with a focus on user experience and dark mode..."
  },
  {
    id: "job-5",
    title: "Rust Developer for Solana Program",
    type: "Contract",
    location: "Remote",
    postedDate: "Just now",
    applicants: 0,
    views: 12,
    status: "Draft",
    budget: "$8,000",
    description: "Seeking a Rust expert to build a high-performance trading bot on Solana..."
  }
];

export default function DashboardJobs() {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Filter jobs based on tabs/search
  const activeJobs = ALL_JOBS.filter(job => job.status === "Active");
  const closedJobs = ALL_JOBS.filter(job => job.status === "Closed");
  const draftJobs = ALL_JOBS.filter(job => job.status === "Draft");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-green-500/10 text-green-500 border-green-500/20";
      case "Closed": return "bg-gray-500/10 text-gray-500 border-gray-500/20";
      case "Draft": return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
      default: return "bg-gray-500/10 text-gray-500";
    }
  };

    return (
    <DashboardLayout>
      <div className="flex flex-col gap-6 p-6 min-h-screen bg-background">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Job Management</h1>
            <p className="text-muted-foreground mt-1">
              Manage your job postings, track applicants, and view analytics.
            </p>
          </div>
          <Link href="/dashboard/post-job">
            <Button className="bg-nexapurple-700 hover:bg-nexapurple-800 gap-2 shadow-md transition-all hover:shadow-lg">
              <Plus className="h-4 w-4" /> Post New Job
            </Button>
          </Link>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Active Jobs</CardTitle>
              <Briefcase className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{activeJobs.length}</div>
              <p className="text-xs text-muted-foreground">+1 from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Applicants</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {ALL_JOBS.reduce((acc, job) => acc + job.applicants, 0)}
              </div>
              <p className="text-xs text-muted-foreground">+12 new this week</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Views</CardTitle>
              <Eye className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {ALL_JOBS.reduce((acc, job) => acc + job.views, 0)}
              </div>
              <p className="text-xs text-muted-foreground">+85 this week</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="all" className="w-full">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <TabsList className="grid w-full md:w-auto grid-cols-4 h-10">
              <TabsTrigger value="all">All Jobs</TabsTrigger>
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="closed">Closed</TabsTrigger>
              <TabsTrigger value="drafts">Drafts</TabsTrigger>
            </TabsList>
            
            <div className="flex items-center gap-2 w-full md:w-auto">
              <div className="relative w-full md:w-[300px]">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search jobs..."
                  className="pl-9"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Job List Component */}
          <div className="space-y-4">
            <JobContent value="all" jobs={ALL_JOBS} getStatusColor={getStatusColor} />
            <JobContent value="active" jobs={activeJobs} getStatusColor={getStatusColor} />
            <JobContent value="closed" jobs={closedJobs} getStatusColor={getStatusColor} />
            <JobContent value="drafts" jobs={draftJobs} getStatusColor={getStatusColor} />
          </div>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}

// Helper component to render job lists
function JobContent({ value, jobs, getStatusColor }: { value: string, jobs: any[], getStatusColor: (s: string) => string }) {
  return (
    <TabsContent value={value} className="mt-0">
      {jobs.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12 text-center border rounded-lg bg-muted/10">
          <Briefcase className="h-12 w-12 text-muted-foreground/50 mb-4" />
          <h3 className="text-lg font-semibold">No jobs found</h3>
          <p className="text-muted-foreground max-w-sm mt-2">
            {value === "drafts" 
              ? "You don't have any draft jobs at the moment." 
              : "No jobs match your current filters. Try creating a new job."}
          </p>
          <Link href="/dashboard/post-job" className="mt-6">
            <Button variant="outline">Post a Job</Button>
          </Link>
        </div>
      ) : (
        <div className="grid gap-4">
          {jobs.map((job) => (
            <Card key={job.id} className="overflow-hidden hover:border-nexapurple-500/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center gap-4 justify-between">
                  <div className="space-y-3 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-semibold text-lg hover:text-nexapurple-500 cursor-pointer transition-colors">
                        {job.title}
                      </h3>
                      <Badge variant="outline" className={getStatusColor(job.status)}>
                        {job.status}
                      </Badge>
                    </div>
                    
                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Briefcase className="h-3.5 w-3.5" />
                        {job.type}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <DollarSign className="h-3.5 w-3.5" />
                        {job.budget}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {job.postedDate}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 pt-4 md:pt-0 border-t md:border-t-0">
                    <div className="flex gap-6 mr-4">
                      <div className="text-center">
                        <div className="text-lg font-bold">{job.applicants}</div>
                        <div className="text-xs text-muted-foreground">Applicants</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold">{job.views}</div>
                        <div className="text-xs text-muted-foreground">Views</div>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Link href={`/dashboard/jobs/${job.id}`}>
                        <Button variant="outline" size="sm">
                          Manage
                        </Button>
                      </Link>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem>View Posting</DropdownMenuItem>
                          <DropdownMenuItem>Edit Job</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-red-600">Close Job</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </TabsContent>
  );
}
