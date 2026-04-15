"use client"

import * as React from "react"
import Sidebar from "@/ui-components/Sidebar"
import { ScrollSpyProvider } from "@/ui-components/scroll-spy"

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <ScrollSpyProvider>
      <div className="min-h-dvh justify-center items-center w-full h-full">
        <Sidebar />
        <div className="min-h-dvh">{children}</div>
      </div>
    </ScrollSpyProvider>
  )
}
