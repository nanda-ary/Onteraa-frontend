"use client"

import React from "react"
import CountUp from "react-countup"
import { useInView } from "react-intersection-observer";

type CounterItem = {
  prefix?: string
  suffix?: string
  end: number
  label: string
  duration?: number
}

export const ONCounter = ({ items }: { items: CounterItem[] }) => {
  return (
    <section className="w-full py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {items.map((item, i) => (
            <div key={i} className="flex flex-col items-center justify-center">
                <span className="inline-block border-b-2 border-white pb-1">
              <h2 className="text-7xl font-bold">
                {item.prefix}
                <CountUp end={item.end} duration={item.duration ?? 2 } enableScrollSpy />
                {item.suffix}
              </h2>
            </span>
              <p className="text-sm mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
