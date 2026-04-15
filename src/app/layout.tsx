import type { Metadata } from "next";
import { Geist, Space_Grotesk } from "next/font/google";
import Navbar from "@/ui-components/Navbar";
import "./globals.css";
import AppShell from "@/ui-components/AppShell";
import Footer from "@/ui-components/Footer";

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
        <Navbar />
        <AppShell>{children}</AppShell>
        <Footer/>
      </body>
    </html>
  );
}
