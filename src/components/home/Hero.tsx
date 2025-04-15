"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useRouter } from "next/navigation"
import {ArrowRight,Award,Wallet} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
export function Hero() {
  const router = useRouter()
  return (
    <section className="w-full  py-12 md:py-44 lg:py-35 bg-gradient-to-br from-nexapurple-950 via-nexapurple-900 to-black dark:from-black dark:via-nexapurple-950 dark:to-black overflow-hidden relative">
      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-nexapurple-500/20 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-nexapurple-700/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-20 left-1/3 w-72 h-72 bg-nexapurple-300/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center rounded-lg bg-white/10 backdrop-blur-sm px-3 py-1 text-sm text-white/80 max-w-fit"
            >
              <Badge className="bg-nexapurple-500 text-white mr-2">New</Badge> Blockchain-powered freelancing
            </motion.div>
            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-5xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white"
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
                className="max-w-[600px] text-gray-300 md:text-xl py-3"
              >
                NexaWork connects talented freelancers with global opportunities through blockchain technology. Secure
                payments, transparent contracts, and earn NexaPoints with every completed job.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col gap-4 sm:flex-row py-3"
            >
              <Button
                size="lg"
                className="bg-nexapurple-600 hover:bg-nexapurple-700 text-white w-full sm:w-auto"
                onClick={() => router.push("/register")}
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-300 dark:border-white/20 text-foreground dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 w-full sm:w-auto "
                onClick={() => router.push("/marketplace")}
              >
                Explore Jobs
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center space-x-4 text-sm text-gray-300"
            >
              <div className="flex -space-x-2">
                <Avatar className="border-2 border-nexapurple-900 h-8 w-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                  <AvatarFallback>U1</AvatarFallback>
                </Avatar>
                <Avatar className="border-2 border-nexapurple-900 h-8 w-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                  <AvatarFallback>U2</AvatarFallback>
                </Avatar>
                <Avatar className="border-2 border-nexapurple-900 h-8 w-8">
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
            className="flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[500px]">
              {/* Floating card 1 - Secure Payment */}
              <motion.div
                initial={{ opacity: 0, x: -20, y: -20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -top-12 -left-12 animate-float hover:animate-float-fast transition-all duration-300 z-20"
              >
                <div className="bg-white/10 backdrop-blur-md rounded-lg shadow-glow p-4 flex items-center gap-3 border border-white/20 hover:border-nexapurple-400/50 transition-all duration-300 hover:-translate-y-1">
                  <div className="bg-nexapurple-500/30 p-2 rounded-full">
                    <Wallet className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">Secure Payment</div>
                    <div className="text-xs text-gray-300">Via Smart Contracts</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating card 2 - NexaPoints */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="absolute -bottom-8 -right-8 animate-float animation-delay-1000 hover:animate-float-fast transition-all duration-300 z-20"
              >
                <div className="bg-white/10 backdrop-blur-md rounded-lg shadow-glow p-4 flex items-center gap-3 border border-white/20 hover:border-nexapurple-400/50 transition-all duration-300 hover:-translate-y-1">
                  <div className="bg-nexapurple-500/30 p-2 rounded-full">
                    <Award className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">Earn NexaPoints</div>
                    <div className="text-xs text-gray-300">Rewards for Quality Work</div>
                  </div>
                </div>
              </motion.div>

              {/* Dashboard Preview */}
              <div className="relative z-10bg-black/40 backdrop-blur-sm rounded-2xl shadow-glow overflow-hidden border border-white/20 hover:border-nexapurple-400/50 transition-all duration-500 group">
                <div className="bg-nexapurple-600 p-4">
                  <div className="flex justify-between items-center">
                    <div className="text-white font-medium">NexaWork Dashboard</div>
                    <div className="flex space-x-1">
                      <div className="h-2 w-2 rounded-full bg-red-500"></div>
                      <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                </div>
                <div className="p-6 transition-all duration-500 group-hover:bg-black/20">
                <img 
                    src="/placeholder.svg?height=300&width=450"
                    alt="Dashboard Preview"
                    className="rounded-lg border border-white/10 transition-all duration-500 group-hover:border-nexapurple-400/30 group-hover:shadow-glow-sm"
                    width={450}
                    height={300}
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
