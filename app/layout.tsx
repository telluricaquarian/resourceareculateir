import "./globals.css"
import { StickyCta } from "@/components/sticky-cta"
import { Inter } from "next/font/google"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: {
    default: "Areculateir Resources",
    template: "%s | Areculateir Resources",
  },
  description:
    "Resource library for Areculateir — high-end UI, media buying, funnel optimization, and systems.",
  applicationName: "Areculateir Resources",
  generator: "v0.app",
  openGraph: {
    title: "Areculateir Resources",
    description:
      "Resource library for Areculateir — high-end UI, media buying, funnel optimization, and systems.",
    siteName: "Areculateir Resources",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Areculateir Resources",
    description:
      "Resource library for Areculateir — high-end UI, media buying, funnel optimization, and systems.",
  },
  icons: {
    icon: "/icon.svg",
  },
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <SidebarProvider>
          <AppSidebar />
          <SidebarTrigger className="ml-3 mt-3" />

          <main className="flex-1 overflow-auto p-8 pt-16">
            {children}
          </main>

          {/* Global Sticky CTA */}
          <StickyCta />
        </SidebarProvider>
      </body>
    </html>
  )
}
