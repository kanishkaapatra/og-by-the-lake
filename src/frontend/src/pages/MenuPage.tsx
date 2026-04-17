import { Button } from "@/components/ui/button";
import { FOOD_CATEGORIES, MENU_TABS, menuItems } from "@/data/menu";
import type { MenuCategory, MenuItem } from "@/types";
import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

// ── helpers ──────────────────────────────────────────────────────────────────

function formatPrice(price: number | string): string {
  if (typeof price === "string") return price;
  return `₹${price}`;
}

function getCategoryLabel(cat: MenuCategory): string {
  const labels: Partial<Record<MenuCategory, string>> = {
    "Veg & Continental": "Veg & Continental",
    Asian: "Asian",
    Mediterranean: "Mediterranean",
    "Indian & Tandoor": "Indian & Tandoor",
    "Craft Cocktails": "Craft Cocktails",
  };
  return labels[cat] ?? cat;
}

// ── sub-components ────────────────────────────────────────────────────────────

function VegDot({ isVeg }: { isVeg?: boolean }) {
  if (isVeg === undefined) return null;
  return (
    <span
      className="inline-block w-3 h-3 rounded-sm border-2 flex-shrink-0 mt-0.5"
      style={{
        borderColor: isVeg ? "#228B22" : "#C0392B",
        backgroundColor: isVeg ? "#228B22" : "#C0392B",
      }}
      title={isVeg ? "Vegetarian" : "Non-Vegetarian"}
    />
  );
}

function MenuCard({ item, index }: { item: MenuItem; index: number }) {
  return (
    <article
      data-ocid={`menu.item.${index + 1}`}
      className="bg-card rounded-xl shadow-subtle border border-border p-5 flex flex-col gap-3 transition-smooth hover:shadow-elevated hover:-translate-y-0.5"
    >
      {/* Top row: veg dot + badges */}
      <div className="flex items-start justify-between gap-2 flex-wrap">
        <div className="flex items-center gap-2 flex-wrap">
          {item.isOgSpecial && (
            <span
              data-ocid={`menu.og_special_badge.${index + 1}`}
              className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-body font-semibold tracking-wide"
              style={{
                backgroundColor: "var(--color-seafoam)",
                color: "#fff",
                letterSpacing: "0.04em",
              }}
            >
              OG Special
            </span>
          )}
          {item.isSignature && (
            <span
              data-ocid={`menu.signature_badge.${index + 1}`}
              className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-body font-semibold tracking-wide"
              style={{
                backgroundColor: "var(--color-deep-navy)",
                color: "#fff",
                letterSpacing: "0.04em",
              }}
            >
              Signature
            </span>
          )}
        </div>
        <VegDot isVeg={item.isVeg} />
      </div>

      {/* Name */}
      <h3
        className="font-display text-lg font-semibold leading-snug"
        style={{ color: "var(--color-deep-navy)" }}
      >
        {item.name}
      </h3>

      {/* Description */}
      <p
        className="font-body text-sm leading-relaxed flex-1"
        style={{
          color: "var(--color-driftwood)",
          fontWeight: 300,
          letterSpacing: "0.5px",
        }}
      >
        {item.description}
      </p>

      {/* Price */}
      <p
        className="font-display text-base font-semibold mt-auto pt-1"
        style={{ color: "var(--color-deep-navy)" }}
      >
        {formatPrice(item.price)}
      </p>
    </article>
  );
}

