"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

/**
 * Hook to determine if the footer should be hidden
 * @returns {boolean} Whether the footer should be hidden
 */
export function useHideFooter(): boolean {
  const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const footerHiddenRoutes = [
    "/dashboard",
    "/login",
    "/register",
    "/connect-wallet",
    "/profile",
  ];
  const shouldHideByRoute = footerHiddenRoutes.some((route) =>
    pathname.startsWith(route)
  );

  // Check authentication status
  useEffect(() => {
    const hasAuthCookie = document.cookie.includes("auth_token=");
    const hasAuthToken =
      typeof window !== "undefined" &&
      Boolean(localStorage.getItem("user_type"));

    setIsAuthenticated(hasAuthCookie || hasAuthToken);
  }, [pathname]);

  return (
    shouldHideByRoute ||
    (isAuthenticated && pathname !== "/" && !pathname.startsWith("/about"))
  );
}
