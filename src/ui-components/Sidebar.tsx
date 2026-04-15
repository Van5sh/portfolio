"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { useScrollSpy } from "@/ui-components/scroll-spy"
import {
  Briefcase,
  Code2,
  Contact,
  Home,
  Layers,
  User,
} from "lucide-react"

const NAV_ITEMS = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "skills", label: "Skills", icon: Code2 },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "projects", label: "Projects", icon: Layers },
  { id: "contact", label: "Contact", icon: Contact },
] as const

export default function Sidebar() {
  const { activeSectionId } = useScrollSpy()

  const onNavClick = React.useCallback((id: string) => {
    const target = document.getElementById(id)
    if (!target) return
    target.scrollIntoView({ behavior: "smooth", block: "start" })
  }, [])

  return (
    <aside className="fixed left-4 top-1/2 z-50 hidden -translate-y-1/2 lg:block">
      <nav className="rounded-2xl p-3 backdrop-blur-xl shadow-lg">
        <ul className="flex flex-col items-center gap-3">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon
            const isActive = activeSectionId === item.id

            return (
              <li key={item.id} className="relative group">
                <button
                  onClick={() => onNavClick(item.id)}
                  className={cn(
                    "flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-200",
                    "hover:bg-white/10 hover:scale-105",
                    isActive
                      ? "bg-white text-black shadow-md"
                      : "text-white/60 hover:text-white"
                  )}
                >
                  <Icon className="h-5 w-5" />
                </button>

                <span className="absolute left-14 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md bg-black px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                  {item.label}
                </span>
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}