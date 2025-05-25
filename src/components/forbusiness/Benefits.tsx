'use client';

import { benefits } from "@/Datafiles/Benefits";
export default function Benefits() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-nexapurple-900 to-nexapurple-950 dark:from-nexapurple-950 dark:to-black text-white">
            <div className="container px-4 md:px-6">
                <div className="text-center space-y-4 mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                        Why Businesses Choose NexaWork
                    </h2>
                    <p className="max-w-[700px] mx-auto text-nexapurple-100 md:text-xl">
                        Our enterprise-grade platform offers security, transparency, and
                        efficiency for businesses of all sizes.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 rounded-lg bg-nexapurple-500/30 flex items-center justify-center">
                                    <benefit.icon className="h-6 w-6 text-nexapurple-400" />
                                </div>
                                <h3 className="text-xl font-semibold">{benefit.title}</h3>
                            </div>
                            <p className="text-nexapurple-100">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}