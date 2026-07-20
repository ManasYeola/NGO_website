import Image from "next/image";

const milestones = [
  {
    year: "2018",
    tag: "THE SPARK",
    quote:
      "We saw NGOs struggling with spreadsheets while solving world hunger. We had to build something better.",
    name: "Elena Vance",
    title: "Lead Strategist",
    photo: "/elena_vance.png",
    side: "left" as const,
  },
  {
    year: "2020",
    tag: "DEPLOYMENT",
    quote:
      "Deploying our first module in Nairobi was the proof of concept. Technology can bridge the impact gap.",
    name: "Marcus Thorne",
    title: "Chief Architect",
    photo: "/marcus_thorne.png",
    side: "right" as const,
  },
  {
    year: "2022",
    tag: "SCALING",
    quote:
      "Scaling to 500+ partners meant ensuring our UI felt like home, regardless of the language or mission.",
    name: "Sarah Jenkins",
    title: "Regional Director",
    photo: "/sarah_jenkins.png",
    side: "left" as const,
  },
  {
    year: "Today",
    tag: "BEYOND",
    quote:
      "We aren't just building software; we're building the infrastructure for a better, more efficient world.",
    name: "David Aris",
    title: "CEO & Visionary",
    photo: "/david_aris.png",
    side: "right" as const,
  },
];

/* ─── Hero ───────────────────────────────────────────────────────────── */
export function TimelineHero() {
  return (
    <section className="bg-white py-16 text-center">
      <div className="mx-auto max-w-3xl px-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--brand)]">Our Journey</p>
        <h1 className="mt-4 text-5xl font-bold text-[var(--foreground)] sm:text-6xl">Our Story</h1>
        <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
          A journey of transforming global impact through technical precision and human-centered design.
        </p>
      </div>
    </section>
  );
}

/* ─── Timeline Path ──────────────────────────────────────────────────── */
export function TimelinePath() {
  return (
    <section className="relative bg-[var(--bg-alt)] py-10 pb-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        {milestones.map((m, index) => {
          const isLeft = m.side === "left";
          return (
            <div
              key={m.year}
              className={`relative mb-0 flex flex-col items-center gap-0 lg:flex-row ${isLeft ? "lg:flex-row" : "lg:flex-row-reverse"}`}
            >
              {/* Content side */}
              <div className={`w-full lg:w-[44%] ${isLeft ? "lg:pr-12 lg:text-right" : "lg:pl-12 lg:text-left"} mb-8 lg:mb-0`}>
                {/* Quote card */}
                <div className={`inline-block rounded-2xl border border-[var(--border)] bg-white p-6 shadow-sm text-left max-w-sm ${isLeft ? "lg:ml-auto" : ""}`}>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[var(--teal)]">
                    {m.year}: {m.tag}
                  </p>
                  <blockquote className="mt-3 text-sm leading-7 italic text-[var(--foreground)]">
                    &ldquo;{m.quote}&rdquo;
                  </blockquote>
                </div>
              </div>

              {/* Center: person node */}
              <div className="relative z-10 flex w-full flex-col items-center lg:w-[12%]">
                {/* Connector lines */}
                {index < milestones.length - 1 && (
                  <div
                    className="absolute top-full hidden h-28 w-0.5 lg:block"
                    style={{
                      background: `repeating-linear-gradient(to bottom, var(--teal) 0, var(--teal) 6px, transparent 6px, transparent 12px)`,
                      left: "50%",
                      transform: "translateX(-50%)",
                    }}
                  />
                )}
                {/* Person photo */}
                <div className="relative">
                  <div className="h-20 w-20 overflow-hidden rounded-full border-4 border-[var(--teal)] bg-gray-100 shadow-lg">
                    <Image
                      src={m.photo}
                      alt={m.name}
                      width={80}
                      height={80}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  {/* Year badge */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-[var(--teal)] px-2 py-0.5 text-[10px] font-bold text-white whitespace-nowrap">
                    {m.year}
                  </div>
                </div>
                {/* Name */}
                <div className="mt-5 text-center">
                  <div className="text-sm font-bold text-[var(--foreground)]">{m.name}</div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">{m.title}</div>
                </div>
                {/* Spacer for connector */}
                {index < milestones.length - 1 && <div className="mt-8 hidden h-20 lg:block" />}
              </div>

              {/* Empty right/left side (mirror) */}
              <div className="hidden w-[44%] lg:block" />
            </div>
          );
        })}
      </div>
    </section>
  );
}
