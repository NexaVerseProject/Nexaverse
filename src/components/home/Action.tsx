"use client"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function ToAction() {
    const router = useRouter()
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-nexapurple-900 to-nexapurple-950 dark:from-nexapurple-950 dark:to-black text-white relative overflow-hidden">
            {/* Animated gradient orbs */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-nexapurple-500/10 rounded-full blur-3xl animate-blob"></div>
            <div className="absolute -bottom-20 right-10 w-72 h-72 bg-nexapurple-700/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]"></div>
            <div className="container px-4 md:px-6 relative z-10">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
                    <motion.div initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="flex flex-col justify-center space-y-4"
                    >
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                                Ready to Transform Your Freelance Career?
                            </h2>
                            <p className="max-w-[600px] text-nexapurple-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Join thousands of freelancers and clients already using NexaVerse to revolutionize their work. Get
                                started in minutes and connect with global opportunities.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 sm:flex-row">
                            <Button
                                size="lg"
                                variant="secondary"
                                className="w-full sm:w-auto"
                                onClick={() => router.push("/register")}
                            >
                                Create Your Account
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="text-white border-white hover:bg-nexapurple-800 w-full sm:w-auto"
                                onClick={() => router.push("/connect-wallet")}
                            >
                                Connect Wallet
                            </Button>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center lg:justify-end"
                    >
                        <div className="rounded-lg bg-nexapurple-800/50 backdrop-blur-sm p-6 shadow-glow border border-white/10 hover:border-nexapurple-400/30 transition-all duration-300">
                            <div className="space-y-2 mb-4">
                                <h3 className="text-xl font-bold">Get the NexaVerse App</h3>
                                <p className="text-nexapurple-100">Manage your freelance career on the go.</p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <Button variant="outline" className="border-white text-white hover:bg-nexapurple-700/50">
                                    <svg
                                        className="h-5 w-5 mr-2"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M12 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.5" />
                                        <path d="M16 19h6" />
                                        <path d="M19 16v6" />
                                    </svg>
                                    App Store
                                </Button>
                                <Button variant="outline" className="border-white text-white hover:bg-nexapurple-700/50">
                                    <svg
                                        className="h-5 w-5 mr-2"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <polygon points="5 3 19 12 5 21 5 3" />
                                    </svg>
                                    Google Play
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}