'use client'
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Code, Globe,Shield} from "lucide-react"
export function Features () {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-950">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <div className="inline-block rounded-lg bg-nexapurple-100 px-3 py-1 text-sm dark:bg-nexapurple-900/30">
                            Platform Features
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Why Choose NexaWork?</h2>
                        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            Our blockchain-powered platform offers unique advantages for both freelancers and clients.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <Card className="border-2 border-nexapurple-100 dark:border-nexapurple-900/30 hover:border-nexapurple-500/50 dark:hover:border-nexapurple-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-sm">
                            <CardHeader>
                                <Globe className="h-10 w-10 text-nexapurple-600 dark:text-nexapurple-400" />
                                <CardTitle className="mt-4">Global Marketplace</CardTitle>
                                <CardDescription>
                                    Access a worldwide network of opportunities and talent with our decentralized job platform.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm">
                                    <li className="flex items-center">
                                        <CheckCircle className="mr-2 h-4 w-4 text-nexapurple-600 dark:text-nexapurple-400" />
                                        <span>Connect with clients worldwide</span>
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="mr-2 h-4 w-4 text-nexapurple-600 dark:text-nexapurple-400" />
                                        <span>Find specialized blockchain projects</span>
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="mr-2 h-4 w-4 text-nexapurple-600 dark:text-nexapurple-400" />
                                        <span>Transparent job listings</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <Card className="border-2 border-nexapurple-100 dark:border-nexapurple-900/30 hover:border-nexapurple-500/50 dark:hover:border-nexapurple-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-sm">
                            <CardHeader>
                                <Shield className="h-10 w-10 text-nexapurple-600 dark:text-nexapurple-400" />
                                <CardTitle className="mt-4">Secure Contracts</CardTitle>
                                <CardDescription>
                                    Smart contracts ensure transparent agreements and automatic payments upon completion.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm">
                                    <li className="flex items-center">
                                        <CheckCircle className="mr-2 h-4 w-4 text-nexapurple-600 dark:text-nexapurple-400" />
                                        <span>Escrow payment protection</span>
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="mr-2 h-4 w-4 text-nexapurple-600 dark:text-nexapurple-400" />
                                        <span>Milestone-based releases</span>
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="mr-2 h-4 w-4 text-nexapurple-600 dark:text-nexapurple-400" />
                                        <span>Dispute resolution system</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <Card className="border-2 border-nexapurple-100 dark:border-nexapurple-900/30 hover:border-nexapurple-500/50 dark:hover:border-nexapurple-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-sm">
                            <CardHeader>
                                <Code className="h-10 w-10 text-nexapurple-600 dark:text-nexapurple-400" />
                                <CardTitle className="mt-4">Web3 Native</CardTitle>
                                <CardDescription>
                                    Built for the decentralized web with blockchain technology at its core.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm">
                                    <li className="flex items-center">
                                        <CheckCircle className="mr-2 h-4 w-4 text-nexapurple-600 dark:text-nexapurple-400" />
                                        <span>Crypto payment options</span>
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="mr-2 h-4 w-4 text-nexapurple-600 dark:text-nexapurple-400" />
                                        <span>Decentralized identity</span>
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="mr-2 h-4 w-4 text-nexapurple-600 dark:text-nexapurple-400" />
                                        <span>On-chain reputation system</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

