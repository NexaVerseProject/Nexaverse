'use client';
import { StatCard } from "@/components/ui/stat-card";
import { BarChart, DollarSign, TrendingUp, Users } from "lucide-react";

export function StatsCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="Total Jobs Completed"
        value="24"
        icon={<BarChart className="h-4 w-4" />}
      >
        <span className="text-nexapurple-500 font-medium">+4 this month</span>
      </StatCard>
      <StatCard
        title="Active Jobs"
        value="3"
        icon={<TrendingUp className="h-4 w-4" />}
      >
        <span className="text-nexa-500 font-medium">1 due this week</span>
      </StatCard>
      <StatCard
        title="Total Earnings"
        value="$3,428.50"
        icon={<DollarSign className="h-4 w-4" />}
        variant="primary"
        valueClassName="text-white"
      >
        <span className="text-nexa-500 font-medium">+$850 this month</span>
      </StatCard>
      <StatCard
        title="NexaPoints"
        value="2,451"
        icon={<Users className="h-4 w-4" />}
      >
        <span className="text-nexa-500 font-medium">Top 10% earner</span>
      </StatCard>
    </div>
  );
}
