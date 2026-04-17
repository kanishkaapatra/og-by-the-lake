import { Badge } from "@/components/ui/badge";
import { getFeaturedByTab } from "@/data/menu";
import { Link } from "@tanstack/react-router";
import {
  ChevronRight,
  MapPin,
  Music,
  Phone,
  UtensilsCrossed,
  Waves,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

// ─── Hero Carousel ───────────────────────────────────────────────────────────
const heroSlides = [
  {
    id: 1,
    gradient:
      "linear-gradient(135deg, #c07830 0%, #a04820 30%, #3a1a08 65%, #0d1b2a 100%)",
    accent: "rgba(192,120,48,0.18)",
  },
  {
    id: 2,
    gradient:
      "linear-gradient(135deg, #1a4a4a 0%, #0d3040 35%, #062030 65%, #0d1b2a 100%)",
    accent: "rgba(184,193,176,0.15)",
  },
  {
    id: 3,
    gradient:
      "linear-gradient(135deg, #c08a30 0%, #9a6020 35%, #3a2810 65%, #1a1510 100%)",
    accent: "rgba(240,200,120,0.12)",
  },
];

function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (idx: number) => {
    setFading(true);
    setTimeout(() => {
      setCurrent(idx);
      setFading(false);
    }, 400);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrent((c) => (c + 1) % heroSlides.length);
        setFading(false);
      }, 400);
    }, 5000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const slide = heroSlides[current];

  return (
    <section
      data-ocid="hero.section"
      className="relative flex items-center justify-center min-h-screen overflow-hidden"
      style={{ background: slide.gradient, transition: "background 0.8s ease" }}
    >
      {/* Atmospheric overlay pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 70% 50% at 50% 60%, ${slide.accent} 0%, transparent 70%)`,
          transition: "background 0.8s ease",
        }}
      />
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, #fff 0px, transparent 1px, transparent 80px, #fff 80px), repeating-linear-gradient(90deg, #fff 0px, transparent 1px, transparent 80px, #fff 80px)",
        }}
      />

      {/* Content */}
      <div
        className="relative z-10 text-center px-6 max-w-3xl mx-auto"
        style={{
          opacity: fading ? 0 : 1,
          transform: fading ? "translateY(8px)" : "translateY(0)",
          transition: "opacity 0.4s ease, transform 0.4s ease",
        }}
      >
        {/* Eyebrow */}
        <p
          className="font-body text-xs tracking-[0.3em] uppercase mb-6"
          style={{ color: "rgba(255,255,255,0.6)" }}
        >
          Kolkata's Premier Lakefront Sanctuary
        </p>

        <h1
          className="font-display-emphasis leading-tight mb-6"
          style={{
            color: "#ffffff",
            fontSize: "clamp(2.5rem, 7vw, 5rem)",
            textShadow: "0 2px 24px rgba(0,0,0,0.4)",
          }}
        >
          Shoreline Dining.
          <br />
          Sunset Vibes.
        </h1>

        <p
          className="font-body mb-10 max-w-xl mx-auto"
          style={{
            color: "rgba(255,255,255,0.8)",
            fontSize: "1.15rem",
            fontWeight: 300,
            letterSpacing: "0.5px",
            lineHeight: 1.7,
          }}
        >
          Escape the city noise at Kolkata's premier lakefront sanctuary.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/menu"
            data-ocid="hero.view_menu_button"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-body text-sm tracking-widest uppercase transition-smooth"
            style={{
              border: "1.5px solid rgba(255,255,255,0.8)",
              color: "#ffffff",
              background: "transparent",
              letterSpacing: "0.15em",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background =
                "#ffffff";
              (e.currentTarget as HTMLAnchorElement).style.color = "#0d1b2a";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background =
                "transparent";
              (e.currentTarget as HTMLAnchorElement).style.color = "#ffffff";
            }}
          >
            View Menu
          </Link>
          <Link
            to="/contact"
            data-ocid="hero.book_spot_button"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-body text-sm tracking-widest uppercase transition-smooth"
            style={{
              background: "#b8c1b0",
              color: "#0d1b2a",
              border: "1.5px solid #b8c1b0",
              letterSpacing: "0.15em",
              fontWeight: 500,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background =
                "#a0aa98";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background =
                "#b8c1b0";
            }}
          >
            Book Your Spot
          </Link>
        </div>
      </div>

      {/* Slide dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2.5 z-10">
        {heroSlides.map((s, i) => (
          <button
            type="button"
            key={s.id}
            data-ocid={`hero.dot.${i + 1}`}
            onClick={() => goTo(i)}
            className="rounded-full transition-smooth"
            aria-label={`Go to slide ${i + 1}`}
            style={{
              width: i === current ? "28px" : "8px",
              height: "8px",
              background: i === current ? "#b8c1b0" : "rgba(255,255,255,0.4)",
            }}
          />
        ))}
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-10 right-8 flex flex-col items-center gap-2 opacity-50"
        style={{ color: "#ffffff" }}
      >
        <span
          className="font-body text-[10px] tracking-[0.2em] uppercase"
          style={{ writingMode: "vertical-rl" }}
        >
          Scroll
        </span>
        <div className="w-px h-10 bg-current" />
      </div>
    </section>
  );
}

// ─── Experience Section ───────────────────────────────────────────────────────
const experiences = [
  {
    Icon: Waves,
    title: "Lakeside Serenity",
    description:
      "A picturesque, quiet atmosphere designed for those who seek a moment of calm.",
  },
  {
    Icon: UtensilsCrossed,
    title: "Global Flavors",
    description:
      "From artisanal coffee and small plates to full-course gourmet meals.",
  },
  {
    Icon: Music,
    title: "Sunset Rhythms",
    description:
      "Weekly live acoustic sessions that pair perfectly with the lake breeze.",
  },
];

function ExperienceSection() {
  return (
    <section
      data-ocid="experience.section"
      className="py-24 px-6"
      style={{ background: "#f5f1ed" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p
            className="font-body text-xs tracking-[0.3em] uppercase mb-4"
            style={{ color: "#b8c1b0" }}
          >
            Why OG
          </p>
          <h2
            className="font-display-emphasis"
            style={{ color: "#0d1b2a", fontSize: "clamp(2rem,4vw,3rem)" }}
          >
            The OG Experience
          </h2>
          <div
            className="mx-auto mt-4 rounded-full"
            style={{ width: "48px", height: "2px", background: "#b8c1b0" }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiences.map(({ Icon, title, description }, i) => (
            <div
              key={title}
              data-ocid={`experience.card.${i + 1}`}
              className="flex flex-col items-center text-center px-6 py-10 rounded-2xl transition-smooth"
              style={{
                background: "#ffffff",
                boxShadow: "0 2px 16px rgba(13,27,42,0.06)",
                border: "1px solid rgba(184,193,176,0.25)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 8px 32px rgba(13,27,42,0.12)";
                (e.currentTarget as HTMLDivElement).style.transform =
                  "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 2px 16px rgba(13,27,42,0.06)";
                (e.currentTarget as HTMLDivElement).style.transform =
                  "translateY(0)";
              }}
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mb-6"
                style={{ background: "rgba(184,193,176,0.15)" }}
              >
                <Icon
                  size={26}
                  style={{ color: "#b8c1b0" }}
                  strokeWidth={1.5}
                />
              </div>
              <h3
                className="font-display mb-3"
                style={{
                  color: "#0d1b2a",
                  fontSize: "1.2rem",
                  fontWeight: 600,
                }}
              >
                {title}
              </h3>
              <p
                className="font-body leading-relaxed"
                style={{ color: "#4a4e69", fontSize: "0.9rem" }}
              >
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Menu Preview ─────────────────────────────────────────────────────────────
type PreviewTab = "Small Plates" | "Main Course" | "Craft Cocktails";
const MENU_TABS: PreviewTab[] = [
  "Small Plates",
  "Main Course",
  "Craft Cocktails",
];

const tabGradients: Record<PreviewTab, string> = {
  "Small Plates":
    "linear-gradient(135deg, #c07030 0%, #983a10 50%, #5a1808 100%)",
  "Main Course":
    "linear-gradient(135deg, #6a3a20 0%, #3a1808 50%, #1a0c04 100%)",
  "Craft Cocktails":
    "linear-gradient(135deg, #1a4848 0%, #0d2a30 50%, #06161a 100%)",
};

function MenuPreviewSection() {
  const [activeTab, setActiveTab] = useState<PreviewTab>("Small Plates");
  const items = getFeaturedByTab(activeTab);

  return (
    <section
      data-ocid="menu_preview.section"
      className="py-24 px-6"
      style={{ background: "#ffffff" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p
            className="font-body text-xs tracking-[0.3em] uppercase mb-4"
            style={{ color: "#b8c1b0" }}
          >
            A Taste of OG
          </p>
          <h2
            className="font-display-emphasis"
            style={{ color: "#0d1b2a", fontSize: "clamp(2rem,4vw,3rem)" }}
          >
            Taste the OG
          </h2>
          <div
            className="mx-auto mt-4 rounded-full"
            style={{ width: "48px", height: "2px", background: "#b8c1b0" }}
          />
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div
            className="inline-flex rounded-full p-1"
            style={{ background: "#f5f1ed" }}
            role="tablist"
          >
            {MENU_TABS.map((tab) => (
              <button
                type="button"
                key={tab}
                role="tab"
                aria-selected={activeTab === tab}
                data-ocid={`menu_preview.tab.${tab.toLowerCase().replace(/\s+/g, "_")}`}
                onClick={() => setActiveTab(tab)}
                className="px-5 py-2.5 rounded-full font-body text-sm transition-smooth"
                style={{
                  fontWeight: 400,
                  letterSpacing: "0.03em",
                  background: activeTab === tab ? "#b8c1b0" : "transparent",
                  color: activeTab === tab ? "#0d1b2a" : "#4a4e69",
                  boxShadow:
                    activeTab === tab
                      ? "0 2px 8px rgba(184,193,176,0.4)"
                      : "none",
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <MenuCard
              key={item.id}
              item={item}
              index={i}
              activeTab={activeTab}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/menu"
            data-ocid="menu_preview.explore_button"
            className="inline-flex items-center gap-2 font-body text-sm tracking-widest uppercase transition-smooth hover:gap-3"
            style={{
              color: "#0d1b2a",
              borderBottom: "1.5px solid #b8c1b0",
              paddingBottom: "2px",
              letterSpacing: "0.12em",
            }}
          >
            Explore Our Full Menu
            <ChevronRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function MenuCard({
  item,
  index,
  activeTab,
}: {
  item: ReturnType<typeof getFeaturedByTab>[number];
  index: number;
  activeTab: PreviewTab;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      data-ocid={`menu_preview.item.${index + 1}`}
      className="rounded-2xl overflow-hidden transition-smooth cursor-pointer"
      style={{
        boxShadow: hovered
          ? "0 16px 40px rgba(13,27,42,0.16)"
          : "0 2px 12px rgba(13,27,42,0.07)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        border: "1px solid rgba(184,193,176,0.2)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image / gradient */}
      <div
        className="relative overflow-hidden"
        style={{ height: "180px", background: tabGradients[activeTab] }}
      >
        {/* Shimmer pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 30% 40%, rgba(255,255,255,0.3) 0%, transparent 60%)",
          }}
        />
        {/* Hover overlay */}
        <div
          className="absolute inset-0 flex items-center justify-center transition-smooth"
          style={{
            background: "rgba(184,193,176,0.88)",
            opacity: hovered ? 1 : 0,
          }}
        >
          <Link
            to="/menu"
            className="font-body text-xs tracking-[0.2em] uppercase"
            style={{ color: "#0d1b2a", fontWeight: 500 }}
          >
            View Full Menu →
          </Link>
        </div>
        {/* OG Special badge */}
        {item.isOgSpecial && (
          <Badge
            className="absolute top-3 left-3 font-body text-[10px] tracking-widest uppercase rounded-full"
            style={{
              background: "#b8c1b0",
              color: "#0d1b2a",
              fontWeight: 500,
              letterSpacing: "0.1em",
            }}
          >
            OG Special
          </Badge>
        )}
      </div>

      {/* Content */}
      <div className="p-5" style={{ background: "#ffffff" }}>
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3
            className="font-display leading-snug"
            style={{ color: "#0d1b2a", fontSize: "1rem", fontWeight: 600 }}
          >
            {item.name}
          </h3>
          <span
            className="font-body text-sm shrink-0"
            style={{ color: "#b8c1b0", fontWeight: 500 }}
          >
            ₹{item.price}
          </span>
        </div>
        <p
          className="font-body text-sm leading-relaxed line-clamp-3"
          style={{ color: "#4a4e69" }}
        >
          {item.description}
        </p>
      </div>
    </div>
  );
}

