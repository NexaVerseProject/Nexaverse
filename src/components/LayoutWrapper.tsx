"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Footer from "@/components/footer";

export function LayoutWrapper() {
    const pathname = usePathname();
    const [shouldRenderFooter, setShouldRenderFooter] = useState(true);
    const footerHiddenRoutes = [
        "/dashboard",
        "/login",
        "/register",
        "/connect-wallet",
        "/profile",
    ];

    useEffect(() => {
        // Check for auth cookie or token in localStorage
        const hasAuthCookie = document.cookie.includes("auth_token=");
        const hasAuthToken =
            typeof window !== "undefined" &&
            Boolean(localStorage.getItem("user_type"));

        const isAuth = hasAuthCookie || hasAuthToken;

        // Check if current path starts with any of the hidden routes
        const shouldHideByRoute = footerHiddenRoutes.some((route) =>
            pathname.startsWith(route)
        );

        // Hide footer if on a protected route or authenticated
        const hideFooter =
            shouldHideByRoute ||
            (isAuth && pathname !== "/" && !pathname.startsWith("/about"));

        setShouldRenderFooter(!hideFooter);
    }, [pathname]);

    if (!shouldRenderFooter) {
        return null;
    }

    return <Footer />;
}
