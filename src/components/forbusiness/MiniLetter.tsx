"use client";
export default function Letter() {
    return (
        <div className="relative">
            <div className="absolute -top-12 -right-12 w-72 h-72 bg-nexapurple-500/10 rounded-full blur-3xl"></div>
            <div className="relative">
                <div className="relative max-w-sm mx-auto">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-nexapurple-500 to-nexapurple-700 blur-2xl opacity-20 animate-pulse"></div>
                    <div className="relative bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-xl p-6 overflow-hidden">
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-nexapurple-500 to-purple-600"></div>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-full bg-nexapurple-100 dark:bg-nexapurple-900/50 flex items-center justify-center">
                                    <span className="text-nexapurple-600 dark:text-nexapurple-400 font-bold"> NW </span>
                                </div>
                                <div>
                                    <h4 className="font-semibold">NexaWork Newsletter</h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400"> Web3 Talent Insights </p>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
                                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
                                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/5"></div>
                            </div>
                            <div className="p-3 bg-nexapurple-50 dark:bg-nexapurple-900/20 rounded-lg border border-nexapurple-100 dark:border-nexapurple-800/30">
                                <div className="flex items-center gap-2">
                                    <div className="h-8 w-8 rounded-full bg-nexapurple-500/20 flex items-center justify-center">
                                        <span className="text-nexapurple-600 dark:text-nexapurple-400 text-xs">
                                            📊
                                        </span>
                                    </div>
                                    <div className="space-y-1">
                                        <div className="h-3 bg-nexapurple-200 dark:bg-nexapurple-700 rounded w-24"></div>
                                        <div className="h-2 bg-nexapurple-100 dark:bg-nexapurple-800 rounded w-20"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}