import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import type { UserType } from "@/types/auth";

interface BasicInfoFormProps {
    userType: UserType;
    onSubmit: (e: React.FormEvent) => void;
}

export function BasicInfoForm({ userType, onSubmit }: BasicInfoFormProps) {
    return (
        <form onSubmit={onSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="first-name">First name</Label>
                    <Input id="first-name" placeholder="John" required />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="last-name">Last name</Label>
                    <Input id="last-name" placeholder="Doe" required />
                </div>
            </div>
            <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required />
            </div>
            <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input id="confirm-password" type="password" required />
            </div>

            {/* Freelancer-specific fields */}
            {userType === "freelancer" && (
                <div className="space-y-2">
                    <Label htmlFor="title">Professional Title</Label>
                    <Input id="title" placeholder="e.g. Blockchain Developer" required />
                </div>
            )}

            {/* Business-specific fields */}
            {userType === "business" && (
                <>
                    <div className="space-y-2">
                        <Label htmlFor="company-name">Company Name</Label>
                        <Input
                            id="company-name"
                            placeholder="e.g. TechFusion Ltd"
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="company-size">Company Size</Label>
                        <select
                            id="company-size"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            required
                        >
                            <option value="">Select company size</option>
                            <option value="1-10">1-10 employees</option>
                            <option value="11-50">11-50 employees</option>
                            <option value="51-200">51-200 employees</option>
                            <option value="201-500">201-500 employees</option>
                            <option value="501+">501+ employees</option>
                        </select>
                    </div>
                </>
            )}

            {/* Job Poster-specific fields */}
            {userType === "job-poster" && (
                <>
                    <div className="space-y-2">
                        <Label htmlFor="job-title">Job Title</Label>
                        <Input id="job-title" placeholder="e.g. Project Manager" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="company">Company (Optional)</Label>
                        <Input id="company" placeholder="e.g. InnovateTech" />
                    </div>
                </>
            )}

            <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input id="location" placeholder="e.g. Lagos, Nigeria" required />
            </div>

            <div className="flex items-center space-x-2">
                <Checkbox id="terms" required />
                <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    I agree to the{" "}
                    <Link href="/terms" className="text-nexapurple-700 hover:underline">
                        terms of service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-nexapurple-700 hover:underline">
                        privacy policy
                    </Link>
                </label>
            </div>
            <Button
                type="submit"
                className="w-full bg-nexapurple-700 hover:bg-nexapurple-800"
            >
                Continue
                <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
        </form>
    );
}
