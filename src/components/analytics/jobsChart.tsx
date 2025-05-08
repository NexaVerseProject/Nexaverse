'use client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart as BarChartIcon } from "lucide-react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const data = [
  { name: "Jan", completed: 4, taken: 5 },
  { name: "Feb", completed: 3, taken: 3 },
  { name: "Mar", completed: 5, taken: 7 },
  { name: "Apr", completed: 7, taken: 8 },
  { name: "May", completed: 5, taken: 5 },
  { name: "Jun", completed: 6, taken: 6 },
];

export function JobsChart() {
  return (
    <Card className="col-span-2">
      <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
        <div className="flex flex-col space-y-1">
          <CardTitle className="text-lg md:text-xl font-semibold text-foreground">
            Job Activity
          </CardTitle>
          <p className="text-sm md:text-base text-muted-foreground">
            Monthly breakdown of jobs taken vs. completed
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <BarChartIcon className="h-5 w-5 text-muted-foreground" />
          <span className="text-sm md:text-base text-muted-foreground">
            <span className="text-emerald-500 font-semibold">+15%</span> completion rate
          </span>
        </div>
      </CardHeader>
      <CardContent className="pt-4 h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis 
              dataKey="name" 
              tickLine={false} 
              axisLine={false} 
              className="text-xs md:text-sm text-muted-foreground"
            />
            <YAxis 
              tickLine={false} 
              axisLine={false} 
              className="text-xs md:text-sm text-muted-foreground"
            />
            <Tooltip 
              contentStyle={{ 
                borderRadius: '8px',
                border: '1px solid #e2e8f0',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                fontSize: '0.875rem', // text-sm
              }} 
              labelStyle={{ fontSize: '0.75rem' }} // text-xs
              itemStyle={{ fontSize: '0.75rem' }} // text-xs
            />
            <Bar dataKey="taken" fill="#C4B5FD" radius={[4, 4, 0, 0]} name="Jobs Taken" />
            <Bar dataKey="completed" fill="#8B5CF6" radius={[4, 4, 0, 0]} name="Completed" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
