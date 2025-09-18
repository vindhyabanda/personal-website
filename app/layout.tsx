import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@/components/analytics"
import ClientLayout from "./client"
import { Suspense } from "react"
import "./globals.css" // Import the correct globals.css with pink theme

export const metadata: Metadata = {
  title: "Vindhya Banda | Technical Product Manager",
  description:
    "Portfolio of Vindhya Banda, a Technical Product Manager at Microsoft specializing in Digital Twin Builder, Azure IoT, and AI-powered product development.",
  keywords: [
    "Vindhya Banda",
    "Technical Product Manager",
    "Product Manager",
    "Microsoft",
    "Azure IoT",
    "Digital Twin Builder",
    "AI",
    "Machine Learning",
    "OpenUSD",
    "NVIDIA",
  ],
  authors: [{ name: "Vindhya Banda" }],
  creator: "Vindhya Banda",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vindhyabanda.com",
    title: "Vindhya Banda | Technical Product Manager",
    description:
      "Portfolio of Vindhya Banda, a Technical Product Manager at Microsoft specializing in Digital Twin Builder, Azure IoT, and AI-powered product development.",
    siteName: "Vindhya Banda Portfolio",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "Vindhya Banda Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vindhya Banda | Technical Product Manager",
    description:
      "Portfolio of Vindhya Banda, a Technical Product Manager at Microsoft specializing in Digital Twin Builder, Azure IoT, and AI-powered product development.",
    creator: "@vindhyabanda",
    images: ["/favicon.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Suspense>
        <ClientLayout>{children}</ClientLayout>
      </Suspense>
      <Analytics />
    </>
  )
}
