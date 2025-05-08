'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const data = [
  { name: "Completed Jobs", value: 1200 },
  { name: "Referrals", value: 450 },
  { name: "Client Ratings", value: 520 },
  { name: "Community Contribution", value: 280 },
];

const COLORS = [
  "#8B5CF6", "#A78BFA", "#C4B5FD", "#DDD6FE"
];

// Custom Tailwind-styled tooltip
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const { name, value } = payload[0];
    return (
      <div className="rounded-lg border border-sidebar-border bg-sidebar-default bg-opacity-90 p-3 shadow-md">
        <p className="text-base font-semibold text-sidebar-foreground">{name}</p>
        <p className="text-nexa-400">{`${value} points`}</p>
      </div>
    );
  }
  return null;
};

export function NexaPointsBreakdown() {
  return (
    <Card className="rounded-lg shadow-md lg:col-span-1">
      <CardHeader>
        <CardTitle className="text-xl md:text-2xl font-semibold text-foreground">
          NexaPoints Statistics
        </CardTitle>
      </CardHeader>
      <CardContent className="h-[30vh] sm:h-[35vh] md:h-[40vh] lg:h-[45vh] xl:h-[50vh] 2xl:h-[55vh]">
        <div className="rounded-lg overflow-hidden h-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={2}
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                labelLine={false}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend
                verticalAlign="bottom"
                height={36}
                wrapperStyle={{ fontSize: "0.75rem", color: "hsl(var(--muted-foreground))" }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}