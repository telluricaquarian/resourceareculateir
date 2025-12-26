"use client"

import Image from "next/image"

export function StickyCta() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
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
