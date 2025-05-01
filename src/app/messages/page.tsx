"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/hooks/use-auth";
import { useRouter } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import MessagesView from "@/components/messages/MessagesView";

const freelancerFilters = [
    { value: "projects", label: "Project Messages" },
    { value: "contracts", label: "Contract Discussions" },
    { value: "proposals", label: "Proposal Responses" },
];

const jobPosterFilters = [
    { value: "applications", label: "Job Applications" },
    { value: "active-jobs", label: "Active Jobs" },
    { value: "negotiations", label: "Contract Negotiations" },
];

const businessFilters = [
    { value: "talent", label: "Talent Communication" },
    { value: "vendors", label: "Vendor Contacts" },
    { value: "team", label: "Team Messages" },
];

export default function MessagesPage() {
    const { isAuthenticated, userType, isLoading } = useAuth();
    const router = useRouter();
    const [activeTab, setActiveTab] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");

    // Redirect if not authenticated
    useEffect(() => {
        if (!isLoading && !isAuthenticated) {
            router.push("/login");
        }
    }, [isAuthenticated, isLoading, router]);

    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-screen">
                Loading...
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8 max-w-full">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Messages</h1>
                {userType === "business" && (
                    <Button
                        onClick={() => router.push("/messages/new")}
                        className="bg-nexapurple-700 hover:bg-nexapurple-800 text-white"
                    >
                        New Message
                    </Button>
                )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                {/* Sidebar */}
                <div className="lg:col-span-1 bg-background border rounded-lg p-4 shadow-sm">
                    <div className="mb-4">
                        <div className="relative">
                            <Search className="absolute left-2 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                                placeholder="Search messages..."
                                className="pl-8"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>

                    <Tabs
                        defaultValue="all"
                        className="w-full"
                        value={activeTab}
                        onValueChange={setActiveTab}
                    >
                        <TabsList className="grid grid-cols-2 h-15 mb-4">
                            <TabsTrigger value="all">All</TabsTrigger>
                            <TabsTrigger value="unread">Unread</TabsTrigger>
                        </TabsList>

                        {userType === "freelancer" && (
                            <div className="space-y-2 mt-4">
                                <h3 className="font-medium text-sm">Filter By</h3>
                                {freelancerFilters.map((filter) => (
                                    <Button
                                        key={filter.value}
                                        variant={activeTab === filter.value ? "default" : "outline"}
                                        className="w-full justify-start text-sm"
                                        onClick={() => setActiveTab(filter.value)}
                                    >
                                        {filter.label}
                                    </Button>
                                ))}
                            </div>
                        )}

                        {userType === "job-poster" && (
                            <div className="space-y-2 mt-4">
                                <h3 className="font-medium text-sm">Filter By</h3>
                                {jobPosterFilters.map((filter) => (
                                    <Button
                                        key={filter.value}
                                        variant={activeTab === filter.value ? "default" : "outline"}
                                        className="w-full justify-start text-sm"
                                        onClick={() => setActiveTab(filter.value)}
                                    >
                                        {filter.label}
                                    </Button>
                                ))}
                            </div>
                        )}

                        {userType === "business" && (
                            <div className="space-y-2 mt-4">
                                <h3 className="font-medium text-sm">Filter By</h3>
                                {businessFilters.map((filter) => (
                                    <Button
                                        key={filter.value}
                                        variant={activeTab === filter.value ? "default" : "outline"}
                                        className="w-full justify-start text-sm"
                                        onClick={() => setActiveTab(filter.value)}
                                    >
                                        {filter.label}
                                    </Button>
                                ))}
                            </div>
                        )}

                        <div className="mt-6">
                            <h3 className="font-medium text-sm mb-2">Status</h3>
                            <div className="flex flex-wrap gap-2">
                                <Button variant="outline" size="sm" className="text-xs">
                                    Active
                                </Button>
                                <Button variant="outline" size="sm" className="text-xs">
                                    Archived
                                </Button>
                            </div>
                        </div>
                    </Tabs>
                </div>

                {/* Main content */}
                <div className="lg:col-span-4 bg-background border rounded-lg p-4 shadow-sm">
                    <MessagesView
                        activeTab={activeTab}
                        userType={userType || ""}
                        searchQuery={searchQuery}
                    />
                </div>
            </div>
        </div>
    );
}
