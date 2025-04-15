"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/hooks/use-auth"

export default function Dashboard() {
  const router = useRouter()
  const { isAuthenticated, userType} = useAuth()

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login")
      return
    }

    // Redirect to the appropriate dashboard based on user type
    if (userType) {
      router.push(`/dashboard/${userType}`)
    } else {
      // Default to freelancer dashboard if no user type is set
      router.push("/dashboard/freelancer")
    }
  }, [isAuthenticated, userType, router])

  return (
    <div className="flex items-center justify-center h-[50vh]">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Redirecting to your dashboard...</h1>
        <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto"></div>
      </div>
    </div>
  )
}
