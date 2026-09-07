import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Privacy Policy | MarkitMe",
  description:
    "Read the MarkitMe Privacy Policy to understand how we collect, use, protect, and manage your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Privacy Policy"
      title={
        <>
          Your privacy{" "}
          <span className="text-[var(--color-purple)] dark:text-[var(--color-light-purple)]">
            matters.
          </span>
        </>
      }
      description="This Privacy Policy explains how MarkitMe collects, uses, protects, and manages information when you use our website and services."
      updatedDate="August 26, 2026"
    ><h2 className="text-2xl sm:text-3xl lg:4xl font-bold mt-2.5">1. Introduction</h2>

      <p>
        Welcome to MarkitMe. We respect your privacy and are committed to
        protecting the personal information you share with us.
      </p>

      <p>
        This Privacy Policy explains what information we may collect, how we
        use it, how we protect it, and the choices you may have regarding your
        information.
      </p>
<h2 className="text-2xl sm:text-3xl lg:4xl font-bold mt-2.5">2. Information We Collect</h2>

      <p>
        We may collect information that you voluntarily provide when you
        contact us, request a service, submit a form, or communicate with us.
      </p>

      <p>This information may include:</p>

      <ul>
        <li>Your name</li>
        <li>Email address</li>
        <li>Phone number</li>
        <li>Company or business information</li>
        <li>Project or service requirements</li>
        <li>Any other information you choose to provide</li>
      </ul>
<h2 className="text-2xl sm:text-3xl lg:4xl font-bold mt-2.5">3. Information Collected Automatically</h2>

      <p>
        When you visit our website, certain technical information may be
        collected automatically. This may include your IP address, browser
        type, device information, pages visited, approximate location, and
        general website usage information.
      </p>

      <p>
        This information helps us understand how visitors use our website and
        improve its performance, security, and user experience.
      </p>
<h2 className="text-2xl sm:text-3xl lg:4xl font-bold mt-2.5">4. How We Use Your Information</h2>

      <p>We may use collected information to:</p>

      <ul>
        <li>Respond to your enquiries</li>
        <li>Provide requested services</li>
        <li>Communicate with you about projects</li>
        <li>Improve our website and services</li>
        <li>Maintain website security</li>
        <li>Understand website usage and performance</li>
        <li>Comply with applicable legal requirements</li>
      </ul>
<h2 className="text-2xl sm:text-3xl lg:4xl font-bold mt-2.5">5. Cookies</h2>

      <p>
        Our website may use cookies and similar technologies to improve
        functionality, remember preferences, understand website traffic, and
        provide a better user experience.
      </p>

      <p>
        You can control or disable cookies through your browser settings.
        However, disabling certain cookies may affect website functionality.
      </p>
<h2 className="text-2xl sm:text-3xl lg:4xl font-bold mt-2.5">6. Analytics and Third-Party Services</h2>

      <p>
        We may use third-party services such as analytics, hosting, security,
        communication, or marketing tools to operate and improve our website
        and services.
      </p>

      <p>
        These providers may process certain information according to their own
        privacy policies and applicable laws.
      </p>
<h2 className="text-2xl sm:text-3xl lg:4xl font-bold mt-2.5">7. How We Protect Your Information</h2>

      <p>
        We take reasonable technical and organizational measures to protect
        personal information from unauthorized access, misuse, alteration, or
        disclosure.
      </p>

      <p>
        However, no method of transmission or electronic storage can be
        guaranteed to be completely secure.
      </p>
<h2 className="text-2xl sm:text-3xl lg:4xl font-bold mt-2.5">8. Sharing of Information</h2>

      <p>
        We do not sell your personal information. We may share information with
        trusted service providers when necessary to operate our business,
        provide services, process communications, maintain infrastructure, or
        comply with legal obligations.
      </p>
<h2 className="text-2xl sm:text-3xl lg:4xl font-bold mt-2.5">9. Data Retention</h2>

      <p>
        We retain personal information only for as long as reasonably necessary
        for the purposes described in this policy, including business,
        contractual, security, and legal requirements.
      </p>
<h2 className="text-2xl sm:text-3xl lg:4xl font-bold mt-2.5">10. Your Rights</h2>

      <p>
        Depending on your location and applicable law, you may have rights to
        request access to, correction of, deletion of, or information about the
        personal data we hold about you.
      </p>

      <p>
        To make a privacy-related request, please contact us using the contact
        details provided on our website.
      </p>
<h2 className="text-2xl sm:text-3xl lg:4xl font-bold mt-2.5">11. Children&apos;s Privacy</h2>

      <p>
        Our website and services are not intentionally directed toward children.
        We do not knowingly collect personal information from children without
        appropriate consent.
      </p>
<h2 className="text-2xl sm:text-3xl lg:4xl font-bold mt-2.5">12. Changes to This Policy</h2>

      <p>
        We may update this Privacy Policy from time to time. Any changes will
        be reflected on this page along with an updated revision date.
      </p>

      <h2 className="text-2xl sm:text-3xl lg:4xl font-bold mt-2.5">13. Contact Us</h2>

      <p>
        If you have questions about this Privacy Policy or how your information
        is handled, please contact MarkitMe through our contact page.
      </p>
    </LegalPage>
  );
}