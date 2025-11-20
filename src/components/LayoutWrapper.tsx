"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Footer from "@/components/footer";
import { useAuth } from "@/hooks/use-auth";

export function LayoutWrapper() {
  const pathname = usePathname();
  const [shouldRenderFooter, setShouldRenderFooter] = useState(false);
  const { isAuthenticated, isLoading } = useAuth();
  const footerVisibleRoutes = [
    "/", 
    "/for-business", 
    "/about", 
  ];

  useEffect(() => {
    if (isLoading) return;
    const shouldShowFooter =
      !isAuthenticated &&
      footerVisibleRoutes.some(
        (route) => pathname === route || pathname.startsWith(`${route}/`)
      );

    setShouldRenderFooter(shouldShowFooter);
    // footerVisibleRoutes is static
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, isAuthenticated, isLoading]);

  if (!shouldRenderFooter) {
    return null;
  }
  return <Footer />;
}
