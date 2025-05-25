import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// This is a simplified middleware. In a real application, you would verify
// the authentication token from cookies or headers.
export function middleware(request: NextRequest) {
  // Mock authentication check - in a real app, you would check for a valid session/token
  const isAuthenticated = request.cookies.has("auth_token")

  // Define protected routes
  const protectedRoutes = [
    "/dashboard",
    "/marketplace",
    "/talent",
    "/post-job",
    "/dashboard/profile",
    "/dashboard/wallet",
  ]

  // Check if the current path is a protected route
  const isProtectedRoute = protectedRoutes.some((route) => request.nextUrl.pathname.startsWith(route))

  // If the route is protected and the user is not authenticated, redirect to login
  if (isProtectedRoute && !isAuthenticated) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  return NextResponse.next()
}

// Configure the middleware to run on specific paths
export const config = {
  matcher: ["/dashboard/:path*", "/marketplace/:path*", "/talent/:path*", "/post-job/:path*"],
}
