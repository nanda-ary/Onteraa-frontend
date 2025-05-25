"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Sparkles } from "lucide-react"

export default function WelcomeSpotlight({ name = "User" }: { name?: string }) {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 4000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center text-white space-y-4"
          >
            <Sparkles className="mx-auto text-yellow-400" size={48} />
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-5xl font-bold tracking-wide"
            >
              Welcome to Onteraa, {name}!
            </motion.h1>
          </motion.div>

   
          <motion.div
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-radial-spotlight pointer-events-none"
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
