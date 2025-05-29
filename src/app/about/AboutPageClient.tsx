"use client";

import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import Link from "next/link";
import { ArrowRight, Globe, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutPageClient() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="mb-20 py-8">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-green-500 via-yellow-600 to-red-700 bg-clip-text text-transparent animate-gradient">
            Empowering Africa&apos;s Blockchain Ecosystem
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mb-8 text-muted-foreground">
            NexaVerse is building the bridge between global opportunities and
            Africa&apos;s emerging blockchain talent.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size='lg'
              className="bg-nexapurple-700 hover:bg-nexapurple-800 text-white group"
            >
              <Link href="/register" className="flex items-center">
                Join Our Community{" "}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-gray-300 text-gray-700 dark:border-gray-600 dark:text-gray-200"
            >
              <Link href="/for-business">For Businesses</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="mb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg mb-4 text-muted-foreground">
              NexaVerse was founded with a clear vision: to connect Africa&apos;s
              growing blockchain talent with global opportunities while
              fostering the development of a robust blockchain ecosystem across
              the continent.
            </p>
            <p className="text-lg mb-4 text-muted-foreground">
              We believe that blockchain technology has the potential to
              transform economies and create new pathways for prosperity,
              particularly in emerging markets like Africa.
            </p>
            <p className="text-lg text-muted-foreground">
              By providing a platform that connects skilled professionals with
              businesses and projects worldwide, we&apos;re helping to build a
              more inclusive global blockchain economy.
            </p>
          </div>
          <div className="order-1 md:order-2 relative h-[400px] rounded-xl overflow-hidden shadow-xl transform transition-all hover:scale-[1.02] duration-500">
           <DotLottieReact
                src="https://lottie.host/66461d3b-d612-4480-a5f9-d436f625129a/9USHpRaOuJ.lottie"
                loop
                autoplay
            />
          </div>
        </div>
      </section>

      {/* Africa's Blockchain Potential */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Africa&apos;s{" "}
          <span className="africa-gradient-text">Blockchain Potential</span>
        </h2>
        <div className="relative">
          <div className="bg-gradient-to-r from-primary/10 to-green-500/10 rounded-xl p-8 mb-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px]">
                <div className="absolute inset-0 bg-black/5 rounded-xl"></div>
                <div className="relative h-full w-full">
                  {/* Africa Map SVG - This is a simplified placeholder */}
                  <svg
                    viewBox="0 0 800 800"
                    className="h-full w-full"
                    style={{
                      filter: "drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.1))",
                    }}
                  >
                    <path
                      d="M400,100 C550,150 650,300 600,450 C550,600 450,700 350,650 C250,600 200,500 250,350 C300,200 350,150 400,100 Z"
                      fill="url(#africaGradient)"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-primary/30"
                    />
                    <defs>
                      <linearGradient
                        id="africaGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop
                          offset="0%"
                          stopColor="#4CAF50"
                          stopOpacity="0.2"
                        />
                        <stop
                          offset="50%"
                          stopColor="#8B4513"
                          stopOpacity="0.2"
                        />
                        <stop
                          offset="100%"
                          stopColor="#B71C1C"
                          stopOpacity="0.2"
                        />
                      </linearGradient>
                    </defs>

                    {/* Hotspots for key blockchain hubs */}
                    <circle
                      cx="400"
                      cy="200"
                      r="15"
                      fill="#4CAF50"
                      className="animate-pulse"
                    />
                    <circle
                      cx="350"
                      cy="350"
                      r="15"
                      fill="#8B4513"
                      className="animate-pulse"
                    />
                    <circle
                      cx="450"
                      cy="450"
                      r="15"
                      fill="#B71C1C"
                      className="animate-pulse"
                    />
                    <circle
                      cx="300"
                      cy="250"
                      r="15"
                      fill="#4CAF50"
                      className="animate-pulse"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">A Growing Ecosystem</h3>
                <p className="text-lg mb-6 text-muted-foreground">
                  Africa is experiencing rapid growth in blockchain adoption,
                  with countries like Nigeria, Kenya, South Africa, and Ghana
                  leading the way. The continent&apos;s young, tech-savvy
                  population is embracing blockchain technology for various
                  applications:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 bg-green-500/20 p-2 rounded-full">
                      <Zap className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Financial Inclusion</h4>
                      <p className="text-muted-foreground">
                        Providing banking services to the unbanked population
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 bg-yellow-600/20 p-2 rounded-full">
                      <Globe className="h-5 w-5 text-yellow-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Cross-Border Payments</h4>
                      <p className="text-muted-foreground">
                        Facilitating faster and cheaper remittances
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 bg-red-700/20 p-2 rounded-full">
                      <Users className="h-5 w-5 text-red-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Digital Identity</h4>
                      <p className="text-muted-foreground">
                        Creating secure and portable identity solutions
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card p-8 rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow">
            <div className="bg-green-500/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Users className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold mb-4">Talent Development</h3>
            <p className="text-muted-foreground">
              We&apos;ve helped over 1,000 blockchain professionals from across
              Africa find meaningful work and develop their skills.
            </p>
          </div>
          <div className="bg-card p-8 rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow">
            <div className="bg-yellow-600/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Globe className="h-8 w-8 text-yellow-700" />
            </div>
            <h3 className="text-xl font-bold mb-4">Global Connections</h3>
            <p className="text-muted-foreground">
              Our platform has facilitated collaborations between African talent
              and companies from over 30 countries worldwide.
            </p>
          </div>
          <div className="bg-card p-8 rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow">
            <div className="bg-red-700/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Zap className="h-8 w-8 text-red-700" />
            </div>
            <h3 className="text-xl font-bold mb-4">Economic Growth</h3>
            <p className="text-muted-foreground">
              We&apos;ve contributed to the growth of local blockchain
              ecosystems by channeling over $5M in project value to African
              professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="bg-gradient-to-r from-green-500/20 via-yellow-600/20 to-red-700/20 rounded-xl p-12 text-center">
        <h2 className="text-3xl font-bold mb-6">Join the NexaVerse Community</h2>
        <p className="text-xl max-w-3xl mx-auto mb-8 text-muted-foreground">
          Whether you&apos;re a blockchain professional looking for
          opportunities or a business seeking top talent, NexaVerse is your
          gateway to Africa&apos;s blockchain ecosystem.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-nexapurple-700 hover:bg-nexapurple-800 text-white group"
          >
            <Link href="/register" className="flex items-center">
              Create an Account{" "}
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-gray-300 text-gray-700 dark:border-gray-600 dark:text-gray-200"
          >
            <Link href="/for-business">Learn More</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
