import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Terms & Conditions | MarkitMe",
  description:
    "Read the MarkitMe Terms & Conditions governing the use of our website and digital services.",
};

export default function TermsAndConditionsPage() {
  return (
    <LegalPage
      eyebrow="Terms & Conditions"
      title={
        <>
          Clear terms for{" "}
          <span className="text-[var(--color-green)] dark:text-[var(--color-gold)]">
            better partnerships.
          </span>
        </>
      }
      description="These Terms & Conditions explain the rules and conditions that apply when you access the MarkitMe website or use our services."
      updatedDate="August 26, 2026"
    >
      <h2 className="text-2xl sm:text-3xl lg:4xl font-bold ">1. Acceptance of Terms</h2>

      <p>
        By accessing or using the MarkitMe website, you agree to comply with
        these Terms & Conditions. If you do not agree with these terms, please
        do not use our website or services.
      </p>

      <h2 className="text-2xl sm:text-3xl lg:4xl font-bold mt-2.5">2. About Our Services</h2>

      <p>
        MarkitMe provides digital services that may include branding, web
        design, web development, digital marketing, SEO, content, creative
        services, strategy, and related solutions.
      </p>

      <p>
        The exact scope, deliverables, timelines, fees, and requirements of a
        project may be defined separately in a proposal, quotation,
        agreement, statement of work, or other written communication.
      </p>

      <h2 className="text-2xl sm:text-3xl lg:4xl font-bold mt-2.5">3. Use of Our Website</h2>

      <p>You agree to use our website only for lawful purposes.</p>

      <p>You must not:</p>

      <ul>
        <li>Use the website for fraudulent or unlawful activities</li>
        <li>Attempt to gain unauthorized access to our systems</li>
        <li>Introduce malicious code or harmful software</li>
        <li>Copy or misuse our content without permission</li>
        <li>Interfere with the operation or security of the website</li>
      </ul>

      <h2 className="text-2xl sm:text-3xl lg:4xl font-bold mt-2.5">4. Intellectual Property</h2>

      <p>
        Unless otherwise stated, the MarkitMe website, branding, designs,
        graphics, text, layouts, code, and other original materials are owned
        by or licensed to MarkitMe.
      </p>

      <p>
        You may not reproduce, distribute, modify, publish, or commercially use
        our protected materials without prior written permission.
      </p>

      <h2 className="text-2xl sm:text-3xl lg:4xl font-bold mt-2.5">5. Client Content</h2>

      <p>
        Clients are responsible for ensuring that any text, images, logos,
        trademarks, videos, documents, or other materials they provide to
        MarkitMe are legally owned, licensed, or authorized for use.
      </p>

      <p>
        By providing content to us, you confirm that you have the necessary
        rights and permissions for us to use that content for the agreed
        project.
      </p>

      <h2 className="text-2xl sm:text-3xl lg:4xl font-bold mt-2.5">6. Project Scope</h2>

      <p>
        Project scope, deliverables, revisions, timelines, and responsibilities
        may vary depending on the individual agreement between MarkitMe and the
        client.
      </p>

      <p>
        Additional work outside the agreed scope may require additional fees
        and/or changes to the delivery timeline.
      </p>

      <h2 className="text-2xl sm:text-3xl lg:4xl font-bold mt-2.5">7. Payments</h2>

      <p>
        Project fees, payment schedules, deposits, milestones, and applicable
        taxes will be communicated and agreed upon before or during the project.
      </p>

      <p>
        Failure to make required payments may result in delays, suspension of
        work, or withholding of final deliverables until outstanding amounts
        are resolved.
      </p>

      <h2 className="text-2xl sm:text-3xl lg:4xl font-bold mt-2.5">8. Timelines</h2>

      <p>
        We make reasonable efforts to meet agreed project timelines. However,
        delivery dates may be affected by client feedback, delays in receiving
        required materials, third-party services, technical issues, or
        circumstances outside our reasonable control.
      </p>

      <h2 className="text-2xl sm:text-3xl lg:4xl font-bold mt-2.5">9. Third-Party Services</h2>

      <p>
        Some projects may use third-party platforms, hosting providers,
        plugins, APIs, payment providers, analytics tools, fonts, libraries,
        or other external services.
      </p>

      <p>
        Third-party services may have their own terms, policies, pricing, and
        limitations. MarkitMe is not responsible for changes or failures caused
        by third-party providers.
      </p>

      <h2 className="text-2xl sm:text-3xl lg:4xl font-bold mt-2.5">10. Website Availability</h2>

      <p>
        We aim to keep our website available and functional, but we do not
        guarantee uninterrupted access or that the website will always be free
        from errors, interruptions, or technical issues.
      </p>

      <h2 className="text-2xl sm:text-3xl lg:4xl font-bold mt-2.5">11. Disclaimer</h2>

      <p>
        Information provided on our website is for general informational
        purposes. While we aim to keep information accurate and useful, we do
        not guarantee that all website content is complete, current, or
        error-free.
      </p>

      <h2 className="text-2xl sm:text-3xl lg:4xl font-bold mt-2.5">12. Limitation of Liability</h2>

      <p>
        To the extent permitted by applicable law, MarkitMe will not be liable
        for indirect, incidental, special, consequential, or unforeseeable
        losses arising from the use of our website or services.
      </p>

      <h2 className="text-2xl sm:text-3xl lg:4xl font-bold mt-2.5">13. Termination</h2>

      <p>
        We reserve the right to suspend or terminate access to our website or
        services where necessary, including in cases of misuse, unlawful
        activity, non-payment, or violation of applicable agreements.
      </p>

      <h2 className="text-2xl sm:text-3xl lg:4xl font-bold mt-2.5">14. Changes to These Terms</h2>

      <p>
        We may update these Terms & Conditions from time to time. Updated terms
        will be published on this page with a revised date.
      </p>

      <h2 className="text-2xl sm:text-3xl lg:4xl font-bold mt-2.5">15. Governing Law</h2>

      <p>
        These Terms & Conditions will be subject to the applicable laws and
        jurisdiction agreed upon between MarkitMe and the relevant client,
        subject to applicable legal requirements.
      </p>

      <h2 className="text-2xl sm:text-3xl lg:4xl font-bold mt-2.5">16. Contact</h2>

      <p>
        If you have questions regarding these Terms & Conditions, please
        contact MarkitMe through our website&apos;s contact page.
      </p>
    </LegalPage>
  );
}