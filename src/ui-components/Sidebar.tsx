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
    <aside className="fixed hidden h-dvh w-20 p-4 backdrop-blur-lg lg:block">
      <nav className="mt-8">
        <ul className="space-y-2">
        </ul>
      </nav>
    </aside>
  )
}
