import { NextResponse } from "next/server";

export function middleware(req) {
  const token = req.cookies.get("rto-token")?.value;
  const { pathname } = req.nextUrl;

  // Define public routes (accessible without authentication)
  const publicPaths = ["/login"];

  const isPublicPath = publicPaths.includes(pathname);

  // If user is logged in and tries to access login page, send to dashboard (or homepage)
  if (token && isPublicPath) {
    const dashboardUrl = new URL("/", req.url);
    return NextResponse.redirect(dashboardUrl);
  }

  // If user is NOT logged in and tries to access a protected route
  if (!token && !isPublicPath) {
    const loginUrl = new URL("/login", req.url);
    return NextResponse.redirect(loginUrl);
  }

  // Otherwise allow access
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/login",
    "/dashboard/:path*",
    "/profile/:path*",
  ],
};
