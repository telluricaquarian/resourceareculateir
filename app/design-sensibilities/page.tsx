// app/design-sensibilities/page.tsx

export default function DesignSensibilitiesPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-12">
      <header className="text-center">
        <h1 className="text-5xl font-semibold tracking-tight">
          Design Sensibilities
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Famous designers & creators — core sensibilities distilled for
          application.
        </p>

        <p className="mx-auto mt-8 max-w-3xl text-sm text-muted-foreground">
          Use these as “lenses” when you’re making UI decisions: what to remove,
          what to emphasize, what to systematize, and what emotional tone to aim
          for.
        </p>
      </header>

      <section className="mt-14 space-y-8">
        {/* Jony Ive */}
        <article className="rounded-2xl border bg-card p-6">
          <h2 className="text-xl font-semibold">
            Jony Ive — Reduction, Purity, Purpose
          </h2>
          <p className="mt-4 text-muted-foreground">
            Removes anything non-essential until only the meaningful remains —
            without losing warmth. Minimalist, but never sterile: every curve,
            material, and transition feels inevitable. Engineering and tactility
            meet in quiet confidence: the object doesn’t “announce” design — it
            simply feels right through proportion, detail, and user experience.
          </p>

          <ul className="mt-5 list-disc space-y-1 pl-5 text-muted-foreground">
            <li>Eliminate noise until the signal is undeniable</li>
            <li>Obsess over proportion, spacing, and material “feel”</li>
            <li>Let calm surfaces + symmetry do the talking</li>
          </ul>
        </article>

        {/* Wes Anderson */}
        <article className="rounded-2xl border bg-card p-6">
          <h2 className="text-xl font-semibold">
            Wes Anderson — Hyper-Stylized, Symmetrical, Storybook Worlds
          </h2>
          <p className="mt-4 text-muted-foreground">
            Builds nostalgic, surreal universes using meticulous symmetry,
            curated palettes, and analog texture. Every scene is like a diorama:
            centered compositions, controlled lighting, deliberate type and
            music. It’s not realism — it’s narrative voice: intentionally
            artificial, emotionally contained, instantly recognizable.
          </p>

          <ul className="mt-5 list-disc space-y-1 pl-5 text-muted-foreground">
            <li>Commit to a palette and enforce it everywhere</li>
            <li>Use symmetry and layout discipline to create “world rules”</li>
            <li>Lean into texture + nostalgia to evoke emotion</li>
          </ul>
        </article>

        {/* Paul Rand */}
        <article className="rounded-2xl border bg-card p-6">
          <h2 className="text-xl font-semibold">
            Paul Rand — Bold, Rational, Timeless (Clarity Meets Play)
          </h2>
          <p className="mt-4 text-muted-foreground">
            Treats design as problem-solving, not decoration. Modernist structure
            (grids, typography, geometry) paired with wit and metaphor. Simplicity
            isn’t style — it’s clarity. Marks should be ideas made visible:
            disciplined, communicative, and memorable without trying too hard.
          </p>

          <ul className="mt-5 list-disc space-y-1 pl-5 text-muted-foreground">
            <li>Prioritize communication over aesthetics</li>
            <li>Use geometric reduction to make ideas obvious</li>
            <li>Add “play” only if it sharpens the message</li>
          </ul>
        </article>

        {/* Michael Bierut */}
        <article className="rounded-2xl border bg-card p-6">
          <h2 className="text-xl font-semibold">
            Michael Bierut — Intelligent, Pragmatic, Culturally Fluent
          </h2>
          <p className="mt-4 text-muted-foreground">
            Doesn’t chase a signature style — adapts to the problem with clarity
            and strategic purpose. Excels at systems: identities and typographic
            architectures that scale while staying coherent. The best design feels
            obvious in hindsight because it organizes meaning so well.
          </p>

          <ul className="mt-5 list-disc space-y-1 pl-5 text-muted-foreground">
            <li>Design systems, not single screens</li>
            <li>Be restrained until boldness is required by the message</li>
            <li>Make structure do the heavy lifting</li>
          </ul>
        </article>

        {/* Paula Scher */}
        <article className="rounded-2xl border bg-card p-6">
          <h2 className="text-xl font-semibold">
            Paula Scher — Loud, Layered, Typographically Explosive
          </h2>
          <p className="mt-4 text-muted-foreground">
            Treats type as image: energetic, architectural, and culturally charged.
            Influences pull from Constructivism, Pop Art, and street culture.
            Rejects minimalism when maximalism tells the story better. Typography
            dominates space to disrupt, declare, and define.
          </p>

          <ul className="mt-5 list-disc space-y-1 pl-5 text-muted-foreground">
            <li>Use typography as the hero, not decoration</li>
            <li>Layer hierarchy to mirror real-world energy</li>
            <li>Maximalism is valid when it clarifies the vibe</li>
          </ul>
        </article>

        {/* Ronnie Fieg */}
        <article className="rounded-2xl border bg-card p-6">
          <h2 className="text-xl font-semibold">
            Ronnie Fieg — Streetwear Credibility Meets Luxury Restraint
          </h2>
          <p className="mt-4 text-muted-foreground">
            Elevates familiar forms through material upgrades, refined palettes,
            and story. Blends 90s NYC streetwear, sportswear, and hip-hop culture
            with premium execution. Nuance wins: tonal layering, subtle branding,
            and collectible-level restraint.
          </p>

          <ul className="mt-5 list-disc space-y-1 pl-5 text-muted-foreground">
            <li>Upgrade materials + finishing before adding new shapes</li>
            <li>Prefer subtle branding and tonal contrast</li>
            <li>Turn nostalgia into modern collectibility</li>
          </ul>
        </article>

        {/* Frank Abagnale */}
