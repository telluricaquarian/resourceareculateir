"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Search } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Main docs navigation
const docsNavItems = [
  { title: "Introduction", url: "/" },
  { title: "Getting Started", url: "/getting-started" },
  { title: "Components", url: "/components" },
  { title: "API Reference", url: "/api-reference" },
  { title: "Lead Generation", url: "/leadgeneration" }, // existing page
]

// Footer → Solutions
const solutionNavItems = [
  { title: "High-End UI", url: "/high-end-ui" },
  { title: "Media Buying", url: "/media-buying" },
  { title: "Funnel Optimization", url: "/funnel-optimization" },
]

// Footer → Resources
const resourceNavItems = [
  {
    title: "Design Sensibilities – Notable Design Figures",
    url: "/design-sensibilities",
  },
  { title: "Web Design Styles", url: "/web-design-styles" },
  { title: "UX & UI Psychology", url: "/ux-ui-psychology" },
  {
    title: "Media Buying Mental Models",
    url: "/media-buying-mental-models",
  },
  { title: "Copywriting Formulas", url: "/copywriting-formulas" },
  { title: "VSL Formulas", url: "/vsl-formulas" },
  { title: "Optimizing Cursor", url: "/optimizing-cursor" },
  { title: "Using Resend for Email", url: "/using-resend-for-email" },
  { title: "Lead Generation", url: "/leadgeneration" },
  { title: "Privacy Policy", url: "/privacy-policy" },
  { title: "Terms of Service", url: "/terms-of-service" },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar>
      <SidebarHeader>
        {/* Logo row */}
        <div className="px-3 pt-4 pb-2 flex items-center gap-3">
          <Image
            src="/arecresourcelogo.png"
            alt="Areculateir Resources"
            width={32}
            height={32}
            className="rounded-sm"
            priority
          />
          <span className="text-sm font-semibold tracking-tight">
            Areculateir Resources
          </span>
        </div>

        {/* Search input */}
        <div className="px-3 pb-4 space-y-2">
          <Label htmlFor="search" className="sr-only">
            Search
          </Label>
          <div className="relative">
            <Search className="absolute left-2 top-2 h-4 w-4 text-muted-foreground" />
            <Input
              id="search"
              placeholder="Search aclr77 docs..."
              className="pl-8"
            />
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        {/* Docs group */}
        <SidebarGroup>
          <SidebarGroupLabel>Documentation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {docsNavItems.map((item) => (
                <SidebarMenuItem key={item.url}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.url}
                  >
                    <Link href={item.url}>{item.title}</Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Solutions group */}
        <SidebarGroup>
          <SidebarGroupLabel>Solutions</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {solutionNavItems.map((item) => (
                <SidebarMenuItem key={item.url}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.url}
                  >
                    <Link href={item.url}>{item.title}</Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Resources group */}
        <SidebarGroup>
          <SidebarGroupLabel>Resources</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {resourceNavItems.map((item) => (
                <SidebarMenuItem key={item.url}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.url}
                  >
                    <Link href={item.url}>{item.title}</Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
