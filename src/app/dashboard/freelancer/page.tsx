import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DollarSign, FileText, MessageSquare, Briefcase, BarChart3 } from "lucide-react"
import Link from "next/link"
import DashboardLayout from "@/components/dashboard/dashboard-layout"

export default function FreelancerDashboard() {
    return (
        <DashboardLayout>
            <div className="w-full max-w-full">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col md:flex-row gap-4 justify-between">
                        <div>
                            <h1 className="text-4xl font-bold tracking-tight">Freelancer Dashboard</h1>
                            <p className="text-xl text-muted-foreground mt-2">
                                Welcome back, Alex! Here's an overview of your freelance work.
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <Button variant="outline" className="gap-2 h-12 text-base">
                                <DollarSign className="h-5 w-5" />
                                <span>Balance: $2,450</span>
                            </Button>
                            <Link href="/marketplace">
                                <Button className="bg-nexapurple-700 hover:bg-nexapurple-800 h-12 text-base">Find Jobs</Button>
                            </Link>
                        </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-base font-medium">Active Jobs</CardTitle>
                                <Briefcase className="h-5 w-5 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-3xl font-bold">4</div>
                                <p className="text-sm text-muted-foreground">2 due this week</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-base font-medium">Proposals</CardTitle>
                                <FileText className="h-5 w-5 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-3xl font-bold">7</div>
                                <p className="text-sm text-muted-foreground">3 awaiting response</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-base font-medium">Messages</CardTitle>
                                <MessageSquare className="h-5 w-5 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-3xl font-bold">12</div>
                                <p className="text-sm text-muted-foreground">5 unread</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-base font-medium">Earnings</CardTitle>
                                <DollarSign className="h-5 w-5 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-3xl font-bold">$8,450</div>
                                <p className="text-sm text-muted-foreground">+$1,200 this month</p>
                            </CardContent>
                        </Card>
                    </div>

                    <Tabs defaultValue="active" className="w-full">
                        <TabsList className="h-12">
                            <TabsTrigger value="active" className="text-base data-[state=active]:bg-nexapurple-700">
                                Active Jobs
                            </TabsTrigger>
                            <TabsTrigger value="proposals" className="text-base data-[state=active]:bg-nexapurple-700">
                                Proposals
                            </TabsTrigger>
                            <TabsTrigger value="completed" className="text-base data-[state=active]:bg-nexapurple-700">
                                Completed
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value="active" className="space-y-6 mt-6">
                            <div className="grid gap-6">
                                {[1, 2, 3, 4].map((i) => (
                                    <Card key={i}>
                                        <CardContent className="p-6">
                                            <div className="flex flex-col md:flex-row justify-between gap-4">
                                                <div className="space-y-2">
                                                    <div className="flex items-center gap-2">
                                                        <h3 className="text-xl font-medium">DeFi Dashboard Development</h3>
                                                        <Badge className="bg-nexapurple-700">In Progress</Badge>
                                                    </div>
                                                    <p className="text-muted-foreground">Client: CryptoTech Solutions</p>
                                                    <div className="flex gap-2">
                                                        <Badge variant="outline">React</Badge>
                                                        <Badge variant="outline">Web3</Badge>
                                                        <Badge variant="outline">TypeScript</Badge>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-2 min-w-[180px]">
                                                    <div className="text-sm text-muted-foreground">Due in 5 days</div>
                                                    <div className="font-medium">$1,200</div>
                                                    <Progress value={65} className="h-2" />
                                                    <div className="text-xs text-right">65% completed</div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </TabsContent>
                        <TabsContent value="proposals" className="space-y-6 mt-6">
                            <div className="grid gap-6">
                                {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                                    <Card key={i}>
                                        <CardContent className="p-6">
                                            <div className="flex flex-col md:flex-row justify-between gap-4">
                                                <div className="space-y-2">
                                                    <h3 className="text-xl font-medium">Smart Contract Development</h3>
                                                    <p className="text-muted-foreground">Client: BlockChain Ventures</p>
                                                    <div className="flex gap-2">
                                                        <Badge variant="outline">Solidity</Badge>
                                                        <Badge variant="outline">Ethereum</Badge>
                                                        <Badge variant="outline">DeFi</Badge>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-2 min-w-[180px]">
                                                    <div className="text-sm text-muted-foreground">Submitted 3 days ago</div>
                                                    <div className="font-medium">$2,500 (Proposed)</div>
                                                    <Badge variant="outline">Awaiting Response</Badge>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
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
                                                        <h3 className="text-xl font-medium">NFT Marketplace UI Design</h3>
                                                        <Badge className="bg-green-600">Completed</Badge>
                                                    </div>
                                                    <p className="text-muted-foreground">Client: Digital Collectibles Inc.</p>
                                                    <div className="flex gap-2">
                                                        <Badge variant="outline">UI/UX</Badge>
                                                        <Badge variant="outline">NFT</Badge>
                                                        <Badge variant="outline">Figma</Badge>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-2 min-w-[180px]">
                                                    <div className="text-sm text-muted-foreground">Completed on Apr 15</div>
                                                    <div className="font-medium">$1,800 (Paid)</div>
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
                                <CardTitle className="text-xl">Earnings Overview</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="h-[300px] flex items-center justify-center">
                                    <BarChart3 className="h-16 w-16 text-muted-foreground" />
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-xl">Skill Endorsements</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-5">
                                    <div>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-base">React</span>
                                            <span className="text-base">24 endorsements</span>
                                        </div>
                                        <Progress value={80} className="h-3" />
                                    </div>
                                    <div>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-base">Solidity</span>
                                            <span className="text-base">18 endorsements</span>
                                        </div>
                                        <Progress value={60} className="h-3" />
                                    </div>
                                    <div>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-base">Web3.js</span>
                                            <span className="text-base">15 endorsements</span>
                                        </div>
                                        <Progress value={50} className="h-3" />
                                    </div>
                                    <div>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-base">TypeScript</span>
                                            <span className="text-base">21 endorsements</span>
                                        </div>
                                        <Progress value={70} className="h-3" />
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
