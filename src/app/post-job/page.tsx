"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Upload, X } from "lucide-react";

export default function PostJob() {
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(20);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [budgetRange, setBudgetRange] = useState([500, 5000]);

  const handleNextStep = () => {
    const nextStep = step + 1;
    setStep(nextStep);
    setProgress(nextStep * 20);
  };

  const handlePrevStep = () => {
    const prevStep = step - 1;
    setStep(prevStep);
    setProgress(prevStep * 20);
  };

  const handleSkillSelection = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter((s) => s !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-nexapurple-50 to-white dark:from-nexapurple-950/50 dark:to-background flex items-center justify-center ">
      <div className="container px-4 py-12 mx-auto">
        <div className="flex flex-col gap-5 w-full max-w-5xl mx-auto">
          <div className="flex flex-col gap-3 w-full">
            <h1 className="text-4xl font-bold tracking-tight text-center">
              Post a Job
            </h1>
            <p className="text-muted-foreground text-lg text-center">
              Find the perfect talent for your project
            </p>
            <div className="w-full bg-gray-200 dark:bg-gray-700 h-3 rounded-full mt-4">
              <div
                className="bg-nexapurple-600 h-3 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="flex justify-between mt-1 text-sm text-muted-foreground">
              <span>Step {step} of 5</span>
              <span>{progress}% Complete</span>
            </div>
          </div>

          <Card className="w-full shadow-lg border-nexapurple-100 dark:border-nexapurple-800/30">
            <CardHeader className="py-8 px-8 border-b">
              <CardTitle className="text-2xl">
                {step === 1 && "Basic Information"}
                {step === 2 && "Job Details"}
                {step === 3 && "Skills & Requirements"}
                {step === 4 && "Budget & Timeline"}
                {step === 5 && "Review & Submit"}
              </CardTitle>
              <CardDescription className="text-base mt-2">
                {step === 1 &&
                  "Provide basic information about your job posting"}
                {step === 2 && "Describe the job in detail"}
                {step === 3 && "Specify required skills and experience"}
                {step === 4 && "Set your budget and project timeline"}
                {step === 5 && "Review your job posting before submission"}
              </CardDescription>
            </CardHeader>
            <CardContent className="px-8 py-8 min-h-[500px] flex flex-col justify-between">
              <div className="w-full">
                {step === 1 && (
                  <div className="space-y-6 w-full">
                    <div className="space-y-3">
                      <Label htmlFor="job-title" className="text-base">
                        Job Title
                      </Label>
                      <Input
                        id="job-title"
                        placeholder="e.g. Smart Contract Developer"
                        className="h-12 text-base w-full"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="company-name" className="text-base">
                        Company Name
                      </Label>
                      <Input
                        id="company-name"
                        placeholder="e.g. NexaTech Solutions"
                        className="h-12 text-base w-full"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="job-type" className="text-base">
                        Job Type
                      </Label>
                      <Select defaultValue="full-time">
                        <SelectTrigger className="h-12 text-base w-full">
                          <SelectValue placeholder="Select job type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="full-time">Full-time</SelectItem>
                          <SelectItem value="part-time">Part-time</SelectItem>
                          <SelectItem value="contract">Contract</SelectItem>
                          <SelectItem value="freelance">Freelance</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="location" className="text-base">
                        Location
                      </Label>
                      <Select defaultValue="remote">
                        <SelectTrigger className="h-12 text-base w-full">
                          <SelectValue placeholder="Select location" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="remote">Remote</SelectItem>
                          <SelectItem value="hybrid">Hybrid</SelectItem>
                          <SelectItem value="on-site">On-site</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="category" className="text-base">
                        Category
                      </Label>
                      <Select defaultValue="development">
                        <SelectTrigger className="h-12 text-base w-full">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="development">Development</SelectItem>
                          <SelectItem value="design">Design</SelectItem>
                          <SelectItem value="marketing">Marketing</SelectItem>
                          <SelectItem value="writing">
                            Content & Writing
                          </SelectItem>
                          <SelectItem value="blockchain">
                            Blockchain & Crypto
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-6 w-full">
                    <div className="space-y-2">
                      <Label htmlFor="job-description">Job Description</Label>
                      <Textarea
                        id="job-description"
                        placeholder="Describe the job, responsibilities, and qualifications..."
                        className="min-h-[200px] w-full text-base"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="job-responsibilities">
                        Key Responsibilities
                      </Label>
                      <Textarea
                        id="job-responsibilities"
                        placeholder="List the key responsibilities for this role..."
                        className="min-h-[100px] w-full text-base"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="job-qualifications">Qualifications</Label>
                      <Textarea
                        id="job-qualifications"
                        placeholder="List the required qualifications and experience..."
                        className="min-h-[100px] w-full text-base"
                      />
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-6 w-full">
                    <div className="space-y-2">
                      <Label>Required Skills</Label>
                      <p className="text-sm text-muted-foreground">
                        Select the skills required for this job
                      </p>
                      <Tabs defaultValue="blockchain">
                        <TabsList className="grid grid-cols-4">
                          <TabsTrigger value="blockchain">Blockchain</TabsTrigger>
                          <TabsTrigger value="development"> Development </TabsTrigger>
                          <TabsTrigger value="design">Design</TabsTrigger>
                          <TabsTrigger value="other">Other</TabsTrigger>
                        </TabsList>
                        <TabsContent value="blockchain" className="mt-4">
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                            {blockchainSkills.map((skill) => (
                              <Badge
                                key={skill}
                                variant={
                                  selectedSkills.includes(skill)
                                    ? "default"
                                    : "outline"
                                }
                                className={`cursor-pointer py-2 px-3 ${
                                  selectedSkills.includes(skill)
                                    ? "bg-nexapurple-600 hover:bg-nexapurple-700"
                                    : "hover:bg-nexapurple-100 dark:hover:bg-nexapurple-900/20"
                                }`}
                                onClick={() => handleSkillSelection(skill)}
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </TabsContent>
                        <TabsContent value="development" className="mt-4">
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                            {developmentSkills.map((skill) => (
                              <Badge
                                key={skill}
                                variant={
                                  selectedSkills.includes(skill)
                                    ? "default"
                                    : "outline"
                                }
                                className={`cursor-pointer py-2 px-3 ${
                                  selectedSkills.includes(skill)
                                    ? "bg-nexapurple-600 hover:bg-nexapurple-700"
                                    : "hover:bg-nexapurple-100 dark:hover:bg-nexapurple-900/20"
                                }`}
                                onClick={() => handleSkillSelection(skill)}
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </TabsContent>
                        <TabsContent value="design" className="mt-4">
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                            {designSkills.map((skill) => (
                              <Badge
                                key={skill}
                                variant={
                                  selectedSkills.includes(skill)
                                    ? "default"
                                    : "outline"
                                }
                                className={`cursor-pointer py-2 px-3 ${
                                  selectedSkills.includes(skill)
                                    ? "bg-nexapurple-600 hover:bg-nexapurple-700"
                                    : "hover:bg-nexapurple-100 dark:hover:bg-nexapurple-900/20"
                                }`}
                                onClick={() => handleSkillSelection(skill)}
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </TabsContent>
                        <TabsContent value="other" className="mt-4">
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                            {otherSkills.map((skill) => (
                              <Badge
                                key={skill}
                                variant={
                                  selectedSkills.includes(skill)
                                    ? "default"
                                    : "outline"
                                }
                                className={`cursor-pointer py-2 px-3 ${
                                  selectedSkills.includes(skill)
                                    ? "bg-nexapurple-600 hover:bg-nexapurple-700"
                                    : "hover:bg-nexapurple-100 dark:hover:bg-nexapurple-900/20"
                                }`}
                                onClick={() => handleSkillSelection(skill)}
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </TabsContent>
                      </Tabs>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <Label className="w-full mb-1">Selected Skills:</Label>
                      {selectedSkills.length === 0 && (
                        <span className="text-sm text-muted-foreground">
                          No skills selected
                        </span>
                      )}
                      {selectedSkills.map((skill) => (
                        <Badge
                          key={skill}
                          className="bg-nexapurple-600 pr-1 flex items-center gap-1"
                        >
                          {skill}
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-4 w-4 rounded-full hover:bg-nexapurple-700"
                            onClick={() => handleSkillSelection(skill)}
                          >
                            <X className="h-3 w-3" />
                            <span className="sr-only">Remove</span>
                          </Button>
                        </Badge>
                      ))}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="experience-level">Experience Level</Label>
                      <Select defaultValue="intermediate">
                        <SelectTrigger>
                          <SelectValue placeholder="Select experience level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="entry">Entry Level</SelectItem>
                          <SelectItem value="intermediate">
                            Intermediate
                          </SelectItem>
                          <SelectItem value="expert">Expert</SelectItem>
                          <SelectItem value="senior">Senior Level</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Additional Requirements</Label>
                      <Textarea
                        placeholder="Any other specific requirements..."
                        className="min-h-[100px]"
                      />
                    </div>
                  </div>
                )}

                {step === 4 && (
                  <div className="space-y-6 w-full">
                    <div className="space-y-2">
                      <Label>Budget Range (USD)</Label>
                      <div className="pt-5 pb-2">
                        <Slider
                          defaultValue={[500, 5000]}
                          min={0}
                          max={10000}
                          step={100}
                          value={budgetRange}
                          onValueChange={setBudgetRange}
                        />
                      </div>
                      <div className="flex justify-between">
                        <span>${budgetRange[0]}</span>
                        <span>${budgetRange[1]}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="payment-type">Payment Type</Label>
                        <Select defaultValue="fixed">
                          <SelectTrigger>
                            <SelectValue placeholder="Select payment type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="fixed">Fixed Price</SelectItem>
                            <SelectItem value="hourly">Hourly Rate</SelectItem>
                            <SelectItem value="milestone">
                              Milestone Based
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="duration">Project Duration</Label>
                        <Select defaultValue="1-3">
                          <SelectTrigger>
                            <SelectValue placeholder="Select project duration" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="<1">Less than 1 month</SelectItem>
                            <SelectItem value="1-3">1-3 months</SelectItem>
                            <SelectItem value="3-6">3-6 months</SelectItem>
                            <SelectItem value=">6">6+ months</SelectItem>
                            <SelectItem value="ongoing">Ongoing</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="deadline">Application Deadline</Label>
                      <Input type="date" id="deadline" />
                    </div>

                    <div className="space-y-2">
                      <Label>Attachments (Optional)</Label>
                      <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-6 text-center">
                        <Upload className="h-8 w-8 mx-auto mb-2 text-gray-400" />
                        <p className="text-sm text-muted-foreground mb-1">
                          Drag & drop files here, or click to browse
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Max file size: 10MB. Supported formats: PDF, DOC, DOCX,
                          PNG, JPG
                        </p>
                        <Button variant="outline" size="sm" className="mt-4">
                          Browse Files
                        </Button>
                      </div>
                    </div>
                  </div>
                )}

                {step === 5 && (
                  <div className="space-y-6 w-full">
                    <div className="rounded-lg border p-4 space-y-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium text-lg">
                            Smart Contract Developer
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            NexaTech Solutions • Remote • Full-time
                          </p>
                        </div>
                        <Badge>Development</Badge>
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-medium">Description</h4>
                        <p className="text-sm text-muted-foreground">
                          We&apos;re looking for an experienced Smart Contract
                          Developer to join our team. The ideal candidate will
                          have strong experience with Solidity and blockchain
                          technologies...
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium">Skills</h4>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {[
                            "Solidity",
                            "Ethereum",
                            "Smart Contracts",
                            "Web3.js",
                            "DeFi",
                          ].map((skill) => (
                            <Badge variant="outline" key={skill}>
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 mt-2">
                        <div>
                          <h4 className="font-medium">Budget</h4>
                          <p className="text-sm">$500 - $5,000</p>
                        </div>
                        <div>
                          <h4 className="font-medium">Duration</h4>
                          <p className="text-sm">1-3 months</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="visibility">Job Visibility</Label>
                      <Select defaultValue="public">
                        <SelectTrigger>
                          <SelectValue placeholder="Select visibility" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="public">
                            Public - Visible to all freelancers
                          </SelectItem>
                          <SelectItem value="invite">
                            Private - Invite only
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Candidate Preferences</Label>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            id="verified"
                            className="rounded"
                          />
                          <Label
                            htmlFor="verified"
                            className="text-sm font-normal cursor-pointer"
                          >
                            Show only verified freelancers
                          </Label>
                        </div>
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            id="ratings"
                            className="rounded"
                          />
                          <Label
                            htmlFor="ratings"
                            className="text-sm font-normal cursor-pointer"
                          >
                            Minimum 4+ star rating
                          </Label>
                        </div>
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            id="experience"
                            className="rounded"
                          />
                          <Label
                            htmlFor="experience"
                            className="text-sm font-normal cursor-pointer"
                          >
                            At least 2 years of experience
                          </Label>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between py-6 px-8 border-t">
              {step > 1 && (
                <Button
                  variant="outline"
                  onClick={handlePrevStep}
                  className="h-12 px-6 text-base"
                >
                  Previous
                </Button>
              )}
              {step === 1 && <div />}
              {step < 5 ? (
                <Button
                  className="bg-nexapurple-600 hover:bg-nexapurple-700 h-12 px-8 text-base"
                  onClick={handleNextStep}
                >
                  Continue
                </Button>
              ) : (
                <Button className="bg-nexapurple-600 hover:bg-nexapurple-700 h-12 px-8 text-base">
                  Post Job
                </Button>
              )}
            </CardFooter>
          </Card>

          {step === 5 && (
            <div className="w-full">
              <Card className="w-full shadow-md bg-nexapurple-50 dark:bg-nexapurple-950/30 border-nexapurple-100 dark:border-nexapurple-800/30">
                <CardContent className="pt-8 px-8 pb-6">
                  <div className="space-y-2">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-xl">
                          What happens next?
                        </h3>
                        <p className="text-base text-muted-foreground mt-2">
                          After posting your job, you&apos;ll start receiving
                          applications from qualified freelancers. You can
                          review their profiles, portfolios, and ratings to find
                          the perfect match for your project.
                        </p>
                      </div>
                    </div>
                    <div className="mt-6 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-nexapurple-100 dark:bg-nexapurple-900/30 text-nexapurple-700 dark:text-nexapurple-400 text-sm font-medium">
                          1
                        </div>
                        <span className="text-base">
                          Review applications from qualified freelancers
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-nexapurple-100 dark:bg-nexapurple-900/30 text-nexapurple-700 dark:text-nexapurple-400 text-sm font-medium">
                          2
                        </div>
                        <span className="text-base">
                          Interview top candidates
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-nexapurple-100 dark:bg-nexapurple-900/30 text-nexapurple-700 dark:text-nexapurple-400 text-sm font-medium">
                          3
                        </div>
                        <span className="text-base">
                          Hire the best talent and begin your project
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const blockchainSkills = [
  "Solidity",
  "Ethereum",
  "Smart Contracts",
  "Web3.js",
  "DeFi",
  "NFTs",
  "Crypto",
  "Blockchain",
  "Rust",
  "Solana",
  "ERC-20",
  "ERC-721",
];

const developmentSkills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Python",
  "Java",
  "C++",
  "Go",
  "Rust",
  "AWS",
  "Docker",
  "Kubernetes",
];

const designSkills = [
  "UI/UX",
  "Figma",
  "Adobe XD",
  "Sketch",
  "Web Design",
  "Mobile Design",
  "Graphic Design",
  "Illustration",
  "3D Modeling",
  "Animation",
  "Motion Graphics",
  "Branding",
];

const otherSkills = [
  "Content Writing",
  "Technical Writing",
  "Marketing",
  "SEO",
  "Social Media",
  "Project Management",
  "Data Analysis",
  "Research",
  "Customer Support",
  "Legal",
  "Finance",
  "Translation",
];
