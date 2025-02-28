import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import JsonLd from './components/JsonLd'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'VirtusCo - Innovative Robotics & Automation Solutions in India',
  description: 'Leading robotics company in India providing cutting-edge automation solutions for manufacturing and industry. Expert robotics integration, custom automation systems, and innovative technology solutions.',
  keywords: [
    'robotics company india',
    'automation solutions',
    'industrial robotics',
    'manufacturing automation',
    'robotics integration',
    'automation technology india',
    'industrial automation solutions',
    'smart manufacturing solutions'
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
    icon: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png', // Add this icon to your public folder
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <JsonLd />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

