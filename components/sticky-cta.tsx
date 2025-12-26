// components/sticky-cta.tsx
"use client"

import Link from "next/link"
import Image from "next/image"

export function StickyCta() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Pill */}
      <Link
        href="https://www.areculateir.com"
        className="group flex items-center gap-3 rounded-2xl border bg-white px-4 py-3 shadow-lg transition hover:shadow-xl"
      >
        {/* Avatar */}
        <div className="relative h-12 w-12 overflow-hidden rounded-full border bg-muted">
          <Image
            src="/displaypicture.png"
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
        aria-label="Open Areculateir"
        className="grid h-14 w-14 place-items-center rounded-full border bg-white shadow-lg transition hover:shadow-xl"
        onClick={() => {
          window.location.href = "https://www.areculateir.com"
        }}
      >
        <span className="relative block h-10 w-10">
          <Image
            src="/gradientbluelogo.png"
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
