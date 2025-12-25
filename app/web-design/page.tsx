// app/web-design/page.tsx
import { WebDesignMarquee } from "@/components/web-design/web-design-marquee";

export default function WebDesignPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-10">
      <WebDesignMarquee />

      <div className="mx-auto max-w-4xl py-10 text-center">
        <h1 className="text-4xl font-semibold tracking-tight">Web Design</h1>
        <p className="mt-4 text-muted-foreground">
          Web design + CRO resources by Areculateir.
        </p>
      </div>
    </main>
  );
}
