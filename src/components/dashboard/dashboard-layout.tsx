"use client";

import type React from "react";
import { useState, useEffect, memo, useMemo } from "react";
import { usePathname } from "next/navigation";
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
} from "@/components/ui/sidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import Link from "next/link";
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
} from "lucide-react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const mainMenu = [
  {
    href: (userType: string | null) => `/dashboard/${userType}`,
    label: "Dashboard",
    icon: LayoutDashboard,
    isActive: (pathname: string, userType: string | null) =>
      pathname === `/dashboard/${userType}`,
  },
  {
    href: "/dashboard/jobs",
    label: "Jobs",
    icon: Briefcase,
    isActive: (pathname: string) => pathname === "/dashboard/jobs",
  },
  {
    href: "/dashboard/proposals",
    label: "Proposals",
    icon: FileText,
    isActive: (pathname: string) => pathname === "/dashboard/proposals",
  },
  {
    href: "/messages",
    label: "Messages",
    icon: MessageSquare,
    isActive: (pathname: string) => pathname === "/messages",
  },
  {
    href: "/dashboard/analytics",
    label: "Analytics",
    icon: BarChart,
    isActive: (pathname: string) => pathname === "/dashboard/analytics",
  },
];

const financeMenu = [
  {
    href: "/dashboard/payments",
    label: "Payments",
    icon: CreditCard,
    isActive: (pathname: string) => pathname === "/dashboard/payments",
  },
  {
    href: "/dashboard/wallet",
    label: "Wallet",
    icon: Wallet,
    isActive: (pathname: string) => pathname === "/dashboard/wallet",
  },
];

const accountMenu = [
  {
    href: "/dashboard/profile",
    label: "Profile",
    icon: User,
    isActive: (pathname: string) => pathname === "/dashboard/profile",
  },
  {
    href: "/dashboard/settings",
    label: "Settings",
    icon: Settings,
    isActive: (pathname: string) => pathname === "/dashboard/settings",
  },
];

// Memoize the sidebar to prevent re-renders
const DashboardSidebar = memo(function DashboardSidebar({ pathname, userType }: { pathname: string;userType: string | null }) {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center px-2 py-4">
          <Link href={`/dashboard/${userType}`}  className="text-2xl font-bold text-primary" >
            NexaWork
          </Link>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainMenu.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton
                    asChild
                    isActive={ typeof item.isActive === "function"
                        ? item.isActive(pathname, userType)
                        : false
                    }
                  >
                    <Link href={  typeof item.href === "function" ? item.href(userType): item.href }>
                      <item.icon className="mr-2" />
                      {item.label}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Finance</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {financeMenu.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton asChild isActive={item.isActive(pathname)}>
                    <Link href={item.href}>
                      <item.icon className="mr-2" />
                      {item.label}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Account</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {accountMenu.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton asChild isActive={item.isActive(pathname)}>
                    <Link href={item.href}>
                      <item.icon className="mr-2" />
                      {item.label}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
});

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname();
  const isMobile = useIsMobile();
  const [userType, setUserType] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedUserType = localStorage.getItem("user_type");
    setUserType(savedUserType || "freelancer");
    setMounted(true);

    const preloadRoutes = [
      "/dashboard/wallet",
      "/dashboard/profile",
      "/dashboard/jobs",
    ];

    // Preload the next likely pages
    preloadRoutes.forEach((route) => {
      const link = document.createElement("link");
      link.rel = "prefetch";
      link.href = route;
      document.head.appendChild(link);
    });
  }, []);

  // Memoize the sidebar state to prevent unnecessary re-renders
  const sidebarMemo = useMemo(
    () => <DashboardSidebar pathname={pathname} userType={userType} />,
    [pathname, userType]
  );

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex min-h-screen">
      <SidebarProvider>
        {sidebarMemo}

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Page Content */}
          <main className="flex-1 overflow-auto p-6 max-w-[1800px] mx-auto w-full">
            {children}
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
}
