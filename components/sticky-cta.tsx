// components/sticky-cta.tsx
"use client"

import Link from "next/link"

export function StickyCta() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Pill */}
      <Link
        href="/leadgeneration"
        className="group flex items-center gap-3 rounded-2xl border bg-white px-4 py-3 shadow-lg transition hover:shadow-xl"
      >
        <div className="h-12 w-12 overflow-hidden rounded-full border bg-muted">
          {/* Replace with your actual image if you have one */}
          <div className="h-full w-full bg-gray-200" />
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
          // You can swap this to open a modal, calculator, etc.
          window.location.href = "/leadgeneration"
        }}
      >
        <span className="text-xl">⌗</span>
      </button>
    </div>
  )
}
