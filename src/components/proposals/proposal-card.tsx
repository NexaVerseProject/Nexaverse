"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  DollarSign,
  Clock,
  User,
  AlertCircle,
  CheckCircle,
  XCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ProposalCardProps {
  type: "offer" | "interview" | "proposal" | "archived";
  data: any;
  actions?: React.ReactNode;
  className?: string;
}

export default function ProposalCard({
  type,
  data,
  actions,
  className,
}: ProposalCardProps) {
  const getStatusBadge = (status: string) => {
    const statusConfig = {
      pending: { label: "Pending", variant: "secondary" as const },
      scheduled: { label: "Scheduled", variant: "default" as const },
      under_review: { label: "Under Review", variant: "secondary" as const },
      declined: { label: "Declined", variant: "destructive" as const },
      expired: { label: "Expired", variant: "outline" as const },
    };

    const config = statusConfig[status as keyof typeof statusConfig];
    if (!config) return null;

    return <Badge variant={config.variant}>{config.label}</Badge>;
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "declined":
        return <XCircle className="h-4 w-4 text-destructive" />;
      case "expired":
        return <AlertCircle className="h-4 w-4 text-muted-foreground" />;
      case "scheduled":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      default:
        return <Clock className="h-4 w-4 text-muted-foreground" />;
    }
  };

  return (
    <Card className={cn("hover:shadow-md transition-shadow", className)}>
      <CardHeader className="pb-4">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
          <div className="space-y-2 flex-1">
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-semibold text-lg leading-tight">
                {data.title}
              </h3>
              {data.status && (
                <div className="flex items-center gap-2">
                  {getStatusIcon(data.status)}
                  {getStatusBadge(data.status)}
                </div>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <User className="h-3 w-3" />
                <span>{data.client}</span>
              </div>

              {data.budget && (
                <div className="flex items-center gap-1">
                  <DollarSign className="h-3 w-3" />
                  <span>{data.budget}</span>
                </div>
              )}

              {data.proposalAmount && (
                <div className="flex items-center gap-1">
                  <DollarSign className="h-3 w-3" />
                  <span>{data.proposalAmount}</span>
                </div>
              )}

              {data.duration && (
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span>{data.duration}</span>
                </div>
              )}

              {data.scheduledTime && (
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  <span>{data.scheduledTime}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Skills for offers */}
        {data.skills && (
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill: string) => (
              <Badge key={skill} variant="secondary" className="text-xs">
                {skill}
              </Badge>
            ))}
          </div>
        )}

        {/* Message for interviews */}
        {data.message && (
          <p className="text-sm text-muted-foreground line-clamp-2">
            {data.message}
          </p>
        )}

        {/* Cover letter preview for proposals */}
        {data.coverLetter && (
          <p className="text-sm text-muted-foreground line-clamp-2">
            {data.coverLetter}
          </p>
        )}

        {/* Reason for archived */}
        {data.reason && (
          <p className="text-sm text-muted-foreground italic">{data.reason}</p>
        )}

        {/* Additional info */}
        <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
          {data.receivedDate && <span>Received: {data.receivedDate}</span>}
          {data.submittedDate && <span>Submitted: {data.submittedDate}</span>}
          {data.expiresIn && (
            <span className="text-orange-600 font-medium">
              Expires in: {data.expiresIn}
            </span>
          )}
        </div>

        {/* Actions */}
        {actions && <div className="flex flex-wrap gap-2 pt-2">{actions}</div>}
      </CardContent>
    </Card>
  );
}
