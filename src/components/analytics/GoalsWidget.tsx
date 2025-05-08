import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface Goal {
  name: string;
  current: number;
  target: number;
  unit: string;
}

const goals: Goal[] = [
  { name: "Monthly Earnings", current: 3428, target: 5000, unit: "$" },
  { name: "Jobs Completed", current: 24, target: 30, unit: "" },
  { name: "NexaPoints", current: 2451, target: 3000, unit: "" },
];

export function GoalsWidget() {
  return (
    <Card className="lg:col-span-1">
      <CardHeader>
        <CardTitle className="text-lg md:text-xl font-semibold text-foreground">
          Monthly Goals
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 md:space-y-8">
        {goals.map((goal) => {
          const progress = Math.round((goal.current / goal.target) * 100);

          return (
            <div key={goal.name} className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <span className="text-base sm:text-lg font-medium text-foreground">
                  {goal.name}
                </span>
                <span className="text-sm sm:text-base text-muted-foreground">
                  {goal.unit}
                  {goal.current.toLocaleString()} / {goal.unit}
                  {goal.target.toLocaleString()}
                </span>
              </div>
              <Progress value={progress} className="h-2 rounded-md" />
              <span className="text-xs sm:text-sm text-muted-foreground">
                {progress}% complete
                {progress >= 80 && progress < 100 && " - Almost there!"}
                {progress >= 100 && " - Goal achieved!"}
              </span>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
