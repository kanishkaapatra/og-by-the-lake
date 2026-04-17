import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Instagram, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

type GalleryCategory =
  | "All"
  | "Terrace & Outdoor"
  | "Interiors"
  | "Food & Drinks"
  | "Events";

interface GalleryCard {
  id: string;
  title: string;
  caption: string;
  category: Exclude<GalleryCategory, "All">;
  gradient: string;
  accentFrom: string;
  accentTo: string;
}

const GALLERY_ITEMS: GalleryCard[] = [
  {
    id: "1",
    title: "Lakefront Terrace at Sunset",
    caption: "Golden hour magic over the still water of East Kolkata.",
    category: "Terrace & Outdoor",
    gradient: "linear-gradient(135deg, #f0a050 0%, #d97830 50%, #7c3a10 100%)",
    accentFrom: "#f0a050",
    accentTo: "#7c3a10",
  },
  {
    id: "2",
    title: "City Skyline Reflections",
    caption: "The city lights dancing on the lake after dark.",
    category: "Interiors",
    gradient: "linear-gradient(135deg, #0d1b2a 0%, #1a3a4a 50%, #0e4050 100%)",
    accentFrom: "#0d1b2a",
    accentTo: "#0e4050",
  },
  {
    id: "3",
    title: "Glass Ceiling Dining Room",
    caption: "Dine under a sky of warm, diffused afternoon light.",
    category: "Interiors",
    gradient: "linear-gradient(135deg, #f8f3ec 0%, #e8ddd0 50%, #d9c9b8 100%)",
    accentFrom: "#f8f3ec",
    accentTo: "#d9c9b8",
  },
  {
    id: "4",
    title: "Rattan & Teal Interiors",
    caption: "Natural textures meet coastal colour in our main hall.",
    category: "Interiors",
    gradient: "linear-gradient(135deg, #b8c1b0 0%, #7aada0 50%, #4a8a80 100%)",
    accentFrom: "#b8c1b0",
    accentTo: "#4a8a80",
  },
  {
    id: "5",
    title: "Wooden Deck at Dusk",
    caption: "The deck glows with warmth as the day winds down.",
    category: "Terrace & Outdoor",
    gradient: "linear-gradient(135deg, #e8b060 0%, #c88030 50%, #8a5010 100%)",
    accentFrom: "#e8b060",
    accentTo: "#8a5010",
  },
  {
    id: "6",
    title: "Harissa Grilled Prawns",
    caption: "Smoky, spiced, and kissed by fire — our signature plate.",
    category: "Food & Drinks",
    gradient: "linear-gradient(135deg, #e06040 0%, #c04030 50%, #903020 100%)",
    accentFrom: "#e06040",
    accentTo: "#903020",
  },
  {
    id: "7",
    title: "The OG Lakeside Mule",
    caption: "Fresh ginger, mint, and a lakeside twist on a classic.",
    category: "Food & Drinks",
    gradient: "linear-gradient(135deg, #f0e8b0 0%, #d8c870 50%, #b8a840 100%)",
    accentFrom: "#f0e8b0",
    accentTo: "#b8a840",
  },
  {
    id: "8",
    title: "Intimate Candlelit Table",
    caption: "Every table is a world of its own at OG.",
    category: "Interiors",
    gradient: "linear-gradient(135deg, #c08040 0%, #703820 50%, #2a1810 100%)",
    accentFrom: "#c08040",
    accentTo: "#2a1810",
  },
  {
    id: "9",
    title: "Morning by the Lake",
    caption: "Start your day with stillness — coffee in hand, lake ahead.",
    category: "Terrace & Outdoor",
    gradient: "linear-gradient(135deg, #c8e0e8 0%, #a0c8c0 50%, #78a8b0 100%)",
    accentFrom: "#c8e0e8",
    accentTo: "#78a8b0",
  },
  {
    id: "10",
    title: "Building Facade at Night",
    caption: "OG glows with warmth against the Kolkata night sky.",
    category: "Terrace & Outdoor",
    gradient: "linear-gradient(135deg, #0d1b2a 0%, #1a2840 50%, #283850 100%)",
    accentFrom: "#0d1b2a",
    accentTo: "#283850",
  },
  {
    id: "11",
    title: "Sunset Aperitivo Hour",
    caption: "Golden cocktails, shared stories, the perfect 6 PM.",
    category: "Events",
    gradient: "linear-gradient(135deg, #e8a0a0 0%, #d08040 50%, #b06020 100%)",
    accentFrom: "#e8a0a0",
    accentTo: "#b06020",
  },
  {
    id: "12",
    title: "Weekend Acoustic Session",
    caption: "Live music, lake breeze, and the people you love.",
    category: "Events",
    gradient: "linear-gradient(135deg, #d8c8b0 0%, #b8a890 50%, #988870 100%)",
    accentFrom: "#d8c8b0",
    accentTo: "#988870",
  },
];

