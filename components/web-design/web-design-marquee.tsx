// components/web-design/web-design-marquee.tsx
import Image from "next/image";

const images = [
  "/images/web-design-carousel/4.png",
  "/images/web-design-carousel/5.png",
  "/images/web-design-carousel/6.png",
  "/images/web-design-carousel/7.png",
  "/images/web-design-carousel/8.png",
  "/images/web-design-carousel/9.png",
  "/images/web-design-carousel/10.png",
  "/images/web-design-carousel/11.png",
  "/images/web-design-carousel/12.png",
  "/images/web-design-carousel/13.png",
  "/images/web-design-carousel/14.png",
];

export function WebDesignMarquee() {
  // Duplicate for seamless loop
  const track = [...images, ...images];

  return (
    <section className="w-full">
      <div className="aclr-marquee-track">
        <div className="aclr-marquee-inner py-8">
          {track.map((src, i) => (
            <div
              key={`${src}-${i}`}
              className="relative h-[110px] w-[260px] shrink-0 overflow-hidden rounded-2xl border bg-card shadow-sm"
            >
              <Image
                src={src}
                alt={`Web design example ${i + 1}`}
                fill
                className="object-cover"
                sizes="260px"
                priority={i < 4}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
