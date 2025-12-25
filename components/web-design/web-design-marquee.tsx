import Image from "next/image";

const IMAGES = [
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

export default function WebDesignMarquee() {
  const track = [...IMAGES, ...IMAGES];

  return (
    <section className="relative overflow-hidden py-10">
      <div className="aclr-marquee flex w-max gap-6">
        {track.map((src, i) => (
          <div
            key={`${src}-${i}`}
            className="relative h-44 w-[320px] shrink-0 overflow-hidden rounded-xl border bg-background"
          >
            <Image
              src={src}
              alt={`Web design slide ${i + 1}`}
              fill
              className="object-cover"
              sizes="320px"
              priority={i < 2}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
