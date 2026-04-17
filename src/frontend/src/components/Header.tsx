import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Our Story", href: "/our-story" },
  { label: "Menu", href: "/menu" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, []); // close on mount only — navigation handled via Link components

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-navy shadow-navy" : "bg-transparent"
      }`}
      style={{
        backgroundColor: scrolled ? "var(--color-deep-navy)" : "transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0" data-ocid="header.logo_link">
            <span
              className="font-display text-xl font-semibold tracking-widest uppercase"
              style={{ color: "#FFFFFF", letterSpacing: "0.15em" }}
            >
              OG{" "}
              <span style={{ color: "var(--color-seafoam)" }}>By The Lake</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-8"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                data-ocid={`header.nav_${link.label.toLowerCase().replace(" ", "_")}`}
                className={`hover-seafoam-underline font-body text-sm font-light tracking-widest uppercase transition-smooth ${
                  currentPath === link.href
                    ? "text-seafoam"
                    : "text-white opacity-90 hover:opacity-100"
                }`}
                style={{
                  color:
                    currentPath === link.href
                      ? "var(--color-seafoam)"
                      : "rgba(255,255,255,0.88)",
                  letterSpacing: "0.12em",
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              data-ocid="header.reserve_cta"
              className="hidden md:inline-flex items-center px-5 py-2.5 text-xs font-body font-medium uppercase tracking-widest transition-smooth hover:opacity-90 active:scale-95 rounded-sm"
              style={{
                backgroundColor: "var(--color-seafoam)",
                color: "#FFFFFF",
                letterSpacing: "0.12em",
              }}
            >
              Reserve a Table
            </Link>

            {/* Hamburger */}
            <button
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
              type="button"
              data-ocid="header.mobile_menu_toggle"
            >
              <span
                className={`block w-6 h-0.5 transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
                style={{ background: "#FFFFFF" }}
              />
              <span
                className={`block w-6 h-0.5 transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`}
                style={{ background: "#FFFFFF" }}
              />
              <span
                className={`block w-6 h-0.5 transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
                style={{ background: "#FFFFFF" }}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="md:hidden px-6 pt-2 pb-6 space-y-4 border-t"
          style={{
            backgroundColor: "var(--color-deep-navy)",
            borderColor: "rgba(184,193,176,0.2)",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              data-ocid={`header.mobile_nav_${link.label.toLowerCase().replace(" ", "_")}`}
              className="block py-2 font-body text-sm font-light tracking-widest uppercase"
              style={{
                color:
                  currentPath === link.href
                    ? "var(--color-seafoam)"
                    : "rgba(255,255,255,0.88)",
                letterSpacing: "0.12em",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            data-ocid="header.mobile_reserve_cta"
            className="block w-full text-center py-3 text-xs font-body font-medium uppercase tracking-widest rounded-sm"
            style={{
              backgroundColor: "var(--color-seafoam)",
              color: "#FFFFFF",
              letterSpacing: "0.12em",
            }}
          >
            Reserve a Table
          </Link>
        </div>
      )}
    </header>
  );
}
