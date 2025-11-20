"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useRouter } from "next/navigation"
import { ArrowRight, Award, Wallet } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image"
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

export function Hero() {
  const router = useRouter()

  return (
    <section className="relative min-h-[calc(100vh-4rem)] overflow-hidden bg-gradient-to-b from-background via-background to-background/50">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/4 w-[600px] h-[600px] rounded-full bg-nexapurple-500/10 blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/3 -right-1/4 w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-3xl animate-pulse-slow [animation-delay:2s]" />
        <div className="absolute -bottom-1/4 left-1/3 w-[700px] h-[700px] rounded-full bg-nexapurple-400/5 blur-3xl animate-pulse-slow [animation-delay:4s]" />
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Badge
                variant="outline"
                className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm border-nexapurple-500/30 bg-nexapurple-500/5 hover:bg-nexapurple-500/10 transition-all duration-300 hover:shadow-glow-sm"
              >
                <Wallet className="w-3 h-3 sm:w-4 sm:h-4 text-nexapurple-400" />
                <span className="bg-gradient-to-r from-nexapurple-400 to-blue-400 bg-clip-text text-transparent font-medium">
                  Powered by Blockchain
                </span>
              </Badge>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-3 sm:space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
              >
                <span className="block mb-2">Find Top Talent,</span>
                <span className="block bg-gradient-to-r from-nexapurple-400 via-nexapurple-300 to-blue-400 bg-clip-text text-transparent animate-gradient">
                  Build Great Projects
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl"
              >
                Connect with skilled professionals and secure payments with blockchain technology.
                The future of freelancing is decentralized.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <Button
                size="lg"
                onClick={() => router.push('/register')}
                className="group relative overflow-hidden bg-gradient-to-r from-nexapurple-600 to-nexapurple-500 hover:from-nexapurple-500 hover:to-nexapurple-600 text-white shadow-lg shadow-nexapurple-500/25 hover:shadow-xl hover:shadow-nexapurple-500/40 transition-all duration-300 text-sm sm:text-base px-6 sm:px-8 h-11 sm:h-12"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Started
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-nexapurple-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={() => router.push('/jobs')}
                className="group border-nexapurple-500/30 hover:border-nexapurple-500/50 hover:bg-nexapurple-500/5 text-sm sm:text-base px-6 sm:px-8 h-11 sm:h-12 transition-all duration-300"
              >
                Browse Jobs
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4 sm:pt-6 border-t border-border/50"
            >
              <div className="flex -space-x-2 sm:-space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <Avatar key={i} className="w-8 h-8 sm:w-10 sm:h-10 border-2 border-background ring-2 ring-nexapurple-500/20">
                    <AvatarImage src={`/placeholder.svg?height=40&width=40&text=${i}`} />
                    <AvatarFallback>U{i}</AvatarFallback>
                  </Avatar>
                ))}
              </div>
              <div className="text-xs sm:text-sm">
                <p className="font-semibold text-foreground">5,000+ Active Users</p>
                <p className="text-muted-foreground">Join our growing community</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Lottie Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative group"
          >
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-nexapurple-500/10 via-transparent to-blue-500/10 backdrop-blur-sm border border-white/5">
              <div className="absolute inset-0 bg-gradient-to-br from-nexapurple-500/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative aspect-square max-w-[600px] mx-auto">
                <DotLottieReact
                  src="https://lottie.host/217322bf-0033-42d2-83d2-d9d3917818a0/MWYcQy6YXe.lottie"
                  loop
                  autoplay
                  className="w-full h-full"
                />
              </div>

              {/* Floating Stats Cards */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute top-4 sm:top-8 left-4 sm:left-8 bg-card/80 backdrop-blur-md rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 shadow-xl border border-white/10 max-w-[140px] sm:max-w-none"
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Award className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-green-400" />
                  </div>
                  <div>
                    <p className="text-xl sm:text-2xl md:text-3xl font-bold">98%</p>
                    <p className="text-[10px] sm:text-xs text-muted-foreground">Success Rate</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 bg-card/80 backdrop-blur-md rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 shadow-xl border border-white/10 max-w-[140px] sm:max-w-none"
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-nexapurple-500/20 flex items-center justify-center">
                    <Wallet className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-nexapurple-400" />
                  </div>
                  <div>
                    <p className="text-xl sm:text-2xl md:text-3xl font-bold">$2M+</p>
                    <p className="text-[10px] sm:text-xs text-muted-foreground">Paid Out</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Glow Effect */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-nexapurple-500/20 to-blue-500/20 blur-3xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
