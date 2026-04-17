import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";

const values = [
  {
    title: "Our Philosophy",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z"
        />
        <title>Philosophy icon</title>
      </svg>
    ),
    body: "We source the finest ingredients — local Bengali produce alongside imported artisanal selections — and apply global culinary techniques with a distinctly local heart. Every dish is a conversation between the world's flavours and Kolkata's soul.",
  },
  {
    title: "Our Space",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-8 h-8"
        aria-label="Space icon"
      >
        <title>Space icon</title>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
        />
      </svg>
    ),
    body: "Three distinct environments, one seamless experience. An open-air terrace for sun-drenched afternoons. A glass-ceiling dining room that turns every storm into theatre. And a cantilevered wooden deck that places you, quite literally, over the water — Kolkata's skyline shimmering in the stillness below.",
  },
  {
    title: "Our Community",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="w-8 h-8"
        aria-label="Community icon"
      >
        <title>Community icon</title>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
        />
      </svg>
    ),
    body: "OG BY THE LAKE was always meant to be more than a restaurant. It is a gathering place — for first dates and last rounds, for deal-closers and daydreamers, for Kolkata's creative class and the families who've called this neighbourhood home for generations.",
  },
];

export default function OurStoryPage() {
  return (
    <div data-ocid="our_story.page">
      {/* ── Hero Banner ── */}
      <section
        data-ocid="our_story.hero.section"
        className="relative flex items-center justify-center overflow-hidden"
        style={{
          minHeight: "50vh",
          background:
            "linear-gradient(135deg, oklch(0.148 0.052 248) 0%, oklch(0.20 0.065 240) 50%, oklch(0.148 0.052 248) 100%)",
        }}
      >
        {/* Subtle water-ripple decorative lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {([0, 1, 2, 3, 4, 5] as const).map((i) => (
            <div
              key={`ripple-${i}`}
              className="absolute left-1/2 -translate-x-1/2 rounded-full border opacity-10"
              style={{
                width: `${300 + i * 200}px`,
                height: `${80 + i * 40}px`,
                top: `${30 + i * 8}%`,
                borderColor: "var(--color-seafoam)",
              }}
            />
          ))}
        </div>

        {/* Seafoam decorative rule */}
        <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex items-center justify-center pointer-events-none">
          <div
            className="w-px h-24 opacity-20"
            style={{ background: "var(--color-seafoam)" }}
          />
        </div>

        <motion.div
          className="relative z-10 text-center px-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <p
            className="font-body-relaxed text-xs tracking-[0.35em] uppercase mb-5 opacity-70"
            style={{ color: "var(--color-seafoam)" }}
          >
            Est. 2023 · Kolkata
          </p>
          <h1
            className="font-display-emphasis text-5xl md:text-7xl leading-none mb-4"
            style={{ color: "#ffffff" }}
          >
            Our Story
          </h1>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div
              className="h-px w-16 opacity-40"
              style={{ background: "var(--color-seafoam)" }}
            />
            <div
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "var(--color-seafoam)", opacity: 0.6 }}
            />
            <div
              className="h-px w-16 opacity-40"
              style={{ background: "var(--color-seafoam)" }}
            />
          </div>
        </motion.div>
      </section>

      {/* ── Introduction ── */}
      <section
        data-ocid="our_story.intro.section"
        className="bg-sand py-24 px-6"
      >
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p
              className="font-body-relaxed text-xs tracking-[0.35em] uppercase mb-6"
              style={{ color: "var(--color-seafoam)" }}
            >
              The Beginning
            </p>
            <h2
              className="font-display-emphasis text-4xl md:text-5xl leading-tight mb-10"
              style={{ color: "var(--color-deep-navy)" }}
            >
              Where the Lake
              <br />
              Meets the Sky
            </h2>
          </motion.div>

          <motion.div
            className="space-y-6 font-body-relaxed text-base leading-relaxed"
            style={{ color: "var(--color-driftwood)" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p>
              There is a particular quality of light that settles over East
              Kolkata's lakes in the hour before sunset — a warm, amber
              stillness that turns the water into a mirror and the sky into
              something that belongs in a painting. It was in that golden light,
              standing on a half-built wooden deck above the water, that OG BY
              THE LAKE took its first breath.
            </p>
            <p>
              Kolkata has always had soul. What it lacked — for too long — was a
              lakefront dining sanctuary worthy of the city's ambition. Not a
              modest café by the water, but a true destination: a place where
              world-class cuisine, craft cocktails, and the unhurried rhythm of
              lakeside living converge in a single, unforgettable address.
            </p>
            <p>
              Our founding philosophy was simple and uncompromising: marry
              global culinary craft with the irreplaceable atmosphere of
              Mirania's waterfront. The result is a venue that feels both
              cosmopolitan and entirely of its place — a terrace open to the
              lake breeze, a glass-ceiling dining room where monsoon clouds roll
              in like theatre, and a cantilevered deck over the water where the
              city's skyline shimmers in the stillness below.
            </p>
            <p>
              Every detail — from the char on our Harissa Prawns to the
              hand-pressed ginger in an OG Lakeside Mule — exists in service of
              one feeling: that rare, fleeting sense of being exactly where you
              are supposed to be.
            </p>
          </motion.div>

          {/* Decorative divider */}
          <motion.div
            className="flex items-center gap-6 mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div
              className="h-px flex-1"
              style={{ background: "var(--color-seafoam)", opacity: 0.4 }}
            />
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1}
              className="w-5 h-5 shrink-0"
              style={{ color: "var(--color-seafoam)" }}
              aria-hidden="true"
            >
              <title>Decorative divider</title>
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H7l5-8v4h4l-5 8z" />
            </svg>
            <div
              className="h-px flex-1"
              style={{ background: "var(--color-seafoam)", opacity: 0.4 }}
            />
          </motion.div>
        </div>
      </section>

      {/* ── Values ── */}
      <section
        data-ocid="our_story.values.section"
        className="py-24 px-6"
        style={{ background: "oklch(0.97 0.006 70)" }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p
              className="font-body-relaxed text-xs tracking-[0.35em] uppercase mb-4"
              style={{ color: "var(--color-seafoam)" }}
            >
              What We Stand For
            </p>
            <h2
              className="font-display-emphasis text-4xl md:text-5xl"
              style={{ color: "var(--color-deep-navy)" }}
            >
              Three Pillars
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, i) => (
              <motion.div
                key={val.title}
                data-ocid={`our_story.values.item.${i + 1}`}
                className="group relative bg-card rounded-sm p-10 shadow-subtle border border-border/60 hover:shadow-elevated transition-smooth"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
              >
                {/* Top accent bar */}
                <div
                  className="absolute top-0 left-10 right-10 h-px transition-smooth group-hover:left-0 group-hover:right-0"
                  style={{ background: "var(--color-seafoam)" }}
                />

                <div className="mb-6" style={{ color: "var(--color-seafoam)" }}>
                  {val.icon}
                </div>

                <h3
                  className="font-display text-2xl font-semibold mb-4"
                  style={{ color: "var(--color-deep-navy)" }}
                >
                  {val.title}
                </h3>
                <p
                  className="font-body-relaxed text-sm leading-relaxed"
                  style={{ color: "var(--color-driftwood)" }}
                >
                  {val.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Vision Section ── */}
      <section
        data-ocid="our_story.vision.section"
        className="bg-sand py-24 px-6"
      >
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p
              className="font-body-relaxed text-xs tracking-[0.35em] uppercase mb-6"
              style={{ color: "var(--color-seafoam)" }}
            >
              The Vision Behind OG
            </p>
            <h2
              className="font-display-emphasis text-4xl md:text-5xl leading-tight mb-10"
              style={{ color: "var(--color-deep-navy)" }}
            >
              More Than a<br />
              Restaurant
            </h2>
          </motion.div>

          <motion.div
            className="space-y-6 font-body-relaxed text-base leading-relaxed"
            style={{ color: "var(--color-driftwood)" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p>
              The founders of OG BY THE LAKE set out to build something Kolkata
              had long deserved but never had: a lakefront destination that the
              city could genuinely call its own. Not a themed dining room with
              water views, but a living, breathing piece of the waterfront — an
              address that would become synonymous with the city's finest
              evenings.
            </p>
            <p>
              The intention was never simply to open another upscale restaurant.
              It was to create a cultural landmark — a place where the food is
              extraordinary, the drinks are inventive, the music is live and
              unhurried, and the lake outside is as much a part of the
              experience as anything on the table. A destination that earns its
              place in Kolkata's story.
            </p>
            <p>
              That vision lives in every service, every session, every sunset
              that falls across the water and into the glasses of guests who
              return, again and again, because they found something here that is
              genuinely hard to leave.
            </p>
          </motion.div>

          {/* Pull quote */}
          <motion.blockquote
            className="mt-14 pl-6 border-l-2 italic"
            style={{ borderColor: "var(--color-seafoam)" }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <p
              className="font-display-emphasis text-xl md:text-2xl leading-relaxed"
              style={{ color: "var(--color-deep-navy)" }}
            >
              "We didn't build a restaurant with a lake view. We built a lake
              experience with a restaurant inside it."
            </p>
            <footer
              className="mt-4 font-body-relaxed text-xs tracking-widest uppercase"
              style={{ color: "var(--color-seafoam)" }}
            >
              — The Founders, OG BY THE LAKE
            </footer>
          </motion.blockquote>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section
        data-ocid="our_story.cta.section"
        className="bg-navy py-24 px-6 text-center"
      >
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p
            className="font-body-relaxed text-xs tracking-[0.35em] uppercase mb-6"
            style={{ color: "var(--color-seafoam)" }}
          >
            The Lake Awaits
          </p>
          <h2
            className="font-display-emphasis text-4xl md:text-5xl leading-tight mb-6"
            style={{ color: "#ffffff" }}
          >
            Ready to
            <br />
            Experience It?
          </h2>
          <p
            className="font-body-relaxed text-sm leading-relaxed mb-12 max-w-md mx-auto opacity-80"
            style={{ color: "oklch(0.85 0.01 70)" }}
          >
            Reserve your place at Kolkata's premier lakefront sanctuary — before
            the golden hour slips away.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              data-ocid="our_story.reserve_button"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-sm font-body-relaxed text-sm tracking-widest uppercase transition-smooth hover:opacity-90 hover:-translate-y-0.5"
              style={{
                background: "var(--color-seafoam)",
                color: "var(--color-deep-navy)",
              }}
            >
              Reserve Your Table
            </Link>
            <Link
              to="/menu"
              data-ocid="our_story.menu_button"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-sm font-body-relaxed text-sm tracking-widest uppercase border transition-smooth hover:bg-white/10"
              style={{
                borderColor: "rgba(184,193,176,0.5)",
                color: "#ffffff",
              }}
            >
              View Our Menu
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
