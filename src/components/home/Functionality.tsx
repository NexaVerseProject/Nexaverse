'use client'

import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
export function Functionality() {
    const router = useRouter()
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-black">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">How NexaVerse Works</h2>
                        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            Our platform simplifies the freelancing process with blockchain technology.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-3">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center space-y-4 rounded-lg border bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950 hover:-translate-y-1 transition-all duration-300 hover:shadow-glow-sm"
                    >
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-nexapurple-100 text-nexapurple-900 dark:bg-nexapurple-900/30 dark:text-nexapurple-400">
                            <span className="text-2xl font-bold">1</span>
                        </div>
                        <h3 className="text-xl font-bold">Create Your Account</h3>
                        <p className="text-center text-gray-500 dark:text-gray-400">
                            Register, complete your profile, and connect your wallet to get started.
                        </p>
                        <Button
                            className="text-nexapurple-600 dark:text-nexapurple-400 hover:underline inline-flex items-center"
                            variant="link"
                            onClick={() => router.push("/register")}
                        >
                            Sign Up Now <ChevronRight className="h-4 w-4 ml-1" />
                        </Button>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center space-y-4 rounded-lg border bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950 hover:-translate-y-1 transition-all duration-300 hover:shadow-glow-sm"
                    >
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-nexapurple-100 text-nexapurple-900 dark:bg-nexapurple-900/30 dark:text-nexapurple-400">
                            <span className="text-2xl font-bold">2</span>
                        </div>
                        <h3 className="text-xl font-bold">Post or Find Jobs</h3>
                        <p className="text-center text-gray-500 dark:text-gray-400">
                            Browse the marketplace for opportunities or post your project needs.
                        </p>
                        <Button
                            className="text-nexapurple-600 dark:text-nexapurple-400 hover:underline inline-flex items-center"
                            variant="link"
                            onClick={() => router.push("/marketplace")}
                        >
                            Explore Jobs <ChevronRight className="h-4 w-4 ml-1" />
                        </Button>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center space-y-4 rounded-lg border bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950 hover:-translate-y-1 transition-all duration-300 hover:shadow-glow-sm"
                    >
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-nexapurple-100 text-nexapurple-900 dark:bg-nexapurple-900/30 dark:text-nexapurple-400">
                            <span className="text-2xl font-bold">3</span>
                        </div>
                        <h3 className="text-xl font-bold">Get Paid in Crypto</h3>
                        <p className="text-center text-gray-500 dark:text-gray-400">
                            Complete work, receive automatic payments, and earn NexaPoints rewards.
                        </p>
                        <Button
                            className="text-nexapurple-600 dark:text-nexapurple-400 hover:underline inline-flex items-center"
                            variant="link"
                            onClick={() => router.push("/connect-wallet")}
                        >
                            Connect Wallet <ChevronRight className="h-4 w-4 ml-1" />
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}