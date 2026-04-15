"use client"

import * as React from "react"

type ScrollSpyContextValue = {
  activeSectionId: string | null
}

const ScrollSpyContext = React.createContext<ScrollSpyContextValue | null>(null)

type ScrollSpyProviderProps = {
  children: React.ReactNode
  selector?: string
  rootMargin?: string
}

export function ScrollSpyProvider({
  children,
  selector = "section[data-spy]",
  rootMargin = "-35% 0px -55% 0px",
}: ScrollSpyProviderProps) {
  const [activeSectionId, setActiveSectionId] = React.useState<string | null>(
    null
  )
  const ratiosRef = React.useRef<Map<string, number>>(new Map())

  React.useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>(selector)
    ).filter((el) => Boolean(el.id))

    if (!sections.length) return

    const sectionOrder = new Map<string, number>()
    sections.forEach((section, index) => sectionOrder.set(section.id, index))

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = (entry.target as HTMLElement).id
          if (!id) continue
          ratiosRef.current.set(id, entry.isIntersecting ? entry.intersectionRatio : 0)
        }

        let bestId: string | null = null
        let bestRatio = 0
        let bestOrder = Number.POSITIVE_INFINITY

        for (const [id, ratio] of ratiosRef.current.entries()) {
          const order = sectionOrder.get(id) ?? Number.POSITIVE_INFINITY
          if (ratio > bestRatio || (ratio === bestRatio && order < bestOrder)) {
            bestId = id
            bestRatio = ratio
            bestOrder = order
          }
        }

        if (bestId) setActiveSectionId(bestId)
      },
      { root: null, rootMargin, threshold: [0, 0.12, 0.25, 0.5, 0.75, 1] }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [selector, rootMargin])

  const value = React.useMemo(() => ({ activeSectionId }), [activeSectionId])

  return (
    <ScrollSpyContext.Provider value={value}>
      {children}
    </ScrollSpyContext.Provider>
  )
}

export function useScrollSpy() {
  const ctx = React.useContext(ScrollSpyContext)
  if (!ctx) {
    throw new Error("useScrollSpy must be used within ScrollSpyProvider")
  }
  return ctx
}

