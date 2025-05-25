"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ProposalSectionProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  count?: number;
  children: React.ReactNode;
  className?: string;
}

export default function ProposalSection({
  title,
  description,
  icon,
  count,
  children,
  className,
}: ProposalSectionProps) {
  return (
    <Card className={cn("", className)}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {icon && (
              <div className="p-2 bg-muted rounded-lg">
                {icon}
              </div>
            )}
            <div>
              <CardTitle className="text-xl flex items-center gap-2">
                {title}
                {count !== undefined && (
                  <Badge variant="secondary" className="ml-2">
                    {count}
                  </Badge>
                )}
              </CardTitle>
              {description && (
                <p className="text-sm text-muted-foreground mt-1">
                  {description}
                </p>
              )}
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}
