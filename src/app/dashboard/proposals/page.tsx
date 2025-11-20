"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  FileText,
  Briefcase,
  Clock,
  CheckCircle,
  MessageSquare,
  Users,
  Archive,
} from "lucide-react";
import DashboardLayout from "@/components/dashboard/dashboard-layout";
import ProposalCard from "@/components/proposals/proposal-card";
import ProposalSection from "@/components/proposals/proposal-section";
import EmptyState from "@/components/proposals/empty-state";

type Proposal = {
  id: string;
  [key: string]: any;
};

export default function ProposalsPage() {
  const [activeTab, setActiveTab] = useState("active");

  const [offers, setOffers] = useState<Proposal[]>([]);
  const [interviews, setInterviews] = useState<Proposal[]>([]);
  const [activeProposals, setActiveProposals] = useState<Proposal[]>([]);
  const [archivedProposals, setArchivedProposals] = useState<Proposal[]>([]);
  const [successRate, setSuccessRate] = useState("");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [offersRes, interviewsRes, activeRes, archivedRes, successRes] =
          await Promise.all([
            fetch("/api/proposals/offers"),
            fetch("/api/proposals/interviews"),
            fetch("/api/proposals/active"),
            fetch("/api/proposals/archived"),
            fetch("/api/proposals/success-rate"),
          ]);

        const [offersData, interviewsData, activeData, archivedData, successData] =
          await Promise.all([
            offersRes.json(),
            interviewsRes.json(),
            activeRes.json(),
            archivedRes.json(),
            successRes.json(),
          ]);

        setOffers(offersData);
        setInterviews(interviewsData);
        setActiveProposals(activeData);
        setArchivedProposals(archivedData);
        setSuccessRate(successData.rate || "0%");
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const stats = [
    {
      title: "Active Proposals",
      value: activeProposals.length + offers.length,
      icon: <FileText className="h-5 w-5 text-muted-foreground" />,
      trend: "+2 this week",
    },
    {
      title: "Job Offers",
      value: offers.length,
      icon: <Briefcase className="h-5 w-5 text-muted-foreground" />,
      trend: `${offers.length} pending response`,
    },
    {
      title: "Interview Invites",
      value: interviews.length,
      icon: <MessageSquare className="h-5 w-5 text-muted-foreground" />,
      trend: `${interviews.length} scheduled`,
    },
    {
      title: "Success Rate",
      value: successRate,
      icon: <CheckCircle className="h-5 w-5 text-muted-foreground" />,
      trend: "+5% from last month",
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Proposals</h1>
          <p className="text-muted-foreground mt-2">
            Manage your job proposals, offers, and interviews
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                {stat.icon}
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">{stat.trend}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="h-12 w-full md:w-auto">
            <TabsTrigger value="active" className="text-base data-[state=active]:bg-nexapurple-700">
              <FileText className="h-4 w-4 mr-2" />
              Active
            </TabsTrigger>
            <TabsTrigger value="referrals" className="text-base data-[state=active]:bg-nexapurple-700">
              <Users className="h-4 w-4 mr-2" />
              Referrals
            </TabsTrigger>
            <TabsTrigger value="archived" className="text-base data-[state=active]:bg-nexapurple-700">
              <Archive className="h-4 w-4 mr-2" />
              Archived
            </TabsTrigger>
          </TabsList>

          <TabsContent value="active" className="space-y-8 mt-6">
            <ProposalSection title="Job Offers" description="Offers awaiting your acceptance" icon={<Briefcase className="h-5 w-5" />} count={offers.length}>
              {offers.length > 0 ? (
                <div className="grid gap-4">
                  {offers.map((offer) => (
                    <ProposalCard key={offer.id} type="offer" data={offer} actions={
                      <>
                        <Button size="sm" className="bg-nexapurple-700 hover:bg-nexapurple-800">Accept Offer</Button>
                        <Button size="sm" variant="outline">Decline</Button>
                      </>
                    } />
                  ))}
                </div>
              ) : (
                <EmptyState icon={<Briefcase className="h-12 w-12" />} title="No job offers" description="You don't have any pending job offers at the moment." />
              )}
            </ProposalSection>

            <ProposalSection title="Interview Invitations" description="Scheduled interviews with clients" icon={<MessageSquare className="h-5 w-5" />} count={interviews.length}>
              {interviews.length > 0 ? (
                <div className="grid gap-4">
                  {interviews.map((invitation) => (
                    <ProposalCard key={invitation.id} type="interview" data={invitation} actions={
                      <>
                        <Button size="sm" className="bg-nexapurple-700 hover:bg-nexapurple-800">Join Interview</Button>
                        <Button size="sm" variant="outline">Reschedule</Button>
                      </>
                    } />
                  ))}
                </div>
              ) : (
                <EmptyState icon={<MessageSquare className="h-12 w-12" />} title="No interview invitations" description="You don't have any pending interview invitations." />
              )}
            </ProposalSection>

            <ProposalSection title="Active Proposals" description="Proposals awaiting client response" icon={<Clock className="h-5 w-5" />} count={activeProposals.length}>
              {activeProposals.length > 0 ? (
                <div className="grid gap-4">
                  {activeProposals.map((proposal) => (
                    <ProposalCard key={proposal.id} type="proposal" data={proposal} actions={
                      <>
                        <Button size="sm" variant="outline">View Details</Button>
                        <Button size="sm" variant="ghost">Withdraw</Button>
                      </>
                    } />
                  ))}
                </div>
              ) : (
                <EmptyState icon={<Clock className="h-12 w-12" />} title="No active proposals" description="You haven't submitted any proposals yet." action={<Button className="bg-nexapurple-700 hover:bg-nexapurple-800">Browse Jobs</Button>} />
              )}
            </ProposalSection>
          </TabsContent>

          <TabsContent value="referrals" className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <EmptyState icon={<Users className="h-12 w-12" />} title="Referrals coming soon" description="This feature will allow you to see jobs referred by other freelancers in your network." action={<Button variant="outline">Learn More</Button>} />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="archived" className="space-y-6 mt-6">
            <ProposalSection title="Archived Proposals" description="Expired, declined, or closed proposals" icon={<Archive className="h-5 w-5" />} count={archivedProposals.length}>
              {archivedProposals.length > 0 ? (
                <div className="grid gap-4">
                  {archivedProposals.map((proposal) => (
                    <ProposalCard key={proposal.id} type="archived" data={proposal} actions={
                      <Button size="sm" variant="ghost">Remove</Button>
                    } />
                  ))}
                </div>
              ) : (
                <EmptyState icon={<Archive className="h-12 w-12" />} title="No archived proposals" description="Your archived proposals will appear here." />
              )}
            </ProposalSection>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}