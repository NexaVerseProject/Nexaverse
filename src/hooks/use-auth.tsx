"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userType, setUserType] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const hasAuthToken = document.cookie.includes("auth_token");
    const hasLocalAuth = localStorage.getItem("auth_token") === "true";
    const authenticated = hasAuthToken || hasLocalAuth;
    setIsAuthenticated(authenticated);
    if (authenticated) {
      const storedUserType = localStorage.getItem("user_type");
      setUserType(storedUserType);
    } else {
      setUserType(null);
    }

    setIsLoading(false);
  }, [pathname]);

  const login = (type = "freelancer") => {
    document.cookie = "auth_token=demo_token; path=/; max-age=86400";
    localStorage.setItem("auth_token", "true");
    localStorage.setItem("user_type", type);
    setIsAuthenticated(true);
    setUserType(type);
  };

  const logout = () => {
    document.cookie = "auth_token=; path=/; max-age=0";
    localStorage.removeItem("auth_token");
    localStorage.removeItem("user_type");
    localStorage.removeItem("wallet_connected");
    localStorage.removeItem("wallet_type");
    setIsAuthenticated(false);
    setUserType(null);
  };

  return {
    isAuthenticated,
    isLoading,
    userType,
    login,
    logout,
  };
}