// ─── Gallery Grid ─────────────────────────────────────────────────────────────
const galleryItems = [
  {
    id: 1,
    label: "Lakefront Terrace",
    gradient: "linear-gradient(135deg, #c08030 0%, #7a4010 60%, #3a1a04 100%)",
    overlay: "rgba(192,128,48,0.08)",
  },
  {
    id: 2,
    label: "Night City Reflections",
    gradient: "linear-gradient(135deg, #0d2a48 0%, #061828 60%, #020c18 100%)",
    overlay: "rgba(100,160,200,0.1)",
  },
  {
    id: 3,
    label: "Glass Ceiling Dining",
    gradient: "linear-gradient(135deg, #e8d8c8 0%, #c8b898 60%, #a89878 100%)",
    overlay: "rgba(255,255,255,0.06)",
  },
  {
    id: 4,
    label: "Rattan & Teal Interiors",
    gradient: "linear-gradient(135deg, #88a898 0%, #507868 60%, #284840 100%)",
    overlay: "rgba(184,193,176,0.1)",
  },
  {
    id: 5,
    label: "Sunset Deck Views",
    gradient: "linear-gradient(135deg, #e07820 0%, #c04808 60%, #4a1004 100%)",
    overlay: "rgba(230,130,30,0.1)",
  },
  {
    id: 6,
    label: "Premium Table Setting",
    gradient: "linear-gradient(135deg, #1a2840 0%, #0d1b2a 60%, #060e18 100%)",
    overlay: "rgba(184,193,176,0.08)",
  },
];

