"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useAuth } from "@/hooks/use-auth";
import { generateDummyMessages } from "@/Datafiles/dummyMessages";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import {
    ArrowLeft,
    Paperclip,
    Send,
    Download,
    Reply as ReplyIcon,
    Archive,
    Trash2,
} from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

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
    replies?: string[];
    relatedTo?: {
        type: string;
        id: string;
        title: string;
    };
}

export default function MessageDetailPage() {
    const { id } = useParams();
    const router = useRouter();
    const { userType, isAuthenticated, isLoading } = useAuth();
    const [message, setMessage] = useState<Message | null>(null);
    const [loading, setLoading] = useState(true);
    const [replyText, setReplyText] = useState("");
    const [replySent, setReplySent] = useState(false);
    const [replies, setReplies] = useState<string[]>([]);

    // Fetch message data
    useEffect(() => {
        if (!isLoading && !isAuthenticated) {
            router.push("/login");
            return;
        }

        if (userType) {
            setLoading(true);
            // In a real app, this would be an API fetch
            setTimeout(() => {
                const messages = generateDummyMessages(userType);
                const found = messages.find((m) => m.id === id) as Message | undefined;

                if (found) {
                    setMessage(found);
                    setReplies(found.replies || []);
                }

                setLoading(false);
            }, 500);
        }
    }, [id, userType, isAuthenticated, isLoading, router]);

    const handleSendReply = () => {
        if (replyText.trim()) {
            setReplies([...replies, replyText]);
            setReplyText("");
            setReplySent(true);
            setTimeout(() => setReplySent(false), 3000);
        }
    };

    if (loading || isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-nexapurple-700"></div>
            </div>
        );
    }

    if (!message) {
        return (
            <div className="container mx-auto px-4 py-8 max-w-5xl">
                <Button
                    variant="ghost"
                    className="mb-4"
                    onClick={() => router.push("/messages")}
                >
                    <ArrowLeft className="h-4 w-4 mr-2" /> Back to Messages
                </Button>
                <Card>
                    <CardContent className="p-8 text-center">
                        <h2 className="text-xl font-semibold">Message not found</h2>
                        <p className="text-muted-foreground mt-2">
                            The message you're looking for doesn't exist or you don't have
                            permission to view it.
                        </p>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8 max-w-6xl">
            <div className="flex items-center justify-between mb-6">
                <Button variant="ghost" onClick={() => router.push("/messages")}>
                    <ArrowLeft className="h-4 w-4 mr-2" /> Back to Messages
                </Button>

                <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="gap-1">
                        <ReplyIcon className="h-4 w-4" /> Reply
                    </Button>
                    <Button variant="outline" size="sm" className="gap-1">
                        <Archive className="h-4 w-4" /> Archive
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        className="gap-1 text-red-600 hover:text-red-700"
                    >
                        <Trash2 className="h-4 w-4" /> Delete
                    </Button>
                </div>
            </div>

            {replySent && (
                <Alert className="mb-6 bg-green-50 border-green-200">
                    <AlertTitle>Reply Sent</AlertTitle>
                    <AlertDescription>
                        Your reply has been sent successfully.
                    </AlertDescription>
                </Alert>
            )}

            <Card className="mb-6">
                <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                        <CardTitle className="text-2xl font-bold">
                            {message.subject}
                        </CardTitle>
                        <div className="text-sm text-muted-foreground">
                            {message.timestamp}
                        </div>
                    </div>

                    <div className="flex items-center mt-4">
                        <Avatar className="h-12 w-12 mr-4">
                            <AvatarImage src={message.sender?.avatar} />
                            <AvatarFallback>
                                {message.sender?.name
                                    .split(" ")
                                    .map((n: string) => n[0])
                                    .join("")}
                            </AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="font-medium text-base">{message.sender?.name}</p>
                            <p className="text-sm text-muted-foreground">
                                {message.sender?.role}
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-3">
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
                        <Badge variant="outline" className="text-xs capitalize">
                            {message.category}
                        </Badge>
                    </div>
                </CardHeader>

                <Separator />

                <CardContent className="pt-6">
                    <div className="prose prose-sm dark:prose-invert max-w-none text-base">
                        <p className="whitespace-pre-line">{message.lastMessage}</p>
                    </div>

                    {message.attachments > 0 && (
                        <div className="mt-8">
                            <h3 className="text-sm font-medium mb-3">
                                Attachments ({message.attachments})
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {Array.from({ length: message.attachments }).map((_, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center p-3 border rounded-md hover:bg-accent cursor-pointer"
                                    >
                                        <Paperclip className="h-4 w-4 mr-2 text-muted-foreground" />
                                        <span className="text-sm">Attachment {i + 1}</span>
                                        <Download className="h-4 w-4 ml-2 text-muted-foreground" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </CardContent>
            </Card>

            {/* Previous replies */}
            {replies.length > 0 && (
                <Card className="mb-6">
                    <CardHeader>
                        <CardTitle className="text-lg">Previous Replies</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        {replies.map((reply, index) => (
                            <div
                                key={index}
                                className="border-l-2 border-nexapurple-700 pl-4 py-2"
                            >
                                <div className="flex items-center mb-2">
                                    <Avatar className="h-8 w-8 mr-2">
                                        <AvatarFallback>Me</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="text-sm font-medium">You</p>
                                        <p className="text-xs text-muted-foreground">
                                            {index === replies.length - 1
                                                ? "Just now"
                                                : `${replies.length - index} ${replies.length - index === 1 ? "reply" : "replies"
                                                } ago`}
                                        </p>
                                    </div>
                                </div>
                                <div className="pl-10">
                                    <p className="text-sm whitespace-pre-line">{reply}</p>
                                </div>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            )}

            {/* Reply box */}
            <Card>
                <CardHeader>
                    <CardTitle className="text-lg">Reply</CardTitle>
                </CardHeader>
                <CardContent>
                    <Textarea
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                        placeholder="Write your reply here..."
                        className="min-h-[150px] mb-3"
                    />
                    <div className="flex justify-between items-center">
                        <Button variant="outline" size="sm">
                            <Paperclip className="h-4 w-4 mr-2" />
                            Attach Files
                        </Button>
                        <Button
                            className="bg-nexapurple-700 hover:bg-nexapurple-800"
                            onClick={handleSendReply}
                            disabled={!replyText.trim()}
                        >
                            <Send className="h-4 w-4 mr-2" />
                            Send Reply
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
