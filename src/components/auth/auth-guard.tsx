"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useAuthStore from "@/stores/authStore";
import { Loader2 } from "lucide-react";

interface AuthGuardProps {
  children: React.ReactNode;
  redirectTo?: string;
}

export default function AuthGuard({ children, redirectTo = "/login" }: AuthGuardProps) {
  const router = useRouter();
  const { isAuthenticated, isLoading, checkAuth } = useAuthStore();

  useEffect(() => {
    // Check authentication status on mount
    checkAuth();
  }, [checkAuth]);

  useEffect(() => {
    // Redirect to login if not authenticated
    if (!isLoading && !isAuthenticated) {
      router.push(redirectTo);
    }
  }, [isLoading, isAuthenticated, router, redirectTo]);

  // Show loading while checking auth
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  // Show nothing while redirecting
  if (!isAuthenticated) {
    return null;
  }

  // Render children if authenticated
  return <>{children}</>;
}
