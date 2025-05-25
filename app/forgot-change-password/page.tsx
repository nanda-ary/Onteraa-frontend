"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function ResetPasswordPage() {
  const router = useRouter()
  const [password, setPassword] = useState("")
  const [confirm, setConfirm] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (password !== confirm) {
      setError("Passwords do not match.")
      return
    }

    // taruh sini ye cokk untuk trigger
    router.push("/login")
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
            Reset Your Password
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter and confirm your new password.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm">New Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded border border-border bg-input p-2"
              placeholder="••••••••"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm">Confirm Password</label>
            <input
              type="password"
              required
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              className="w-full rounded border border-border bg-input p-2"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <p className="text-sm text-red-500 font-medium">{error}</p>
          )}

          <Button type="submit" className="w-full mt-2">
            Reset Password
          </Button>
        </form>

        <div className="text-center pt-4">
          <Button asChild variant="link" size="sm">
            <Link href="/login">← Back to login</Link>
          </Button>
        </div>
      </motion.div>
    </main>
  )
}   