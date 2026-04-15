import type { Metadata } from "next";
import { Geist, Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import AppShell from "@/ui-components/AppShell";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hire Vansh Dhir",
  description: "My portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${spaceGrotesk.variable} font-space-grotesk antialiased relative`}
      >
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
