import { createFileRoute } from "@tanstack/react-router";

import heroPortrait from "@/assets/hero-portrait.jpg";
import sketchMotion from "@/assets/sketch-motion.jpg";
import sketchPortrait from "@/assets/sketch-portrait.jpg";
import sketchEnvironment from "@/assets/sketch-environment.jpg";
import sketchEmotion from "@/assets/sketch-emotion.jpg";
import sketchCreature from "@/assets/sketch-creature.jpg";
import sketchAction from "@/assets/sketch-action.jpg";

export const Route = createFileRoute("/")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Siyanda Ngwenya — Anime & Manga Sketch Artist" },
      {
        name: "description",
        content:
          "Selected sketches, story and path of Siyanda Ngwenya — an anime and manga sketch artist building a creative career from Johannesburg and Cape Town.",
      },
      { property: "og:title", content: "Siyanda Ngwenya — Anime & Manga Sketch Artist" },
      {
        property: "og:description",
        content:
          "Pencil, ink and panels. Selected sketches, story and contact for Siyanda Ngwenya.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const sketches = [
  {
    src: sketchMotion,
    alt: "Manga action pose sketch — dynamic pencil linework of a character mid-leap",
    title: "01 / Motion study",
    span: "md:col-span-5",
    aspect: "aspect-[4/5]",
    width: 1024,
    height: 1280,
  },
  {
    src: sketchPortrait,
    alt: "Manga character portrait with graphite shading and screentone",
    title: "02 / Portrait",
    span: "md:col-span-3",
    aspect: "aspect-[3/4]",
    width: 768,
    height: 1024,
  },
  {
    src: sketchEnvironment,
    alt: "Manga environment spread — night city street in ink wash",
    title: "03 / Environment",
    span: "md:col-span-4",
    aspect: "aspect-[4/3]",
    width: 1024,
    height: 768,
  },
  {
    src: sketchEmotion,
    alt: "Manga emotion study — close-up face in pencil crosshatch",
    title: "04 / Emotion",
    span: "md:col-span-4",
    aspect: "aspect-[4/3]",
    width: 1024,
    height: 768,
  },
  {
    src: sketchCreature,
    alt: "Manga creature design sketch sheet in bold ink lines",
    title: "05 / Creature",
    span: "md:col-span-4",
    aspect: "aspect-[4/3]",
    width: 1024,
    height: 768,
  },
  {
    src: sketchAction,
    alt: "Manga speed-line action panel in high contrast ink",
    title: "06 / Action",
    span: "md:col-span-4",
    aspect: "aspect-[4/3]",
    width: 1024,
    height: 768,
  },
];

const path = [
  {
    when: "Now",
    active: true,
    title: "CAPACITI & FNB Academy",
    text: "Studying creative and digital skills — sharpening the craft and the process behind the line.",
  },
  {
    when: "2023",
    active: false,
    title: "Diploma in Mathematics · Alison",
    text: "Structured thinking that still shapes how I plan a page and break down a composition.",
  },
  {
    when: "2022",
    active: false,
    title: "Maths & Science Tutor · Senaoane Secondary",
    text: "Seven months of private tutoring — teaching patience, clarity, and how to break a hard idea down.",
  },
  {
    when: "2019 – 2021",
    active: false,
    title: "General Worker → Supervisor · Roots Butchery",
    text: "Two years on the floor, then a year running the shift at 19 — my first leadership role.",
  },
];

const contacts = [
  {
    label: "Instagram",
    handle: "@mbanzeniwesizwe",
    href: "https://instagram.com/mbanzeniwesizwe",
  },
  {
    label: "TikTok",
    handle: "@mbanzeniwesizwe",
    href: "https://tiktok.com/@mbanzeniwesizwe",
  },
  {
    label: "WhatsApp",
    handle: "068 702 6086",
    href: "https://wa.me/27687026086",
  },
  {
    label: "Email",
    handle: "siyandangwenya3@gmail.com",
    href: "mailto:siyandangwenya3@gmail.com",
  },
];