function GallerySection() {
  return (
    <section
      data-ocid="gallery.section"
      className="py-24 px-6"
      style={{ background: "#f5f1ed" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p
            className="font-body text-xs tracking-[0.3em] uppercase mb-4"
            style={{ color: "#b8c1b0" }}
          >
            The Atmosphere
          </p>
          <h2
            className="font-display-emphasis"
            style={{ color: "#0d1b2a", fontSize: "clamp(2rem,4vw,3rem)" }}
          >
            The OG Atmosphere
          </h2>
          <div
            className="mx-auto mt-4 rounded-full"
            style={{ width: "48px", height: "2px", background: "#b8c1b0" }}
          />
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryItems.map((item, i) => (
            <GalleryCard key={item.id} item={item} tall={i === 0 || i === 4} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/gallery"
            data-ocid="gallery.view_all_link"
            className="inline-flex items-center gap-2 font-body text-sm tracking-widest uppercase transition-smooth hover:gap-3"
            style={{
              color: "#0d1b2a",
              borderBottom: "1.5px solid #b8c1b0",
              paddingBottom: "2px",
              letterSpacing: "0.12em",
            }}
          >
            View Full Gallery
            <ChevronRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function GalleryCard({
  item,
  tall,
}: {
  item: (typeof galleryItems)[number];
  tall: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      data-ocid={`gallery.item.${item.id}`}
      className="relative overflow-hidden rounded-xl cursor-pointer transition-smooth"
      style={{
        height: tall ? "280px" : "200px",
        background: item.gradient,
        boxShadow: hovered
          ? "0 12px 32px rgba(13,27,42,0.2)"
          : "0 2px 10px rgba(13,27,42,0.08)",
        transform: hovered ? "scale(1.02)" : "scale(1)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Texture layer */}
      <div
        className="absolute inset-0"
        style={{
          background: item.overlay,
          backgroundImage:
            "radial-gradient(ellipse at 60% 30%, rgba(255,255,255,0.15) 0%, transparent 60%)",
        }}
      />

      {/* Hover overlay */}
      <div
        className="absolute inset-0 flex items-end p-5 transition-smooth"
        style={{
          background: hovered
            ? "linear-gradient(to top, rgba(13,27,42,0.85) 0%, rgba(13,27,42,0.2) 60%, transparent 100%)"
            : "linear-gradient(to top, rgba(13,27,42,0.4) 0%, transparent 60%)",
        }}
      >
        <span
          className="font-display text-sm italic"
          style={{
            color: "#ffffff",
            opacity: hovered ? 1 : 0.7,
            transform: hovered ? "translateY(0)" : "translateY(4px)",
            transition: "all 0.3s ease",
            fontWeight: 600,
          }}
        >
          {item.label}
        </span>
      </div>
    </div>
  );
}

// ─── Location Section ─────────────────────────────────────────────────────────
const amenities = [
  { emoji: "🍷", label: "Alcohol Served" },
  { emoji: "🚬", label: "Smoking Area" },
  { emoji: "♿", label: "Wheelchair Accessible" },
];

function LocationSection() {
  return (
    <section
      data-ocid="location.section"
      className="py-24 px-6"
      style={{ background: "#0d1b2a" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p
            className="font-body text-xs tracking-[0.3em] uppercase mb-4"
            style={{ color: "#b8c1b0" }}
          >
            Get Here
          </p>
          <h2
            className="font-display-emphasis"
            style={{ color: "#ffffff", fontSize: "clamp(2rem,4vw,3rem)" }}
          >
            Find Us By The Lake
          </h2>
          <div
            className="mx-auto mt-4 rounded-full"
            style={{ width: "48px", height: "2px", background: "#b8c1b0" }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Map */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              height: "380px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
              filter: "grayscale(40%) contrast(1.05)",
            }}
          >
            <iframe
              title="OG By The Lake Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.3!2d88.3839!3d22.5448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s11A%2C+1J%2C+East+Topsia+Road%2C+Mirania+Gardens%2C+Kolkata!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col gap-6">
            {/* Address */}
            <div className="flex gap-4 items-start">
              <MapPin
                size={20}
                style={{ color: "#b8c1b0", marginTop: "2px", flexShrink: 0 }}
                strokeWidth={1.5}
              />
              <div>
                <p
                  className="font-body text-sm leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.8)" }}
                >
                  11A, 1J, East Topsia Road
                  <br />
                  Mirania Gardens, Kolkata — 700046
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4 items-center">
              <Phone
                size={20}
                style={{ color: "#b8c1b0", flexShrink: 0 }}
                strokeWidth={1.5}
              />
              <a
                href="tel:+919831006395"
                className="font-body text-sm transition-smooth"
                style={{ color: "rgba(255,255,255,0.8)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "#b8c1b0";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "rgba(255,255,255,0.8)";
                }}
              >
                +91 98310 06395
              </a>
            </div>

            {/* Amenities */}
            <div className="flex flex-wrap gap-2 pt-2">
              {amenities.map((a) => (
                <span
                  key={a.label}
                  className="font-body text-xs px-4 py-1.5 rounded-full"
                  style={{
                    background: "rgba(184,193,176,0.12)",
                    border: "1px solid rgba(184,193,176,0.25)",
                    color: "#b8c1b0",
                    letterSpacing: "0.04em",
                  }}
                >
                  {a.emoji} {a.label}
                </span>
              ))}
            </div>

            {/* Divider */}
            <div
              className="rounded-full"
              style={{ height: "1px", background: "rgba(255,255,255,0.08)" }}
            />

            {/* Booking buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://www.swiggy.com"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="location.swiggy_button"
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-full font-body text-sm transition-smooth"
                style={{
                  background: "#b8c1b0",
                  color: "#0d1b2a",
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    "#a0aa98";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    "#b8c1b0";
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 2C7.03 2 3 6.03 3 11c0 3.53 2.07 6.6 5.1 8.1L12 22l3.9-2.9C18.93 17.6 21 14.53 21 11c0-4.97-4.03-9-9-9zm0 13c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
                </svg>
                Order on Swiggy
              </a>
              <a
                href="https://www.justdial.com"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="location.justdial_button"
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-full font-body text-sm transition-smooth"
                style={{
                  background: "transparent",
                  border: "1.5px solid rgba(184,193,176,0.5)",
                  color: "#b8c1b0",
                  fontWeight: 400,
                  letterSpacing: "0.08em",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    "rgba(184,193,176,0.1)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    "transparent";
                }}
              >
                Book on Justdial
              </a>
            </div>

            <a
              href="tel:+919831006395"
              data-ocid="location.call_button"
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-full font-body text-sm transition-smooth"
              style={{
                background: "transparent",
                border: "1.5px solid rgba(255,255,255,0.15)",
                color: "rgba(255,255,255,0.7)",
                fontWeight: 400,
                letterSpacing: "0.08em",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor =
                  "rgba(255,255,255,0.3)";
                (e.currentTarget as HTMLAnchorElement).style.color = "#ffffff";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor =
                  "rgba(255,255,255,0.15)";
                (e.currentTarget as HTMLAnchorElement).style.color =
                  "rgba(255,255,255,0.7)";
              }}
            >
              <Phone size={14} />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <div data-ocid="home.page">
      <HeroSection />
      <ExperienceSection />
      <MenuPreviewSection />
      <GallerySection />
      <LocationSection />
    </div>
  );
}
