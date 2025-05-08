'use client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity } from "lucide-react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const data = [
  { name: "Jan", points: 180 },
  { name: "Feb", points: 150 },
  { name: "Mar", points: 320 },
  { name: "Apr", points: 550 },
  { name: "May", points: 450 },
  { name: "Jun", points: 800 },
];

export function NexaPointsChart() {
  return (
    <Card className="col-span-2">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex flex-col space-y-1">
          <CardTitle className="text-lg font-medium">NexaPoints Growth</CardTitle>
          <p className="text-sm text-muted-foreground">
            Your NexaPoints earned over time
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Activity className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">
            <span className="text-nexa-500 font-medium">2,451</span> total points
          </span>
        </div>
      </CardHeader>
      <CardContent className="pt-4 h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorPoints" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0.1}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" tickLine={false} axisLine={false} />
            <YAxis tickLine={false} axisLine={false} />
            <Tooltip
              contentStyle={{ 
                borderRadius: '8px', 
                border: '1px solid #e2e8f0',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
              }}
            />
            <Area 
              type="monotone" 
              dataKey="points" 
              stroke="#8B5CF6" 
              fillOpacity={1} 
              fill="url(#colorPoints)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
