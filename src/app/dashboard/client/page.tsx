import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DollarSign, FileCheck, FileWarning, Wallet, Users, PlusCircle } from "lucide-react"
import Link from "next/link"
import DashboardLayout from "@/components/dashboard/dashboard-layout"
import JobsList from "@/components/jobs-list"

export default function ClientDashboard() {
    return (
        <DashboardLayout>
            <div className="w-full max-w-7xl mx-auto px-4 py-8">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col md:flex-row gap-4 justify-between">
                        <div>
                            <h1 className="text-4xl font-bold tracking-tight">Client Dashboard</h1>
                            <p className="text-xl text-muted-foreground mt-2">
                                Welcome back, NexaTech! Here's an overview of your projects.
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <Button variant="outline" className="gap-2 h-12 text-base">
                                <Wallet className="h-5 w-5" />
                                <span>Balance: $4,500</span>
                            </Button>
                            <Link href="/dashboard/post-job">
                                <Button className="bg-purple-600 hover:bg-purple-700 h-12 text-base">Post a Job</Button>
                            </Link>
                        </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        <Card className="bg-gray-900 border-gray-800">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-base font-medium">Active Projects</CardTitle>
                                <FileCheck className="h-5 w-5 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-3xl font-bold">5</div>
                                <p className="text-sm text-muted-foreground">3 on schedule, 2 delayed</p>
                            </CardContent>
                        </Card>
                        <Card className="bg-gray-900 border-gray-800">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-base font-medium">Open Jobs</CardTitle>
                                <FileWarning className="h-5 w-5 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-3xl font-bold">3</div>
                                <p className="text-sm text-muted-foreground">12 applications received</p>
                            </CardContent>
                        </Card>
                        <Card className="bg-gray-900 border-gray-800">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-base font-medium">Total Spent</CardTitle>
                                <DollarSign className="h-5 w-5 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-3xl font-bold">$12,450</div>
                                <p className="text-sm text-muted-foreground">Last 30 days: $3,200</p>
                            </CardContent>
                        </Card>
                        <Card className="bg-gray-900 border-gray-800">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-base font-medium">Active Freelancers</CardTitle>
                                <Users className="h-5 w-5 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-3xl font-bold">8</div>
                                <p className="text-sm text-muted-foreground">Across 5 projects</p>
                            </CardContent>
                        </Card>
                    </div>

                    <Tabs defaultValue="active" className="w-full">
                        <TabsList className="h-12 bg-gray-800">
                            <TabsTrigger value="active" className="text-base data-[state=active]:bg-purple-600">
                                Active Projects
                            </TabsTrigger>
                            <TabsTrigger value="open" className="text-base data-[state=active]:bg-purple-600">
                                Open Jobs
                            </TabsTrigger>
                            <TabsTrigger value="completed" className="text-base data-[state=active]:bg-purple-600">
                                Completed
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value="active" className="space-y-6 mt-6">
                            <JobsList
                                jobs={[
                                    {
                                        id: "1",
                                        title: "DeFi Dashboard Development",
                                        client: "Your Project",
                                        deadline: "Due in 2 weeks",
                                        progress: 65,
                                        payment: "$4,500",
                                        status: "in-progress",
                                    },
                                    {
                                        id: "2",
                                        title: "Smart Contract Security Audit",
                                        client: "Your Project",
                                        deadline: "Due in 1 week",
                                        progress: 80,
                                        payment: "$3,200",
                                        status: "in-progress",
                                    },
                                    {
                                        id: "3",
                                        title: "Blockchain Integration",
                                        client: "Your Project",
                                        deadline: "Due in 3 weeks",
                                        progress: 30,
                                        payment: "$5,800",
                                        status: "in-progress",
                                    },
                                    {
                                        id: "4",
                                        title: "NFT Marketplace Design",
                                        client: "Your Project",
                                        deadline: "Due in 10 days",
                                        progress: 50,
                                        payment: "$2,400",
                                        status: "in-progress",
                                    },
                                    {
                                        id: "5",
                                        title: "Tokenomics Consultation",
                                        client: "Your Project",
                                        deadline: "Due in 5 days",
                                        progress: 90,
                                        payment: "$1,800",
                                        status: "in-progress",
                                    },
                                ]}
                            />
                        </TabsContent>
                        <TabsContent value="open" className="space-y-6 mt-6">
                            <div className="grid gap-6">
                                <Card className="bg-gray-900 border-gray-800">
                                    <CardContent className="p-6">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className="text-xl font-medium">Frontend Developer for Web3 Project</h3>
                                                <p className="text-muted-foreground mt-1">Posted 3 days ago • 8 applications</p>
                                                <div className="flex gap-2 mt-3">
                                                    <Badge variant="outline" className="bg-gray-800 border-gray-700">
                                                        React
                                                    </Badge>
                                                    <Badge variant="outline" className="bg-gray-800 border-gray-700">
                                                        Web3.js
                                                    </Badge>
                                                    <Badge variant="outline" className="bg-gray-800 border-gray-700">
                                                        TypeScript
                                                    </Badge>
                                                </div>
                                            </div>
                                            <Link href="/dashboard/job/1/applications">
                                                <Button variant="outline" className="bg-gray-800 border-gray-700">
                                                    View Applications
                                                </Button>
                                            </Link>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="bg-gray-900 border-gray-800">
                                    <CardContent className="p-6">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className="text-xl font-medium">Solidity Smart Contract Developer</h3>
                                                <p className="text-muted-foreground mt-1">Posted 5 days ago • 3 applications</p>
                                                <div className="flex gap-2 mt-3">
                                                    <Badge variant="outline" className="bg-gray-800 border-gray-700">
                                                        Solidity
                                                    </Badge>
                                                    <Badge variant="outline" className="bg-gray-800 border-gray-700">
                                                        Ethereum
                                                    </Badge>
                                                    <Badge variant="outline" className="bg-gray-800 border-gray-700">
                                                        DeFi
                                                    </Badge>
                                                </div>
                                            </div>
                                            <Link href="/dashboard/job/2/applications">
                                                <Button variant="outline" className="bg-gray-800 border-gray-700">
                                                    View Applications
                                                </Button>
                                            </Link>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="bg-gray-900 border-gray-800">
                                    <CardContent className="p-6">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className="text-xl font-medium">Blockchain Technical Writer</h3>
                                                <p className="text-muted-foreground mt-1">Posted 1 day ago • 1 application</p>
                                                <div className="flex gap-2 mt-3">
                                                    <Badge variant="outline" className="bg-gray-800 border-gray-700">
                                                        Technical Writing
                                                    </Badge>
                                                    <Badge variant="outline" className="bg-gray-800 border-gray-700">
                                                        Blockchain
                                                    </Badge>
                                                    <Badge variant="outline" className="bg-gray-800 border-gray-700">
                                                        Documentation
                                                    </Badge>
                                                </div>
                                            </div>
                                            <Link href="/dashboard/job/3/applications">
                                                <Button variant="outline" className="bg-gray-800 border-gray-700">
                                                    View Applications
                                                </Button>
                                            </Link>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            <div className="flex justify-center mt-8">
                                <Link href="/dashboard/post-job">
                                    <Button className="bg-purple-600 hover:bg-purple-700 gap-2">
                                        <PlusCircle className="h-5 w-5" />
                                        Post a New Job
                                    </Button>
                                </Link>
                            </div>
                        </TabsContent>
                        <TabsContent value="completed" className="space-y-6 mt-6">
                            <JobsList
                                jobs={[
                                    {
                                        id: "6",
                                        title: "Wallet Integration",
                                        client: "Your Project",
                                        deadline: "Completed on Mar 15",
                                        progress: 100,
                                        payment: "$3,800",
                                        status: "completed",
                                    },
                                    {
                                        id: "7",
                                        title: "Smart Contract Development",
                                        client: "Your Project",
                                        deadline: "Completed on Feb 28",
                                        progress: 100,
                                        payment: "$5,200",
                                        status: "completed",
                                    },
                                    {
                                        id: "8",
                                        title: "Whitepaper Creation",
                                        client: "Your Project",
                                        deadline: "Completed on Feb 10",
                                        progress: 100,
                                        payment: "$2,000",
                                        status: "completed",
                                    },
                                ]}
                            />
                        </TabsContent>
                    </Tabs>

                    <div className="grid gap-6 md:grid-cols-2">
                        <Card className="bg-gray-900 border-gray-800">
                            <CardHeader>
                                <CardTitle className="text-xl">Project Budget Overview</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-5">
                                    <div>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-base">DeFi Dashboard Development</span>
                                            <span className="text-base">$4,500 / $5,000</span>
                                        </div>
                                        <Progress value={90} className="h-3 bg-gray-700" />
                                    </div>
                                    <div>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-base">Smart Contract Security Audit</span>
                                            <span className="text-base">$3,200 / $3,500</span>
                                        </div>
                                        <Progress value={91} className="h-3 bg-gray-700" />
                                    </div>
                                    <div>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-base">Blockchain Integration</span>
                                            <span className="text-base">$2,400 / $5,800</span>
                                        </div>
                                        <Progress value={41} className="h-3 bg-gray-700" />
                                    </div>
                                    <div>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-base">NFT Marketplace Design</span>
                                            <span className="text-base">$1,200 / $2,400</span>
                                        </div>
                                        <Progress value={50} className="h-3 bg-gray-700" />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-gray-900 border-gray-800">
                            <CardHeader>
                                <CardTitle className="text-xl">Top Freelancers</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center">
                                                <span className="font-medium">JS</span>
                                            </div>
                                            <div>
                                                <p className="font-medium">John Smith</p>
                                                <p className="text-sm text-muted-foreground">Smart Contract Developer</p>
                                            </div>
                                        </div>
                                        <Badge className="bg-green-600">5.0 ★</Badge>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                                                <span className="font-medium">AK</span>
                                            </div>
                                            <div>
                                                <p className="font-medium">Anna Kim</p>
                                                <p className="text-sm text-muted-foreground">Frontend Developer</p>
                                            </div>
                                        </div>
                                        <Badge className="bg-green-600">4.9 ★</Badge>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-orange-600 flex items-center justify-center">
                                                <span className="font-medium">MJ</span>
                                            </div>
                                            <div>
                                                <p className="font-medium">Mike Johnson</p>
                                                <p className="text-sm text-muted-foreground">Blockchain Engineer</p>
                                            </div>
                                        </div>
                                        <Badge className="bg-green-600">4.8 ★</Badge>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-pink-600 flex items-center justify-center">
                                                <span className="font-medium">SL</span>
                                            </div>
                                            <div>
                                                <p className="font-medium">Sarah Lee</p>
                                                <p className="text-sm text-muted-foreground">UI/UX Designer</p>
                                            </div>
                                        </div>
                                        <Badge className="bg-green-600">4.7 ★</Badge>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}
