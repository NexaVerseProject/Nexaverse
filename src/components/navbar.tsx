"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/theme/mode-toggle";
import { useAccount } from "wagmi";
import { LogoutButton } from "@/components/auth/logout-button";

const publicLinks = [
  { href: "/", label: "Home" },
  { href: "/for-business", label: "For Business" },
  { href: "/about", label: "About Us" },
];

const authenticatedLinks = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/marketplace", label: "Marketplace" },
  { href: "/talent", label: "Search Talent" },
];

const userTypeLinks = {
  "job-poster": [{ href: "/dashboard/post-job", label: "Post Job" }],
  business: [{ href: "/hire-talent", label: "Hire Talent" }],
  freelancer: [],
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userType, setUserType] = useState<
    "freelancer" | "business" | "job-poster" | null
  >(null);
  const { isConnected } = useAccount();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const hasAuthToken = document.cookie.includes("auth_token");
    const hasLocalAuth = localStorage.getItem("auth_token") === "true";
    setIsAuthenticated(hasAuthToken || hasLocalAuth);
    if (hasAuthToken || hasLocalAuth) {
      const savedUserType = localStorage.getItem("user_type") as
        | "freelancer"
        | "business"
        | "job-poster"
        | null;
      setUserType(savedUserType || "freelancer");
    }
  }, [pathname]);
  const handleLogout = () => {
    document.cookie = "auth_token=; path=/; max-age=0";
    localStorage.removeItem("auth_token");
    localStorage.removeItem("user_type");
    setIsAuthenticated(false);
    setUserType(null);
    router.push("/");
  };

  // Function to set user type (for demo purposes)
  const setDemoUserType = (type: "freelancer" | "business" | "job-poster") => {
    localStorage.setItem("user_type", type);
    setUserType(type);
    // Refresh the page to update UI
    window.location.reload();
  };
  const getUserTypeLinks = () => {
    if (!userType) return [];
    return userTypeLinks[userType] || [];
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between max-w-full px-4 md:px-8 lg:px-12">
        <div className="flex items-center gap-3">
          {isAuthenticated ? (
            <Link
              href={`/dashboard/${userType}`}
              className="flex items-center space-x-2"
            >
              <span className="text-3xl font-bold text-nexapurple-700">
                NexaWork
              </span>
            </Link>
          ) : (
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-3xl font-bold text-nexapurple-700">
                NexaWork
              </span>
            </Link>
          )}
          <nav className="hidden md:flex gap-8 ml-10">
            {/* Desktop links */}
            {!isAuthenticated
              ? publicLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-base font-medium transition-colors hover:text-nexapurple-700 ${
                      pathname === link.href
                        ? "text-nexapurple-700"
                        : "text-foreground/60"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))
              : [...authenticatedLinks, ...getUserTypeLinks()].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-base font-medium transition-colors hover:text-nexapurple-700 ${
                      pathname === link.href
                        ? "text-nexapurple-700"
                        : "text-foreground/60"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-3">
            {!isAuthenticated ? (
              <>
                <Link href="/login">
                  <Button
                    variant="outline"
                    size="default"
                    className="border-gray-300 text-gray-700 dark:border-gray-600 dark:text-gray-200 text-base px-5 py-2.5"
                  >
                    Login
                  </Button>
                </Link>
                <Link href="/register">
                  <Button
                    size="default"
                    className="bg-nexapurple-700 hover:bg-nexapurple-800 text-white text-base px-5 py-2.5"
                  >
                    Register
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Link href="/dashboard/profile">
                  <Button
                    variant="outline"
                    size="default"
                    className="gap-2 border-gray-300 text-gray-700 dark:border-gray-600 dark:text-gray-200 text-base px-5 py-2.5"
                  >
                    <User className="h-5 w-5" />
                    My Profile
                  </Button>
                </Link>
                <LogoutButton />
                {/* Demo user type selector - remove in production */}
                <div className="ml-4 border-l pl-4 flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Demo:</span>
                  <select
                    value={userType || "freelancer"}
                    onChange={(e) =>
                      setDemoUserType(
                        e.target.value as
                          | "freelancer"
                          | "business"
                          | "job-poster"
                      )
                    }
                    className="text-sm bg-transparent border rounded px-1"
                  >
                    <option value="freelancer">Freelancer</option>
                    <option value="business">Business</option>
                    <option value="job-poster">Job Poster</option>
                  </select>
                </div>
              </>
            )}
          </div>
          <ModeToggle />
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-7 w-7" />
            ) : (
              <Menu className="h-7 w-7" />
            )}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="container md:hidden py-6 border-t">
          <nav className="flex flex-col gap-5">
            {/* Mobile links */}
            {!isAuthenticated
              ? publicLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-2.5 text-lg"
                  >
                    {link.label}
                  </Link>
                ))
              : [...authenticatedLinks, ...getUserTypeLinks()].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-2.5 text-lg"
                  >
                    {link.label}
                  </Link>
                ))}

            <div className="flex flex-col gap-3 mt-6">
              {!isAuthenticated ? (
                <>
                  <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full border-gray-300 text-gray-700 dark:border-gray-600 dark:text-gray-200"
                    >
                      Login
                    </Button>
                  </Link>
                  <Link href="/register" onClick={() => setIsMenuOpen(false)}>
                    <Button
                      size="lg"
                      className="w-full bg-nexapurple-700 hover:bg-nexapurple-800 text-white"
                    >
                      Register
                    </Button>
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    href="/dashboard/profile"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full gap-2 border-gray-300 text-gray-700 dark:border-gray-600 dark:text-gray-200"
                    >
                      <User className="h-5 w-5" />
                      My Profile
                    </Button>
                  </Link>
                </>
              )}
            </div>
            {isAuthenticated && (
              <div className="mt-4">
                <LogoutButton />
              </div>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
