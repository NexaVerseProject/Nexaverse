"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Edit,
  Mail,
  MapPin,
  Briefcase,
  Calendar,
  Star,
  Award,
  Shield,
  ChevronRight,
} from "lucide-react";
import DashboardLayout from "@/components/dashboard/dashboard-layout";

export default function ProfilePage() {
  const router = useRouter();
  const [userType, setUserType] = useState<
    "freelancer" | "business" | "job-poster" | null
  >(null);

  // Mock user data for different user types
  const userData = {
    freelancer: {
      name: "Alex Johnson",
      title: "Blockchain Developer",
      email: "alex@example.com",
      location: "Lagos, Nigeria",
      bio: "Experienced blockchain developer specializing in smart contracts and DeFi applications. Passionate about building decentralized solutions for real-world problems.",
      skills: [
        "Solidity",
        "Ethereum",
        "Smart Contracts",
        "DeFi",
        "Web3.js",
        "React",
        "Node.js",
      ],
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
      completedJobs: 24,
      rating: 4.9,
      reviews: 18,
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
      services: [
        "Smart Contract Development",
        "DeFi Solutions",
        "Blockchain Consulting",
      ],
      activeJobs: 5,
      hiredFreelancers: 12,
      completedProjects: 28,
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
      activeJobs: 3,
      totalJobsPosted: 15,
      hiredFreelancers: 8,
    },
  };

  useEffect(() => {
    // Get user type from localStorage or set a default
    const savedUserType = localStorage.getItem("user_type") as
      | "freelancer"
      | "business"
      | "job-poster"
      | null;
    setUserType(savedUserType || "freelancer");
  }, []);

  const handleEditProfile = () => {
    router.push("/dashboard/edit-profile");
  };

  // If user type is not set yet, show loading
  if (!userType) {
    return (
      <DashboardLayout>
        <div className="container mx-auto p-4 flex items-center justify-center h-[60vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-nexapurple-700 mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading profile...</p>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="container mx-auto p-4 space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h1 className="text-3xl font-bold">My Profile</h1>
          <Button
            onClick={handleEditProfile}
            className="bg-nexapurple-700 hover:bg-nexapurple-800 text-white"
          >
            <Edit className="mr-2 h-4 w-4" />
            Edit Profile
          </Button>
        </div>

        {/* Profile Overview Card */}
        <Card>
          <CardHeader className="pb-4">
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
              <Avatar className="h-24 w-24 border-4 border-background">
                <AvatarImage
                  src="/placeholder.svg?height=96&width=96"
                  alt="Profile"
                />
                <AvatarFallback className="text-2xl">
                  {userType === "freelancer"
                    ? userData.freelancer.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                    : userType === "business"
                    ? userData.business.name.split(" ")[0][0] +
                      (userData.business.name.split(" ")[1]?.[0] || "")
                    : userData["job-poster"].name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="space-y-1 flex-1">
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                  <h2 className="text-2xl font-bold">
                    {userType === "freelancer"
                      ? userData.freelancer.name
                      : userType === "business"
                      ? userData.business.name
                      : userData["job-poster"].name}
                  </h2>
                  <Badge
                    variant="outline"
                    className="bg-nexapurple-100 text-nexapurple-700 border-nexapurple-200 dark:bg-nexapurple-900/30 dark:text-nexapurple-400 dark:border-nexapurple-800/30 w-fit"
                  >
                    {userType === "freelancer"
                      ? "Freelancer"
                      : userType === "business"
                      ? "Business"
                      : "Job Poster"}
                  </Badge>
                </div>
                <p className="text-lg text-muted-foreground">
                  {userType === "freelancer"
                    ? userData.freelancer.title
                    : userType === "business"
                    ? userData.business.title
                    : userData["job-poster"].title}
                </p>
                <div className="flex flex-wrap gap-3 mt-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Mail className="h-4 w-4 mr-1" />
                    {userType === "freelancer"
                      ? userData.freelancer.email
                      : userType === "business"
                      ? userData.business.email
                      : userData["job-poster"].email}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-1" />
                    {userType === "freelancer"
                      ? userData.freelancer.location
                      : userType === "business"
                      ? userData.business.location
                      : userData["job-poster"].location}
                  </div>
                  {userType === "freelancer" && (
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Briefcase className="h-4 w-4 mr-1" />
                      {userData.freelancer.availability}
                    </div>
                  )}
                  {userType === "business" && (
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Briefcase className="h-4 w-4 mr-1" />
                      {userData.business.industry}
                    </div>
                  )}
                  {userType === "job-poster" && (
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Briefcase className="h-4 w-4 mr-1" />
                      {userData["job-poster"].company}
                    </div>
                  )}
                </div>
              </div>
              <div className="flex flex-row md:flex-col gap-4 md:gap-2 md:text-right">
                {userType === "freelancer" && (
                  <>
                    <div>
                      <div className="text-2xl font-bold text-nexapurple-600">
                        ${userData.freelancer.hourlyRate}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Hourly Rate
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-end">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                        <span className="font-bold">
                          {userData.freelancer.rating}
                        </span>
                        <span className="text-sm text-muted-foreground ml-1">
                          ({userData.freelancer.reviews})
                        </span>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Rating
                      </div>
                    </div>
                  </>
                )}
                {userType === "business" && (
                  <>
                    <div>
                      <div className="text-2xl font-bold text-nexapurple-600">
                        {userData.business.activeJobs}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Active Jobs
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-nexapurple-600">
                        {userData.business.completedProjects}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Completed Projects
                      </div>
                    </div>
                  </>
                )}
                {userType === "job-poster" && (
                  <>
                    <div>
                      <div className="text-2xl font-bold text-nexapurple-600">
                        {userData["job-poster"].activeJobs}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Active Jobs
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-nexapurple-600">
                        {userData["job-poster"].totalJobsPosted}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Total Jobs Posted
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">About</h3>
                <p className="text-muted-foreground">
                  {userType === "freelancer"
                    ? userData.freelancer.bio
                    : userType === "business"
                    ? userData.business.bio
                    : userData["job-poster"].bio}
                </p>
              </div>

              {userType === "freelancer" && (
                <div>
                  <h3 className="text-lg font-semibold mb-2">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {userData.freelancer.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {userType === "business" && (
                <div>
                  <h3 className="text-lg font-semibold mb-2">Services</h3>
                  <div className="flex flex-wrap gap-2">
                    {userData.business.services.map((service) => (
                      <Badge key={service} variant="secondary">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {userType === "job-poster" && (
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Preferred Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {userData["job-poster"].preferredSkills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Profile Tabs */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-fit grid-cols-3 md:w-auto md:inline-flex h-15">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            {userType === "freelancer" && (
              <>
                <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </>
            )}
            {userType === "business" && (
              <>
                <TabsTrigger value="jobs">Jobs</TabsTrigger>
                <TabsTrigger value="team">Team</TabsTrigger>
              </>
            )}
            {userType === "job-poster" && (
              <>
                <TabsTrigger value="jobs">Jobs</TabsTrigger>
                <TabsTrigger value="hires">Hires</TabsTrigger>
              </>
            )}
          </TabsList>
          <TabsContent value="overview" className="space-y-6 mt-6">
            {userType === "freelancer" && (
              <>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Award className="h-5 w-5 mr-2 text-nexapurple-600" />
                      Experience
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {userData.freelancer.experience.map((exp, index) => (
                        <div
                          key={index}
                          className="border-l-2 border-nexapurple-200 pl-4 pb-4"
                        >
                          <div className="flex justify-between">
                            <h4 className="font-semibold">{exp.title}</h4>
                            <span className="text-sm text-muted-foreground">
                              {exp.from} - {exp.to}
                            </span>
                          </div>
                          <div className="text-muted-foreground">
                            {exp.company}
                          </div>
                          <p className="mt-2 text-sm">{exp.description}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Briefcase className="h-5 w-5 mr-2 text-nexapurple-600" />
                      Education
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {userData.freelancer.education.map((edu, index) => (
                        <div
                          key={index}
                          className="border-l-2 border-nexapurple-200 pl-4 pb-4"
                        >
                          <div className="flex justify-between">
                            <h4 className="font-semibold">{edu.degree}</h4>
                            <span className="text-sm text-muted-foreground">
                              {edu.year}
                            </span>
                          </div>
                          <div className="text-muted-foreground">
                            {edu.institution}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </>
            )}
            {userType === "business" && (
              <>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Briefcase className="h-5 w-5 mr-2 text-nexapurple-600" />
                      Company Details
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-sm text-muted-foreground">
                          Industry
                        </h4>
                        <p>{userData.business.industry}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-muted-foreground">
                          Founded
                        </h4>
                        <p>{userData.business.founded}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-muted-foreground">
                          Company Size
                        </h4>
                        <p>{userData.business.employees} employees</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-muted-foreground">
                          Website
                        </h4>
                        <p>{userData.business.website}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Shield className="h-5 w-5 mr-2 text-nexapurple-600" />
                      Hiring Stats
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-nexapurple-50 dark:bg-nexapurple-900/20 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-nexapurple-600">
                          {userData.business.activeJobs}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Active Jobs
                        </div>
                      </div>
                      <div className="bg-nexapurple-50 dark:bg-nexapurple-900/20 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-nexapurple-600">
                          {userData.business.hiredFreelancers}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Freelancers Hired
                        </div>
                      </div>
                      <div className="bg-nexapurple-50 dark:bg-nexapurple-900/20 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-nexapurple-600">
                          {userData.business.completedProjects}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Completed Projects
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </>
            )}
            {userType === "job-poster" && (
              <>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Briefcase className="h-5 w-5 mr-2 text-nexapurple-600" />
                      Job Posting Stats
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-nexapurple-50 dark:bg-nexapurple-900/20 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-nexapurple-600">
                          {userData["job-poster"].activeJobs}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Active Jobs
                        </div>
                      </div>
                      <div className="bg-nexapurple-50 dark:bg-nexapurple-900/20 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-nexapurple-600">
                          {userData["job-poster"].totalJobsPosted}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Total Jobs Posted
                        </div>
                      </div>
                      <div className="bg-nexapurple-50 dark:bg-nexapurple-900/20 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-nexapurple-600">
                          {userData["job-poster"].hiredFreelancers}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Freelancers Hired
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Calendar className="h-5 w-5 mr-2 text-nexapurple-600" />
                      Company Details
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-sm text-muted-foreground">
                          Company
                        </h4>
                        <p>{userData["job-poster"].company}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-muted-foreground">
                          Position
                        </h4>
                        <p>{userData["job-poster"].position}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-muted-foreground">
                          Hiring Frequency
                        </h4>
                        <p>{userData["job-poster"].hiringFrequency}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </>
            )}
          </TabsContent>
          <TabsContent value="portfolio" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Portfolio Projects</CardTitle>
                <CardDescription>Showcase of your best work</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div
                      key={item}
                      className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow group"
                    >
                      <div className="aspect-video bg-muted relative">
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button variant="secondary" size="sm">
                            View Project
                          </Button>
                        </div>
                      </div>
                      <div className="p-3">
                        <h4 className="font-medium">Project Title {item}</h4>
                        <p className="text-sm text-muted-foreground">
                          DeFi Application
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Add New Project
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="reviews" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Client Reviews</CardTitle>
                <CardDescription>
                  What clients say about your work
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div className="flex items-start gap-3">
                          <Avatar className="h-10 w-10">
                            <AvatarFallback>CL</AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="font-medium">Client Name</h4>
                            <p className="text-sm text-muted-foreground">
                              Project: DeFi Dashboard
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        </div>
                      </div>
                      <p className="mt-3 text-sm">
                        &quot;Excellent work! Delivered the project on time and
                        exceeded my expectations. Very knowledgeable about
                        blockchain technology and smart contracts.&quot;
                      </p>
                      <div className="mt-2 text-xs text-muted-foreground">
                        June 15, 2023
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="jobs" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>
                  {userType === "business" || userType === "job-poster"
                    ? "Your Job Postings"
                    : "Applied Jobs"}
                </CardTitle>
                <CardDescription>
                  {userType === "business" || userType === "job-poster"
                    ? "Manage your active job listings"
                    : "Jobs you've applied to"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((item) => (
                    <div
                      key={item}
                      className="border rounded-lg p-4 hover:shadow-sm transition-shadow"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium">
                            Senior Blockchain Developer
                          </h4>
                          <div className="flex items-center text-sm text-muted-foreground mt-1">
                            <Briefcase className="h-4 w-4 mr-1" />
                            {userType === "business" ||
                            userType === "job-poster"
                              ? "Posted 2 weeks ago"
                              : "Applied 1 week ago"}
                          </div>
                        </div>
                        <Badge variant={item === 1 ? "default" : "outline"}>
                          {item === 1 ? "Active" : "Closed"}
                        </Badge>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-3">
                        <Badge variant="secondary">Solidity</Badge>
                        <Badge variant="secondary">Smart Contracts</Badge>
                        <Badge variant="secondary">DeFi</Badge>
                      </div>
                      <div className="flex justify-between items-center mt-4">
                        <div className="text-sm">
                          <span className="font-medium">
                            ${(75 + item * 10).toFixed(2)}
                          </span>
                          <span className="text-muted-foreground"> / hour</span>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex items-center"
                        >
                          {userType === "business" || userType === "job-poster"
                            ? "View Applicants"
                            : "View Details"}
                          <ChevronRight className="h-4 w-4 ml-1" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full bg-nexapurple-700 hover:bg-nexapurple-800 text-white"
                  onClick={() =>
                    router.push(
                      userType === "business" || userType === "job-poster"
                        ? "/dashboard/post-job"
                        : "/marketplace"
                    )
                  }
                >
                  {userType === "business" || userType === "job-poster"
                    ? "Post New Job"
                    : "Find More Jobs"}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="team" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Team Members</CardTitle>
                <CardDescription>
                  People who represent your company
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[1, 2, 3, 4].map((item) => (
                    <div
                      key={item}
                      className="border rounded-lg p-4 hover:shadow-sm transition-shadow"
                    >
                      <div className="flex items-start gap-3">
                        <Avatar className="h-12 w-12">
                          <AvatarFallback>TM</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-medium">Team Member {item}</h4>
                          <p className="text-sm text-muted-foreground">
                            {item === 1
                              ? "CTO"
                              : item === 2
                              ? "Lead Developer"
                              : item === 3
                              ? "Product Manager"
                              : "UI/UX Designer"}
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            member{item}@example.com
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Add Team Member
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="hires" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Hired Freelancers</CardTitle>
                <CardDescription>
                  Freelancers you&apos;ve worked with
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((item) => (
                    <div
                      key={item}
                      className="border rounded-lg p-4 hover:shadow-sm transition-shadow"
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex items-start gap-3">
                          <Avatar className="h-12 w-12">
                            <AvatarFallback>FL</AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="font-medium">Freelancer Name</h4>
                            <p className="text-sm text-muted-foreground">
                              Blockchain Developer
                            </p>
                            <div className="flex items-center mt-1">
                              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                              <span className="text-xs text-muted-foreground ml-1">
                                (5.0)
                              </span>
                            </div>
                          </div>
                        </div>
                        <Badge variant="outline">Active</Badge>
                      </div>
                      <div className="mt-3">
                        <p className="text-sm font-medium">
                          Project: DeFi Dashboard Development
                        </p>
                        <div className="flex justify-between items-center mt-2">
                          <div className="text-xs text-muted-foreground">
                            Started: June 1, 2023
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex items-center"
                          >
                            View Contract
                            <ChevronRight className="h-4 w-4 ml-1" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
