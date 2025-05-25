"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    //sini cokk untuk backend
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
            Forgot Password?
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your email and we&apos;ll send you instructions to reset it.
          </p>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 text-sm">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@onteraa.com"
                className="w-full rounded border border-border bg-input p-2"
              />
            </div>
            <Button type="submit" className="w-full mt-2">
              Send Reset Link
            </Button>
          </form>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center space-y-2"
          >
            <p className="text-sm text-muted-foreground">
              If your email is registered, you&apos;ll receive a reset link shortly.
            </p>
          </motion.div>
        )}

        <div className="text-center pt-4">
          <Button asChild variant="link" size="sm">
            <Link href="/login">← Back to login</Link>
          </Button>
        </div>
      </motion.div>
    </main>
  )
}
