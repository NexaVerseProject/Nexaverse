"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Dot, MessageSquare, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import EmptyState from "./EmptyState";
import { generateDummyMessages } from "@/Datafiles/dummyMessages";

// Message type definition
interface Message {
  id: string;
  sender: {
    id: string;
    name: string;
    avatar?: string;
    role: string;
  };
  recipient: {
    id: string;
    name: string;
    avatar?: string;
    role: string;
  };
  subject: string;
  preview: string;
  lastMessage: string;
  timestamp: string;
  read: boolean;
  category: string;
  attachments: number;
  priority: "high" | "medium" | "low";
  status: "active" | "archived";
  relatedTo?: {
    type: string;
    id: string;
    title: string;
  };
}

export default function MessagesView({
  activeTab,
  userType,
  searchQuery,
}: {
  activeTab: string;
  userType: string;
  searchQuery: string;
}) {
  const router = useRouter();
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, this would fetch from an API endpoint
    // For now, we'll generate dummy data
    setLoading(true);
    setTimeout(() => {
      const data = generateDummyMessages(userType);
      setMessages(data);
      setLoading(false);
    }, 800);
  }, [userType]);
  const filteredMessages = messages.filter((message) => {
    if (
      searchQuery &&
      !message.subject.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !message.lastMessage.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !message.sender.name.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }

    if (activeTab === "unread" && message.read) {
      return false;
    }

    // Freelancer-specific filters
    if (userType === "freelancer") {
      if (activeTab === "projects" && message.category !== "project")
        return false;
      if (activeTab === "contracts" && message.category !== "contract")
        return false;
      if (activeTab === "proposals" && message.category !== "proposal")
        return false;
    }

    if (userType === "job-poster") {
      if (activeTab === "applications" && message.category !== "application")
        return false;
      if (activeTab === "active-jobs" && message.category !== "active-job")
        return false;
      if (activeTab === "negotiations" && message.category !== "negotiation")
        return false;
    }
    if (userType === "business") {
      if (activeTab === "talent" && message.category !== "talent") return false;
      if (activeTab === "vendors" && message.category !== "vendor")
        return false;
      if (activeTab === "team" && message.category !== "team") return false;
    }

    return true;
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-nexapurple-700"></div>
      </div>
    );
  }

  if (filteredMessages.length === 0) {
    const emptyStateMessages = {
      all: "No messages found",
      unread: "No unread messages",
      projects: "No project messages",
      contracts: "No contract messages",
      proposals: "No proposal responses",
      applications: "No job applications",
      "active-jobs": "No active job messages",
      negotiations: "No contract negotiations",
      talent: "No talent communications",
      vendors: "No vendor messages",
      team: "No team messages",
    };

    return (
      <EmptyState
        title={
          emptyStateMessages[activeTab as keyof typeof emptyStateMessages] ||
          "No messages found"
        }
        description="When you receive messages, they will appear here."
        icon="inbox"
      />
    );
  }

  return (
    <div className="space-y-3">
      {filteredMessages.map((message) => (
        <Card
          key={message.id}
          className={`cursor-pointer transition-all hover:shadow-md ${
            !message.read ? "border-l-4 border-l-nexapurple-700" : ""
          }`}
          onClick={() => router.push(`/messages/${message.id}`)}
        >
          <CardContent className="p-4">
            <div className="flex justify-between items-start">
              <div className="flex items-start space-x-4 w-full">
                <Avatar className="h-12 w-12 mt-1">
                  <AvatarImage src={message.sender.avatar} />
                  <AvatarFallback>
                    {message.sender.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <p className="font-medium text-base">
                        {message.sender.name}
                      </p>
                      {!message.read && (
                        <Dot className="h-6 w-6 text-nexapurple-700" />
                      )}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {message.timestamp}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {message.sender.role}
                  </p>

                  <div className="mt-2">
                    <h3 className="font-medium text-lg">{message.subject}</h3>
                    <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                      {message.preview}
                    </p>
                  </div>

                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex space-x-2 flex-wrap gap-1">
                      {message.priority === "high" && (
                        <Badge variant="destructive" className="text-xs">
                          High Priority
                        </Badge>
                      )}
                      {message.relatedTo && (
                        <Badge variant="outline" className="text-xs">
                          {message.relatedTo.type}: {message.relatedTo.title}
                        </Badge>
                      )}
                      {message.attachments > 0 && (
                        <Badge variant="secondary" className="text-xs">
                          {message.attachments} attachment
                          {message.attachments > 1 ? "s" : ""}
                        </Badge>
                      )}
                      <Badge variant="outline" className="text-xs capitalize">
                        {message.category}
                      </Badge>
                    </div>

                    <div className="flex items-center">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-xs gap-1"
                        onClick={(e) => {
                          e.stopPropagation();
                          router.push(`/messages/reply/${message.id}`);
                        }}
                      >
                        Reply
                        <ArrowRight className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
