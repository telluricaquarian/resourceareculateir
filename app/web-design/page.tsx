// app/web-design/page.tsx

import { WebDesignMarquee } from "@/components/web-design/web-design-marquee";

export default function WebDesignPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <WebDesignMarquee />

      <header className="mt-10 text-center">
        <h1 className="text-5xl font-semibold tracking-tight">Web Design</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Web design + CRO resources by Areculateir.
        </p>

        <p className="mx-auto mt-8 max-w-3xl text-sm text-muted-foreground">
          <span className="font-medium text-foreground">Abstract:</span>{" "}
          High-converting websites don’t “explain.” They diagnose and guide as one
          touch-point in a larger ecosystem.
        </p>
      </header>

      <section className="mt-14 space-y-10">
        {/* 1 */}
        <div className="rounded-2xl border bg-card p-6">
          <h2 className="text-xl font-semibold">
            1. Attention → Intent (Before They Land)
          </h2>

          <p className="mt-4">
            A website only converts intent, not raw traffic. Attention is created
            before the click.
          </p>

          <div className="mt-5 grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="font-semibold">How attention is formed:</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
                <li>Short-form content → earns curiosity</li>
                <li>Long-form content → builds trust</li>
                <li>Ads → amplify what already works</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">Rule:</h3>
              <p className="mt-2 text-muted-foreground">
                Do not send cold traffic to a general site. Send motivated traffic
                to one clear next step.
              </p>
            </div>
          </div>
        </div>

        {/* 2 */}
        <div className="rounded-2xl border bg-card p-6">
          <h2 className="text-xl font-semibold">2. One Page. One Decision.</h2>

          <p className="mt-4 text-muted-foreground">
            High-converting sites are focused, not informative.
          </p>

          <div className="mt-5 grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="font-semibold">Principles:</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
                <li>One page</li>
                <li>One outcome</li>
                <li>One next step (not necessarily a form)</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">Examples of valid “next steps”:</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
                <li>Interactive tool or assessment</li>
                <li>Book a call</li>
                <li>Content unlock</li>
                <li>Demo preview</li>
                <li>Community access</li>
                <li>Waitlist</li>
                <li>Self-selection path</li>
                <li>Download / calculator / configuration</li>
              </ul>

              <h3 className="mt-5 font-semibold">Rule:</h3>
              <p className="mt-2 text-muted-foreground">
                If there are multiple CTAs, conversion dies.
              </p>
            </div>
          </div>
        </div>

        {/* 3 */}
        <div className="rounded-2xl border bg-card p-6">
          <h2 className="text-xl font-semibold">
            3. Above the Fold = Reason to Continue
          </h2>

          <p className="mt-4 text-muted-foreground">
            The top of the page answers one question only: “Why should I keep
            scrolling?”
          </p>

          <div className="mt-5 grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="font-semibold">Hook types that work:</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
                <li>
                  Frustration hook: “Why X isn’t working even though you’re doing Y”
                </li>
                <li>Readiness hook: “Ready to finally achieve X?”</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">Immediately follow with:</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
                <li>What happens if they continue</li>
                <li>What they’ll learn, see, or unlock</li>
                <li>
                  Time + effort clarity (e.g. “2 minutes”, “no signup”, “instant result”)
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 4 */}
        <div className="rounded-2xl border bg-card p-6">
          <h2 className="text-xl font-semibold">
            4. Value Proposition = Clear Exchange
          </h2>

          <p className="mt-4 text-muted-foreground">Spell out the trade clearly.</p>

          <div className="mt-5 grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="font-semibold">Formula:</h3>
              <p className="mt-2 text-muted-foreground">Action → Immediate Gain</p>
            </div>

            <div>
              <h3 className="font-semibold">Use:</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
                <li>“Do X → get Y”</li>
                <li>
                  Maximum of 3 outcomes, such as: Improvement, Clarity, Pain removal
                </li>
              </ul>

              <h3 className="mt-5 font-semibold">Rule:</h3>
              <p className="mt-2 text-muted-foreground">
                People don’t convert for features. They convert for understanding.
              </p>
            </div>
          </div>
        </div>

        {/* 5 */}
        <div className="rounded-2xl border bg-card p-6">
          <h2 className="text-xl font-semibold">5. Proof (Only for This Step)</h2>

          <p className="mt-4 text-muted-foreground">
            Proof should validate the next action, not your entire business.
          </p>

          <div className="mt-5 grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="font-semibold">Good proof:</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
                <li>Outcomes from using the tool or process</li>
                <li>Credible data or benchmarks</li>
                <li>One strong testimonial</li>
                <li>Research or authority alignment</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">Bad proof:</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
                <li>Generic brand bragging</li>
                <li>Services unrelated to the next step</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 6 */}
        <div className="rounded-2xl border bg-card p-6">
          <h2 className="text-xl font-semibold">
            6. Frictionless CTA (The No-Brainer Next Step)
          </h2>

          <p className="mt-4 text-muted-foreground">
            Tell them exactly what happens next.
          </p>

          <div className="mt-5 grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="font-semibold">Kill resistance by clarifying:</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
                <li>Cost (free / no commitment)</li>
                <li>Time (how long it takes)</li>
                <li>Effort (how hard it is)</li>
                <li>Outcome (what they get immediately)</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">Rule:</h3>
              <p className="mt-2 text-muted-foreground">
                If they think “why not?” — you win.
              </p>
            </div>
          </div>
        </div>

        {/* 7 */}
        <div className="rounded-2xl border bg-card p-6">
          <h2 className="text-xl font-semibold">7. Follow-Up</h2>

          <p className="mt-4 text-muted-foreground">
            Conversion does not end on the page.
          </p>

          <div className="mt-5 grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="font-semibold">Follow-up channels:</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
                <li>Email</li>
                <li>Messaging</li>
                <li>Content</li>
                <li>Sales outreach (if appropriate)</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">Follow-up reinforces:</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
                <li>Their problem</li>
                <li>Their result</li>
                <li>Their recommended path</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 8 */}
        <div className="rounded-2xl border bg-card p-6">
          <h2 className="text-xl font-semibold">
            8. Debug by Stage (No Guesswork)
          </h2>

          <p className="mt-4 text-muted-foreground">
            If it’s not converting, you always know where.
          </p>

          <div className="mt-5 grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="font-semibold">Diagnose precisely:</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
                <li>Low traffic → attention problem</li>
                <li>High traffic, low action → page clarity problem</li>
                <li>Action, no conversion → insight or recommendation problem</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">Outcome:</h3>
              <p className="mt-2 text-muted-foreground">
                This turns marketing from guessing into engineering.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
