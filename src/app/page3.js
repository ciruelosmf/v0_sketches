/**
 * v0 by Vercel.
 * @see https://v0.dev/t/9WWoL6nRBRJ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { useState, useEffect } from "react"

export default function Component() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({
        x: event.clientX / window.innerWidth,
        y: event.clientY / window.innerHeight,
      })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])
  return (
    <div
      className="fixed inset-0 z-[-1] bg-gradient-to-br transition-colors duration-500"
      style={{
        backgroundColor: `rgb(${Math.floor(mousePosition.x * 255)}, ${Math.floor(mousePosition.y * 255)}, ${Math.floor(
          (1 - mousePosition.x) * 255,
        )})`,
      }}
    >
      <div className="grid grid-cols-6 grid-rows-6 w-full h-full">
        {Array.from({ length: 16 }).map((_, i) => (
          <div
            key={i}
            className={`
               
            `}  
            style={{ transform: `rotate(${(i * 60) % 360}deg)` }}
          >
            <div className="absolute inset-0 flex items-center justify-center text-white/80 dark:text-black/80 text-xs font-medium">
              {
                [
                  "Creativity",
                  "Imagination",
                  "Wonder",
                  "Delight",
                  "Enchantment",
                  "Whimsy",
                  "Playfulness",
                  "Artistry",
                  "Inspiration",
                  "Charm",
                  "Elegance",
                  "Sophistication",
                ][i]
              }
            </div>
          </div>
        ))}
      </div>
      <div className="absolute top-4 right-4">
        <Link href="/page2">
          <a className="text-white bg-blue-500 px-4 py-2 rounded">Go to Page</a>
        </Link>
      </div>
    </div>
  )
}