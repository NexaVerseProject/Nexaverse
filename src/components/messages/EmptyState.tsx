"use client";

import { Inbox, Mail, Search, AlertCircle } from "lucide-react";

type EmptyStateProps = {
  title: string;
  description: string;
  icon: "inbox" | "search" | "mail" | "alert";
};

export default function EmptyState({ title, description, icon}: EmptyStateProps) {
  const icons = {
    inbox: <Inbox className="h-12 w-12 text-muted-foreground" />,
    search: <Search className="h-12 w-12 text-muted-foreground" />,
    mail: <Mail className="h-12 w-12 text-muted-foreground" />,
    alert: <AlertCircle className="h-12 w-12 text-muted-foreground" />,
  };

  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 text-center h-64">
      <div className="mb-4 rounded-full bg-muted p-4">{icons[icon]}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground max-w-sm">{description}</p>
    </div>
  );
}
