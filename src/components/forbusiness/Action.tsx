"use client";
import Link from "next/link"
import { Button } from "@/components/ui/button";

export default function CallToAction() {
    return (
        <section className="w-full py-12 md:py-16 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="space-y-2 text-center md:text-left">
                        <h2 className="text-2xl font-bold"> Ready to build your dream team?</h2>
                        <p className="text-gray-500 dark:text-gray-400">
                            Join thousands of businesses scaling with NexaWork talent.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <Link href="/register">
                            <Button className="bg-nexapurple-600 hover:bg-nexapurple-700 text-white"> Create Account </Button>
                        </Link>
                        <Link href="/talent">
                            <Button variant="outline">Browse Talent</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}