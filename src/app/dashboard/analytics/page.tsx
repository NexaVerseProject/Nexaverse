'use client';
import { StatsCards } from "@/components/analytics/StatsCards";
import { JobsChart } from "@/components/analytics/jobsChart";
import { EarningsChart } from "@/components/analytics/earning-chart";
import { NexaPointsChart } from "@/components/analytics/nexapoint-chart";
import { NexaPointsBreakdown } from "@/components/analytics/nexapoints-stats";
import { GoalsWidget } from "@/components/analytics/GoalsWidget";
import DashboardLayout from "@/components/dashboard/dashboard-layout";


export default function AnalyticDashboard(){
  
  return (
    <DashboardLayout>
    <div className="flex flex-col min-h-screen bg-background">
      <div className="flex-1 overflow-auto">
        <header className="sticky top-0 z-10 bg-background border-b">
          <div className="h-14 flex items-center px-6">
            <h1 className="text-xl font-semibold">Analytics</h1>
            <div className="ml-auto flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">Last updated: May 8, 2025</span>
            </div>
          </div>
        </header>
        <main className="p-6 space-y-6">
          <h2 className="text-2xl font-bold">Welcome back, Alex</h2>
          <p className="text-muted-foreground">
            Here's an overview of your freelancing activity and performance.
          </p>
          <section className="animate-fade-in">
            <StatsCards />
          </section>
          <section className="dashboard-grid">
            <JobsChart />
            <EarningsChart />
          </section>
          <section className="dashboard-grid">
            <NexaPointsChart /> 
          </section>
          <section className="dashboard-grid">
            <NexaPointsBreakdown />
            <GoalsWidget />
          </section>
        </main>
      </div>
    </div>
    </DashboardLayout>
  );
};

