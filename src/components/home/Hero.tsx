"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useRouter } from "next/navigation"
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import {ArrowRight,Award,Wallet} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
export function Hero() {
  const router = useRouter()
  return (
    <section className="w-full  py-8 sm:py-12 md:py-24 lg:py-35 bg-gradient-to-br from-nexapurple-950 via-nexapurple-900 to-black dark:from-black dark:via-nexapurple-950 dark:to-black overflow-hidden relative">
      {/* Animated gradient orbs */}
      <div className="absolute top-10 left-4 w-48 h-48 sm:w-56 sm:top-16 sm:left-8 md:w-64 md:h-64 md:top-20 md:left-10 xl:w-72 xl:h-72 xl:top-24 xl:left-16 bg-nexapurple-500/20 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute top-20 right-4 w-48 h-48 sm:w-56 sm:h-56 sm:top-28 sm:right-8 md:w-64 md:h-64 md:top-32 md:right-10 xl:w-72 xl:h-72 xl:top-40 xl:right-16 bg-nexapurple-700/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-10 left-1/4 w-48 h-48 sm:w-56 sm:h-56 sm:-bottom-8 sm:left-1/3 md:w-64 md:h-64 md:-bottom-12 md:left-1/3 xl:w-72 xl:h-72 xl:-bottom-20 xl:left-1/3 bg-nexapurple-300/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:16px_16px] sm:bg-[size:20px_20px] md:bg-[size:24px_24px] xl:bg-[size:32px_32px]"></div>

      <div className="container px-4 sm:px-6 md:px-8 xl:px-12 relative z-10">
        <div className="grid gap-6 sm:gap-8 md:gap-10 lg:grid-cols-2 lg:gap-16 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4 sm:space-y-6 md:space-y-8 xl:space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center rounded-lg bg-white/10 backdrop-blur-sm px-2 sm:px-3 md:px-4 xl:px-5 py-1 text-xs sm:text-sm md:text-base xl:text-lg text-white/80 max-w-fit"
            >
              <Badge className="bg-nexapurple-500 text-white mr-1 sm:mr-2 md:mr-2 xl:mr-3">New</Badge> Blockchain-powered freelancing
            </motion.div>
            <div className="space-y-2 sm:space-y-3 md:space-y-4 xl:space-y-5">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl/none text-white"
              >
                The Future of Work is{" "}
                <span className="text-nexapurple-400 inline-block animate-shimmer bg-gradient-to-r from-nexapurple-400 via-purple-300 to-nexapurple-400 bg-[length:200%_100%] bg-clip-text text-transparent">
                  Decentralized
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="max-w-[400px] sm:max-w-[500px] md:max-w-[600px] xl:max-w-[700px] text-gray-300 text-sm sm:text-base md:text-xl xl:text-2xl py-3"
              >
                NexaVerse connects talented freelancers with global opportunities through blockchain technology. Secure
                payments, transparent contracts, and earn NexaPoints with every completed job.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col gap-3 sm:gap-4 md:gap-6 xl:gap-8 sm:flex-row py-2 sm:py-3 md:py-4 xl:py-5"
            >
              <Button
                className="bg-nexapurple-600 hover:bg-nexapurple-700 text-white px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base md:px-8 md:py-4 md:text-lg w-full sm:w-auto"
                onClick={() => router.push("/register")}
              >
                Get Started
                <ArrowRight className="ml-1 sm:ml-2 md:ml-2 xl:ml-3 h-3 sm:h-4 md:h-4 xl:h-5 w-3 sm:w-4 md:w-4 xl:w-5" />
              </Button>
              <Button
                variant="outline"
                className="border-gray-300 dark:border-white/20 text-foreground dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base md:px-8 md:py-4 md:text-lg w-full sm:w-auto "
                onClick={() => router.push("/login")}
              >
                Explore Jobs
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 xl:space-x5 text-sm sm:text-sm md:text-base xl:text-lg text-gray-300"
            >
              <div className="flex -space-x-1 sm:-space-x-2 md:-space-x-2 xl:-space-x-3">
                <Avatar className="border-2 border-nexapurple-900 h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 xl:h-9 xl:w-9">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                  <AvatarFallback>U1</AvatarFallback>
                </Avatar>
                <Avatar className="border-2 border-nexapurple-900 h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 xl:h-9 xl:w-9">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                  <AvatarFallback>U2</AvatarFallback>
                </Avatar>
                <Avatar className="border-2 border-nexapurple-900 h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 xl:h-9 xl:w-9">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                  <AvatarFallback>U3</AvatarFallback>
                </Avatar>
              </div>
              <div className="text-gray-300">
                Joined by <span className="font-medium text-white">10,000+</span> professionals
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center justify-center sm:justify-end md:justify-end xl:justify-end lg:justify-end"
          >
            <div className="relative w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] xl:max-w-[500px]">
              {/* Floating card 1 - Secure Payment */}
              <motion.div
                initial={{ opacity: 0, x: -20, y: -20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -top-8 sm:-t0p-10 md:-top-12 xl:-top-16 -left-8 sm:-left-10 md:-left-12 xl:-left-16 animate-float hover:animate-float-fast transition-all duration-300 z-20"
              >
                <div className="bg-white/10 backdrop-blur-md rounded-lg shadow-glow p-2 sm:p-3 md:p4 xl:p-5 flex items-center gap-2 sm:gap-3 md:gap-4 xl:gap-5 border border-white/20 hover:border-nexapurple-400/50 transition-all duration-300 hover:-translate-y-1">
                  <div className="bg-nexapurple-500/30 p-1 sm:p-2 md:p-2 xl:p-3 rounded-full">
                    <Wallet className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 xl:h-6 xl:w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm md:text-base xl:text-lg font-medium text-white">Secure Payment</div>
                    <div className="text-xs sm:text-sm md:text-base xl:text-lg text-gray-300">Via Smart Contracts</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating card 2 - NexaPoints */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="absolute -bottom-6 sm:-bottom-8 md:-bottom-10 xl:-bottom-12 -right-8 sm:-right-10 md:-right-12 xl:-right-16 animate-float animation-delay-1000 hover:animate-float-fast transition-all duration-300 z-20"
              >
                <div className="bg-white/10 backdrop-blur-md rounded-lg shadow-glow p-2 sm:p-3 md:p-4 xl:p-5 flex items-center gap-2 sm:gap-3 md:gap-4 xl:gap5 border border-white/20 hover:border-nexapurple-400/50 transition-all duration-300 hover:-translate-y-1">
                  <div className="bg-nexapurple-500/30 p-1 sm:p-2 md:p-2 xl:p-3 rounded-full">
                    <Award className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 xl:h-6 xl:w-8 text-white" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm md:text-base xl:text-lg font-medium text-white">Earn NexaPoints</div>
                    <div className="text-xs sm:text-sm md:text-base xl:text-lg text-gray-300">Rewards for Quality Work</div>
                  </div>
                </div>
              </motion.div>

              {/* Dashboard Preview */}
              <div className="relative z-10 bg-black/40 backdrop-blur-sm rounded-2xl shadow-glow overflow-hidden border border-white/20 hover:border-nexapurple-400/50 transition-all duration-500 group">
                <div className="bg-nexapurple-600 p-2 sm:p-3 md:p-4 xl:p-6">
                  <div className="flex justify-between items-center">
                    <div className="text-xs sm:text-sm md:text-base xl:text-lg text-white font-medium">NexaVerse Dashboard</div>
                    <div className="flex space-x-0.5 sm:space-x-1 md:space-x-1.5 xl:space-x-2">
                      <div className="h-2 w-2 rounded-full bg-red-500"></div>
                      <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                </div>
                <div className="p-2 w-full sm:w-[300px] md:w-[400px] lg:w-[500px] h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] sm:p-3 md:p-4 xl:p-6 transition-all duration-500 group-hover:bg-black/20">
                  <DotLottieReact
                      src="https://lottie.host/217322bf-0033-42d2-83d2-d9d3917818a0/MWYcQy6YXe.lottie"
                      loop
                      autoplay
                    />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
