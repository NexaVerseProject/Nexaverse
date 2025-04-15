import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DollarSign, FileCheck, Users, Wallet, PlusCircle } from "lucide-react"
import Link from "next/link"
import DashboardLayout from "@/components/dashboard/dashboard-layout"

export default function BusinessDashboard() {
    return (
        <DashboardLayout>
            <div className="w-full max-w-full">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col md:flex-row gap-4 justify-between">
                        <div>
                            <h1 className="text-4xl font-bold tracking-tight">Business Dashboard</h1>
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
                                <Button className="bg-nexapurple-700 hover:bg-nexapurple-800 h-12 text-base">Post a Job</Button>
                            </Link>
                        </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-base font-medium">Active Projects</CardTitle>
                                <FileCheck className="h-5 w-5 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-3xl font-bold">5</div>
                                <p className="text-sm text-muted-foreground">3 on schedule, 2 delayed</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-base font-medium">Open Jobs</CardTitle>
                                <FileCheck className="h-5 w-5 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-3xl font-bold">3</div>
                                <p className="text-sm text-muted-foreground">12 applications received</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-base font-medium">Total Spent</CardTitle>
                                <DollarSign className="h-5 w-5 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-3xl font-bold">$12,450</div>
                                <p className="text-sm text-muted-foreground">Last 30 days: $3,200</p>
                            </CardContent>
                        </Card>
                        <Card>
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
                        <TabsList className="h-12">
                            <TabsTrigger value="active" className="text-base data-[state=active]:bg-nexapurple-700">
                                Active Projects
                            </TabsTrigger>
                            <TabsTrigger value="open" className="text-base data-[state=active]:bg-nexapurple-700">
                                Open Jobs
                            </TabsTrigger>
                            <TabsTrigger value="completed" className="text-base data-[state=active]:bg-nexapurple-700">
                                Completed
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value="active" className="space-y-6 mt-6">
                            <div className="grid gap-6">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <Card key={i}>
                                        <CardContent className="p-6">
                                            <div className="flex flex-col md:flex-row justify-between gap-4">
                                                <div className="space-y-2">
                                                    <div className="flex items-center gap-2">
                                                        <h3 className="text-xl font-medium">DeFi Dashboard Development</h3>
                                                        <Badge className="bg-nexapurple-700">In Progress</Badge>
                                                    </div>
                                                    <p className="text-muted-foreground">Freelancer: Alex Johnson</p>
                                                    <div className="flex gap-2">
                                                        <Badge variant="outline">React</Badge>
                                                        <Badge variant="outline">Web3</Badge>
                                                        <Badge variant="outline">TypeScript</Badge>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-2 min-w-[180px]">
                                                    <div className="text-sm text-muted-foreground">Due in 2 weeks</div>
                                                    <div className="font-medium">$4,500</div>
                                                    <Progress value={65} className="h-2" />
                                                    <div className="text-xs text-right">65% completed</div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </TabsContent>
                        <TabsContent value="open" className="space-y-6 mt-6">
                            <div className="grid gap-6">
                                {[1, 2, 3].map((i) => (
                                    <Card key={i}>
                                        <CardContent className="p-6">
                                            <div className="flex flex-col md:flex-row justify-between gap-4">
                                                <div className="space-y-2">
                                                    <h3 className="text-xl font-medium">Frontend Developer for Web3 Project</h3>
                                                    <p className="text-muted-foreground">Posted 3 days ago • 8 applications</p>
                                                    <div className="flex gap-2">
                                                        <Badge variant="outline">React</Badge>
                                                        <Badge variant="outline">Web3.js</Badge>
                                                        <Badge variant="outline">TypeScript</Badge>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-2 min-w-[180px]">
                                                    <div className="text-sm text-muted-foreground">Budget: $3,000 - $5,000</div>
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
                        <TabsContent value="completed" className="space-y-6 mt-6">
                            <div className="grid gap-6">
                                {[1, 2, 3].map((i) => (
                                    <Card key={i}>
                                        <CardContent className="p-6">
                                            <div className="flex flex-col md:flex-row justify-between gap-4">
                                                <div className="space-y-2">
                                                    <div className="flex items-center gap-2">
                                                        <h3 className="text-xl font-medium">Wallet Integration</h3>
                                                        <Badge className="bg-green-600">Completed</Badge>
                                                    </div>
                                                    <p className="text-muted-foreground">Freelancer: Sarah Chen</p>
                                                    <div className="flex gap-2">
                                                        <Badge variant="outline">MetaMask</Badge>
                                                        <Badge variant="outline">Web3</Badge>
                                                        <Badge variant="outline">JavaScript</Badge>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-2 min-w-[180px]">
                                                    <div className="text-sm text-muted-foreground">Completed on Mar 15</div>
                                                    <div className="font-medium">$3,800 (Paid)</div>
                                                    <div className="flex items-center gap-1">
                                                        <span className="text-yellow-500">★★★★★</span>
                                                        <span className="text-sm">5.0</span>
                                                    </div>
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
                                <CardTitle className="text-xl">Project Budget Overview</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-5">
                                    <div>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-base">DeFi Dashboard Development</span>
                                            <span className="text-base">$4,500 / $5,000</span>
                                        </div>
                                        <Progress value={90} className="h-3" />
                                    </div>
                                    <div>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-base">Smart Contract Security Audit</span>
                                            <span className="text-base">$3,200 / $3,500</span>
                                        </div>
                                        <Progress value={91} className="h-3" />
                                    </div>
                                    <div>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-base">Blockchain Integration</span>
                                            <span className="text-base">$2,400 / $5,800</span>
                                        </div>
                                        <Progress value={41} className="h-3" />
                                    </div>
                                    <div>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-base">NFT Marketplace Design</span>
                                            <span className="text-base">$1,200 / $2,400</span>
                                        </div>
                                        <Progress value={50} className="h-3" />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-xl">Top Freelancers</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-nexapurple-600 flex items-center justify-center">
                                                    <span className="font-medium">JS</span>
                                                </div>
                                                <div>
                                                    <p className="font-medium">John Smith</p>
                                                    <p className="text-sm text-muted-foreground">Smart Contract Developer</p>
                                                </div>
                                            </div>
                                            <Badge className="bg-green-600">5.0 ★</Badge>
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
