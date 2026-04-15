"use client"

import * as React from "react"
import Sidebar from "@/ui-components/Sidebar"
import { ScrollSpyProvider } from "@/ui-components/scroll-spy"

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <ScrollSpyProvider>
      <div className="min-h-dvh">
        <Sidebar />
        <div className="min-h-dvh lg:pl-20">{children}</div>
      </div>
    </ScrollSpyProvider>
  )
}
