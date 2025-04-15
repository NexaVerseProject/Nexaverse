'use client'

import { motion } from "framer-motion"

export function Stats() {
    return (
        <section className="w-full py-12 mt-12 md:py-16 lg:py-15 border-t border-b border-nexapurple-900/20 dark:border-nexapurple-900/10 bg-white dark:bg-black">
            <div className="container px-4 md:px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="space-y-2"
                    >
                        <h3 className="text-3xl font-bold text-nexapurple-600 dark:text-nexapurple-400">10K+</h3>
                        <p className="text-sm text-muted-foreground">Freelancers</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="space-y-2"
                    >
                        <h3 className="text-3xl font-bold text-nexapurple-600 dark:text-nexapurple-400">5K+</h3>
                        <p className="text-sm text-muted-foreground">Clients</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-2"
                    >
                        <h3 className="text-3xl font-bold text-nexapurple-600 dark:text-nexapurple-400">$2M+</h3>
                        <p className="text-sm text-muted-foreground">Paid Out</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="space-y-2"
                    >
                        <h3 className="text-3xl font-bold text-nexapurple-600 dark:text-nexapurple-400">15K+</h3>
                        <p className="text-sm text-muted-foreground">Projects Completed</p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}