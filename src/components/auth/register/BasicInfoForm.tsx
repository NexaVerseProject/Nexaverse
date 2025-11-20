import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import type { UserType } from "@/types/auth";

interface BasicInfoFormProps {
  userType: UserType;
  onSubmit: (e: React.FormEvent) => void;
}

export function BasicInfoForm({ userType }: BasicInfoFormProps) {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    title: "",
    companyName: "",
    companySize: "",
    jobTitle: "",
    company: "",
    location: "",
    terms: false,
  });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Conditional fields based on userType
    const payload = {
      ...formData,
      ...(userType === "freelancer" && { title: formData.title }),
      ...(userType === "business" && { companyName: formData.companyName, companySize: formData.companySize }),
      ...(userType === "job-poster" && { jobTitle: formData.jobTitle, company: formData.company }),
    };

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      // const data = await response.json();
      // show success message
      // console.log("Registration successful:", data);
      await response.json(); // Consume the body
      // Handle error response
    } catch (error) {
      console.error("Error during registration:", error);
      
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="first-name">First name</Label>
          <Input
            id="first-name"
            name="firstName"
            placeholder="John"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="last-name">Last name</Label>
          <Input
            id="last-name"
            name="lastName"
            placeholder="Doe"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          name="email"
          placeholder="john@example.com"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="confirm-password">Confirm Password</Label>
        <Input
          id="confirm-password"
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
      </div>

      {/* Freelancer-specific fields */}
      {userType === "freelancer" && (
        <div className="space-y-2">
          <Label htmlFor="title">Professional Title</Label>
          <Input
            id="title"
            name="title"
            placeholder="e.g. Blockchain Developer"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
      )}

      {/* Business-specific fields */}
      {userType === "business" && (
        <>
          <div className="space-y-2">
            <Label htmlFor="company-name">Company Name</Label>
            <Input
              id="company-name"
              name="companyName"
              placeholder="e.g. TechFusion Ltd"
              value={formData.companyName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company-size">Company Size</Label>
            <select
              id="company-size"
              name="companySize"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              value={formData.companySize}
              onChange={handleChange}
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
            <Input
              id="job-title"
              name="jobTitle"
              placeholder="e.g. Project Manager"
              value={formData.jobTitle}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company">Company (Optional)</Label>
            <Input
              id="company"
              name="company"
              placeholder="e.g. InnovateTech"
              value={formData.company}
              onChange={handleChange}
            />
          </div>
        </>
      )}

      <div className="space-y-2">
        <Label htmlFor="location">Location</Label>
        <Input
          id="location"
          name="location"
          placeholder="e.g. Lagos, Nigeria"
          value={formData.location}
          onChange={handleChange}
          required
        />
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="terms"
          name="terms"
          checked={formData.terms}
          onCheckedChange={(checked) =>
            setFormData((prev) => ({ ...prev, terms: checked as boolean }))
          }
          required
        />
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