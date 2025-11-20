import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DollarSign, FileCheck, Users, Wallet, BarChart3, PlusCircle } from "lucide-react"
import Link from "next/link"
import DashboardLayout from "@/components/dashboard/dashboard-layout"

export default function JobPosterDashboard() {
    return (
        <DashboardLayout>
            <div className="w-full max-w-full">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col md:flex-row gap-4 justify-between">
                        <div>
                            <h1 className="text-4xl font-bold tracking-tight">Job Poster Dashboard</h1>
                            <p className="text-xl text-muted-foreground mt-2">
                                Welcome back, TechRecruiter! Here&apos;s an overview of your job postings.
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <Button variant="outline" className="gap-2 h-12 text-base">
                                <Wallet className="h-5 w-5" />
                                <span>Balance: $3,200</span>
                            </Button>
                            <Link href="/dashboard/post-job">
                                <Button className="bg-nexapurple-700 hover:bg-nexapurple-800 h-12 text-base">Post a Job</Button>
                            </Link>
                        </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-base font-medium">Active Jobs</CardTitle>
                                <FileCheck className="h-5 w-5 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-3xl font-bold">8</div>
                                <p className="text-sm text-muted-foreground">3 closing this week</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-base font-medium">Total Applications</CardTitle>
                                <FileCheck className="h-5 w-5 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-3xl font-bold">42</div>
                                <p className="text-sm text-muted-foreground">+15 since last week</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-base font-medium">Hiring Budget</CardTitle>
                                <DollarSign className="h-5 w-5 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-3xl font-bold">$18,500</div>
                                <p className="text-sm text-muted-foreground">$7,200 allocated</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-base font-medium">Positions Filled</CardTitle>
                                <Users className="h-5 w-5 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-3xl font-bold">5</div>
                                <p className="text-sm text-muted-foreground">This quarter</p>
                            </CardContent>
                        </Card>
                    </div>

                    <Tabs defaultValue="active" className="w-full">
                        <TabsList className="h-12">
                            <TabsTrigger value="active" className="text-base data-[state=active]:bg-nexapurple-700">
                                Active Jobs
                            </TabsTrigger>
                            <TabsTrigger value="applications" className="text-base data-[state=active]:bg-nexapurple-700">
                                Recent Applications
                            </TabsTrigger>
                            <TabsTrigger value="filled" className="text-base data-[state=active]:bg-nexapurple-700">
                                Filled Positions
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value="active" className="space-y-6 mt-6">
                            <div className="grid gap-6">
                                {[1, 2, 3].map((i) => (
                                    <Card key={i}>
                                        <CardContent className="p-6">
                                            <div className="flex flex-col md:flex-row justify-between gap-4">
                                                <div className="space-y-2">
                                                    <h3 className="text-xl font-medium">Senior Blockchain Developer</h3>
                                                    <p className="text-muted-foreground">Posted 5 days ago • 12 applications</p>
                                                    <div className="flex gap-2">
                                                        <Badge variant="outline">Solidity</Badge>
                                                        <Badge variant="outline">Ethereum</Badge>
                                                        <Badge variant="outline">Smart Contracts</Badge>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-2 min-w-[180px]">
                                                    <div className="text-sm text-muted-foreground">Salary: $120,000 - $150,000</div>
                                                    <Link href="/dashboard/job/1/applications">
                                                        <Button variant="outline" className="w-full">
                                                            View Applications
                                                        </Button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>

                            <div className="flex justify-center mt-8">
                                <Link href="/dashboard/post-job">
                                    <Button className="bg-nexapurple-700 hover:bg-nexapurple-800 gap-2">
                                        <PlusCircle className="h-5 w-5" />
                                        Post a New Job
                                    </Button>
                                </Link>
                            </div>
                        </TabsContent>
                        <TabsContent value="applications" className="space-y-6 mt-6">
                            <div className="space-y-6">
                                {[1, 2, 3].map((i) => (
                                    <Card key={i}>
                                        <CardContent className="p-6">
                                            <div className="flex items-start gap-4">
                                                <div className="w-12 h-12 rounded-full bg-nexapurple-600 flex items-center justify-center flex-shrink-0">
                                                    <span className="font-medium">JS</span>
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex justify-between">
                                                        <div>
                                                            <h3 className="text-lg font-medium">John Smith</h3>
                                                            <p className="text-muted-foreground">Applied for: Senior Blockchain Developer</p>
                                                        </div>
                                                        <Badge className="bg-green-600">95% Match</Badge>
                                                    </div>
                                                    <p className="mt-2 text-sm text-muted-foreground">
                                                        5 years of experience with Solidity and smart contract development. Previously worked at
                                                        Ethereum Foundation.
                                                    </p>
                                                    <div className="flex gap-2 mt-3">
                                                        <Button variant="outline" size="sm">
                                                            View Profile
                                                        </Button>
                                                        <Button size="sm" className="bg-nexapurple-700 hover:bg-nexapurple-800">
                                                            Schedule Interview
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </TabsContent>
                        <TabsContent value="filled" className="space-y-6 mt-6">
                            <div className="grid gap-6">
                                {[1, 2, 3].map((i) => (
                                    <Card key={i}>
                                        <CardContent className="p-6">
                                            <div className="flex flex-col md:flex-row justify-between gap-4">
                                                <div className="space-y-2">
                                                    <div className="flex items-center gap-2">
                                                        <h3 className="text-xl font-medium">Blockchain Security Engineer</h3>
                                                        <Badge className="bg-green-600">Filled</Badge>
                                                    </div>
                                                    <p className="text-muted-foreground">Hired: Michael Chen • Started Apr 10</p>
                                                    <div className="flex gap-2">
                                                        <Badge variant="outline">Security</Badge>
                                                        <Badge variant="outline">Blockchain</Badge>
                                                        <Badge variant="outline">Auditing</Badge>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-2 min-w-[180px]">
                                                    <div className="text-sm text-muted-foreground">Salary: $120,000/yr</div>
                                                    <div className="font-medium">15 total applicants</div>
                                                    <Button variant="outline" size="sm">
                                                        View Details
                                                    </Button>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </TabsContent>
                    </Tabs>

                    <div className="grid gap-6 md:grid-cols-2">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-xl">Application Statistics</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-5">
                                    <div>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-base">Senior Blockchain Developer</span>
                                            <span className="text-base">12 applications</span>
                                        </div>
                                        <Progress value={80} className="h-3" />
                                    </div>
                                    <div>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-base">Web3 Frontend Developer</span>
                                            <span className="text-base">8 applications</span>
                                        </div>
                                        <Progress value={53} className="h-3" />
                                    </div>
                                    <div>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-base">DeFi Product Manager</span>
                                            <span className="text-base">5 applications</span>
                                        </div>
                                        <Progress value={33} className="h-3" />
                                    </div>
                                    <div>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-base">Blockchain QA Engineer</span>
                                            <span className="text-base">7 applications</span>
                                        </div>
                                        <Progress value={47} className="h-3" />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-xl">Hiring Metrics</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-nexapurple-600 flex items-center justify-center">
                                                    <BarChart3 className="h-5 w-5" />
                                                </div>
                                                <div>
                                                    <p className="font-medium">Average Time to Hire</p>
                                                    <p className="text-2xl font-bold">18 days</p>
                                                </div>
                                            </div>
                                            <Badge className="bg-green-600">-3 days</Badge>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}
