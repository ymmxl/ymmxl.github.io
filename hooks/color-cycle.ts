"use client"

import { useState, useEffect } from "react"

// Define the colors to cycle through
const colors = [
  "#34d399", // green
  "#60a5fa", // blue
  "#f472b6", // pink
  "#fbbf24", // yellow
  "#a78bfa", // purple
]

export function colorCycle(interval=4000): string {
  const [colorIndex, setColorIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % colors.length)
    }, interval)

    return () => clearInterval(timer)
  }, [interval])

  return colors[colorIndex]
}
