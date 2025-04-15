"use client"
import { motion } from "framer-motion"

export function Companies() {
    const logos = ["Company 1", "Company 2", "Company 3", "Company 4", "Company 5", "Company 6"]
    return (
        <section className="w-full py-12 md:py-16 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-950 border-t border-gray-200 dark:border-gray-800">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-2xl font-semibold text-gray-900 dark:text-gray-100"
                    >
                        Trusted by innovative companies
                    </motion.h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
                    {logos.map((logo, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                        >
                            <div className="h-12 w-24 bg-gray-200 dark:bg-gray-800 rounded flex items-center justify-center">
                                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{logo}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}