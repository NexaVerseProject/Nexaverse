"use client"

import { motion } from "framer-motion"
import {Globe, Shield, Wallet} from "lucide-react"

const benefits = [
  {
    icon: <Wallet className="h-6 w-6" />,
    title: "Secure Payments",
    description: "Instant and secure payments using blockchain technology"
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Global Reach",
    description: "Connect with clients from around the world"
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Safe Environment",
    description: "Protected by blockchain security"
  }
]

export function Benefits() {
  return (
    <section className="container px-4 md:px-6 py-12">
      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Why Choose NexaVerse?</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="p-6 border rounded-lg hover:border-nexapurple-500/50 transition-colors">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-nexapurple-500/10 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
