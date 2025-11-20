import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Production-ready auth middleware using Supabase session cookies
// Only runs on protected paths (see matcher).
export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl

  // Supabase places auth cookies named `sb` (v2) variants. Check for them quickly.
  // We don't decode in middleware; we just gate based on presence.
  const hasSupabaseSession =
    request.cookies.has("sb-access-token") ||
    request.cookies.has("sb-refresh-token") ||
    request.cookies.getAll().some((c) => c.name.startsWith("sb-"))

  // Public routes: allow
  if (!pathname.startsWith("/dashboard") &&
      !pathname.startsWith("/marketplace") &&
      !pathname.startsWith("/talent") &&
      !pathname.startsWith("/post-job")) {
    return NextResponse.next()
  }

  // Protected route but no session: redirect to login with return path
  if (!hasSupabaseSession) {
    const url = new URL("/login", request.url)
    url.searchParams.set("redirect", pathname + (search || ""))
    return NextResponse.redirect(url)
  }

  // Authenticated: continue
  return NextResponse.next()
}

export const config = {
  matcher: ["/dashboard/:path*", "/marketplace/:path*", "/talent/:path*", "/post-job/:path*"],
}
