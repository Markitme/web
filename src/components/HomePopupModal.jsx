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
  AUTO OPEN + GLOBAL TRIGGER
  =====================================================
  */

  useEffect(() => {
    const openModal = () => {
      setIsOpen(true);
      setSubmitted(false);
    };

    window.addEventListener("open-contact-modal", openModal);

    /*
    -----------------------------------------
    AUTO POPUP
    -----------------------------------------
    */

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
      window.removeEventListener(
        "open-contact-modal",
        openModal
      );
    };
  }, []);

  /*
  =====================================================
  CLOSE
  =====================================================
  */

  const handleClose = () => {
    localStorage.setItem(
      STORAGE_KEY,
      Date.now().toString()
    );

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
        message: formData.message || "",
      }),
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(
        result.message || "Failed to send message."
      );
    }

    setSubmitted(true);

    localStorage.setItem(
      STORAGE_KEY,
      Date.now().toString()
    );

    setTimeout(() => {
      setIsOpen(false);

      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });

      setSubmitted(false);
    }, 2000);

  } catch (error) {
    console.error("Form submission failed:", error);

    alert(
      error.message ||
        "Unable to send your enquiry. Please try again."
    );
  } finally {
    setIsSubmitting(false);
  }
};

  /*
  =====================================================
  DON'T RENDER
  =====================================================
  */

  if (!isOpen) {
    return null;
  }

  /*
  =====================================================
  UI
  =====================================================
  */

  return (
    <div
      className="
        fixed
        inset-0
        z-[9999]

        flex
        items-center
        justify-center

        bg-[var(--foreground)]/60

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
          border-[var(--border)]

          bg-[var(--background)]

          text-[var(--foreground)]

          shadow-2xl

          dark:border-[var(--border)]
          dark:bg-[var(--background)]
          dark:text-[var(--foreground)]

          max-h-[calc(100dvh-24px)]

          sm:max-h-[calc(100dvh-32px)]
        "
      >

        {/* =====================================================
            CLOSE
        ===================================================== */}

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

            bg-[var(--surface-soft)]

            text-[var(--foreground)]

            transition

            hover:bg-[var(--surface)]

            dark:bg-[var(--surface-soft)]
            dark:text-[var(--foreground)]
            dark:hover:bg-[var(--surface)]

            sm:right-4
            sm:top-4
            sm:h-9
            sm:w-9
          "
        >
          <X size={17} />
        </button>

        <div className="p-5 sm:p-7">

          {/* =====================================================
              HEADER
          ===================================================== */}

          <div className="pr-10">

            <p
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.22em]

                text-[var(--muted)]

                dark:text-[var(--muted)]

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

                text-[var(--foreground)]/70

                dark:text-[var(--foreground)]/70

                sm:text-[13px]
              "
            >
              Fill in the details below and our team
              will get back to you.
            </p>

          </div>

          {/* =====================================================
              SUCCESS
          ===================================================== */}

          {submitted ? (
            <div
              className="
                mt-5

                rounded-2xl

                border
                border-[var(--border)]

                bg-[var(--surface-soft)]

                p-5

                text-center
              "
            >
              <div
                className="
                  mx-auto
                  flex
                  h-10
                  w-10

                  items-center
                  justify-center

                  rounded-full

                  bg-[var(--foreground)]

                  text-base
                  font-black
                  text-[var(--background)]
                "
              >
                ✓
              </div>

              <h3 className="mt-3 text-lg font-black">
                Thank you!
              </h3>

              <p
                className="
                  mt-1
                  text-xs

                  text-[var(--foreground)]/70

                  dark:text-[var(--foreground)]/70
                "
              >
                We&apos;ve received your request and
                will get back to you soon.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="
                mt-5
                space-y-3.5

                sm:mt-6
                sm:space-y-4
              "
            >

              {/* =================================================
                  NAME
              ================================================= */}

              <div>
                <label
                  htmlFor="popup-name"
                  className="
                    mb-1.5
                    block
                    text-xs
                    font-bold
                    sm:text-sm
                  "
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
                    border-[var(--border)]

                    bg-[var(--surface)]

                    px-3.5

                    text-[13px]

                    text-[var(--foreground)]

                    outline-none

                    placeholder:text-[var(--muted)]

                    focus:border-[var(--foreground)]

                    dark:border-[var(--border)]
                    dark:bg-[var(--surface)]
                    dark:text-[var(--foreground)]
                    dark:placeholder:text-[var(--muted)]
                    dark:focus:border-[var(--foreground)]
                  "
                />
              </div>

              {/* =================================================
                  EMAIL + PHONE
              ================================================= */}

              <div className="grid grid-cols-2 gap-3">

                <div>
                  <label
                    htmlFor="popup-email"
                    className="
                      mb-1.5
                      block
                      text-xs
                      font-bold
                      sm:text-sm
                    "
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
                      border-[var(--border)]

                      bg-[var(--surface)]

                      px-3

                      text-[12px]

                      text-[var(--foreground)]

                      outline-none

                      placeholder:text-[var(--muted)]

                      focus:border-[var(--foreground)]

                    dark:border-[var(--border)]
                    dark:bg-[var(--surface)]
                    dark:text-[var(--foreground)]
                    dark:placeholder:text-[var(--muted)]
                    dark:focus:border-[var(--foreground)]
                    "
                  />
                </div>

                <div>
                  <label
                    htmlFor="popup-phone"
                    className="
                      mb-1.5
                      block
                      text-xs
                      font-bold
                      sm:text-sm
                    "
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
                      border-[var(--border)]

                      bg-[var(--surface)]

                      px-3

                      text-[12px]

                      text-[var(--foreground)]

                      outline-none

                      placeholder:text-[var(--muted)]

                      focus:border-[var(--foreground)]

                      dark:border-[var(--border)]
                      dark:bg-[var(--surface-soft)]
                      dark:text-[var(--foreground)]
                      dark:placeholder:text-[var(--muted)]
                      dark:focus:border-[var(--foreground)]
                    "
                  />
                </div>

              </div>

              {/* =================================================
                  SERVICE
              ================================================= */}

              <div>
                <label
                  htmlFor="popup-service"
                  className="
                    mb-1.5
                    block
                    text-xs
                    font-bold
                    sm:text-sm
                  "
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
                    border-[var(--border)]

                    bg-[var(--surface)]

                    px-3.5

                    text-[13px]

                    text-[var(--foreground)]

                    outline-none

                    focus:border-[var(--foreground)]

                    dark:border-[var(--border)]
                    dark:bg-[var(--surface-soft)]
                    dark:text-[var(--foreground)]
                    dark:focus:border-[var(--foreground)]
                  "
                >
                  <option value="" disabled>
                    Select a service
                  </option>

                  <option value="Web Design">
                    Web Design
                  </option>

                  <option value="Web Development">
                    Web Development
                  </option>

                  <option value="WordPress Development">
                    WordPress Development
                  </option>

                  <option value="SEO">
                    SEO
                  </option>

                  <option value="Digital Marketing">
                    Digital Marketing
                  </option>

                  <option value="Branding">
                    Branding
                  </option>

                  <option value="UI/UX Design">
                    UI/UX Design
                  </option>

                  <option value="Other">
                    Other
                  </option>
                </select>
              </div>

              {/* =================================================
                  SUBMIT
              ================================================= */}

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

                  bg-[var(--foreground)]

                  px-5

                  text-[13px]
                  font-bold

                  text-[var(--background)]

                  transition-all

                  hover:bg-[var(--foreground)]/90
                  hover:text-[var(--background)]

                  disabled:cursor-not-allowed
                  disabled:opacity-60

                  dark:bg-[var(--foreground)]
                  dark:text-[var(--background)]
                  dark:hover:bg-[var(--foreground)]/90
                  dark:hover:text-[var(--background)]
                "
              >
                {isSubmitting
                  ? "Sending..."
                  : "Send Enquiry"}

                {!isSubmitting && (
                  <ArrowRight
                    size={15}
                    className="
                      transition-transform
                      group-hover:translate-x-1
                    "
                  />
                )}
              </button>

              {/* Maybe Later */}

              <button
                type="button"
                onClick={handleClose}
                className="
                  mx-auto
                  block

                  text-[10px]
                  font-semibold

                  text-[var(--foreground)]/55

                  hover:text-[var(--foreground)]

                  dark:text-[var(--foreground)]/60
                  dark:hover:text-[var(--foreground)]
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