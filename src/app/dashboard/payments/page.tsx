"use client";

import DashboardLayout from "@/components/dashboard/dashboard-layout";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Filter,
    Download,
    FileText,
    CreditCard,
    ArrowUpRight,
    ArrowDownLeft,
    CheckCircle,
    Clock,
} from "lucide-react";

export default function PaymentsPage() {
    return (
        <DashboardLayout>
            <div className="flex flex-col gap-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Payments</h1>
                        <p className="text-muted-foreground">
                            Manage your payments and transactions
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <Button variant="outline" className="flex gap-2">
                            <Download className="h-4 w-4" />
                            <span>Export</span>
                        </Button>
                        <Button className="bg-purple-600 hover:bg-purple-700">
                            Add Payment Method
                        </Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-base">Available Balance</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">$4,250.00</div>
                            <p className="text-xs text-muted-foreground">
                                Available for withdrawal
                            </p>
                            <div className="mt-3">
                                <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                                    Withdraw Funds
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-base">Pending Balance</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">$1,750.00</div>
                            <p className="text-xs text-muted-foreground">
                                Will be available in 7 days
                            </p>
                            <div className="mt-3">
                                <Button size="sm" variant="outline">
                                    View Schedule
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-base">Payment Methods</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center gap-2">
                                <CreditCard className="h-5 w-5 text-muted-foreground" />
                                <span>3 Connected Methods</span>
                            </div>
                            <p className="text-xs text-muted-foreground mt-1">
                                Credit card, PayPal, Bank Account
                            </p>
                            <div className="mt-3">
                                <Button size="sm" variant="outline">
                                    Manage Methods
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <Tabs defaultValue="transactions">
                    <TabsList className="grid w-full grid-cols-3 lg:w-[400px] h-15">
                        <TabsTrigger value="transactions">Transactions</TabsTrigger>
                        <TabsTrigger value="invoices">Invoices</TabsTrigger>
                        <TabsTrigger value="methods">Payment Methods</TabsTrigger>
                    </TabsList>
                    <TabsContent value="transactions" className="mt-6 space-y-4">
                        <Card>
                            <CardHeader className="pb-3">
                                <div className="flex justify-between items-center">
                                    <div className="space-y-1">
                                        <CardTitle>Recent Transactions</CardTitle>
                                        <CardDescription>
                                            Your payment activity in the past 30 days
                                        </CardDescription>
                                    </div>
                                    <Button variant="outline" size="sm" className="flex gap-2">
                                        <Filter className="h-4 w-4" />
                                        <span>Filter</span>
                                    </Button>
                                </div>
                            </CardHeader>
                            <CardContent className="p-0">
                                <div className="divide-y">
                                    <TransactionItem
                                        type="incoming"
                                        amount="$1,250.00"
                                        description="Payment for React Dashboard Project"
                                        date="Apr 15, 2023"
                                        status="completed"
                                    />
                                    <TransactionItem
                                        type="outgoing"
                                        amount="$750.00"
                                        description="Withdrawal to Bank Account"
                                        date="Apr 12, 2023"
                                        status="completed"
                                    />
                                    <TransactionItem
                                        type="incoming"
                                        amount="$2,000.00"
                                        description="Payment for Smart Contract Development"
                                        date="Apr 5, 2023"
                                        status="completed"
                                    />
                                    <TransactionItem
                                        type="incoming"
                                        amount="$1,750.00"
                                        description="Payment for UI/UX Design"
                                        date="Mar 28, 2023"
                                        status="pending"
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="invoices" className="mt-6 space-y-4">
                        <Card>
                            <CardHeader>
                                <CardTitle>Recent Invoices</CardTitle>
                                <CardDescription>
                                    Manage and download your invoices
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="p-0">
                                <div className="divide-y">
                                    {[1, 2, 3].map((invoice) => (
                                        <div
                                            key={invoice}
                                            className="flex items-center justify-between p-4"
                                        >
                                            <div className="flex items-center gap-4">
                                                <FileText className="h-8 w-8 text-muted-foreground" />
                                                <div>
                                                    <p className="font-medium">
                                                        Invoice #{invoice + 1000}
                                                    </p>
                                                    <p className="text-sm text-muted-foreground">
                                                        Apr {15 - invoice}, 2023
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <p className="font-medium">
                                                    ${1000 + invoice * 250}.00
                                                </p>
                                                <Button variant="outline" size="sm">
                                                    <Download className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="methods" className="mt-6 space-y-4">
                        <Card>
                            <CardHeader>
                                <CardTitle>Payment Methods</CardTitle>
                                <CardDescription>
                                    Manage your connected payment methods
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="border rounded-lg p-4">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <CreditCard className="h-10 w-10 text-muted-foreground" />
                                            <div>
                                                <p className="font-medium">VISA ending in 4242</p>
                                                <p className="text-sm text-muted-foreground">
                                                    Expires 04/2025
                                                </p>
                                            </div>
                                        </div>
                                        <Badge>Default</Badge>
                                    </div>
                                </div>
                                <div className="border rounded-lg p-4">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <CreditCard className="h-10 w-10 text-muted-foreground" />
                                            <div>
                                                <p className="font-medium">PayPal</p>
                                                <p className="text-sm text-muted-foreground">
                                                    example@email.com
                                                </p>
                                            </div>
                                        </div>
                                        <Button variant="outline" size="sm">
                                            Set Default
                                        </Button>
                                    </div>
                                </div>
                                <div className="border rounded-lg p-4">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <CreditCard className="h-10 w-10 text-muted-foreground" />
                                            <div>
                                                <p className="font-medium">Bank Account</p>
                                                <p className="text-sm text-muted-foreground">
                                                    Wells Fargo ****4567
                                                </p>
                                            </div>
                                        </div>
                                        <Button variant="outline" size="sm">
                                            Set Default
                                        </Button>
                                    </div>
                                </div>

                                <Button className="bg-purple-600 hover:bg-purple-700 w-full">
                                    Add New Payment Method
                                </Button>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </DashboardLayout>
    );
}

interface TransactionItemProps {
    type: "incoming" | "outgoing";
    amount: string;
    description: string;
    date: string;
    status: "pending" | "completed" | "failed";
}

function TransactionItem({ type,amount,description,date,status}: TransactionItemProps) {
    return (
        <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-4">
                <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full ${type === "incoming"
                            ? "bg-green-100 text-green-600"
                            : "bg-orange-100 text-orange-600"
                        } dark:bg-opacity-20`}
                >
                    {type === "incoming" ? (
                        <ArrowDownLeft className="h-5 w-5" />
                    ) : (
                        <ArrowUpRight className="h-5 w-5" />
                    )}
                </div>
                <div>
                    <p className="font-medium">{amount}</p>
                    <p className="text-sm text-muted-foreground">{description}</p>
                </div>
            </div>
            <div className="text-right">
                <p className="text-sm">{date}</p>
                <div className="flex items-center gap-1 text-sm">
                    {status === "completed" ? (
                        <CheckCircle className="h-3 w-3 text-green-500" />
                    ) : status === "pending" ? (
                        <Clock className="h-3 w-3 text-yellow-500" />
                    ) : (
                        <div className="h-3 w-3 rounded-full bg-red-500" />
                    )}
                    <span
                        className={
                            status === "completed"
                                ? "text-green-500"
                                : status === "pending"
                                    ? "text-yellow-500"
                                    : "text-red-500"
                        }
                    >
                        {status.charAt(0).toUpperCase() + status.slice(1)}
                    </span>
                </div>
            </div>
        </div>
    );
}
