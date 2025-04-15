"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Filter, MapPin, Search, Star, Users } from "lucide-react"
import Link from "next/link"
import { popularSkills } from "@/Datafiles/Skills"
import { talentData } from "@/Datafiles/Talents"
import { TalentCardProps } from "@/Datafiles/Talents"

export default function TalentPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [showFilters, setShowFilters] = useState(false)
  const [selectedSkills, setSelectedSkills] = useState<string[]>([])
  const [hourlyRateRange, setHourlyRateRange] = useState([25, 150])

  const handleSkillToggle = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter((s) => s !== skill))
    } else {
      setSelectedSkills([...selectedSkills, skill])
    }
  }

  const filteredTalent = talentData.filter((talent) => {
    // Filter by search query
    if (
      searchQuery &&
      !talent.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !talent.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !talent.skills.some((skill) => skill.toLowerCase().includes(searchQuery.toLowerCase()))
    ) {
      return false
    }

    // Filter by selected skills
    if (selectedSkills.length > 0 && !talent.skills.some((skill) => selectedSkills.includes(skill))) {
      return false
    }

    // Filter by hourly rate range
    if (talent.hourlyRate < hourlyRateRange[0] || talent.hourlyRate > hourlyRateRange[1]) {
      return false
    }

    return true
  })

  return (
    <div className="container py-10">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Find Talented Professionals</h1>
          <p className="text-muted-foreground">Discover blockchain and DeFi experts for your next project</p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search by name, skill, or role..."
                  className="w-full bg-background pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Select defaultValue="relevance">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Relevance</SelectItem>
                  <SelectItem value="rating-high">Rating: High to Low</SelectItem>
                  <SelectItem value="rate-low">Rate: Low to High</SelectItem>
                  <SelectItem value="rate-high">Rate: High to Low</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" className="gap-1" onClick={() => setShowFilters(!showFilters)}>
                <Filter className="h-4 w-4" />
                Filters
              </Button>
            </div>
          </div>

          {showFilters && (
            <Card className="p-4">
              <CardContent className="p-0 pt-4">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">Skills</h3>
                    <div className="space-y-1">
                      {popularSkills.map((skill) => (
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
                    <h3 className="text-sm font-medium">Hourly Rate</h3>
                    <div className="pt-4">
                      <Slider
                        defaultValue={[25, 150]}
                        max={300}
                        min={0}
                        step={5}
                        value={hourlyRateRange}
                        onValueChange={setHourlyRateRange}
                      />
                      <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                        <span>${hourlyRateRange[0]}</span>
                        <span>${hourlyRateRange[1]}+</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">Experience Level</h3>
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="exp-entry" />
                        <label
                          htmlFor="exp-entry"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Entry Level
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="exp-intermediate" defaultChecked />
                        <label
                          htmlFor="exp-intermediate"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Intermediate
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="exp-expert" defaultChecked />
                        <label
                          htmlFor="exp-expert"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Expert
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">Availability</h3>
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="avail-full" defaultChecked />
                        <label
                          htmlFor="avail-full"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Full-time
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="avail-part" defaultChecked />
                        <label
                          htmlFor="avail-part"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Part-time
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="avail-hourly" />
                        <label
                          htmlFor="avail-hourly"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Hourly
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end mt-6 gap-2">
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSelectedSkills([])
                      setHourlyRateRange([25, 150])
                      setSearchQuery("")
                    }}
                  >
                    Reset Filters
                  </Button>
                  <Button className="bg-nexapurple-700 hover:bg-nexapurple-800">Apply Filters</Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <Tabs defaultValue="all" className="w-full h-30">
          <TabsList>
            <TabsTrigger value="all">All Talent</TabsTrigger>
            <TabsTrigger value="development">Development</TabsTrigger>
            <TabsTrigger value="design">Design</TabsTrigger>
            <TabsTrigger value="writing">Writing</TabsTrigger>
            <TabsTrigger value="marketing">Marketing</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="space-y-4 mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredTalent.map((talent) => (
                <TalentCard key={talent.id} talent={talent} />
              ))}
            </div>
            {filteredTalent.length === 0 && (
              <div className="text-center py-12">
                <Users className="mx-auto h-12 w-12 text-muted-foreground" />
                <h3 className="mt-4 text-lg font-medium">No talent found</h3>
                <p className="mt-2 text-sm text-muted-foreground">Try adjusting your search or filter criteria</p>
              </div>
            )}
            {filteredTalent.length > 0 && (
              <div className="flex justify-center mt-6">
                <Button variant="outline">Load More</Button>
              </div>
            )}
          </TabsContent>
          <TabsContent value="development" className="space-y-4 mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredTalent
                .filter((talent) => talent.category === "Development")
                .map((talent) => (
                  <TalentCard key={talent.id} talent={talent} />
                ))}
            </div>
          </TabsContent>
          <TabsContent value="design" className="space-y-4 mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredTalent
                .filter((talent) => talent.category === "Design")
                .map((talent) => (
                  <TalentCard key={talent.id} talent={talent} />
                ))}
            </div>
          </TabsContent>
          <TabsContent value="writing" className="space-y-4 mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredTalent
                .filter((talent) => talent.category === "Writing")
                .map((talent) => (
                  <TalentCard key={talent.id} talent={talent} />
                ))}
            </div>
          </TabsContent>
          <TabsContent value="marketing" className="space-y-4 mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredTalent
                .filter((talent) => talent.category === "Marketing")
                .map((talent) => (
                  <TalentCard key={talent.id} talent={talent} />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}





function TalentCard({ talent }: TalentCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="bg-nexapurple-50 dark:bg-gray-800 p-6">
          <div className="flex items-start gap-4">
            <Avatar className="h-16 w-16 border-4 border-white dark:border-gray-800">
              <AvatarImage src="/placeholder.svg?height=64&width=64" alt={talent.name} />
              <AvatarFallback>{talent.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{talent.name}</h3>
                {talent.verified && <Badge className="bg-green-500">Verified</Badge>}
              </div>
              <p className="text-sm text-muted-foreground">{talent.title}</p>
              <div className="flex items-center mt-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-3 w-3 ${
                        i < talent.rating
                          ? "fill-nexapurple-500 text-nexapurple-500"
                          : "fill-gray-300 text-gray-300 dark:fill-gray-600 dark:text-gray-600"
                      }`}
                    />
                  ))}
                </div>
                <span className="ml-1 text-xs text-muted-foreground">({talent.reviews})</span>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center text-sm text-muted-foreground">
              <MapPin className="h-3 w-3 mr-1" />
              {talent.location}
            </div>
            <div className="text-sm font-medium">${talent.hourlyRate}/hr</div>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {talent.skills.slice(0, 3).map((skill) => (
              <Badge key={skill} variant="outline" className="text-xs">
                {skill}
              </Badge>
            ))}
            {talent.skills.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{talent.skills.length - 3} more
              </Badge>
            )}
          </div>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{talent.bio}</p>
          <div className="flex justify-between items-center">
            <div className="text-xs text-muted-foreground">{talent.completedJobs} jobs completed</div>
            <Link href={`/talent/${talent.id}`}>
              <Button className="bg-nexapurple-700 hover:bg-nexapurple-800">View Profile</Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
