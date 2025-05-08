'use client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign } from "lucide-react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const data = [
  { name: "Jan", amount: 450 },
  { name: "Feb", amount: 300 },
  { name: "Mar", amount: 520 },
  { name: "Apr", amount: 800 },
  { name: "May", amount: 500 },
  { name: "Jun", amount: 850 },
];

export function EarningsChart() {
  return (
    <Card className="col-span-2">
      <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4">
        <div className="flex flex-col space-y-1">
          <CardTitle className="text-base md:text-lg font-medium">
            Earnings Overview
          </CardTitle>
          <p className="text-sm md:text-base text-muted-foreground">
            Your monthly earnings from the platform
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <DollarSign className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm md:text-base text-muted-foreground">
            <span className="text-emerald-500 font-medium">+23%</span> from last month
          </span>
        </div>
      </CardHeader>
      <CardContent className="pt-4 h-[200px] sm:h-[220px] md:h-[250px] lg:h-[280px] xl:h-[300px] 2xl:h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="name"
              tickLine={false}
              axisLine={false}
              className="text-xs md:text-sm"
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${value}`}
              className="text-xs md:text-sm"
            />
            <Tooltip
              formatter={(value) => [`$${value}`, 'Earnings']}
              contentStyle={{
                borderRadius: 'var(--radius)',
                border: '1px solid hsl(var(--border))',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              }}
            />
            <Line
              type="monotone"
              dataKey="amount"
              stroke="#7C3AED" // matches nexapurple-600 from your config
              strokeWidth={2}
              dot={{ r: 4, strokeWidth: 2 }}
              activeDot={{ r: 6, strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
