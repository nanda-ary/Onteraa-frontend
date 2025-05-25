"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function WelcomeSpotlight({ name = "User" }: { name?: string }) {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 6000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white overflow-hidden"
        >
          {/* Handshake Image (full width) */}
          <motion.img
            src="/handshake_transparent.gif" // Replace with your actual path
            alt="Handshake"
            className="absolute w-full h-full object-cover z-10"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
          />

          {/* Curtain Dissolve Animation */}
          <motion.div
            className="absolute inset-0 bg-black z-20"
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            transition={{ duration: 1.2, delay: 1 }}
            style={{
              transformOrigin: "center",
            }}
          />

          {/* AI Glow Background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-black via-transparent to-cyan-900 opacity-50 z-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          />

          {/* Welcome Text */}
          <motion.div
            className="z-30 text-center px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-2">
              Welcome to ONTERAA, {name}
            </h1>
            <p className="text-cyan-300 text-lg md:text-xl">
              Where intelligence meets action.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
