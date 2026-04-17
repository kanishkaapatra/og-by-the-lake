import { Link } from "@tanstack/react-router";
import { Clock, Instagram, MapPin, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Our Story", href: "/our-story" },
  { label: "Menu", href: "/menu" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const utmLink = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`;

  return (
    <footer
      style={{ backgroundColor: "var(--color-deep-navy)" }}
      className="text-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <span
                className="font-display text-2xl font-semibold tracking-wide"
                style={{ color: "#FFFFFF" }}
              >
                OG{" "}
                <span style={{ color: "var(--color-seafoam)" }}>
                  By The Lake
                </span>
              </span>
            </Link>
            <p
              className="font-body text-sm font-light leading-relaxed"
              style={{ color: "rgba(255,255,255,0.6)", letterSpacing: "0.5px" }}
            >
              Kolkata's premier lakefront dining sanctuary. Where every evening
              tastes like a sunset.
            </p>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="OG By The Lake on Instagram"
              className="inline-flex items-center gap-2 transition-smooth hover:opacity-80"
              style={{ color: "var(--color-seafoam)" }}
            >
              <Instagram size={18} />
              <span className="text-sm font-light tracking-wide">
                @ogbythelake
              </span>
            </a>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4
              className="font-display text-xs font-semibold uppercase tracking-widest"
              style={{ color: "var(--color-seafoam)", letterSpacing: "0.18em" }}
            >
              Navigate
            </h4>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="font-body text-sm font-light transition-smooth hover:opacity-100"
                  style={{
                    color: "rgba(255,255,255,0.6)",
                    letterSpacing: "0.5px",
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4
              className="font-display text-xs font-semibold uppercase tracking-widest"
              style={{ color: "var(--color-seafoam)", letterSpacing: "0.18em" }}
            >
              Find Us
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin
                  size={16}
                  className="mt-0.5 flex-shrink-0"
                  style={{ color: "var(--color-seafoam)" }}
                />
                <address
                  className="not-italic font-body text-sm font-light leading-relaxed"
                  style={{
                    color: "rgba(255,255,255,0.7)",
                    letterSpacing: "0.5px",
                  }}
                >
                  11A, 1J, East Topsia Road
                  <br />
                  Mirania Gardens, Kolkata – 700046
                </address>
              </div>
              <div className="flex items-center gap-3">
                <Phone
                  size={16}
                  className="flex-shrink-0"
                  style={{ color: "var(--color-seafoam)" }}
                />
                <a
                  href="tel:+919831006395"
                  className="font-body text-sm font-light transition-smooth hover:opacity-80"
                  style={{
                    color: "rgba(255,255,255,0.7)",
                    letterSpacing: "0.5px",
                  }}
                >
                  +91 98310 06395
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock
                  size={16}
                  className="flex-shrink-0"
                  style={{ color: "var(--color-seafoam)" }}
                />
                <span
                  className="font-body text-sm font-light"
                  style={{
                    color: "rgba(255,255,255,0.7)",
                    letterSpacing: "0.5px",
                  }}
                >
                  12:00 PM – 11:30 PM, Daily
                </span>
              </div>
            </div>

            {/* Booking Links */}
            <div className="flex gap-3 pt-2">
              <a
                href="https://www.swiggy.com"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="footer.swiggy_link"
                className="px-4 py-2 text-xs font-body font-medium uppercase tracking-wider rounded-sm transition-smooth hover:opacity-80"
                style={{
                  border: "1px solid var(--color-seafoam)",
                  color: "var(--color-seafoam)",
                  letterSpacing: "0.1em",
                }}
              >
                Swiggy
              </a>
              <a
                href="https://www.justdial.com"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="footer.justdial_link"
                className="px-4 py-2 text-xs font-body font-medium uppercase tracking-wider rounded-sm transition-smooth hover:opacity-80"
                style={{
                  border: "1px solid rgba(255,255,255,0.3)",
                  color: "rgba(255,255,255,0.7)",
                  letterSpacing: "0.1em",
                }}
              >
                Justdial
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
        >
          <p
            className="font-body text-xs font-light"
            style={{ color: "rgba(255,255,255,0.4)", letterSpacing: "0.5px" }}
          >
            © {year} OG By The Lake. All rights reserved.
          </p>
          <p
            className="font-body text-xs font-light"
            style={{ color: "rgba(255,255,255,0.3)", letterSpacing: "0.5px" }}
          >
            Built with love using{" "}
            <a
              href={utmLink}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-smooth hover:opacity-70"
              style={{ color: "var(--color-seafoam)" }}
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
