"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { FcGoogle } from "react-icons/fc"

export default function RegisterPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // sini cokkk code

  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md space-y-6 rounded-2xl bg-card p-8 shadow-lg"
      >

        <div className="text-center">
          <h1 className="text-2xl font-bold font-grotesk text-foreground">
            Create your account
          </h1>
          <p className="text-muted-foreground text-sm">
            Join Onteraa and explore the future
          </p>
        </div>

        <Button asChild variant="outline" className="w-full">
          <Link href="#">
            <FcGoogle className="text-xl" />
            <span>Sign up with Google</span>
          </Link>
        </Button>

        <div className="flex items-center gap-4">
          <hr className="flex-1 border-border" />
          <span className="text-xs text-muted-foreground">or continue with</span>
          <hr className="flex-1 border-border" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm">Name</label>
            <input
              type="text"
              required
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded border border-border bg-input p-2"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm">Email</label>
            <input
              type="email"
              required
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded border border-border bg-input p-2"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm">Password</label>
            <input
              type="password"
              required
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded border border-border bg-input p-2"
            />
          </div>
          <Button type="submit" className="w-full mt-2">
            Create Account
          </Button>
        </form>

        <div className="text-center text-sm space-y-1">
          <p>
            Already have an account?{" "}
            <Link href="/login" className="text-primary hover:underline">
              Sign in
            </Link>
          </p>
          <p className="text-xs text-muted-foreground">
            By signing up, you agree to our{" "}
            <Link href="/terms" className="hover:underline">
              Terms of Use
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
          <Button asChild variant="link" size="sm">
            <Link href="/">← Back to home</Link>
          </Button>
        </div>
      </motion.div>
    </main>
  )
}
