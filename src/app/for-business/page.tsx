"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ChevronRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { projectTypes } from "@/Datafiles/projects";
import { teamTypes } from "@/Datafiles/Teamtypes";
import Benefits from "@/components/forbusiness/Benefits";
import Hero from "@/components/forbusiness/hero";
import CallToAction from "@/components/forbusiness/Action";
import Newsletter from "@/components/forbusiness/News";
export default function ForBusiness() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <Hero/>      
      {/* Main Content */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-950">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Discover and Hire Top{" "}
              <span className="text-nexapurple-600 dark:text-nexapurple-400">Tech & Web3 Talent </span>{" "}
              with Confidence
            </h2>
            <p className="max-w-[900px] mx-auto text-gray-500 md:text-xl dark:text-gray-400">
              Our vetted talent pool is equipped to meet your business needs,
              whether you need developers, marketers, or creative professionals.
            </p>
          </div>

          <Tabs defaultValue="talent" className="w-full  ">
            <TabsList className="grid w-full grid-cols-3 mb-19 h-15 ">
              <TabsTrigger value="talent" className="text-sm md:text-base py-3"> Hire Talent </TabsTrigger>
              <TabsTrigger value="projects" className="text-sm md:text-base py-3"> Complete Projects </TabsTrigger>
              <TabsTrigger value="teams" className="text-sm md:text-base py-3"> Build Teams </TabsTrigger>
            </TabsList>

            <TabsContent value="talent" className="space-y-8 py-6">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-nexapurple-100 dark:bg-nexapurple-900/30 text-nexapurple-700 dark:text-nexapurple-400">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <h3 className="text-2xl font-bold">  Post Your Job Requirements </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Share the specific skills and expertise you&apos;re looking
                    for. NexaWork&apos;s AI will match you with professionals
                    who fit your needs.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>Detailed job specifications</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>Skill-based matching</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>Budget and timeline management</span>
                    </li>
                  </ul>
                  <Link href="/post-job">
                    <Button className="bg-nexapurple-600 hover:bg-nexapurple-700 text-white gap-1 mt-6">
                      Get Started <ChevronRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
                <div className="order-first md:order-last relative">
                  <div className="absolute -top-12 -right-12 w-72 h-72 bg-nexapurple-500/10 rounded-full blur-3xl"></div>
                  <div className="relative border-8 border-white dark:border-gray-800 rounded-2xl shadow-xl overflow-hidden bg-white dark:bg-gray-950">
                    <div className="aspect-[4/3] bg-gradient-to-br from-nexapurple-100 to-nexapurple-50 dark:from-nexapurple-900/30 dark:to-gray-900 p-6 flex items-center justify-center">
                      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                        <h4 className="text-lg font-semibold mb-4">
                          Post a Job
                        </h4>
                        <div className="space-y-4">
                          <div className="h-8 bg-gray-100 dark:bg-gray-700 rounded w-full"></div>
                          <div className="h-24 bg-gray-100 dark:bg-gray-700 rounded w-full"></div>
                          <div className="flex space-x-2">
                            <div className="h-8 bg-gray-100 dark:bg-gray-700 rounded w-1/2"></div>
                            <div className="h-8 bg-gray-100 dark:bg-gray-700 rounded w-1/2"></div>
                          </div>
                          <div className="h-10 bg-nexapurple-500 rounded w-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <div className="absolute -bottom-12 -left-12 w-72 h-72 bg-nexapurple-500/10 rounded-full blur-3xl"></div>
                  <div className="relative border-8 border-white dark:border-gray-800 rounded-2xl shadow-xl overflow-hidden bg-white dark:bg-gray-950">
                    <div className="aspect-[4/3] bg-gradient-to-br from-nexapurple-100 to-nexapurple-50 dark:from-nexapurple-900/30 dark:to-gray-900 p-6 flex items-center justify-center">
                      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                        <h4 className="text-lg font-semibold mb-4">
                          Curated Candidates
                        </h4>
                        <div className="space-y-4">
                          {[1, 2, 3].map((i) => (
                            <div
                              key={i}
                              className="flex items-center gap-3 p-3 border rounded-lg"
                            >
                              <div className="h-10 w-10 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                              <div className="flex-1 space-y-1">
                                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                                <div className="h-3 bg-gray-100 dark:bg-gray-600 rounded w-1/2"></div>
                              </div>
                              <div className="h-8 w-8 bg-nexapurple-100 dark:bg-nexapurple-900/50 rounded-full"></div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-nexapurple-100 dark:bg-nexapurple-900/30 text-nexapurple-700 dark:text-nexapurple-400">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <h3 className="text-2xl font-bold">
                    Receive Curated Talent Matches
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Review pre-vetted candidates that match your requirements.
                    All talent has been verified for skills, experience, and
                    blockchain expertise.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>Verified professional profiles</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>Portfolio & past work review</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>AI-powered matching algorithm</span>
                    </li>
                  </ul>
                  <Link href="/talent">
                    <Button className="bg-nexapurple-600 hover:bg-nexapurple-700 text-white gap-1 mt-6">
                      Browse Talent <ChevronRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-nexapurple-100 dark:bg-nexapurple-900/30 text-nexapurple-700 dark:text-nexapurple-400">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <h3 className="text-2xl font-bold">Collaborate Seamlessly</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Work efficiently with smart contracts that handle payments,
                    milestones, and deliverables automatically. Communication
                    and collaboration tools built-in.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>Smart contract agreements</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>Milestone-based payments</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>Built-in messaging & file sharing</span>
                    </li>
                  </ul>
                  <Link href="/register">
                    <Button className="bg-nexapurple-600 hover:bg-nexapurple-700 text-white gap-1 mt-6">
                      Get Started <ChevronRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
                <div className="order-first md:order-last relative">
                  <div className="absolute -top-12 -right-12 w-72 h-72 bg-nexapurple-500/10 rounded-full blur-3xl"></div>
                  <div className="relative border-8 border-white dark:border-gray-800 rounded-2xl shadow-xl overflow-hidden bg-white dark:bg-gray-950">
                    <div className="aspect-[4/3] bg-gradient-to-br from-nexapurple-100 to-nexapurple-50 dark:from-nexapurple-900/30 dark:to-gray-900 p-6 flex items-center justify-center">
                      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                        <h4 className="text-lg font-semibold mb-4">
                          Project Dashboard
                        </h4>
                        <div className="space-y-4">
                          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="h-24 bg-gray-100 dark:bg-gray-700 rounded"></div>
                            <div className="h-24 bg-gray-100 dark:bg-gray-700 rounded"></div>
                          </div>
                          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
                          <div className="h-24 bg-gray-100 dark:bg-gray-700 rounded w-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="projects" className="space-y-6 py-6">
              <div className="text-center space-y-4 mb-8">
                <h3 className="text-2xl font-bold">
                  Complete Projects, End-to-End
                </h3>
                <p className="text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
                  Need an entire project completed? From dApp development to
                  marketing campaigns, we offer complete project solutions.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {projectTypes.map((project, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1" >
                    <CardContent className="p-6">
                      <div className={`w-12 h-12 mb-4 rounded-lg flex items-center justify-center ${project.bgColor}`}>
                        <project.icon className={`h-6 w-6 ${project.iconColor}`} />
                      </div>
                      <h4 className="text-lg font-semibold mb-2"> {project.title} </h4>
                      <p className="text-gray-500 dark:text-gray-400 mb-4">
                        {project.description}
                      </p>
                      <Link href="/projects"  className="text-nexapurple-600 dark:text-nexapurple-400 hover:underline" >
                        Learn more →
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="flex justify-center mt-12">
                <Link href="/projects">
                  <Button className="bg-nexapurple-600 hover:bg-nexapurple-700 text-white">  View All Projects </Button>
                </Link>
              </div>
            </TabsContent>

            <TabsContent value="teams" className="space-y-6 py-6">
              <div className="text-center space-y-4 mb-8">
                <h3 className="text-2xl font-bold"> Dedicated Teams for Your Business </h3>
                <p className="text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
                  Build dedicated teams that work exclusively on your projects.
                  Scale up or down as needed.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {teamTypes.map((team, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1" >
                    <CardContent className="p-6">
                      <div className={`w-12 h-12 mb-4 rounded-lg flex items-center justify-center ${team.bgColor}`} >
                        <team.icon className={`h-6 w-6 ${team.iconColor}`} />
                      </div>
                      <h4 className="text-lg font-semibold mb-2"> {team.title} </h4>
                      <p className="text-gray-500 dark:text-gray-400 mb-4"> {team.description}</p>
                      <Link href="/teams" className="text-nexapurple-600 dark:text-nexapurple-400 hover:underline">
                        Learn more →
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="flex justify-center mt-12">
                <Link href="/teams">
                  <Button className="bg-nexapurple-600 hover:bg-nexapurple-700 text-white"> Build Your Team</Button>
                </Link>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      {/* Benefits Section */}
      <Benefits/>
      {/* Newsletter Section */}
      <Newsletter/>
      {/* CTA Section */}
      <CallToAction/>      
    </div>
  );
}

