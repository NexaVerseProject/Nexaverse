'use client'

import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { useRef } from "react"

interface StatItem {
    end: number
    suffix?: string
    prefix?: string
    label: string
    delay?: number
}
 /* counting items */
 function Stat({ end, suffix = '', prefix = '', label, delay = 0 }: StatItem) {
  const ref = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(ref, { amount: 0.3 })

    return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="space-y-2"
    >
      <h3 className="text-3xl font-bold text-nexapurple-600 dark:text-nexapurple-400">
        {isInView && (
          <CountUp
            start={0}
            end={end}
            duration={2}
            prefix={prefix}
            suffix={suffix}
            separator=","
          />
        )}
      </h3>
      <p className="text-sm text-muted-foreground">{label}</p>
    </motion.div>
  )
}

export function Stats() {
    return (
        <section className="w-full py-12 mt-12 md:py-16 lg:py-15 border-t border-b border-nexapurple-900/20 dark:border-nexapurple-900/10 bg-white dark:bg-black">
            <div className="container px-4 md:px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <Stat end={10000}  suffix="+"           label="Freelancers"        />
                <Stat end={5000}   suffix="+" delay={0.1} label="Clients"           />
                <Stat end={2}      prefix="$"   suffix="M+" delay={0.2} label="Paid Out" />
                <Stat end={15000}  suffix="+" delay={0.3} label="Projects Completed" />
                </div>
            </div>
    </section>
    )
}