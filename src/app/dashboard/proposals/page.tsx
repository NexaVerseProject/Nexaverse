"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  FileText,
  Briefcase,
  Clock,
  CheckCircle,
  XCircle,
  MessageSquare,
  Users,
  Archive,
  Calendar,
  DollarSign,
} from "lucide-react";
import DashboardLayout from "@/components/dashboard/dashboard-layout";
import ProposalCard from "@/components/proposals/proposal-card";
import ProposalSection from "@/components/proposals/proposal-section";
import EmptyState from "@/components/proposals/empty-state";

// Mock data for proposals
const mockOffers = [
  {
    id: 1,
    title: "Smart Contract Development for DeFi Platform",
    client: "CryptoFinance Inc.",
    budget: "$5,000 - $10,000",
    duration: "2-3 months",
    skills: ["Solidity", "Web3.js", "React"],
    status: "pending",
    receivedDate: "2024-01-15",
    expiresIn: "2 days",
  },
  {
    id: 2,
    title: "NFT Marketplace Frontend Development",
    client: "ArtChain Studios",
    budget: "$3,000 - $5,000",
    duration: "1-2 months",
    skills: ["React", "TypeScript", "Tailwind CSS"],
    status: "pending",
    receivedDate: "2024-01-14",
    expiresIn: "5 days",
  },
];

const mockInvitations = [
  {
    id: 3,
    title: "Blockchain Integration Specialist Needed",
    client: "TechVentures Ltd.",
    message:
      "We reviewed your profile and would like to discuss our project requirements.",
    scheduledTime: "Jan 18, 2024 - 3:00 PM UTC",
    status: "scheduled",
  },
];

const mockActiveProposals = [
  {
    id: 4,
    title: "Web3 Wallet Integration",
    client: "DeFi Solutions",
    submittedDate: "2024-01-10",
    proposalAmount: "$4,500",
    status: "under_review",
    coverLetter: "I have extensive experience in Web3 wallet integrations...",
  },
  {
    id: 5,
    title: "Smart Contract Audit",
    client: "SecureChain",
    submittedDate: "2024-01-08",
    proposalAmount: "$3,000",
    status: "under_review",
    coverLetter: "As a certified smart contract auditor...",
  },
];

const mockArchivedProposals = [
  {
    id: 6,
    title: "DApp Development",
    client: "BlockTech",
    submittedDate: "2023-12-15",
    proposalAmount: "$6,000",
    status: "declined",
    reason: "Client chose another freelancer",
  },
  {
    id: 7,
    title: "Token Economics Consultation",
    client: "CryptoStartup",
    submittedDate: "2023-12-01",
    proposalAmount: "$2,000",
    status: "expired",
    reason: "Proposal expired after 30 days",
  },
];

