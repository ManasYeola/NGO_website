import Image from "next/image";
import Link from "next/link";

const photos = [
  {
    src: "/ngo_workshop.png",
    alt: "Community training workshop",
    caption: "Empowering communities through storytelling",
    span: "col-span-2",
  },
  {
    src: "/ngo_field.png",
    alt: "Field workers with technology",
    caption: "Technology bridging the impact gap",
    span: "col-span-1",
  },
  {
    src: "/ngo_gallery_1.png",
    alt: "Volunteers distributing supplies",
    caption: "On the ground, every day",
    span: "col-span-1",
  },
  {
    src: "/ngo_dashboard.png",
    alt: "NGO data analytics dashboard",
    caption: "Data-driven decisions for real-world impact",
    span: "col-span-2",
  },
  {
    src: "/ngo_gallery_2.png",
    alt: "Village community meeting",
    caption: "Listening first — building together",
    span: "col-span-1",
  },
  {
    src: "/ngo_gallery_3.png",
    alt: "Children learning with technology",
    caption: "Education for every child",
    span: "col-span-1",
  },
  {
    src: "/ngo_gallery_4.png",
    alt: "NGO team meeting",
    caption: "Collaborative strategy for global good",
    span: "col-span-2",
  },
];

/* ─── Hero ───────────────────────────────────────────────────────────── */
export function PhotosHero() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--brand)]">Gallery</p>
        <div className="mt-3 grid gap-6 lg:grid-cols-2 lg:items-end">
          <h1 className="text-5xl font-bold leading-tight text-[var(--foreground)] sm:text-6xl">
            Capturing Impact,
            <br />
            <span className="text-[var(--teal)]">One Frame at a Time.</span>
          </h1>
          <p className="text-lg leading-8 text-[var(--muted)]">
            A visual record of our work, our partners, and the communities we serve. Every image
            tells the story of change.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── Photo Grid ─────────────────────────────────────────────────────── */
export function PhotoGrid() {
  return (
    <section className="bg-[var(--bg-alt)] py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid auto-rows-[280px] grid-cols-3 gap-4">
          {photos.map((photo, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-2xl bg-gray-100 ${photo.span}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 90vw, 50vw"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 translate-y-full p-5 transition-transform duration-300 group-hover:translate-y-0">
                <p className="text-sm font-semibold text-white">{photo.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Caption Banner ─────────────────────────────────────────────────── */
export function PhotosBanner() {
  return (
    <section className="relative overflow-hidden bg-[var(--bg-dark)] py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="relative h-64 overflow-hidden rounded-2xl">
          <Image
            src="/ngo_gallery_1.png"
            alt="NGO impact"
            fill
            className="object-cover brightness-50"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="max-w-2xl text-center text-2xl font-bold italic text-white sm:text-3xl">
              &ldquo;Reliability in every line of code. Integrity in every partnership.&rdquo;
            </p>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-lg bg-[var(--brand)] px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[var(--brand-dark)] hover:-translate-y-0.5"
          >
            Partner With Us
          </Link>
          <Link
            href="/timeline"
            className="inline-flex items-center rounded-lg border border-white/20 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/20 hover:-translate-y-0.5"
          >
            Our Story
          </Link>
        </div>
      </div>
    </section>
  );
}
