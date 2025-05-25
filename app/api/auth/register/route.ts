import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"

const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  name: z.string().min(2),
})

export async function POST(req: NextRequest) {
  const body = await req.json()
  const parsed = registerSchema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json({ message: "Invalid request", errors: parsed.error.format() }, { status: 422 })
  }

  try {
    const backendResponse = await fetch(`${process.env.BACKEND_URL}/api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(parsed.data),
    })

    const data = await backendResponse.json()

    if (!backendResponse.ok) {
      return NextResponse.json(
        { message: "Registration failed", detail: data?.detail ?? "Unknown error" },
        { status: backendResponse.status }
      )
    }

    return NextResponse.json({ message: "Registration successful", token: data }, { status: 200 })
  } catch (error) {
    console.error("Register error:", error)
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 })
  }
}
