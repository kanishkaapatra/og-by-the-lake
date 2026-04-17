import { createActor } from "@/backend";
import type { ReservationInput } from "@/backend.d";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useActor } from "@caffeineai/core-infrastructure";
import {
  AlertCircle,
  CheckCircle2,
  Clock,
  ExternalLink,
  MapPin,
  Phone,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const TIME_SLOTS = [
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
  "7:00 PM",
  "8:00 PM",
  "9:00 PM",
  "10:00 PM",
];

const PARTY_SIZES = [
  { value: "1", label: "1 person" },
  { value: "2", label: "2 people" },
  { value: "3", label: "3–4 people" },
  { value: "4", label: "5–6 people" },
  { value: "5", label: "7–10 people" },
  { value: "6", label: "10+ people" },
];

// Maps party size select option value → actual headcount for backend bigint
const PARTY_SIZE_MAP: Record<string, number> = {
  "1": 1,
  "2": 2,
  "3": 4,
  "4": 6,
  "5": 10,
  "6": 12,
};

interface FormState {
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  partySize: string;
  specialRequests: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  date?: string;
  time?: string;
  partySize?: string;
}

const today = new Date().toISOString().split("T")[0];

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!form.name.trim()) errors.name = "Full name is required.";
  if (!form.phone.trim()) errors.phone = "Phone number is required.";
  if (!form.email.trim()) {
    errors.email = "Email address is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!form.date) errors.date = "Please select a date.";
  if (!form.time) errors.time = "Please select a time.";
  if (!form.partySize) errors.partySize = "Please select party size.";
  return errors;
}

