import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Introduction | Areculateir Resources",
  description: "Foundational principles, frameworks, and strategic knowledge behind Areculateir.",
}

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl py-10 space-y-8">
      {/* Intro */}
      <section className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">
          Welcome to the Areculateir Resource Repository
        </h1>
        <p className="text-lg text-muted-foreground">
          This library contains the principles, frameworks, and mental models
          that shape how Areculateir approaches high–end UI, funnels, media
          buying, and performance psychology.  
          It exists to give structure to the ideas behind the work we build.
        </p>
      </section>

      {/* What this is */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold tracking-tight">What this is</h2>
        <p className="text-muted-foreground">
          Instead of scattered notes, screenshots, and half–formed ideas, this
          repo centralizes the knowledge and thinking patterns that make
          Areculateir distinct. Think of it as:
        </p>

        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
          <li>
            A <span className="font-medium">strategic brain</span> for how we design, write, and build.
          </li>
          <li>
            A <span className="font-medium">client–facing reference</span> that shows the depth behind
            what we deploy.
          </li>
          <li>
            A <span className="font-medium">personal operating system</span> for future decisions,
            positioning, and creative direction.
          </li>
        </ul>
      </section>

      {/* Sidebar structure */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold tracking-tight">
          How the sidebar is structured
        </h2>
        <p className="text-muted-foreground">
          Use the navigation on the left to browse through core concepts and
          applied knowledge:
        </p>

        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
          <li>
            <span className="font-medium">Documentation</span> – includes this
            introduction and high–level topics like{" "}
            <span className="font-medium">Lead Generation</span>.
          </li>
          <li>
            <span className="font-medium">Solutions</span> – the pillars of our
            offering: High–End UI, Media Buying, and Funnel Optimization.
          </li>
          <li>
            <span className="font-medium">Resources</span> – deep dives into design
            sensibilities, UI psychology, copywriting formulas, mental models,
            VSL structures, and more.
          </li>
        </ul>
      </section>

      {/* Usage */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold tracking-tight">
          How to use this library
        </h2>
        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
          <li>
            Review relevant sections before starting a new build or project.
          </li>
          <li>
            Reference pages during client discussions to explain underlying
            strategy and reasoning.
          </li>
          <li>
            Continuously refine and update entries as Areculateir evolves.
          </li>
        </ul>

        <p className="text-muted-foreground">
          This repo should grow over time — becoming a living playbook instead
          of static documentation.
        </p>
      </section>
    </main>
  )
}
