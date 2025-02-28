import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import JsonLd from './components/JsonLd'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://virtusco.in'),
  title: {
    default: 'VirtusCo - Industrial Robotics & Automation Solutions India',
    template: '%s | VirtusCo'
  },
  description: 'Leading industrial robotics company in India providing automation solutions, robotic integration, and smart manufacturing systems for Industry 4.0',
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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'VirtusCo - Industrial Robotics & Automation Solutions',
    description: 'Leading industrial robotics company in India providing automation solutions, robotic integration, and smart manufacturing systems',
    url: 'https://virtusco.in',
    siteName: 'VirtusCo',
    locale: 'en_IN',
    type: 'website',
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
  verification: {
    google: 'your-google-site-verification-code', // Add this from Google Search Console
  }
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

