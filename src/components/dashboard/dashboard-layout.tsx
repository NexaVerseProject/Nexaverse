"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import {
  Sidebar,
  SidebarProvider,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
} from "@/components/ui/sidebar"
import { LogoutButton } from "@/components/auth/logout-button"
import { useIsMobile } from "@/hooks/use-mobile"
import Link from "next/link"
import {
  LayoutDashboard,
  Briefcase,
  FileText,
  MessageSquare,
  BarChart,
  CreditCard,
  Wallet,
  User,
  Settings,
} from "lucide-react"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname()
  const isMobile = useIsMobile()
  const [userType, setUserType] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Get user type from localStorage
    const savedUserType = localStorage.getItem("user_type")
    setUserType(savedUserType || "freelancer")
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="flex min-h-screen">
      <SidebarProvider>
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-center px-2 py-4">
              <Link href="/" className="text-2xl font-bold text-primary">
                NexaWork
              </Link>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Main</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={pathname === `/dashboard/${userType}`}>
                      <Link href={`/dashboard/${userType}`}>
                        <LayoutDashboard className="mr-2" />
                        Dashboard
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={pathname === "/dashboard/jobs"}>
                      <Link href="/dashboard/jobs">
                        <Briefcase className="mr-2" />
                        Jobs
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={pathname === "/dashboard/proposals"}>
                      <Link href="/dashboard/proposals">
                        <FileText className="mr-2" />
                        Proposals
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={pathname === "/dashboard/messages"}>
                      <Link href="/dashboard/messages">
                        <MessageSquare className="mr-2" />
                        Messages
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={pathname === "/dashboard/analytics"}>
                      <Link href="/dashboard/analytics">
                        <BarChart className="mr-2" />
                        Analytics
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupLabel>Finance</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={pathname === "/dashboard/payments"}>
                      <Link href="/dashboard/payments">
                        <CreditCard className="mr-2" />
                        Payments
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={pathname === "/dashboard/wallet"}>
                      <Link href="/dashboard/wallet">
                        <Wallet className="mr-2" />
                        Wallet
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupLabel>Account</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={pathname === "/dashboard/profile"}>
                      <Link href="/dashboard/profile">
                        <User className="mr-2" />
                        Profile
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={pathname === "/dashboard/settings"}>
                      <Link href="/dashboard/settings">
                        <Settings className="mr-2" />
                        Settings
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter>
            <div className="flex items-center justify-between p-4">
              <LogoutButton />
            </div>
          </SidebarFooter>
        </Sidebar>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">

          {/* Page Content */}
          <main className="flex-1 overflow-auto p-6 max-w-[1800px] mx-auto w-full">{children}</main>
        </div>
      </SidebarProvider>
    </div>
  )
}
