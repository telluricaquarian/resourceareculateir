import Image from "next/image";

const images = [
  "/images/web-design-carousel/4.png",
  "/images/web-design-carousel/5.png",
  "/images/web-design-carousel/6.png",
  "/images/web-design-carousel/7.png",
  "/images/web-design-carousel/8.png",
  "/images/web-design-carousel/9.png",
];

export function WebDesignMarquee() {
  const track = [...images, ...images];

  return (
    <section className="relative w-full overflow-hidden rounded-2xl border bg-background">
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

      <div className="marquee flex w-max gap-4 p-4">
        {track.map((src, i) => (
          <div
            key={`${src}-${i}`}
            className="relative h-44 w-[320px] shrink-0 overflow-hidden rounded-xl border"
          >
            <Image
              src={src}
              alt="Areculateir web design CRO document"
              fill
              className="object-cover"
              sizes="320px"
              priority={i < 2}
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        .marquee {
          animation: scroll 30s linear infinite;
        }
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
