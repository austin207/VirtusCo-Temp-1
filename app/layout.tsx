import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "VirtusCo - Coming Soon | Innovative Robotics Solutions",
  description:
    "VirtusCo is a robotics solutions company developing innovative automation systems while bridging the gap between people who lack resources and those who have resources to nurture talent.",
  keywords: [
    "robotics",
    "automation",
    "industrial automation",
    "robotics education",
    "robotics solutions",
    "VirtusCo",
    "technology innovation",
    "robotics engineering",
  ],
  authors: [{ name: "VirtusCo" }],
  creator: "VirtusCo",
  publisher: "VirtusCo",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://virtusco.in",
    title: "VirtusCo - Bridging the Gap in Robotics Innovation",
    description: "VirtusCo is a robotics solutions company developing innovative automation systems.",
    siteName: "VirtusCo",
    images: [
      {
        url: "/og-image.jpg", // Make sure to add this image to your public folder
        width: 1200,
        height: 630,
        alt: "VirtusCo - Robotics Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VirtusCo - Innovative Robotics Solutions",
    description: "Bridging the gap between talent and resources in robotics innovation.",
    images: ["/og-image.jpg"], // Same image as OpenGraph
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png', // Add this icon to your public folder
  },
  manifest: '/manifest.json', // Consider adding a web manifest for PWA support
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

