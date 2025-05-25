import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"

const schema = z.object({
  email: z.string().email(),
  password: z.string(), // .min(6), pake ini jgn lupa ya ganteng
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const parsed = schema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json({ message: "Invalid request body" }, { status: 400 })
    }

    const resp = await fetch(`${process.env.BACKEND_URL}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(parsed.data),
    })

    if (!resp.ok) {
      const errorText = await resp.text()
      console.error("Backend login error:", errorText)
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 })
    }

    const data = await resp.json()
    const token = data.access_token

    const response = NextResponse.json({ success: true })

    response.cookies.set({
      name: process.env.JWT_COOKIE_NAME || "onteraa_token",
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    })

    return response
  } catch (err) {
    console.error("Unexpected error during login:", err)
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 })
  }
}