export default function ProposalsPage() {
  const [activeTab, setActiveTab] = useState("active");

  const stats = [
    {
      title: "Active Proposals",
      value: mockActiveProposals.length + mockOffers.length,
      icon: <FileText className="h-5 w-5 text-muted-foreground" />,
      trend: "+2 this week",
    },
    {
      title: "Job Offers",
      value: mockOffers.length,
      icon: <Briefcase className="h-5 w-5 text-muted-foreground" />,
      trend: "2 pending response",
    },
    {
      title: "Interview Invites",
      value: mockInvitations.length,
      icon: <MessageSquare className="h-5 w-5 text-muted-foreground" />,
      trend: "1 scheduled",
    },
    {
      title: "Success Rate",
      value: "68%",
      icon: <CheckCircle className="h-5 w-5 text-muted-foreground" />,
      trend: "+5% from last month",
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Proposals</h1>
          <p className="text-muted-foreground mt-2">
            Manage your job proposals, offers, and interviews
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                {stat.icon}
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">{stat.trend}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="h-12 w-full md:w-auto">
            <TabsTrigger
              value="active"
              className="text-base data-[state=active]:bg-nexapurple-700"
            >
              <FileText className="h-4 w-4 mr-2" />
              Active
            </TabsTrigger>
            <TabsTrigger
              value="referrals"
              className="text-base data-[state=active]:bg-nexapurple-700"
            >
              <Users className="h-4 w-4 mr-2" />
              Referrals
            </TabsTrigger>
            <TabsTrigger
              value="archived"
              className="text-base data-[state=active]:bg-nexapurple-700"
            >
              <Archive className="h-4 w-4 mr-2" />
              Archived
            </TabsTrigger>
          </TabsList>

          {/* Active Tab */}
          <TabsContent value="active" className="space-y-8 mt-6">
            {/* Job Offers Section */}
            <ProposalSection
              title="Job Offers"
              description="Offers awaiting your acceptance"
              icon={<Briefcase className="h-5 w-5" />}
              count={mockOffers.length}
            >
              {mockOffers.length > 0 ? (
                <div className="grid gap-4">
                  {mockOffers.map((offer) => (
                    <ProposalCard
                      key={offer.id}
                      type="offer"
                      data={offer}
                      actions={
                        <>
                          <Button
                            size="sm"
                            className="bg-nexapurple-700 hover:bg-nexapurple-800"
                          >
                            Accept Offer
                          </Button>
                          <Button size="sm" variant="outline">
                            Decline
                          </Button>
                        </>
                      }
                    />
                  ))}
                </div>
              ) : (
                <EmptyState
                  icon={<Briefcase className="h-12 w-12" />}
                  title="No job offers"
                  description="You don't have any pending job offers at the moment."
                />
              )}
            </ProposalSection>

            {/* Interview Invitations Section */}
            <ProposalSection
              title="Interview Invitations"
              description="Scheduled interviews with clients"
              icon={<MessageSquare className="h-5 w-5" />}
              count={mockInvitations.length}
            >
              {mockInvitations.length > 0 ? (
                <div className="grid gap-4">
                  {mockInvitations.map((invitation) => (
                    <ProposalCard
                      key={invitation.id}
                      type="interview"
                      data={invitation}
                      actions={
                        <>
                          <Button
                            size="sm"
                            className="bg-nexapurple-700 hover:bg-nexapurple-800"
                          >
                            Join Interview
                          </Button>
                          <Button size="sm" variant="outline">
                            Reschedule
                          </Button>
                        </>
                      }
                    />
                  ))}
                </div>
              ) : (
                <EmptyState
                  icon={<MessageSquare className="h-12 w-12" />}
                  title="No interview invitations"
                  description="You don't have any pending interview invitations."
                />
              )}
            </ProposalSection>

            {/* Active Proposals Section */}
            <ProposalSection
              title="Active Proposals"
              description="Proposals awaiting client response"
              icon={<Clock className="h-5 w-5" />}
              count={mockActiveProposals.length}
            >
              {mockActiveProposals.length > 0 ? (
                <div className="grid gap-4">
                  {mockActiveProposals.map((proposal) => (
                    <ProposalCard
                      key={proposal.id}
                      type="proposal"
                      data={proposal}
                      actions={
                        <>
                          <Button size="sm" variant="outline">
                            View Details
                          </Button>
                          <Button size="sm" variant="ghost">
                            Withdraw
                          </Button>
                        </>
                      }
                    />
                  ))}
                </div>
              ) : (
                <EmptyState
                  icon={<Clock className="h-12 w-12" />}
                  title="No active proposals"
                  description="You haven't submitted any proposals yet."
                  action={
                    <Button className="bg-nexapurple-700 hover:bg-nexapurple-800">
                      Browse Jobs
                    </Button>
                  }
                />
              )}
            </ProposalSection>
          </TabsContent>

          {/* Referrals Tab */}
          <TabsContent value="referrals" className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <EmptyState
                  icon={<Users className="h-12 w-12" />}
                  title="Referrals coming soon"
                  description="This feature will allow you to see jobs referred by other freelancers in your network."
                  action={<Button variant="outline">Learn More</Button>}
                />
              </CardContent>
            </Card>
          </TabsContent>

          {/* Archived Tab */}
          <TabsContent value="archived" className="space-y-6 mt-6">
            <ProposalSection
              title="Archived Proposals"
              description="Expired, declined, or closed proposals"
              icon={<Archive className="h-5 w-5" />}
              count={mockArchivedProposals.length}
            >
              {mockArchivedProposals.length > 0 ? (
                <div className="grid gap-4">
                  {mockArchivedProposals.map((proposal) => (
                    <ProposalCard
                      key={proposal.id}
                      type="archived"
                      data={proposal}
                      actions={
                        <Button size="sm" variant="ghost">
                          Remove
                        </Button>
                      }
                    />
                  ))}
                </div>
              ) : (
                <EmptyState
                  icon={<Archive className="h-12 w-12" />}
                  title="No archived proposals"
                  description="Your archived proposals will appear here."
                />
              )}
            </ProposalSection>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