const navItems = [
  { label: "(a) Work", href: "#work" },
  { label: "(b) Story", href: "#story" },
  { label: "(c) Path", href: "#path" },
  { label: "(d) Contact", href: "#contact" },
];

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background font-body text-foreground">
      <div
        aria-hidden="true"
        className="grain-overlay pointer-events-none fixed inset-0 z-50 opacity-[0.05] mix-blend-multiply"
      />

      {/* header */}
      <header className="relative z-20 border-b border-border">
        <div className="mx-auto flex h-16 max-w-[1360px] items-center justify-between px-6 md:px-10">
          <a href="#top" className="font-display text-lg tracking-tight">
            NGWENYA<span className="text-accent">.</span>
          </a>
          <nav className="hidden items-center gap-8 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition-colors hover:text-accent">
                {item.label}
              </a>
            ))}
          </nav>
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
            JHB · CPT
          </span>
        </div>
      </header>

      {/* hero */}
      <section id="top" className="relative z-10 border-b-2 border-foreground">
        <div className="mx-auto grid max-w-[1360px] gap-8 px-6 py-16 md:grid-cols-12 md:px-10 md:py-24">
          <div className="md:col-span-8">
            <p className="animate-bleed-in font-mono text-[12px] uppercase tracking-[0.25em] text-muted-foreground">
              Anime &amp; manga sketch artist
            </p>
            <h1 className="mt-5 animate-bleed-in font-display text-[clamp(3.5rem,13vw,11rem)] leading-[0.82] tracking-tight [animation-delay:80ms]">
              SIYANDA
              <br />
              <span className="text-foreground/90">NGWENYA</span>
            </h1>
            <p className="mt-8 max-w-[42ch] animate-bleed-in font-mono text-[13px] leading-relaxed text-muted-foreground [animation-delay:180ms]">
              Graphite first, ink second. I draw the lines that make a panel breathe — confident
              strokes with a little bleed at the edges.
            </p>
          </div>
          <div className="flex items-start md:col-span-4 md:justify-end">
            <div className="relative w-full md:w-56">
              <div className="absolute -z-10 top-3 left-3 h-full w-full bg-accent" />
              <img
                src={heroPortrait}
                alt="Manga-style ink portrait of Siyanda Ngwenya in profile"
                width={800}
                height={1000}
                className="w-full border border-foreground/20 object-cover aspect-[4/5]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* gallery */}
      <section id="work" className="relative z-10 scroll-mt-16 border-b border-border">
        <div className="mx-auto max-w-[1360px] px-6 py-14 md:px-10">
          <div className="mb-8 flex items-end justify-between">
            <h2 className="font-display text-3xl tracking-tight md:text-4xl">
              (a) Selected sketches
            </h2>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Pencil · Ink
            </span>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-12">
            {sketches.map((sketch) => (
              <figure key={sketch.title} className={`group ${sketch.span}`}>
                <img
                  src={sketch.src}
                  alt={sketch.alt}
                  width={sketch.width}
                  height={sketch.height}
                  loading="lazy"
                  className={`w-full ${sketch.aspect} object-cover outline-1 -outline-offset-1 outline-foreground/15 transition duration-300 group-hover:outline-accent`}
                />
                <figcaption className="mt-3 flex justify-between font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                  <span>{sketch.title}</span>
                  <span className="text-accent transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* story */}
      <section id="story" className="relative z-10 scroll-mt-16 border-b border-border">
        <div className="mx-auto grid max-w-[1360px] gap-8 px-6 py-16 md:grid-cols-12 md:px-10">
          <div className="md:col-span-4">
            <h2 className="font-display text-3xl tracking-tight md:text-4xl">(b) Story</h2>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
              First person
            </p>
          </div>
          <div className="md:col-span-8">
            <p className="max-w-[52ch] text-pretty text-lg font-medium leading-snug md:text-xl">
              I fell for manga the way you fall for a city — slowly, then all at once. A single
              panel could hold a whole afternoon.
            </p>
            <p className="mt-6 max-w-[52ch] text-pretty leading-relaxed text-muted-foreground">
              I started with pencils and cheap paper, copying lines I didn't fully understand. Now
              I draw from memory and feeling. I've led a team on a butchery floor and tutored maths
              and science in a Soweto classroom — both taught me the patience a long inking pass
              needs. I split my time between Johannesburg and Cape Town, working toward a career in
              the creative industry — one confident stroke at a time.
            </p>
          </div>
        </div>
      </section>

      {/* path */}
      <section id="path" className="relative z-10 scroll-mt-16 border-b border-border">
        <div className="mx-auto max-w-[1360px] px-6 py-16 md:px-10">
          <h2 className="mb-10 font-display text-3xl tracking-tight md:text-4xl">(c) Path</h2>
          <div className="relative pl-8 md:pl-10">
            <span className="absolute bottom-2 left-[7px] top-2 w-[2px] origin-top animate-line-draw bg-foreground md:left-[11px]" />
            <ol className="space-y-8">
              {path.map((step) => (
                <li key={step.title} className="relative">
                  <span
                    className={`absolute -left-8 top-1.5 size-3 rounded-full ring-4 ring-background md:-left-10 ${
                      step.active ? "bg-accent" : "bg-foreground"
                    }`}
                  />
                  <p
                    className={`font-mono text-[11px] uppercase tracking-[0.2em] ${
                      step.active ? "text-accent" : "text-muted-foreground"
                    }`}
                  >
                    {step.when}
                  </p>
                  <p className="text-lg font-semibold">{step.title}</p>
                  <p className="text-sm text-muted-foreground">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* contact */}
      <section id="contact" className="relative z-10 scroll-mt-16">
        <div className="mx-auto max-w-[1360px] px-6 py-16 md:px-10">
          <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-5">
              <h2 className="font-display text-3xl tracking-tight md:text-4xl">(d) Contact</h2>
              <p className="mt-4 max-w-[32ch] font-mono text-[13px] leading-relaxed text-muted-foreground">
                Open to creative roles, collaborations and commissions — say hello.
              </p>
              <p className="mt-8 font-mono text-[12px] uppercase tracking-[0.2em] text-accent">
                Johannesburg · Cape Town
              </p>
            </div>
            <div className="grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2 md:col-span-7">
              {contacts.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-background p-5 transition-colors duration-200 hover:bg-foreground hover:text-background"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[12px] uppercase tracking-[0.2em]">
                      {contact.label}
                    </span>
                    <span className="text-accent transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                  <p className="mt-2 break-all font-mono text-[11px] tracking-[0.05em] text-muted-foreground group-hover:text-background/70">
                    {contact.handle}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t-2 border-foreground">
          <div className="mx-auto flex h-14 max-w-[1360px] items-center justify-between px-6 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground md:px-10">
            <span>© Siyanda Ngwenya</span>
            <span>Sketch · Ink · 2026</span>
          </div>
        </div>
      </section>
    </div>
  );
}
