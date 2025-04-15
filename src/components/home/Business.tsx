"use client"

import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import {ArrowRight,CheckCircle} from "lucide-react"
import { Button } from "@/components/ui/button"

export function Business() {
    const router = useRouter()
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-nexapurple-50 to-white dark:from-gray-950 dark:to-black overflow-hidden relative">
            <div className="absolute top-20 right-10 w-72 h-72 bg-nexapurple-500/10 rounded-full blur-3xl animate-blob"></div>
            <div className="absolute -bottom-20 left-10 w-72 h-72 bg-nexapurple-700/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>

            <div className="container px-4 md:px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <div className="inline-block rounded-lg bg-nexapurple-100 px-3 py-1 text-sm dark:bg-nexapurple-900/30">
                            For Businesses
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                            Assemble your <span className="text-nexapurple-600 dark:text-nexapurple-400">dream team</span>
                        </h2>
                        <p className="text-gray-500 dark:text-gray-400">
                            Find and hire pre-vetted professionals ready to drive your business forward. NexaWork makes hiring
                            easier, faster, and more efficient—so you can focus on scaling.
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                                <span>Access to verified blockchain talent</span>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                                <span>Smart contract payment protection</span>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                                <span>Global talent pool with specialized expertise</span>
                            </li>
                        </ul>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <Button
                                className="bg-nexapurple-600 hover:bg-nexapurple-700 text-white"
                                onClick={() => router.push("/for-business")}
                            >
                                Learn More
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                            <Button variant="outline" onClick={() => router.push("/talent")}>
                                Browse Talent
                            </Button>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative max-w-md mx-auto">
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-nexapurple-500 to-nexapurple-700 blur-2xl opacity-20 animate-pulse"></div>
                            <div className="relative bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-xl p-6 overflow-hidden">
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-nexapurple-500 to-purple-600"></div>
                                <div className="space-y-6">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-full bg-nexapurple-100 dark:bg-nexapurple-900/50 flex items-center justify-center">
                                            <span className="text-nexapurple-600 dark:text-nexapurple-400 font-bold">NW</span>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold">Business Dashboard</h4>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Talent Management</p>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-nexapurple-50 dark:bg-nexapurple-900/20 rounded-lg p-4 border border-nexapurple-100 dark:border-nexapurple-800/30">
                                            <div className="text-2xl font-bold text-nexapurple-600 dark:text-nexapurple-400">24</div>
                                            <div className="text-sm text-gray-500 dark:text-gray-400">Active Candidates</div>
                                        </div>
                                        <div className="bg-nexapurple-50 dark:bg-nexapurple-900/20 rounded-lg p-4 border border-nexapurple-100 dark:border-nexapurple-800/30">
                                            <div className="text-2xl font-bold text-nexapurple-600 dark:text-nexapurple-400">8</div>
                                            <div className="text-sm text-gray-500 dark:text-gray-400">Open Positions</div>
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        {[1, 2, 3].map((i) => (
                                            <div key={i} className="flex items-center gap-3 p-3 border rounded-lg">
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
                    </motion.div>
                </div>
            </div>
        </section>
    )
}