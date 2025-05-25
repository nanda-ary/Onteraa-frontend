import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(req: NextRequest) {
  const token = req.cookies.get(process.env.JWT_COOKIE_NAME || "onteraa_token")

  const protectedPaths = ["/user/onboarding", "/user/dashboard"]

  const isProtected = protectedPaths.some((path) =>
    req.nextUrl.pathname.startsWith(path)
  )

  if (isProtected && !token) {
    const loginUrl = new URL("/login", req.url)
    return NextResponse.redirect(loginUrl)
  }


  const authPages = ["/login", "/register"]
  const isAuthPage = authPages.some((path) =>
    req.nextUrl.pathname.startsWith(path)
  )

  if (isAuthPage && token) {
    return NextResponse.redirect(new URL("/user/dashboard", req.url))
  }

  return NextResponse.next()
}
