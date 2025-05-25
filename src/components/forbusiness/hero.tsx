"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";


export default function Hero() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-42 bg-gradient-to-br from-nexapurple-950 via-nexapurple-900 to-black dark:from-black dark:via-nexapurple-950 dark:to-black overflow-hidden relative">
            {/* Animated gradient orbs */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-nexapurple-500/20 rounded-full blur-3xl animate-blob"></div>
            <div className="absolute -bottom-20 right-10 w-72 h-72 bg-nexapurple-700/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>

            {/* Grid pattern overlay */}
            <div className="container px-4 md:px-6 relative z-10">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2 items-center">
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="inline-flex items-center rounded-lg bg-white/10 backdrop-blur-sm px-3 py-1 text-sm text-white/80 max-w-fit">
                            <span className="text-nexapurple-400 mr-2">●</span> Business Solutions
                        </div>
                        <div className="space-y-2">
                            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                                Assemble your{" "}
                                <span className="text-nexapurple-400 inline-block animate-shimmer bg-gradient-to-r from-nexapurple-400 via-purple-300 to-nexapurple-400 bg-[length:200%_100%] bg-clip-text text-transparent">
                                    dream team.
                                </span>
                            </h1>
                            <p className="max-w-[600px] text-gray-300 md:text-xl">
                                Find and hire pre-vetted professionals ready to drive your
                                business forward. NexaWork makes hiring easier, faster, and
                                more efficient—so you can focus on scaling.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 sm:flex-row mt-8">
                            <Link href="/marketplace">
                                <Button size="lg" className="bg-nexapurple-500 hover:bg-nexapurple-600 text-white w-full sm:w-auto">
                                    Discover our services
                                </Button>
                            </Link>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-white/20 text-white hover:bg-white/10 w-full sm:w-auto"
                                onClick={() =>
                                    document
                                        .getElementById("newsletter")
                                        ?.scrollIntoView({ behavior: "smooth" })
                                }
                            >
                                Subscribe to our newsletter
                            </Button>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="relative h-[400px] w-[400px]">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="animate-spin-slow w-[400px] h-[400px]">
                                    <svg viewBox="0 0 200 200" className="w-full h-full">
                                        <defs>
                                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                <stop offset="0%" stopColor="#9776ff" />
                                                <stop offset="100%" stopColor="#7c45ff" />
                                            </linearGradient>
                                        </defs>
                                        <path
                                            d="M100,0 C155.228,0 200,44.7715 200,100 C200,155.228 155.228,200 100,200 C44.7715,200 0,155.228 0,100 C0,44.7715 44.7715,0 100,0 Z M100,20 C55.8172,20 20,55.8172 20,100 C20,144.183 55.8172,180 100,180 C144.183,180 180,144.183 180,100 C180,55.8172 144.183,20 100,20 Z"
                                            fill="url(#gradient)"
                                            fillRule="evenodd"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-[300px] h-[300px] rounded-full bg-nexapurple-500/10 backdrop-blur-md border border-nexapurple-500/20 flex items-center justify-center">
                                    <div className="w-[280px] h-[280px] rounded-full bg-nexapurple-500/5 border border-nexapurple-500/10 flex items-center justify-center">
                                        <div className="w-[260px] h-[260px] rounded-full bg-nexapurple-500/5 border border-nexapurple-500/10 flex items-center justify-center p-4">
                                            <div className="w-full h-full rounded-full overflow-hidden bg-nexapurple-600/10 backdrop-blur">
                                                <div className="w-full h-full bg-gradient-to-br from-nexapurple-400/20 to-nexapurple-700/30 flex items-center justify-center">
                                                    <div className="text-white text-5xl font-bold"> NW </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}