const FILTER_TABS: GalleryCategory[] = [
  "All",
  "Terrace & Outdoor",
  "Interiors",
  "Food & Drinks",
  "Events",
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<GalleryCategory>("All");
  const [lightboxItem, setLightboxItem] = useState<GalleryCard | null>(null);

  const filtered =
    activeFilter === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <div data-ocid="gallery.page" className="min-h-screen">
      {/* ── Hero Banner ──────────────────────────────────────────── */}
      <section
        data-ocid="gallery.hero"
        className="relative flex items-center justify-center overflow-hidden"
        style={{
          minHeight: "40vh",
          background:
            "linear-gradient(160deg, var(--color-deep-navy) 0%, oklch(0.2 0.06 230) 60%, oklch(0.25 0.05 210) 100%)",
        }}
      >
        {/* decorative shimmer lines */}
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, transparent, transparent 80px, rgba(184,193,176,0.4) 80px, rgba(184,193,176,0.4) 81px)",
          }}
        />
        <div className="relative z-10 text-center px-6 py-20">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-body-relaxed text-xs uppercase tracking-[0.25em] mb-4"
            style={{ color: "var(--color-seafoam)" }}
          >
            OG By The Lake
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display-emphasis text-5xl md:text-7xl text-white mb-5"
          >
            Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body-relaxed text-base md:text-lg max-w-md mx-auto"
            style={{ color: "rgba(245,241,237,0.75)" }}
          >
            A glimpse into the OG experience.
          </motion.p>
        </div>

        {/* wave divider */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
          <svg
            viewBox="0 0 1440 40"
            preserveAspectRatio="none"
            className="w-full h-10"
            fill="var(--color-sand-beige)"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
          >
            <title>decorative wave</title>
            <path d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z" />
          </svg>
        </div>
      </section>

      {/* ── Filter Tabs ──────────────────────────────────────────── */}
      <section className="bg-background pt-10 pb-6 px-6">
        <div className="max-w-7xl mx-auto">
          <div
            data-ocid="gallery.filter_tabs"
            className="flex flex-wrap gap-2 justify-center"
          >
            {FILTER_TABS.map((tab) => (
              <button
                type="button"
                key={tab}
                data-ocid={`gallery.tab.${tab.toLowerCase().replace(/[^a-z0-9]/g, "_")}`}
                onClick={() => setActiveFilter(tab)}
                className="font-body-relaxed text-xs uppercase tracking-widest px-5 py-2 rounded-full border transition-smooth"
                style={
                  activeFilter === tab
                    ? {
                        background: "var(--color-deep-navy)",
                        color: "#fff",
                        borderColor: "var(--color-deep-navy)",
                      }
                    : {
                        background: "transparent",
                        color: "var(--color-driftwood)",
                        borderColor: "var(--color-seafoam)",
                      }
                }
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery Grid ─────────────────────────────────────────── */}
      <section
        data-ocid="gallery.grid_section"
        className="bg-background px-6 pb-16"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  data-ocid={`gallery.item.${index + 1}`}
                  className="group relative overflow-hidden rounded-xl cursor-pointer shadow-subtle hover:shadow-elevated transition-smooth"
                  style={{ aspectRatio: "4/3" }}
                  onClick={() => setLightboxItem(item)}
                >
                  {/* gradient placeholder */}
                  <div
                    className="absolute inset-0 transition-smooth group-hover:scale-105"
                    style={{ background: item.gradient }}
                  />

                  {/* shimmer overlay for depth */}
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255,255,255,0.3) 0%, transparent 50%, rgba(0,0,0,0.2) 100%)",
                    }}
                  />

                  {/* category label */}
                  <div className="absolute top-3 left-3 z-10">
                    <span
                      className="font-body-relaxed text-xs uppercase tracking-widest px-3 py-1 rounded-full"
                      style={{
                        background: "rgba(13, 27, 42, 0.65)",
                        color: "var(--color-seafoam)",
                        backdropFilter: "blur(6px)",
                      }}
                    >
                      {item.category}
                    </span>
                  </div>

                  {/* hover caption overlay */}
                  <div
                    className="absolute inset-0 z-20 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-smooth"
                    style={{ background: "rgba(184, 193, 176, 0.88)" }}
                  >
                    <h3 className="font-display text-sm font-semibold text-white leading-snug mb-1">
                      {item.title}
                    </h3>
                    <p
                      className="font-body-relaxed text-xs leading-relaxed"
                      style={{ color: "rgba(255,255,255,0.9)" }}
                    >
                      {item.caption}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div
              data-ocid="gallery.empty_state"
              className="text-center py-24"
              style={{ color: "var(--color-driftwood)" }}
            >
              <p className="font-display-emphasis text-2xl mb-2">
                No items here yet.
              </p>
              <p className="font-body-relaxed text-sm">
                Try a different category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ── Instagram Note ───────────────────────────────────────── */}
      <section
        className="py-10 px-6 text-center"
        style={{ background: "oklch(0.92 0.008 70)" }}
      >
        <div className="max-w-xl mx-auto flex flex-col items-center gap-3">
          <Instagram
            size={22}
            style={{ color: "var(--color-driftwood)" }}
            strokeWidth={1.5}
          />
          <p
            className="font-body-relaxed text-sm"
            style={{ color: "var(--color-driftwood)" }}
          >
            Follow us on Instagram{" "}
            <a
              href="https://instagram.com/ogbythelake"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="gallery.instagram_link"
              className="font-semibold hover-seafoam-underline transition-smooth"
              style={{ color: "var(--color-deep-navy)" }}
            >
              @ogbythelake
            </a>{" "}
            for the latest glimpses.
          </p>
        </div>
      </section>

      {/* ── CTA Section ──────────────────────────────────────────── */}
      <section
        data-ocid="gallery.cta_section"
        className="py-20 px-6 text-center"
        style={{ background: "var(--color-sand-beige)" }}
      >
        <div className="max-w-xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-body-relaxed text-xs uppercase tracking-[0.25em] mb-4"
            style={{ color: "var(--color-seafoam)" }}
          >
            Come see it yourself
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display-emphasis text-3xl md:text-4xl mb-4"
            style={{ color: "var(--color-deep-navy)" }}
          >
            Experience It in Person
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-body-relaxed text-sm mb-8 max-w-sm mx-auto"
            style={{ color: "var(--color-driftwood)" }}
          >
            No filter can capture the feeling. Join us by the lake for an
            evening you won't forget.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link to="/contact">
              <Button
                data-ocid="gallery.reserve_button"
                className="font-body-relaxed uppercase tracking-widest text-xs px-8 py-5 rounded-full transition-smooth gap-2"
                style={{
                  background: "var(--color-seafoam)",
                  color: "#fff",
                  border: "none",
                }}
              >
                Reserve a Table
                <ArrowRight size={14} strokeWidth={1.5} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Lightbox ─────────────────────────────────────────────── */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            data-ocid="gallery.lightbox"
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            style={{
              background: "rgba(13, 27, 42, 0.85)",
              backdropFilter: "blur(8px)",
            }}
            onClick={() => setLightboxItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-xl rounded-2xl overflow-hidden shadow-navy"
              style={{ aspectRatio: "4/3" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="absolute inset-0"
                style={{ background: lightboxItem.gradient }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 50%, rgba(0,0,0,0.3) 100%)",
                }}
              />
              <div
                className="absolute bottom-0 left-0 right-0 p-6 z-10"
                style={{
                  background:
                    "linear-gradient(to top, rgba(13,27,42,0.85) 0%, transparent 100%)",
                }}
              >
                <span
                  className="font-body-relaxed text-xs uppercase tracking-widest mb-2 block"
                  style={{ color: "var(--color-seafoam)" }}
                >
                  {lightboxItem.category}
                </span>
                <h3 className="font-display text-xl font-semibold text-white leading-snug mb-1">
                  {lightboxItem.title}
                </h3>
                <p
                  className="font-body-relaxed text-sm"
                  style={{ color: "rgba(245,241,237,0.8)" }}
                >
                  {lightboxItem.caption}
                </p>
              </div>
              <button
                type="button"
                data-ocid="gallery.lightbox_close_button"
                onClick={() => setLightboxItem(null)}
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full flex items-center justify-center transition-smooth"
                style={{
                  background: "rgba(13,27,42,0.6)",
                  color: "#fff",
                  backdropFilter: "blur(4px)",
                }}
                aria-label="Close lightbox"
              >
                <X size={16} strokeWidth={1.5} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
