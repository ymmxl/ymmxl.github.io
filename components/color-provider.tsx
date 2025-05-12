"use client"

import { createContext, useContext, type ReactNode } from "react"
import { colorCycle } from "@/hooks/color-cycle"

type ColorContextType = {
  accentColor: string
}

const ColorContext = createContext<ColorContextType>({ accentColor: "#34d399" })

export function useAccentColor() {
  return useContext(ColorContext)
}

export function ColorProvider({ children }: { children: ReactNode }) {
  const accentColor = colorCycle(4000) // Change color every 4 seconds

  return (
    <ColorContext.Provider value={{ accentColor }}>
      <style jsx global>{`
        :root {
          --accent-color: ${accentColor};
        }
        .text-accent {
          color: var(--accent-color);
          transition: color 1s ease;
        }
        .border-accent {
          border-color: var(--accent-color);
          transition: border-color 1s ease;
        }
        .bg-accent {
          background-color: var(--accent-color);
          transition: background-color 1s ease;
        }
      `}</style>
      {children}
    </ColorContext.Provider>
  )
}
