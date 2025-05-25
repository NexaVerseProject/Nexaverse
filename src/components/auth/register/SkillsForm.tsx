import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { SkillCheckbox } from "./SkillCheckbox";
import type { UserType } from "@/types/auth";

interface SkillsFormProps {
  userType: UserType;
  onSubmit: (e: React.FormEvent) => void;
}

export function SkillsForm({ userType, onSubmit }: SkillsFormProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {/* Freelancer-specific form */}
      {userType === "freelancer" && (
        <>
          <div className="space-y-2">
            <Label htmlFor="skills">Skills</Label>
            <Tabs defaultValue="development">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="development">Dev</TabsTrigger>
                <TabsTrigger value="design">Design</TabsTrigger>
                <TabsTrigger value="writing">Writing</TabsTrigger>
                <TabsTrigger value="other">Other</TabsTrigger>
              </TabsList>
              <TabsContent value="development" className="space-y-4 mt-4">
                <div className="grid grid-cols-2 gap-2">
                  <SkillCheckbox id="solidity" label="Solidity" />
                  <SkillCheckbox id="rust" label="Rust" />
                  <SkillCheckbox id="react" label="React" />
                  <SkillCheckbox id="web3js" label="Web3.js" />
                  <SkillCheckbox id="ethereum" label="Ethereum" />
                  <SkillCheckbox id="solana" label="Solana" />
                </div>
              </TabsContent>
              <TabsContent value="design" className="space-y-4 mt-4">
                <div className="grid grid-cols-2 gap-2">
                  <SkillCheckbox id="ui-design" label="UI Design" />
                  <SkillCheckbox id="ux-design" label="UX Design" />
                  <SkillCheckbox id="figma" label="Figma" />
                  <SkillCheckbox id="web3-design" label="Web3 Design" />
                </div>
              </TabsContent>
              <TabsContent value="writing" className="space-y-4 mt-4">
                <div className="grid grid-cols-2 gap-2">
                  <SkillCheckbox id="whitepaper" label="Whitepaper" />
                  <SkillCheckbox id="technical" label="Technical Writing" />
                  <SkillCheckbox id="content" label="Content Creation" />
                  <SkillCheckbox id="tokenomics" label="Tokenomics" />
                </div>
              </TabsContent>
              <TabsContent value="other" className="space-y-4 mt-4">
                <div className="grid grid-cols-2 gap-2">
                  <SkillCheckbox id="marketing" label="Marketing" />
                  <SkillCheckbox id="community" label="Community Management" />
                  <SkillCheckbox id="project" label="Project Management" />
                  <SkillCheckbox id="consulting" label="Consulting" />
                </div>
              </TabsContent>
            </Tabs>
          </div>
          <div className="space-y-2">
            <Label htmlFor="experience">Experience Level</Label>
            <Tabs defaultValue="intermediate">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="beginner">Beginner</TabsTrigger>
                <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
                <TabsTrigger value="expert">Expert</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          <div className="space-y-2">
            <Label htmlFor="bio">Bio</Label>
            <Textarea
              id="bio"
              placeholder="Tell us about yourself and your experience..."
              className="min-h-[100px]"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="portfolio">Portfolio URL (optional)</Label>
            <Input
              id="portfolio"
              type="url"
              placeholder="https://yourportfolio.com"
            />
          </div>
        </>
      )}

      {/* Business-specific form */}
      {userType === "business" && (
        <>
          <div className="space-y-2">
            <Label htmlFor="business-type">Business Type</Label>
            <select
              id="business-type"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              required
            >
              <option value="">Select business type</option>
              <option value="startup">Startup</option>
              <option value="small-business">Small Business</option>
              <option value="enterprise">Enterprise</option>
              <option value="agency">Agency</option>
              <option value="non-profit">Non-Profit</option>
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="industry">Industry</Label>
            <select
              id="industry"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              required
            >
              <option value="">Select industry</option>
              <option value="blockchain">Blockchain & Crypto</option>
              <option value="fintech">FinTech</option>
              <option value="software">Software Development</option>
              <option value="ecommerce">E-Commerce</option>
              <option value="healthcare">Healthcare</option>
              <option value="education">Education</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="company-description">Company Description</Label>
            <Textarea
              id="company-description"
              placeholder="Tell us about your company and what you do..."
              className="min-h-[100px]"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="website">Company Website (optional)</Label>
            <Input
              id="website"
              type="url"
              placeholder="https://yourcompany.com"
            />
          </div>
        </>
      )}

      {/* Job Poster-specific form */}
      {userType === "job-poster" && (
        <>
          <div className="space-y-2">
            <Label htmlFor="hiring-for">Typically Hiring For</Label>
            <div className="grid grid-cols-2 gap-2">
              <SkillCheckbox id="developers" label="Developers" />
              <SkillCheckbox id="designers" label="Designers" />
              <SkillCheckbox id="writers" label="Content Writers" />
              <SkillCheckbox id="marketers" label="Marketers" />
              <SkillCheckbox id="consultants" label="Consultants" />
              <SkillCheckbox id="project-managers" label="Project Managers" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="typical-budget">Typical Project Budget</Label>
            <select
              id="typical-budget"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              required
            >
              <option value="">Select typical budget</option>
              <option value="under-1000">Under $1,000</option>
              <option value="1000-5000">$1,000 - $5,000</option>
              <option value="5000-10000">$5,000 - $10,000</option>
              <option value="10000-50000">$10,000 - $50,000</option>
              <option value="over-50000">Over $50,000</option>
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="job-poster-bio">About You</Label>
            <Textarea
              id="job-poster-bio"
              placeholder="Tell us about yourself and what kind of projects you typically work on..."
              className="min-h-[100px]"
            />
          </div>
        </>
      )}

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
