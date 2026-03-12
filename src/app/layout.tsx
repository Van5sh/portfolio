import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const trap = localFont({
  src: [
    {
      path: "../../public/fonts/Trap-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Trap-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Trap-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Trap-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Trap-ExtraBold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/Trap-Black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/fonts/Trap-Light.otf",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-trap",
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
        className={`${geistSans.variable} ${geistMono.variable} ${trap.variable} font-trap antialiased relative`}
      >
        {children}
      </body>
    </html>
  );
}
