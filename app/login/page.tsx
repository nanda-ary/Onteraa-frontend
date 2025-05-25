"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { FcGoogle } from "react-icons/fc"

export default function LoginPage() {
  const router = useRouter()

  const [step, setStep] = useState<"email" | "password">("email")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  async function login(email: string, password: string) {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
    if (!res.ok) {
      const { message } = await res.json()
      throw new Error(message || "Login failed")
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError("")

    if (step === "email") {
      setStep("password")
      return
    }

   
    try {
      setLoading(true)
      await login(email, password)
      router.push("/user/onboarding")
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
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
            Welcome back
          </h1>
          <p className="text-muted-foreground text-sm">
            Sign in to continue to Onteraa
          </p>
        </div>

       
        <Button asChild variant="outline" className="w-full">
          <Link href="#">
            <FcGoogle className="text-xl" />
            <span>Continue with Google</span>
          </Link>
        </Button>

  
        <div className="flex items-center gap-4">
          <hr className="flex-1 border-border" />
          <span className="text-xs text-muted-foreground">or continue with</span>
          <hr className="flex-1 border-border" />
        </div>


        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
  <label className="block mb-1 text-sm">Email</label>
  <div className="flex items-center gap-2">
    <input
      type="email"
      required
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="you@onteraa.com"
      className="w-full rounded border border-border bg-input p-2"
      disabled={step === "password" || loading}
    />
    {step === "password" && (
      <Button
        type="button"
        size="lg"
        variant="outline"
        onClick={() => {
          setStep("email")
          setPassword("")
        }}
      >
        Edit
      </Button>
    )}
  </div>
</div>
          <AnimatePresence>
            {step === "password" && (
              <motion.div
                key="pwBlock"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.35 }}
                className="space-y-3"
              >
                <div>
                  <label className="block mb-1 text-sm">Password</label>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full rounded border border-border bg-input p-2"
                    disabled={loading}
                  />
                </div>
                <div className="text-right">
                  <Link
                    href="/forgot-password"
                    className="text-xs text-primary hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {error && (
            <p className="text-sm font-medium text-red-500">{error}</p>
          )}

          <Button
            type="submit"
            className="w-full mt-2"
            disabled={loading}
          >
            {loading ? "Processing..." : step === "email" ? "Continue" : "Login"}
          </Button>
        </form>

  
        <div className="text-center text-sm space-y-1">
          <p>
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-primary hover:underline">
              Register
            </Link>
          </p>
          <p className="text-xs text-muted-foreground">
            By signing in you agree to our{" "}
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
