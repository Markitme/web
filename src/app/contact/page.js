"use client";

import { useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  CheckCircle2,
  Loader2,
} from "lucide-react";

import Button from "../../components/ui/Button";
import CTA from "../../components/CTA";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (error) {
      setError("");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Failed to send your message."
        );
      }

      setSubmitted(true);

      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });

    } catch (err) {
      console.error("Contact form error:", err);

      setError(
        err?.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-[var(--color-cream)] text-[var(--color-deep)] transition-colors duration-300 dark:bg-[var(--color-night)] dark:text-[var(--color-cream)]">

      {/* =====================================================
          HERO / CONTACT
      ===================================================== */}
      <section className="relative overflow-hidden border-b border-[var(--color-deep)]/10 bg-[var(--color-cream)] dark:border-[var(--color-cream)]/10 dark:bg-[var(--color-night)]">

        <div className="container-custom relative px-5 py-16 sm:py-20 lg:py-24">

          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">

            {/* =================================================
                CONTACT INFORMATION
            ================================================= */}
            <div>

              {/* Heading */}
              <div className="mb-8">

                <div className="flex items-center gap-2">

                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-gold)]" />

                  <p className="text-[8px] font-black uppercase tracking-[0.22em] text-[var(--color-green)] dark:text-[var(--color-gold)] sm:text-[9px]">
                    Contact MarkitMe
                  </p>

                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-green)] dark:bg-[var(--color-gold)]" />

                </div>

                <h1 className="mt-4 text-3xl font-black leading-[0.95] tracking-[-0.055em] text-[var(--color-deep)] sm:text-4xl md:text-5xl lg:text-6xl dark:text-[var(--color-cream)]">
                  Let&apos;s build something{" "}
                  <span className="text-[var(--color-green)] dark:text-[var(--color-gold)]">
                    that matters.
                  </span>
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-deep)]/60 dark:text-[var(--color-cream)]/60 sm:text-xl">
                  Have a project, challenge, or growth goal in mind?
                  Tell us about it, and we&apos;ll explore how we can
                  help turn your ideas into meaningful digital growth.
                </p>

              </div>

              {/* Contact Details */}
              <div className="space-y-6">

                {/* Email */}
                <div className="flex items-center gap-4">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--color-gold)] text-[var(--color-deep)]">
                    <Mail size={20} />
                  </div>

                  <div>
                    <p className="text-sm text-[var(--color-deep)]/50 dark:text-[var(--color-cream)]/50">
                      Email
                    </p>

                    <a
                      href="mailto:info@markitme.ca"
                      className="font-bold transition hover:text-[var(--color-green)] dark:hover:text-[var(--color-gold)]"
                    >
                      info@markitme.ca
                    </a>
                  </div>

                </div>

                {/* Phone */}
                <div className="flex items-center gap-4">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--color-gold)] text-[var(--color-deep)]">
                    <Phone size={20} />
                  </div>

                  <div>
                    <p className="text-sm text-[var(--color-deep)]/50 dark:text-[var(--color-cream)]/50">
                      Phone
                    </p>

                    <a
                      href="tel:+16139814844"
                      className="font-bold transition hover:text-[var(--color-green)] dark:hover:text-[var(--color-gold)]"
                    >
                      +1 (613)-981-4844
                    </a>
                  </div>

                </div>

                {/* Location */}
                <div className="flex items-center gap-4">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--color-gold)] text-[var(--color-deep)]">
                    <MapPin size={20} />
                  </div>

                  <div>
                    <p className="text-sm text-[var(--color-deep)]/50 dark:text-[var(--color-cream)]/50">
                      Location
                    </p>

                    <p className="font-bold text-[var(--color-deep)] dark:text-[var(--color-cream)]">
                      34 Minowan Miikan Lane,
                      <br />
                      Toronto, M6J 0G3
                    </p>
                  </div>

                </div>

              </div>

            </div>


            {/* =================================================
                CONTACT FORM
            ================================================= */}
            <form
              onSubmit={handleSubmit}
              className="rounded-[28px] border border-[var(--color-deep)]/10 bg-[var(--color-deep)]/[0.025] p-6 shadow-sm transition-all duration-300 hover:border-[var(--color-green)] dark:border-[var(--color-cream)]/10 dark:bg-[var(--color-cream)]/[0.03] dark:hover:border-[var(--color-gold)] sm:p-9"
            >

              {/* Success Message */}
              {submitted ? (
                <div className="flex min-h-[430px] flex-col items-center justify-center text-center">

                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-gold)] text-[var(--color-deep)]">
                    <CheckCircle2 size={30} />
                  </div>

                  <h2 className="mt-6 text-3xl font-black tracking-[-0.04em]">
                    Message sent!
                  </h2>

                  <p className="mt-3 max-w-md leading-7 text-[var(--color-deep)]/60 dark:text-[var(--color-cream)]/60">
                    Thanks for reaching out. Your message has been
                    sent successfully. We&apos;ll get back to you soon.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-7 text-sm font-bold text-[var(--color-green)] transition hover:opacity-70 dark:text-[var(--color-gold)]"
                  >
                    Send another message
                  </button>

                </div>
              ) : (
                <>


                  {/* Error */}
                  {error && (
                    <div className="mb-6 rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-3 text-sm text-red-600 dark:text-red-400">
                      {error}
                    </div>
                  )}


                  {/* Name + Email */}
                  <div className="grid gap-6 sm:grid-cols-2">

                    {/* Name */}
                    <div>

                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-bold"
                      >
                        Name
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="w-full rounded-xl border border-[var(--color-deep)]/10 bg-[var(--color-cream)] px-4 py-4 text-[var(--color-deep)] outline-none transition placeholder:text-[var(--color-deep)]/40 focus:border-[var(--color-green)] dark:border-[var(--color-cream)]/10 dark:bg-[var(--color-night)] dark:text-[var(--color-cream)] dark:placeholder:text-[var(--color-cream)]/35 dark:focus:border-[var(--color-gold)]"
                      />

                    </div>


                    {/* Email */}
                    <div>

                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-bold"
                      >
                        Email
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        required
                        className="w-full rounded-xl border border-[var(--color-deep)]/10 bg-[var(--color-cream)] px-4 py-4 text-[var(--color-deep)] outline-none transition placeholder:text-[var(--color-deep)]/40 focus:border-[var(--color-green)] dark:border-[var(--color-cream)]/10 dark:bg-[var(--color-night)] dark:text-[var(--color-cream)] dark:placeholder:text-[var(--color-cream)]/35 dark:focus:border-[var(--color-gold)]"
                      />

                    </div>

                  </div>


                  {/* Phone */}
                  <div className="mt-6">

                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-bold"
                    >
                      Phone
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (613) 000-0000"
                      className="w-full rounded-xl border border-[var(--color-deep)]/10 bg-[var(--color-cream)] px-4 py-4 text-[var(--color-deep)] outline-none transition placeholder:text-[var(--color-deep)]/40 focus:border-[var(--color-green)] dark:border-[var(--color-cream)]/10 dark:bg-[var(--color-night)] dark:text-[var(--color-cream)] dark:placeholder:text-[var(--color-cream)]/35 dark:focus:border-[var(--color-gold)]"
                    />

                  </div>


                  {/* Service */}
                  <div className="mt-6">

                    <label
                      htmlFor="service"
                      className="mb-2 block text-sm font-bold"
                    >
                      What can we help you with?
                    </label>

                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-[var(--color-deep)]/10 bg-[var(--color-cream)] px-4 py-4 text-[var(--color-deep)] outline-none transition focus:border-[var(--color-green)] dark:border-[var(--color-cream)]/10 dark:bg-[var(--color-night)] dark:text-[var(--color-cream)] dark:focus:border-[var(--color-gold)]"
                    >
                      <option value="">
                        Select a service
                      </option>

                      <option value="Brand Strategy">
                        Brand Strategy
                      </option>

                      <option value="Website Design & Development">
                        Website Design & Development
                      </option>

                      <option value="Digital Marketing">
                        Digital Marketing
                      </option>

                      <option value="SEO">
                        SEO
                      </option>

                      <option value="Content Marketing">
                        Content Marketing
                      </option>

                      <option value="UI/UX Design">
                        UI/UX Design
                      </option>

                      <option value="Other">
                        Other
                      </option>
                    </select>

                  </div>


                  {/* Message */}
                  <div className="mt-6">

                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-bold"
                    >
                      Tell us about your project
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="What would you like to achieve?"
                      required
                      className="w-full resize-none rounded-xl border border-[var(--color-deep)]/10 bg-[var(--color-cream)] px-4 py-4 text-[var(--color-deep)] outline-none transition placeholder:text-[var(--color-deep)]/40 focus:border-[var(--color-green)] dark:border-[var(--color-cream)]/10 dark:bg-[var(--color-night)] dark:text-[var(--color-cream)] dark:placeholder:text-[var(--color-cream)]/35 dark:focus:border-[var(--color-gold)]"
                    />

                  </div>


                  {/* Submit */}
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    className="mt-7"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2
                          size={18}
                          className="animate-spin"
                        />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>

                </>
              )}

            </form>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}
      <CTA
        eyebrow="Let's Work Together"
        title="Have an idea? Let's make it matter."
        description="Tell us what you are building, where you want to go, and how we can help you turn your ideas into meaningful digital growth."
        buttonText="Start a Conversation"
        buttonHref="/contact"
      />

    </main>
  );
}