import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Send } from "lucide-react";

// Dummy data, can be replaced with server or supabase fetch later
const DEFAULT_MESSAGES: {
  id: string;
  sender: string;
  timeAgo: string;
  content: string;
  read: boolean;
  replies: string[];
}[] = [
  {
    id: "1",
    sender: "Susan",
    timeAgo: "1h ago",
    content: "Hey Alex, just a follow up on the project...",
    read: false,
    replies: [],
  },
  {
    id: "2",
    sender: "John",
    timeAgo: "2h ago",
    content: "Regarding your proposal...",
    read: true,
    replies: [],
  },
  {
    id: "3",
    sender: "Alice",
    timeAgo: "3h ago",
    content: "Can we schedule a call?",
    read: false,
    replies: [],
  },
];

const INBOX_STORAGE_KEY = "demo_inbox_messages";

const loadMessages = () => {
    const stored = localStorage.getItem("demo_inbox_messages");
    if (stored) {
      const parsed = JSON.parse(stored);
      return Array.isArray(parsed) && parsed.length > 0 ? parsed : DEFAULT_MESSAGES;
    }
    return DEFAULT_MESSAGES;
};

const saveMessages = (data: typeof DEFAULT_MESSAGES) => {
  window.localStorage.setItem(INBOX_STORAGE_KEY, JSON.stringify(data));
};

const Inbox: React.FC = () => {
  const [messages, setMessages] = useState<typeof DEFAULT_MESSAGES>([]);
  const [replyText, setReplyText] = useState<Record<string, string>>({});
  const [isMessageSent, setIsMessageSent] = useState(false);

  useEffect(() => {
    setMessages(loadMessages());
  }, []);

  useEffect(() => {
    saveMessages(messages);
  }, [messages]);

  const handleReplyChange = (id: string, value: string) => {
    setReplyText((prev) => ({ ...prev, [id]: value }));
  };

  const handleSendMessage = (messageId: string) => {
    setMessages((prev) =>
      prev.map((message) =>
        message.id === messageId
          ? {
              ...message,
              read: true,
              replies: [...(message.replies || []), replyText[messageId] || ""],
            }
          : message
      )
    );
    setReplyText((prev) => ({ ...prev, [messageId]: "" }));
    setIsMessageSent(true);
    setTimeout(() => setIsMessageSent(false), 3000);
  };

  // Clicking a message marks as read
  const markAsRead = (messageId: string) => {
    setMessages((prev) =>
      prev.map((message) =>
        message.id === messageId ? { ...message, read: true } : message
      )
    );
  };

  const unreadMessages = messages.filter((m) => !m.read);
  const readMessages = messages.filter((m) => m.read);
  
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Messages</h1>

      {isMessageSent && (
        <Alert className="mb-6">
          <AlertTitle>Message Sent</AlertTitle>
          <AlertDescription>Your reply has been sent.</AlertDescription>
        </Alert>
      )}

      <Tabs defaultValue="unread" className="w-full">
        <TabsList className="h-12 bg-nexapurple-700 hover:bg-nexapurple-800 text-white">
          <TabsTrigger value="unread" >Unread ({unreadMessages.length})</TabsTrigger>
          <TabsTrigger value="read">Read ({readMessages.length})</TabsTrigger>
        </TabsList>

        {/* Unread Tab */}
        <TabsContent value="unread" className="space-y-4 mt-6">
          {unreadMessages.length === 0 ? (
            <div className="text-center text-muted-foreground py-8">No unread messages.</div>
          ) : (
            unreadMessages.map((message) => (
              <Card
                key={message.id}
                className="p-4 transition-all hover:shadow-lg"
                onClick={() => markAsRead(message.id)}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <span>{message.sender}</span>
                    <span className="text-xs text-muted-foreground">({message.timeAgo})</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{message.content}</p>
                  <div className="mt-2 text-sm text-muted-foreground">{message.timeAgo}</div>
                  <div className="mt-4 flex items-center gap-2">
                    <Input
                      placeholder="Reply..."
                      value={replyText[message.id] || ""}
                      onChange={(e) => handleReplyChange(message.id, e.target.value)}
                      className="w-full"
                    />
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSendMessage(message.id);
                      }}
                      disabled={!(replyText[message.id] || "").trim()}
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send
                    </Button>
                  </div>
                  {/* Shows previous replies */}
                  {message.replies && message.replies.length > 0 && (
                    <div className="mt-2">
                      <div className="font-medium text-xs text-muted-foreground">Replies:</div>
                      {message.replies.map((reply, idx) => (
                        <div
                          key={idx}
                          className="text-sm bg-muted rounded px-2 py-1 mt-1"
                        >
                          {reply}
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))
          )}
        </TabsContent>

        {/* Read Tab */}
        <TabsContent value="read" className="space-y-4 mt-6">
          {readMessages.length === 0 ? (
            <div className="text-center text-muted-foreground py-8">No read messages yet.</div>
          ) : (
            readMessages.map((message) => (
              <Card key={message.id} className="p-4">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <span>{message.sender}</span>
                    <span className="text-xs text-muted-foreground">({message.timeAgo})</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{message.content}</p>
                  <div className="mt-2 text-sm text-muted-foreground">{message.timeAgo}</div>
                  <div className="mt-4 flex items-center gap-2">
                    <Input
                      placeholder="Reply..."
                      value={replyText[message.id] || ""}
                      onChange={(e) => handleReplyChange(message.id, e.target.value)}
                      className="w-full"
                    />
                    <Button
                      onClick={() => handleSendMessage(message.id)}
                      disabled={!(replyText[message.id] || "").trim()}
                      className="bg-nexapurple-700 hover:bg-nexapurple-800 text-white"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send
                    </Button>
                  </div>
                  {/* Show previous replies */}
                  {message.replies && message.replies.length > 0 && (
                    <div className="mt-2">
                      <div className="font-medium text-xs text-muted-foreground">Replies:</div>
                      {message.replies.map((reply, idx) => (
                        <div
                          key={idx}
                          className="text-sm bg-nexapurple-700 rounded px-2 py-1 mt-1"
                        >
                          {reply}
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Inbox;

