"use client";

import { useEffect, useState } from "react";
import { X, ArrowRight } from "lucide-react";

const STORAGE_KEY = "markitme_home_modal_closed";
const HIDE_DURATION = 12 * 60 * 60 * 1000;

export default function HomePopupModal() {
  const [isOpen, setIsOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  /*
  =====================================================
  AUTO OPEN + HEADER TRIGGER
  =====================================================
  */

  useEffect(() => {
    // Header "Let's Talk" button se modal open karne ke liye
    const openModal = () => {
      setIsOpen(true);
      setSubmitted(false);
    };

    window.addEventListener("open-contact-modal", openModal);

    // Homepage par automatic popup
    const lastClosed = localStorage.getItem(STORAGE_KEY);

    if (!lastClosed) {
      setIsOpen(true);
    } else {
      const closedTime = Number(lastClosed);
      const currentTime = Date.now();

      if (currentTime - closedTime >= HIDE_DURATION) {
        localStorage.removeItem(STORAGE_KEY);
        setIsOpen(true);
      }
    }

    return () => {
      window.removeEventListener("open-contact-modal", openModal);
    };
  }, []);

  /*
  =====================================================
  CLOSE
  =====================================================
  */

  const handleClose = () => {
    localStorage.setItem(STORAGE_KEY, Date.now().toString());
    setIsOpen(false);
  };

  /*
  =====================================================
  FORM CHANGE
  =====================================================
  */

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /*
  =====================================================
  SUBMIT
  =====================================================
  */

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      console.log("Form submitted:", formData);

      await new Promise((resolve) => setTimeout(resolve, 800));

      setSubmitted(true);

      localStorage.setItem(STORAGE_KEY, Date.now().toString());

      setTimeout(() => {
        setIsOpen(false);
      }, 1500);
    } catch (error) {
      console.error("Form submission failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-[9999]
        flex
        items-center
        justify-center
        bg-black/65
        px-3
        py-3
        backdrop-blur-sm
        sm:px-5
        sm:py-4
      "
    >
      <div
        className="
          relative
          w-full
          max-w-[520px]
          overflow-hidden
          rounded-[24px]
          border
          border-black/10
          bg-white
          text-black
          shadow-2xl
          dark:border-white/10
          dark:bg-[#111111]
          dark:text-white
          max-h-[calc(100dvh-24px)]
          sm:max-h-[calc(100dvh-32px)]
        "
      >
        {/* Close */}
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close"
          className="
            absolute
            right-3
            top-3
            z-30
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-full
            bg-black/5
            text-black
            transition
            hover:bg-black/10
            dark:bg-white/10
            dark:text-white
            dark:hover:bg-white/20
            sm:right-4
            sm:top-4
            sm:h-9
            sm:w-9
          "
        >
          <X size={17} />
        </button>

        <div className="p-5 sm:p-7">
          {/* Header */}
          <div className="pr-10">
            <p
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.22em]
                text-[var(--accent)]
                dark:text-[var(--accent-bright)]
                sm:text-[11px]
              "
            >
              Let&apos;s Work Together
            </p>

            <h2
              className="
                mt-2
                text-[27px]
                font-black
                leading-[1.02]
                tracking-[-0.045em]
                sm:text-[32px]
              "
            >
              Tell us about your project.
            </h2>

            <p
              className="
                mt-2.5
                text-[12px]
                leading-5
                text-black/55
                dark:text-white/55
                sm:text-[13px]
              "
            >
              Fill in the details below and our team will get back to you.
            </p>
          </div>

          {submitted ? (
            <div className="mt-5 rounded-2xl border border-[var(--accent)]/20 bg-[var(--accent)]/5 p-5 text-center">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent-bright)] text-base font-black text-black">
                ✓
              </div>

              <h3 className="mt-3 text-lg font-black">
                Thank you!
              </h3>

              <p className="mt-1 text-xs text-black/60 dark:text-white/60">
                We&apos;ve received your request and will get back to you
                soon.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-5 space-y-3.5 sm:mt-6 sm:space-y-4"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="popup-name"
                  className="mb-1.5 block text-xs font-bold sm:text-sm"
                >
                  Name
                </label>

                <input
                  id="popup-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="
                    h-[43px]
                    w-full
                    rounded-xl
                    border
                    border-black/10
                    bg-black/[0.02]
                    px-3.5
                    text-[13px]
                    text-black
                    outline-none
                    placeholder:text-black/35
                    focus:border-[var(--accent)]
                    dark:border-white/10
                    dark:bg-[#181818]
                    dark:text-white
                    dark:placeholder:text-white/35
                    dark:focus:border-[var(--accent-bright)]
                  "
                />
              </div>

              {/* Email + Phone */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label
                    htmlFor="popup-email"
                    className="mb-1.5 block text-xs font-bold sm:text-sm"
                  >
                    Email
                  </label>

                  <input
                    id="popup-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className="
                      h-[43px]
                      w-full
                      rounded-xl
                      border
                      border-black/10
                      bg-black/[0.02]
                      px-3
                      text-[12px]
                      text-black
                      outline-none
                      placeholder:text-black/35
                      focus:border-[var(--accent)]
                      dark:border-white/10
                      dark:bg-[#181818]
                      dark:text-white
                      dark:placeholder:text-white/35
                      dark:focus:border-[var(--accent-bright)]
                    "
                  />
                </div>

                <div>
                  <label
                    htmlFor="popup-phone"
                    className="mb-1.5 block text-xs font-bold sm:text-sm"
                  >
                    Phone
                  </label>

                  <input
                    id="popup-phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 000 000 0000"
                    required
                    className="
                      h-[43px]
                      w-full
                      rounded-xl
                      border
                      border-black/10
                      bg-black/[0.02]
                      px-3
                      text-[12px]
                      text-black
                      outline-none
                      placeholder:text-black/35
                      focus:border-[var(--accent)]
                      dark:border-white/10
                      dark:bg-[#181818]
                      dark:text-white
                      dark:placeholder:text-white/35
                      dark:focus:border-[var(--accent-bright)]
                    "
                  />
                </div>
              </div>

              {/* Service */}
              <div>
                <label
                  htmlFor="popup-service"
                  className="mb-1.5 block text-xs font-bold sm:text-sm"
                >
                  Services
                </label>

                <select
                  id="popup-service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="
                    h-[43px]
                    w-full
                    appearance-none
                    rounded-xl
                    border
                    border-black/10
                    bg-black/[0.02]
                    px-3.5
                    text-[13px]
                    text-black
                    outline-none
                    focus:border-[var(--accent)]
                    dark:border-white/10
                    dark:bg-[#181818]
                    dark:text-white
                    dark:focus:border-[var(--accent-bright)]
                  "
                >
                  <option value="" disabled>
                    Select a service
                  </option>

                  <option value="Web Design">Web Design</option>
                  <option value="Web Development">
                    Web Development
                  </option>
                  <option value="WordPress Development">
                    WordPress Development
                  </option>
                  <option value="SEO">SEO</option>
                  <option value="Digital Marketing">
                    Digital Marketing
                  </option>
                  <option value="Branding">Branding</option>
                  <option value="UI/UX Design">
                    UI/UX Design
                  </option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="
                  group
                  mt-1
                  inline-flex
                  h-[43px]
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-[var(--accent-bright)]
                  px-5
                  text-[13px]
                  font-bold
                  text-black
                  transition-all
                  hover:bg-black
                  hover:text-white
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                  dark:hover:bg-white
                  dark:hover:text-black
                "
              >
                {isSubmitting ? "Sending..." : "Send Enquiry"}

                {!isSubmitting && (
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                )}
              </button>

              <button
                type="button"
                onClick={handleClose}
                className="
                  mx-auto
                  block
                  text-[10px]
                  font-semibold
                  text-black/40
                  hover:text-black
                  dark:text-white/40
                  dark:hover:text-white
                "
              >
                Maybe later
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}