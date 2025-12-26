// components/sticky-cta.tsx
"use client"

import Link from "next/link"
import Image from "next/image"

// Static imports from /public (more reliable than string src in some setups)
import displayPicture from "@/public/displaypicture.png"
import gradientBlueLogo from "@/public/gradientbluelogo.png"

export function StickyCta() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Pill */}
      <Link
        href="/leadgeneration"
        className="group flex items-center gap-3 rounded-2xl border bg-white px-4 py-3 shadow-lg transition hover:shadow-xl"
      >
        {/* Avatar */}
        <div className="relative h-12 w-12 overflow-hidden rounded-full border bg-muted">
          <Image
            src={displayPicture}
            alt="Areculateir display picture"
            fill
            sizes="48px"
            className="object-cover"
            priority
          />
        </div>

        <div className="leading-tight">
          <div className="text-sm font-semibold text-black">
            Want a new site for FREE?
          </div>
          <div className="text-xs text-muted-foreground">Join the Waitlist</div>
        </div>
      </Link>

      {/* Round icon button */}
      <button
        type="button"
        aria-label="Open"
        className="grid h-14 w-14 place-items-center rounded-full border bg-white shadow-lg transition hover:shadow-xl"
        onClick={() => {
          window.location.href = "/leadgeneration"
        }}
      >
        <span className="relative block h-10 w-10">
          <Image
            src={gradientBlueLogo}
            alt="Areculateir logo"
            fill
            sizes="40px"
            className="object-contain"
            priority
          />
        </span>
      </button>
    </div>
  )
}
