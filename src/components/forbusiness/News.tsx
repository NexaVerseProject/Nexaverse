"use client"
import { Button } from "@/components/ui/button";
import Letter from "./MiniLetter";
export default function Newsletter() {
    return (
        <section
            id="newsletter"
            className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-white to-nexapurple-50 dark:from-black dark:to-nexapurple-950/30"
        >
            <div className="container px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                            Stay Updated on Web3 Hiring Trends
                        </h2>
                        <p className="text-gray-500 dark:text-gray-400">
                            Subscribe to our newsletter for the latest insights on
                            blockchain talent, market trends, and hiring best practices.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-2 max-w-md">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 flex-1"
                            />
                            <Button className="bg-nexapurple-600 hover:bg-nexapurple-700 text-white"> Subscribe </Button>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            We respect your privacy. Unsubscribe at any time.
                        </p>
                    </div>
                    <Letter/>
                </div>
            </div>
        </section>
    )
}