function CategorySection({
  category,
  items,
}: {
  category: MenuCategory;
  items: MenuItem[];
}) {
  if (items.length === 0) return null;
  return (
    <section
      data-ocid={`menu.category.${category.toLowerCase().replace(/[^a-z0-9]/g, "_")}`}
      className="mb-12"
    >
      <div className="flex items-center gap-4 mb-6">
        <h2
          className="font-display text-2xl md:text-3xl font-semibold"
          style={{ color: "var(--color-deep-navy)" }}
        >
          {getCategoryLabel(category)}
        </h2>
        <div
          className="flex-1 h-px"
          style={{ backgroundColor: "var(--color-seafoam)", opacity: 0.5 }}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {items.map((item, idx) => (
          <MenuCard key={item.id} item={item} index={idx} />
        ))}
      </div>
    </section>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState<string>("All");
  const [isTabSticky, setIsTabSticky] = useState(false);
  const tabSentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sentinel = tabSentinelRef.current;
    if (!sentinel) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsTabSticky(!entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  const visibleCategories =
    activeTab === "All" ? FOOD_CATEGORIES : [activeTab as MenuCategory];

  const itemsByCategory = (cat: MenuCategory) =>
    menuItems.filter((item) => item.category === cat);

  return (
    <div data-ocid="menu.page" className="min-h-screen">
      {/* ── Hero Banner ─────────────────────────────── */}
      <section
        data-ocid="menu.hero"
        className="relative flex items-center justify-center"
        style={{
          height: "40vh",
          minHeight: "280px",
          background:
            "linear-gradient(135deg, oklch(0.148 0.052 248) 0%, oklch(0.22 0.06 240) 60%, oklch(0.148 0.052 248) 100%)",
        }}
      >
        {/* Decorative wave overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 30% 60%, oklch(0.77 0.04 145) 0%, transparent 60%), radial-gradient(ellipse at 70% 40%, oklch(0.963 0.013 70) 0%, transparent 50%)",
          }}
        />
        <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
          <p
            className="font-body text-xs uppercase tracking-widest mb-3 opacity-70"
            style={{ color: "var(--color-seafoam)" }}
          >
            OG By The Lake
          </p>
          <h1
            className="font-display text-5xl md:text-6xl font-semibold italic mb-4"
            style={{ color: "#ffffff" }}
          >
            Our Menu
          </h1>
          <p
            className="font-body text-base md:text-lg"
            style={{
              color: "rgba(255,255,255,0.75)",
              fontWeight: 300,
              letterSpacing: "0.5px",
            }}
          >
            A global journey of flavors at the lake's edge.
          </p>
        </div>
      </section>

      {/* ── Sentinel for sticky detection ───────────── */}
      <div ref={tabSentinelRef} className="h-0" />

      {/* ── Sticky Category Tabs ─────────────────────── */}
      <div
        data-ocid="menu.tabs"
        className={`sticky top-[72px] z-30 transition-smooth ${
          isTabSticky
            ? "bg-card shadow-subtle border-b border-border"
            : "bg-background border-b border-border"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="flex items-center gap-0 overflow-x-auto no-scrollbar py-0">
            {MENU_TABS.map((tab) => (
              <button
                key={tab}
                data-ocid={`menu.tab.${tab.toLowerCase().replace(/[^a-z0-9]/g, "_")}`}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`relative flex-shrink-0 px-4 md:px-6 py-4 text-sm font-body font-medium transition-smooth whitespace-nowrap ${
                  activeTab === tab ? "" : "hover:opacity-80"
                }`}
                style={{
                  color:
                    activeTab === tab
                      ? "var(--color-deep-navy)"
                      : "var(--color-driftwood)",
                  letterSpacing: "0.5px",
                  fontWeight: activeTab === tab ? 500 : 300,
                  borderBottom:
                    activeTab === tab
                      ? "2px solid var(--color-seafoam)"
                      : "2px solid transparent",
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Tax Note ──────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 pt-8 pb-2 text-center">
        <p
          className="font-body text-xs"
          style={{ color: "var(--color-driftwood)", letterSpacing: "0.5px" }}
        >
          7% service charge applies. Government taxes as applicable.
        </p>
      </div>

      {/* ── Menu Grid ─────────────────────────────────── */}
      <main className="max-w-6xl mx-auto px-4 md:px-8 py-10">
        {visibleCategories.map((cat) => (
          <CategorySection
            key={cat}
            category={cat}
            items={itemsByCategory(cat)}
          />
        ))}
      </main>

      {/* ── Bottom CTA ────────────────────────────────── */}
      <section
        data-ocid="menu.cta"
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.963 0.013 70) 0%, oklch(0.92 0.008 70) 100%)",
        }}
      >
        {/* Decorative accent */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ backgroundColor: "var(--color-seafoam)", opacity: 0.4 }}
        />
        <div className="max-w-2xl mx-auto px-6 py-20 text-center">
          <p
            className="font-body text-xs uppercase tracking-widest mb-4"
            style={{ color: "var(--color-seafoam)" }}
          >
            Reservations
          </p>
          <h2
            className="font-display text-3xl md:text-4xl font-semibold italic mb-4"
            style={{ color: "var(--color-deep-navy)" }}
          >
            Ready to Dine With Us?
          </h2>
          <p
            className="font-body text-base mb-8"
            style={{
              color: "var(--color-driftwood)",
              fontWeight: 300,
              letterSpacing: "0.5px",
            }}
          >
            Secure your lakeside table and let the evening take care of itself.
          </p>
          <Link to="/contact" data-ocid="menu.reserve_button">
            <Button
              size="lg"
              className="px-10 py-3 text-sm font-body font-medium tracking-widest uppercase transition-smooth hover:opacity-90 hover:-translate-y-0.5 hover:shadow-navy"
              style={{
                backgroundColor: "var(--color-seafoam)",
                color: "#ffffff",
                letterSpacing: "0.12em",
              }}
            >
              Reserve a Table
            </Button>
          </Link>
        </div>
      </section>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}
