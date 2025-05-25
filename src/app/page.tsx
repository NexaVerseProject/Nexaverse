"use client"
import { Hero } from "@/components/home/Hero"
import { Features } from "@/components/home/feautured"
import { Jobs } from "@/components/home/Jobs"
import { Companies } from "@/components/home/Companies"
import { Business } from "@/components/home/Business"
import { Stats } from "@/components/home/Stats"
import { ToAction } from "@/components/home/Action"
import { Functionality } from "@/components/home/Functionality"
export default function Home() {
  return (
    <div className="flex flex-col">
      {/**the hero section */}
      <Hero/>
      {/* Stats Section */}
      <Stats/>      
      {/**Opportunities secction */}
      <Jobs/>
      {/* For Business Section */}
      <Business/>
      {/**Platform Feautures section */}
      <Features/>
      {/* How It Works Section */}
      <Functionality/>
      {/**Endorsments */}
      <Companies/>
      {/* Call To Action Section */}
      <ToAction/>
    </div>
  )
}