export default function ContactPage() {
  const { actor } = useActor(createActor);

  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    partySize: "",
    specialRequests: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  function handleChange(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const fieldErrors = validate(form);
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }

    setSubmitting(true);
    try {
      if (!actor) throw new Error("Actor not ready");

      const input: ReservationInput = {
        name: form.name.trim(),
        phone: form.phone.trim(),
        email: form.email.trim(),
        date: form.date,
        time: form.time,
        partySize: BigInt(PARTY_SIZE_MAP[form.partySize] ?? 2),
        specialRequests: form.specialRequests.trim(),
      };

      const result = await actor.submitReservation(input);
      if (result.__kind__ === "ok") {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div data-ocid="contact.page" className="pt-20">
      {/* Hero Banner */}
      <section
        className="h-[40vh] flex items-center justify-center relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, var(--color-deep-navy) 0%, oklch(0.22 0.06 248) 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 60%, var(--color-seafoam) 0%, transparent 50%)",
          }}
        />
        <motion.div
          className="relative text-center px-6 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1
            className="font-display-emphasis text-4xl md:text-5xl lg:text-6xl mb-4"
            style={{ color: "#ffffff" }}
          >
            Reserve Your Table
          </h1>
          <p
            className="font-body-relaxed text-base md:text-lg tracking-wide"
            style={{ color: "rgba(255,255,255,0.78)" }}
          >
            Secure your spot at Kolkata's lakefront sanctuary.
          </p>
        </motion.div>
      </section>

      {/* Two-column content */}
      <section className="bg-background py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* LEFT — Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              data-ocid="contact.info_panel"
            >
              <h2
                className="font-display text-3xl md:text-4xl italic mb-8"
                style={{ color: "var(--color-deep-navy)" }}
              >
                Get In Touch
              </h2>

              <ul className="space-y-6 mb-10">
                <li className="flex gap-4 items-start">
                  <span
                    className="mt-0.5 flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center"
                    style={{ background: "oklch(0.92 0.008 70)" }}
                    aria-hidden="true"
                  >
                    <MapPin
                      className="w-4 h-4"
                      style={{ color: "var(--color-deep-navy)" }}
                    />
                  </span>
                  <div>
                    <p
                      className="font-body-relaxed text-sm uppercase tracking-widest mb-1"
                      style={{ color: "var(--color-seafoam)" }}
                    >
                      Address
                    </p>
                    <p
                      className="font-body-relaxed leading-relaxed"
                      style={{ color: "var(--color-driftwood)" }}
                    >
                      11A, 1J, East Topsia Road,
                      <br />
                      Mirania Gardens, Kolkata – 700046
                    </p>
                  </div>
                </li>

                <li className="flex gap-4 items-start">
                  <span
                    className="mt-0.5 flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center"
                    style={{ background: "oklch(0.92 0.008 70)" }}
                    aria-hidden="true"
                  >
                    <Phone
                      className="w-4 h-4"
                      style={{ color: "var(--color-deep-navy)" }}
                    />
                  </span>
                  <div>
                    <p
                      className="font-body-relaxed text-sm uppercase tracking-widest mb-1"
                      style={{ color: "var(--color-seafoam)" }}
                    >
                      Phone
                    </p>
                    <a
                      href="tel:+919831006395"
                      className="font-body-relaxed hover-seafoam-underline transition-smooth"
                      style={{ color: "var(--color-deep-navy)" }}
                      data-ocid="contact.phone_link"
                    >
                      +91 98310 06395
                    </a>
                  </div>
                </li>

                <li className="flex gap-4 items-start">
                  <span
                    className="mt-0.5 flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center"
                    style={{ background: "oklch(0.92 0.008 70)" }}
                    aria-hidden="true"
                  >
                    <Clock
                      className="w-4 h-4"
                      style={{ color: "var(--color-deep-navy)" }}
                    />
                  </span>
                  <div>
                    <p
                      className="font-body-relaxed text-sm uppercase tracking-widest mb-1"
                      style={{ color: "var(--color-seafoam)" }}
                    >
                      Hours
                    </p>
                    <p
                      className="font-body-relaxed"
                      style={{ color: "var(--color-driftwood)" }}
                    >
                      Open Daily: 12 PM – 11 PM
                    </p>
                  </div>
                </li>
              </ul>

              {/* External booking buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-10">
                <a
                  href="https://www.swiggy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="contact.swiggy_button"
                >
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto gap-2 border-2 transition-smooth"
                    style={{
                      borderColor: "var(--color-deep-navy)",
                      color: "var(--color-deep-navy)",
                    }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Order on Swiggy
                  </Button>
                </a>
                <a
                  href="https://www.justdial.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="contact.justdial_button"
                >
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto gap-2 border-2 transition-smooth"
                    style={{
                      borderColor: "var(--color-seafoam)",
                      color: "var(--color-driftwood)",
                    }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Book on Justdial
                  </Button>
                </a>
              </div>

              {/* Amenity badges */}
              <div className="flex flex-wrap gap-2">
                {[
                  "Alcohol Served",
                  "Smoking Area",
                  "Wheelchair Accessible",
                ].map((amenity) => (
                  <span
                    key={amenity}
                    className="px-4 py-1.5 rounded-full text-sm font-body-relaxed tracking-wide"
                    style={{
                      background: "var(--color-seafoam)",
                      color: "#ffffff",
                    }}
                  >
                    {amenity}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* RIGHT — Reservation Form */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              data-ocid="contact.form_panel"
            >
              <h2
                className="font-display text-3xl md:text-4xl italic mb-8"
                style={{ color: "var(--color-deep-navy)" }}
              >
                Book Your Experience
              </h2>

              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="rounded-2xl p-8 text-center shadow-elevated"
                  style={{
                    background: "oklch(0.96 0.02 145 / 0.3)",
                    border: "1.5px solid var(--color-seafoam)",
                  }}
                  data-ocid="contact.success_state"
                >
                  <CheckCircle2
                    className="w-14 h-14 mx-auto mb-5"
                    style={{ color: "var(--color-seafoam)" }}
                  />
                  <h3
                    className="font-display text-2xl italic mb-4"
                    style={{ color: "var(--color-deep-navy)" }}
                  >
                    Thank you, {form.name}! 🌊
                  </h3>
                  <p
                    className="font-body-relaxed leading-relaxed mb-2"
                    style={{ color: "var(--color-driftwood)" }}
                  >
                    Your reservation request has been received.
                  </p>
                  <p
                    className="font-body-relaxed leading-relaxed mb-2"
                    style={{ color: "var(--color-driftwood)" }}
                  >
                    Our team will call you at{" "}
                    <strong style={{ color: "var(--color-deep-navy)" }}>
                      {form.phone}
                    </strong>{" "}
                    to confirm your booking.
                  </p>
                  <p
                    className="font-body-relaxed leading-relaxed"
                    style={{ color: "var(--color-driftwood)" }}
                  >
                    We look forward to seeing you by the lake.
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="space-y-5"
                  data-ocid="contact.reservation_form"
                >
                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-start gap-3 rounded-lg px-4 py-3"
                      style={{
                        background: "oklch(0.96 0.03 25 / 0.2)",
                        border: "1px solid oklch(0.55 0.22 25 / 0.4)",
                      }}
                      data-ocid="contact.error_state"
                    >
                      <AlertCircle
                        className="w-5 h-5 mt-0.5 flex-shrink-0"
                        style={{ color: "oklch(0.55 0.22 25)" }}
                      />
                      <p
                        className="font-body-relaxed text-sm"
                        style={{ color: "oklch(0.4 0.18 25)" }}
                      >
                        Oops! Something went wrong. Please call us directly at{" "}
                        <a
                          href="tel:+919831006395"
                          className="font-semibold underline"
                        >
                          +91 98310 06395
                        </a>
                        .
                      </p>
                    </motion.div>
                  )}

                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="res-name"
                      className="font-body-relaxed text-sm"
                      style={{ color: "var(--color-deep-navy)" }}
                    >
                      Full Name <span aria-hidden="true">*</span>
                    </Label>
                    <Input
                      id="res-name"
                      type="text"
                      autoComplete="name"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      aria-required="true"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "err-name" : undefined}
                      data-ocid="contact.name_input"
                      className="font-body-relaxed"
                      style={{
                        background: "var(--color-sand-beige)",
                        borderColor: errors.name
                          ? "oklch(0.55 0.22 25)"
                          : undefined,
                      }}
                    />
                    {errors.name && (
                      <p
                        id="err-name"
                        className="text-xs font-body-relaxed"
                        style={{ color: "oklch(0.55 0.22 25)" }}
                        data-ocid="contact.name_field_error"
                      >
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="res-phone"
                      className="font-body-relaxed text-sm"
                      style={{ color: "var(--color-deep-navy)" }}
                    >
                      Phone Number <span aria-hidden="true">*</span>
                    </Label>
                    <Input
                      id="res-phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="+91 XXXXX XXXXX"
                      value={form.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      aria-required="true"
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? "err-phone" : undefined}
                      data-ocid="contact.phone_input"
                      className="font-body-relaxed"
                      style={{
                        background: "var(--color-sand-beige)",
                        borderColor: errors.phone
                          ? "oklch(0.55 0.22 25)"
                          : undefined,
                      }}
                    />
                    {errors.phone && (
                      <p
                        id="err-phone"
                        className="text-xs font-body-relaxed"
                        style={{ color: "oklch(0.55 0.22 25)" }}
                        data-ocid="contact.phone_field_error"
                      >
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="res-email"
                      className="font-body-relaxed text-sm"
                      style={{ color: "var(--color-deep-navy)" }}
                    >
                      Email Address <span aria-hidden="true">*</span>
                    </Label>
                    <Input
                      id="res-email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      aria-required="true"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "err-email" : undefined}
                      data-ocid="contact.email_input"
                      className="font-body-relaxed"
                      style={{
                        background: "var(--color-sand-beige)",
                        borderColor: errors.email
                          ? "oklch(0.55 0.22 25)"
                          : undefined,
                      }}
                    />
                    {errors.email && (
                      <p
                        id="err-email"
                        className="text-xs font-body-relaxed"
                        style={{ color: "oklch(0.55 0.22 25)" }}
                        data-ocid="contact.email_field_error"
                      >
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Date + Time (two columns) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="res-date"
                        className="font-body-relaxed text-sm"
                        style={{ color: "var(--color-deep-navy)" }}
                      >
                        Date <span aria-hidden="true">*</span>
                      </Label>
                      <Input
                        id="res-date"
                        type="date"
                        min={today}
                        value={form.date}
                        onChange={(e) => handleChange("date", e.target.value)}
                        aria-required="true"
                        aria-invalid={!!errors.date}
                        aria-describedby={errors.date ? "err-date" : undefined}
                        data-ocid="contact.date_input"
                        className="font-body-relaxed"
                        style={{
                          background: "var(--color-sand-beige)",
                          borderColor: errors.date
                            ? "oklch(0.55 0.22 25)"
                            : undefined,
                        }}
                      />
                      {errors.date && (
                        <p
                          id="err-date"
                          className="text-xs font-body-relaxed"
                          style={{ color: "oklch(0.55 0.22 25)" }}
                          data-ocid="contact.date_field_error"
                        >
                          {errors.date}
                        </p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <Label
                        htmlFor="res-time"
                        className="font-body-relaxed text-sm"
                        style={{ color: "var(--color-deep-navy)" }}
                      >
                        Preferred Time <span aria-hidden="true">*</span>
                      </Label>
                      <Select
                        value={form.time}
                        onValueChange={(v) => handleChange("time", v)}
                      >
                        <SelectTrigger
                          id="res-time"
                          aria-required="true"
                          aria-invalid={!!errors.time}
                          data-ocid="contact.time_select"
                          className="font-body-relaxed"
                          style={{
                            background: "var(--color-sand-beige)",
                            borderColor: errors.time
                              ? "oklch(0.55 0.22 25)"
                              : undefined,
                          }}
                        >
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          {TIME_SLOTS.map((t) => (
                            <SelectItem
                              key={t}
                              value={t}
                              className="font-body-relaxed"
                            >
                              {t}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.time && (
                        <p
                          className="text-xs font-body-relaxed"
                          style={{ color: "oklch(0.55 0.22 25)" }}
                          data-ocid="contact.time_field_error"
                        >
                          {errors.time}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Party Size */}
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="res-party"
                      className="font-body-relaxed text-sm"
                      style={{ color: "var(--color-deep-navy)" }}
                    >
                      Party Size <span aria-hidden="true">*</span>
                    </Label>
                    <Select
                      value={form.partySize}
                      onValueChange={(v) => handleChange("partySize", v)}
                    >
                      <SelectTrigger
                        id="res-party"
                        aria-required="true"
                        aria-invalid={!!errors.partySize}
                        data-ocid="contact.party_size_select"
                        className="font-body-relaxed"
                        style={{
                          background: "var(--color-sand-beige)",
                          borderColor: errors.partySize
                            ? "oklch(0.55 0.22 25)"
                            : undefined,
                        }}
                      >
                        <SelectValue placeholder="Select party size" />
                      </SelectTrigger>
                      <SelectContent>
                        {PARTY_SIZES.map((p) => (
                          <SelectItem
                            key={p.value}
                            value={p.value}
                            className="font-body-relaxed"
                          >
                            {p.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.partySize && (
                      <p
                        className="text-xs font-body-relaxed"
                        style={{ color: "oklch(0.55 0.22 25)" }}
                        data-ocid="contact.party_size_field_error"
                      >
                        {errors.partySize}
                      </p>
                    )}
                  </div>

                  {/* Special Requests */}
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="res-requests"
                      className="font-body-relaxed text-sm"
                      style={{ color: "var(--color-deep-navy)" }}
                    >
                      Special Requests{" "}
                      <span
                        className="text-xs"
                        style={{ color: "var(--color-driftwood)" }}
                      >
                        (optional)
                      </span>
                    </Label>
                    <Textarea
                      id="res-requests"
                      rows={3}
                      placeholder="Any dietary requirements, occasion details, or special requests..."
                      value={form.specialRequests}
                      onChange={(e) =>
                        handleChange("specialRequests", e.target.value)
                      }
                      data-ocid="contact.special_requests_textarea"
                      className="font-body-relaxed resize-none"
                      style={{ background: "var(--color-sand-beige)" }}
                    />
                  </div>

                  {/* Submit */}
                  <Button
                    type="submit"
                    disabled={submitting}
                    data-ocid="contact.submit_button"
                    className="w-full py-3 text-base font-body-relaxed tracking-wider transition-smooth"
                    style={{
                      background: submitting
                        ? "var(--color-seafoam)"
                        : "var(--color-seafoam)",
                      color: "#ffffff",
                      opacity: submitting ? 0.7 : 1,
                    }}
                  >
                    {submitting ? "Confirming…" : "Confirm Reservation"}
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map section */}
      <section className="bg-muted/40 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-2xl overflow-hidden shadow-elevated">
            <iframe
              title="OG BY THE LAKE location map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.3!2d88.3729!3d22.5448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s11A%2C+1J%2C+East+Topsia+Road%2C+Mirania+Gardens%2C+Kolkata!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="360"
              style={{ border: 0, filter: "sepia(0.2) saturate(0.9)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