<div className="mt-16 text-center">
  <h2 className="text-3xl font-semibold tracking-tight">
    Designing like Frank Abagnale
  </h2>

  <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
    Engineering unconscious trust through design competence.
  </p>

  {/* Image directly under header + subheader */}
  <div className="mx-auto mt-8 overflow-hidden rounded-2xl border bg-card">
    <img
      src="/catchmeifyoucan.png"
      alt="Designing like Frank Abagnale — Engineering unconscious trust through design competence"
      className="h-auto w-full"
    />
  </div>

  {/* Descriptive text BELOW the image */}
  <div className="mx-auto mt-10 max-w-3xl space-y-6 text-left text-muted-foreground">
    <p>
      <strong>Precision, Consistency, Credibility Engineering.</strong>{" "}
      Trust is not persuaded — it is inferred. Abagnale succeeded by
      understanding that people don’t verify what feels structurally
      correct. Titles, typography, documents, language, and sequencing
      aligned so cleanly that doubt never activated. In design, the same
      principle applies: when systems are coherent, hierarchy is
      disciplined, and execution is exact, users stop evaluating and start
      complying. Competence becomes the interface.
    </p>

    <p>
      <strong>Designing for Cognitive Shortcuts.</strong> Human trust
      operates on heuristics. Abagnale exploited the fact that people rely
      on visual order, familiar structures, and confident signaling to
      decide what is legitimate. Interfaces work the same way. When design
      elements align with expectation — correct spacing, formal hierarchy,
      restrained language, and procedural flow — users assume authority
      without conscious scrutiny. The goal isn’t deception; it’s
      eliminating friction by making correctness obvious.
    </p>

    <p>
      <strong>Authority Without Deception.</strong> Abagnale’s insight
      wasn’t fraud — it was pattern recognition. People trust what appears
      internally consistent, procedurally sound, and confidently executed.
      Good design applies this insight ethically: not to mislead, but to
      remove uncertainty. When every element reinforces legitimacy —
      visual systems, copy tone, interaction timing — trust becomes
      automatic. The best interfaces don’t convince users; they make doubt
      unnecessary.
    </p>
  </div>
</div>
