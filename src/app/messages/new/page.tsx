"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/use-auth";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Paperclip, Send, X } from "lucide-react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const talentOptions = [
  { value: "talent1", label: "Andrew Collins (Senior Developer)" },
  { value: "talent2", label: "Daniel Kim (UI/UX Designer)" },
  { value: "talent3", label: "Emma Watson (Project Manager)" },
  { value: "talent4", label: "John Smith (DevOps Engineer)" },
];

const vendorOptions = [
  { value: "vendor1", label: "CloudHost Solutions" },
  { value: "vendor2", label: "SecurePay Services" },
  { value: "vendor3", label: "TechSupport Pro" },
  { value: "vendor4", label: "Marketing Experts Inc." },
];

const teamOptions = [
  { value: "team1", label: "Lisa Wong (Project Manager)" },
  { value: "team2", label: "Robert Chen (Developer)" },
  { value: "team3", label: "Sarah Johnson (Designer)" },
  { value: "team4", label: "Michael Brown (Marketing)" },
];

export default function NewMessagePage() {
  const router = useRouter();
  const { userType, isAuthenticated, isLoading } = useAuth();

  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [recipientType, setRecipientType] = useState("talent");
  const [attachments, setAttachments] = useState< { name: string; size: string }[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [isHighPriority, setIsHighPriority] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      if (!isAuthenticated) {
        router.push("/login");
      } else if (userType !== "business") {
        router.push("/messages");
      }
    }
  }, [isAuthenticated, isLoading, router, userType]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!subject.trim() || !message.trim()) {
      setError("Please fill in all required fields.");
      return;
    }

    setSubmitting(true);
    setError("");

    // Simulate API request
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      setTimeout(() => {
        router.push("/messages");
      }, 2000);
    }, 1500);
  };

  const handleAttachFile = () => {
    // In a real app, this would open a file picker
    // For demo purposes, we'll just add a fake attachment
    const newAttachment = {
      name: `Document-${Math.floor(Math.random() * 1000)}.pdf`,
      size: `${Math.floor(Math.random() * 5) + 1}MB`,
    };

    setAttachments([...attachments, newAttachment]);
  };

  const removeAttachment = (index: number) => {
    const newAttachments = [...attachments];
    newAttachments.splice(index, 1);
    setAttachments(newAttachments);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-nexapurple-700"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="flex items-center mb-6">
        <Button variant="ghost" onClick={() => router.push("/messages")}>
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to Messages
        </Button>
      </div>

      {success && (
        <Alert className="mb-6 bg-green-50 border-green-200">
          <AlertTitle>Message Sent</AlertTitle>
          <AlertDescription>
            Your message has been sent successfully.
          </AlertDescription>
        </Alert>
      )}

      {error && (
        <Alert className="mb-6" variant="destructive">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <Card>
        <CardHeader>
          <CardTitle>New Message</CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="recipient-type" className="mb-5">
                  Receipient Type{" "}
                </Label>
                <Select value={recipientType} onValueChange={setRecipientType}>
                  <SelectTrigger id="recipient-type">
                    <SelectValue placeholder="Select recipient type" />
                  </SelectTrigger>
                  <SelectContent className="pt-5">
                    <SelectItem value="talent">Talent</SelectItem>
                    <SelectItem value="vendor">Vendor</SelectItem>
                    <SelectItem value="team">Team Member</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {recipientType === "talent" && (
                <div>
                  <Label htmlFor="talent" className="mb-5">
                    Select Talent
                  </Label>
                  <Select defaultValue="talent1">
                    <SelectTrigger id="talent">
                      <SelectValue placeholder="Select talent" />
                    </SelectTrigger>
                    <SelectContent>
                      {talentOptions.map((opt) => (
                        <SelectItem key={opt.value} value={opt.value}>
                          {opt.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              {recipientType === "vendor" && (
                <div>
                  <Label htmlFor="vendor" className="mb-5">
                    Select Vendor
                  </Label>
                  <Select defaultValue="vendor1">
                    <SelectTrigger id="vendor">
                      <SelectValue placeholder="Select vendor" />
                    </SelectTrigger>
                    <SelectContent>
                      {vendorOptions.map((opt) => (
                        <SelectItem key={opt.value} value={opt.value}>
                          {opt.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              {recipientType === "team" && (
                <div>
                  <Label htmlFor="team">Select Team Member</Label>
                  <Select defaultValue="team1">
                    <SelectTrigger id="team">
                      <SelectValue placeholder="Select team member" />
                    </SelectTrigger>
                    <SelectContent>
                      {teamOptions.map((opt) => (
                        <SelectItem key={opt.value} value={opt.value}>
                          {opt.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              <div>
                <Label htmlFor="subject" className="mb-5">
                  Subject
                </Label>
                <Input
                  id="subject"
                  placeholder="Enter subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                />
              </div>

              <div>
                <Label htmlFor="message" className="mb-5">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Type your message here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="min-h-[150px]"
                  required
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="high-priority"
                  checked={isHighPriority}
                  onCheckedChange={(checked) =>
                    setIsHighPriority(checked === true)
                  }
                />
                <Label
                  htmlFor="high-priority"
                  className="text-sm font-medium leading-none cursor-pointer"
                >
                  Mark as high priority
                </Label>
              </div>

              {/* Attachments */}
              <div>
                <Label>Attachments</Label>
                <div className="mt-2 space-y-2">
                  {attachments.map((file, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-2 border rounded"
                    >
                      <div className="flex items-center">
                        <Paperclip className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span className="text-sm">{file.name}</span>
                        <span className="text-xs text-muted-foreground ml-2">
                          ({file.size})
                        </span>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeAttachment(index)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}

                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleAttachFile}
                  >
                    <Paperclip className="h-4 w-4 mr-2" />
                    Attach File
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => router.push("/messages")}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={
                  submitting || success || !subject.trim() || !message.trim()
                }
                className="bg-nexapurple-700 hover:bg-nexapurple-800 text-white"
              >
                {submitting ? (
                  <>
                    <div className="animate-spin h-4 w-4 mr-2 border-2 border-b-transparent rounded-full"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
