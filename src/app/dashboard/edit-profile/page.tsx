"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { TabsContent } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Camera, Save, Upload } from "lucide-react"
import DashboardLayout from "@/components/dashboard/dashboard-layout"
import { ProfileTabs } from "@/components/profile/profile-tabs"

export default function EditProfile() {
  const router = useRouter()
  const [userType, setUserType] = useState<"freelancer" | "business" | "job-poster" | null>(null)
  const [activeTab, setActiveTab] = useState("basic")
  const [selectedSkills, setSelectedSkills] = useState<string[]>([])

  // Mock user data for different user types
  const userData = {
    freelancer: {
      name: "Alex Johnson",
      title: "Blockchain Developer",
      email: "alex@example.com",
      location: "Lagos, Nigeria",
      bio: "Experienced blockchain developer specializing in smart contracts and DeFi applications. Passionate about building decentralized solutions for real-world problems.",
      skills: ["Solidity", "Ethereum", "Smart Contracts", "DeFi", "Web3.js", "React", "Node.js"],
      hourlyRate: 75,
      availability: "full-time",
      languages: ["English", "French"],
      education: [
        {
          degree: "BSc Computer Science",
          institution: "University of Lagos",
          year: "2018",
        },
      ],
      experience: [
        {
          title: "Blockchain Developer",
          company: "DeFi Solutions",
          from: "2020",
          to: "Present",
          description: "Developing smart contracts and DeFi applications",
        },
      ],
    },
    business: {
      name: "TechFusion Ltd",
      title: "Blockchain Solutions Company",
      email: "contact@techfusion.com",
      location: "Nairobi, Kenya",
      bio: "TechFusion is a leading blockchain solutions provider specializing in DeFi, NFTs, and enterprise blockchain applications. We're building the future of decentralized technology in Africa.",
      industry: "Blockchain & Technology",
      employees: "10-50",
      website: "techfusion.com",
      founded: "2019",
      services: ["Smart Contract Development", "DeFi Solutions", "Blockchain Consulting"],
    },
    "job-poster": {
      name: "Sarah Williams",
      title: "Project Manager",
      email: "sarah@example.com",
      location: "Cape Town, South Africa",
      bio: "Project manager with 7+ years of experience in tech and blockchain projects. Looking for talented developers to help build innovative solutions.",
      company: "InnovateTech",
      position: "Senior Project Manager",
      hiringFrequency: "Regular",
      preferredSkills: ["Solidity", "React", "Node.js", "UI/UX Design"],
    },
  }

  useEffect(() => {
    // Get user type from localStorage or set a default
    const savedUserType = localStorage.getItem("user_type") as "freelancer" | "business" | "job-poster" | null
    setUserType(savedUserType || "freelancer")

    // Set initial selected skills based on user type
    if (savedUserType === "freelancer") {
      setSelectedSkills(userData.freelancer.skills)
    } else if (savedUserType === "job-poster") {
      setSelectedSkills(userData["job-poster"].preferredSkills)
    }
  }, [])

  const handleSaveProfile = () => {
    // In a real app, this would save the profile data to the backend
    // For demo purposes, we'll just redirect back to the profile page
    router.push("/dashboard/profile")
  }

  const handleSkillToggle = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter((s) => s !== skill))
    } else {
      setSelectedSkills([...selectedSkills, skill])
    }
  }

  // If user type is not set yet, show loading
  if (!userType) {
    return (
      <DashboardLayout>
        <div className="container mx-auto p-4 flex items-center justify-center h-[60vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-nexapurple-700 mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading profile editor...</p>
          </div>
        </div>
      </DashboardLayout>
    )
  }

  return (
    <DashboardLayout>
      <div className="container mx-auto p-4 space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h1 className="text-3xl font-bold">Edit Profile</h1>

          {/* User type indicator */}
          <Badge
            variant="outline"
            className="bg-nexapurple-100 text-nexapurple-700 border-nexapurple-200 dark:bg-nexapurple-900/30 dark:text-nexapurple-400 dark:border-nexapurple-800/30"
          >
            {userType === "freelancer"
              ? "Freelancer Account"
              : userType === "business"
                ? "Business Account"
                : "Job Poster Account"}
          </Badge>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Edit Your Profile</CardTitle>
            <CardDescription>Update your profile information and settings</CardDescription>
          </CardHeader>
          <CardContent>
            <ProfileTabs defaultTab="basic" onTabChange={setActiveTab}>
              <TabsContent value="basic" className="space-y-4 ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2 py-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      defaultValue={
                        userType === "freelancer"
                          ? userData.freelancer.name
                          : userType === "business"
                            ? userData.business.name
                            : userData["job-poster"].name
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      defaultValue={
                        userType === "freelancer"
                          ? userData.freelancer.email
                          : userType === "business"
                            ? userData.business.email
                            : userData["job-poster"].email
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="title">
                      {userType === "freelancer"
                        ? "Professional Title"
                        : userType === "business"
                          ? "Company Title"
                          : "Job Title"}
                    </Label>
                    <Input
                      id="title"
                      defaultValue={
                        userType === "freelancer"
                          ? userData.freelancer.title
                          : userType === "business"
                            ? userData.business.title
                            : userData["job-poster"].title
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      defaultValue={
                        userType === "freelancer"
                          ? userData.freelancer.location
                          : userType === "business"
                            ? userData.business.location
                            : userData["job-poster"].location
                      }
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    className="min-h-[150px]"
                    defaultValue={
                      userType === "freelancer"
                        ? userData.freelancer.bio
                        : userType === "business"
                          ? userData.business.bio
                          : userData["job-poster"].bio
                    }
                  />
                </div>
              </TabsContent>

              {/* Profile Photo Tab - Common for all user types */}
              <TabsContent value="photo" className="space-y-4 h-15">
                <div className="flex flex-col items-center space-y-4">
                  <Avatar className="h-32 w-32 border-4 border-background">
                    <AvatarImage src="/placeholder.svg?height=128&width=128" alt="Profile" />
                    <AvatarFallback className="text-2xl">
                      {userType === "freelancer"
                        ? userData.freelancer.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")
                        : userType === "business"
                          ? userData.business.name.split(" ")[0][0] + (userData.business.name.split(" ")[1]?.[0] || "")
                          : userData["job-poster"].name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex gap-4">
                    <Button className="bg-nexapurple-700 hover:bg-nexapurple-800">
                      <Upload className="mr-2 h-4 w-4" />
                      Upload Photo
                    </Button>
                    <Button variant="outline">
                      <Camera className="mr-2 h-4 w-4" />
                      Take Photo
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Recommended: Square image, at least 400x400 pixels, less than 2MB
                  </p>
                </div>
              </TabsContent>

              {/* Preferences Tab */}
              <TabsContent value="preferences" className="space-y-4">
                <div className="space-y-2">
                  <Label>Your Skills</Label>
                  <p className="text-sm text-muted-foreground">Select all the skills you possess</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
                    {allSkills.map((skill) => (
                      <div key={skill} className="flex items-center space-x-2">
                        <Checkbox
                          id={`skill-${skill}`}
                          checked={selectedSkills.includes(skill)}
                          onCheckedChange={() => handleSkillToggle(skill)}
                        />
                        <label
                          htmlFor={`skill-${skill}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {skill}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="hourly-rate">Hourly Rate (USD)</Label>
                  <Input
                    id="hourly-rate"
                    type="number"
                    min="0"
                    defaultValue={userType === "freelancer" ? userData.freelancer.hourlyRate : ""}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="availability">Availability</Label>
                  <Select defaultValue={userType === "freelancer" ? userData.freelancer.availability : ""}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select availability" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="full-time">Full Time (40+ hrs/week)</SelectItem>
                      <SelectItem value="part-time">Part Time (20-30 hrs/week)</SelectItem>
                      <SelectItem value="limited">Limited (10-20 hrs/week)</SelectItem>
                      <SelectItem value="not-available">Not Available</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </TabsContent>

              {/* Company Info Tab */}
              <TabsContent value="company" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company-name">Company Name</Label>
                    <Input
                      id="company-name"
                      defaultValue={
                        userType === "business"
                          ? userData.business.name
                          : userType === "job-poster"
                            ? userData["job-poster"].company
                            : ""
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="industry">Industry</Label>
                    <Input id="industry" defaultValue={userType === "business" ? userData.business.industry : ""} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="website">Website</Label>
                    <Input id="website" defaultValue={userType === "business" ? userData.business.website : ""} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="founded">Founded Year</Label>
                    <Input id="founded" defaultValue={userType === "business" ? userData.business.founded : ""} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company-bio">Company Description</Label>
                  <Textarea
                    id="company-bio"
                    className="min-h-[150px]"
                    defaultValue={userType === "business" ? userData.business.bio : ""}
                  />
                </div>
              </TabsContent>
            </ProfileTabs>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={() => router.push("/dashboard/profile")}>
              Cancel
            </Button>
            <Button className="bg-nexapurple-700 hover:bg-nexapurple-800" onClick={handleSaveProfile}>
              <Save className="mr-2 h-4 w-4" />
              Save Profile
            </Button>
          </CardFooter>
        </Card>
      </div>
    </DashboardLayout>
  )
}

// All skills for selection
const allSkills = [
  "Solidity",
  "Ethereum",
  "Smart Contracts",
  "DeFi",
  "Web3.js",
  "React",
  "Node.js",
  "JavaScript",
  "TypeScript",
  "Python",
  "Rust",
  "Blockchain",
  "NFTs",
  "UI/UX Design",
  "Graphic Design",
  "Content Writing",
  "Technical Writing",
  "Project Management",
  "Marketing",
  "Community Management",
]
