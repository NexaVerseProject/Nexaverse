"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  ArrowDownUp,
  ArrowUpRight,
  Copy,
  ExternalLink,
  RefreshCw
} from "lucide-react";
import DashboardLayout from "@/components/dashboard/dashboard-layout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import Image from "next/image";

declare global {
  interface Window {
    ethereum?: Record<string, unknown>;
  }
}

export default function WalletPage() {
  const [isConnected, setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const connectWallet = async () => {
    setIsLoading(true);
    try {
      if (window.ethereum) {
        await (window.ethereum as any).request({
          method: "eth_requestAccounts",
        });
        setIsConnected(true);
      } else {
        window.open("https://metamask.io/download/", "_blank");
      }
    } catch (error) {
      // console.error("Error connecting wallet:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row gap-4 justify-between">
          <div>
            <h1 className="text-4xl mb-3 font-bold tracking-tight">Wallet</h1>
            <p className="text-muted-foreground">
              Manage your crypto wallet and NexaPoints
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <RefreshCw className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {!isConnected ? (
          <Card>
            <CardHeader className="text-center gap-3">
              <CardTitle>Connect Your Wallet</CardTitle>
              <CardDescription>
                Connect your wallet to manage your crypto and earn NexaPoints
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center py-6">
              <Button
                variant="default"
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-6 py-3 font-medium"
                onClick={connectWallet}
                disabled={isLoading}
              >
                {isLoading ? "Connecting..." : "Connect Wallet"}
              </Button>
            </CardContent>
          </Card>
        ) : (
          <>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">ETH Balance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1.245 ETH</div>
                  <p className="text-xs text-muted-foreground">
                    ≈ $2,350.45 USD
                  </p>
                  <div className="mt-3 flex gap-2">
                    <Button
                      size="sm"
                      className="bg-purple-600 hover:bg-purple-700 gap-1"
                    >
                      <ArrowDownUp className="h-3 w-3" />
                      Send / Receive
                    </Button>
                    <Button size="sm" variant="outline" className="gap-1">
                      <ExternalLink className="h-3 w-3" />
                      Explorer
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">USDC Balance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">350.00 USDC</div>
                  <p className="text-xs text-muted-foreground">≈ $350.00 USD</p>
                  <div className="mt-3 flex gap-2">
                    <Button
                      size="sm"
                      className="bg-purple-600 hover:bg-purple-700 gap-1"
                    >
                      <ArrowDownUp className="h-3 w-3" />
                      Send / Receive
                    </Button>
                    <Button size="sm" variant="outline" className="gap-1">
                      <ExternalLink className="h-3 w-3" />
                      Explorer
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">NexaPoints</CardTitle>
                  <Badge className="ml-2">Non-transferable</Badge>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1,245 NXP</div>
                  <p className="text-xs text-muted-foreground">
                    Silver Level (500 more to Gold)
                  </p>
                  <div className="mt-3 flex gap-2">
                    <Button
                      size="sm"
                      className="bg-purple-600 hover:bg-purple-700 gap-1"
                    >
                      <ArrowUpRight className="h-3 w-3" />
                      Earn More
                    </Button>
                    <Button size="sm" variant="outline" className="gap-1">
                      <ExternalLink className="h-3 w-3" />
                      Benefits
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="transactions" className="w-full">
              <TabsList className="h-15">
                <TabsTrigger value="transactions">Transactions</TabsTrigger>
                <TabsTrigger value="send">Send</TabsTrigger>
                <TabsTrigger value="receive">Receive</TabsTrigger>
                <TabsTrigger value="rewards">NexaPoints Rewards</TabsTrigger>
              </TabsList>
              <TabsContent value="transactions" className="space-y-4 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Transactions</CardTitle>
                    <CardDescription>
                      View your recent blockchain transactions
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <TransactionItem
                        type="incoming"
                        amount="0.5 ETH"
                        from="0x8F3...B2A1"
                        to="0x71C...8F3E"
                        date="Apr 10, 2025"
                        status="completed"
                        description="Payment for Smart Contract Audit"
                      />
                      <TransactionItem
                        type="outgoing"
                        amount="25 USDC"
                        from="0x71C...8F3E"
                        to="0x3A2...F1D9"
                        date="Apr 8, 2025"
                        status="completed"
                        description="Gas fee reimbursement"
                      />
                      <TransactionItem
                        type="incoming"
                        amount="150 NXP"
                        from="NexaWork"
                        to="0x71C...8F3E"
                        date="Apr 5, 2025"
                        status="completed"
                        description="Job Completion Bonus"
                      />
                      <TransactionItem
                        type="incoming"
                        amount="0.75 ETH"
                        from="0xD4F...E7C2"
                        to="0x71C...8F3E"
                        date="Apr 2, 2025"
                        status="completed"
                        description="Payment for Frontend Development"
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="send" className="space-y-4 mt-6 ">
                <Card>
                  <CardHeader>
                    <CardTitle>Send Crypto</CardTitle>
                    <CardDescription>
                      Send cryptocurrency to another wallet
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="token">Select Token</Label>
                        <Tabs defaultValue="eth" className="w-full">
                          <TabsList className="grid w-full grid-cols-2 h-15">
                            <TabsTrigger value="eth">ETH</TabsTrigger>
                            <TabsTrigger value="usdc">USDC</TabsTrigger>
                          </TabsList>
                          <TabsContent value="eth" className="space-y-4 mt-4">
                            <div className="flex items-center justify-between">
                              <span className="text-sm">
                                Available Balance:
                              </span>
                              <span className="text-sm font-medium">
                                1.245 ETH
                              </span>
                            </div>
                          </TabsContent>
                          <TabsContent value="usdc" className="space-y-4 mt-4">
                            <div className="flex items-center justify-between">
                              <span className="text-sm">
                                Available Balance:
                              </span>
                              <span className="text-sm font-medium">
                                350.00 USDC
                              </span>
                            </div>
                          </TabsContent>
                        </Tabs>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="recipient">Recipient Address</Label>
                        <Input id="recipient" placeholder="0x..." />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="amount">Amount</Label>
                        <Input id="amount" type="number" placeholder="0.00" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="note">Note (Optional)</Label>
                        <Input id="note" placeholder="Payment for..." />
                      </div>
                      <Button className="w-full bg-purple-600 hover:bg-purple-700">
                        Review Transaction
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="receive" className="space-y-4 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Receive Crypto</CardTitle>
                    <CardDescription>
                      Share your address to receive cryptocurrency
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col items-center">
                    <div className="mb-4 bg-muted p-4 rounded-lg">
                      <Image
                        src="/placeholder.svg?height=200&width=200"
                        alt="QR Code"
                        width={192}
                        height={192}
                        className="w-48 h-48"
                      />
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                      <Input
                        value="0x71C7B4aF9C0D3A8508F33E1c109Dd39B8C8F3E"
                        readOnly
                        className="font-mono text-sm"
                      />
                      <Button
                        variant="outline"
                        size="icon"
                        className="shrink-0"
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground text-center">
                      Send only ETH, USDC, or other ERC-20 tokens to this
                      address. Sending other types of tokens may result in
                      permanent loss.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="rewards" className="space-y-4 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>NexaPoints Rewards</CardTitle>
                    <CardDescription>
                      Track your NexaPoints earnings and benefits
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">Current Level: Silver</h3>
                          <p className="text-sm text-muted-foreground">
                            1,245 NXP / 1,750 NXP needed for Gold
                          </p>
                        </div>
                        <Badge className="bg-purple-600">Silver</Badge>
                      </div>

                      <div className="space-y-2">
                        <h4 className="text-sm font-medium">Recent Rewards</h4>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm border-b pb-2">
                            <div className="flex items-center gap-2">
                              <div className="h-2 w-2 rounded-full bg-green-500" />
                              <span>Job Completion Bonus</span>
                            </div>
                            <div>+150 NXP</div>
                          </div>
                          <div className="flex items-center justify-between text-sm border-b pb-2">
                            <div className="flex items-center gap-2">
                              <div className="h-2 w-2 rounded-full bg-blue-500" />
                              <span>5-Star Client Rating</span>
                            </div>
                            <div>+75 NXP</div>
                          </div>
                          <div className="flex items-center justify-between text-sm border-b pb-2">
                            <div className="flex items-center gap-2">
                              <div className="h-2 w-2 rounded-full bg-purple-500" />
                              <span>Early Delivery Bonus</span>
                            </div>
                            <div>+50 NXP</div>
                          </div>
                          <div className="flex items-center justify-between text-sm border-b pb-2">
                            <div className="flex items-center gap-2">
                              <div className="h-2 w-2 rounded-full bg-orange-500" />
                              <span>Weekly Activity Bonus</span>
                            </div>
                            <div>+25 NXP</div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h4 className="text-sm font-medium">
                          Silver Level Benefits
                        </h4>
                        <ul className="space-y-1 text-sm">
                          <li className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                            <span>5% discount on platform fees</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                            <span>Priority support</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                            <span>Access to exclusive jobs</span>
                          </li>
                        </ul>
                      </div>

                      <div className="space-y-2">
                        <h4 className="text-sm font-medium">
                          Next Level: Gold Benefits
                        </h4>
                        <ul className="space-y-1 text-sm">
                          <li className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-gray-300 dark:bg-gray-600" />
                            <span>10% discount on platform fees</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-gray-300 dark:bg-gray-600" />
                            <span>Featured profile placement</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-gray-300 dark:bg-gray-600" />
                            <span>Early access to new features</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </>
        )}
      </div>
    </DashboardLayout>
  );
}

interface TransactionItemProps {
  type: "incoming" | "outgoing";
  amount: string;
  from: string;
  to: string;
  date: string;
  status: "pending" | "completed" | "failed";
  description?: string;
}

function TransactionItem({ type, amount, from, to, date, status, description }: TransactionItemProps) {
  return (
    <div className="flex items-center justify-between border-b pb-3">
      <div className="flex items-center gap-3">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-full ${
            type === "incoming"
              ? "bg-green-100 text-green-600"
              : "bg-orange-100 text-orange-600"
          } dark:bg-opacity-20`}
        >
          <ArrowDownUp className="h-5 w-5" />
        </div>
        <div>
          <p className="font-medium">{amount}</p>
          <p className="text-xs text-muted-foreground">
            {type === "incoming" ? "From:" : "To:"}{" "}
            {type === "incoming" ? from : to}
          </p>
          {description && <p className="text-xs">{description}</p>}
        </div>
      </div>
      <div className="text-right">
        <p className="text-sm">{date}</p>
        <p className={`text-xs ${ status === "completed" ? "text-green-500" : status === "pending" ? "text-yellow-500" : "text-red-500" }`} >
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </p>
      </div>
    </div>
  );
}
