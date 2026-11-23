import { Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import RecaptchaProvider from "./providers/RecaptchaProvider";

import Header from "../components/Header";
import Footer from "../components/Footer";
import HomePopupModal from "@/components/HomePopupModal";
import WebMCPTools from "@/components/WebMCPTools";
import Script from "next/script";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.markitme.ca"),

  title: "Web Design & Digital Marketing Agency in Canada | MarkitMe",

  description:
    "MarkitMe helps businesses across Canada grow with strategic web design, SEO, branding and digital marketing that builds visibility and attracts customers.",

  alternates: {
    canonical: "https://www.markitme.ca/",
  },

  openGraph: {
    title: "Web Design & Digital Marketing Agency in Canada | MarkitMe",
    description:
      "MarkitMe helps businesses across Canada grow with strategic web design, SEO, branding and digital marketing that builds visibility and attracts customers.",
    url: "https://www.markitme.ca/",
    siteName: "MarkitMe",
    type: "website",
    images: [
      {
        url: "https://www.markitme.ca/images/markitme-og.jpg",
        width: 1200,
        height: 630,
        alt: "MarkitMe - Web Design and Digital Marketing Agency in Canada",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Web Design & Digital Marketing Agency in Canada | MarkitMe",
    description:
      "MarkitMe helps businesses across Canada grow with strategic web design, SEO, branding and digital marketing that builds visibility and attracts customers.",
    images: ["https://www.markitme.ca/images/markitme-og.jpg"],
  },

  icons: {
    icon: "/images/favicon.png",
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png",
  },

  verification: {
    google: "fHgQv9w7h3267LDpgZi8xnKm3LQqPBxkCKxC1pMJ_3U",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.markitme.ca/#organization",
      name: "MarkitMe",
      url: "https://www.markitme.ca",
      logo: "https://www.markitme.ca/images/logo-dark.png",
      image: "https://www.markitme.ca/images/markitme-og.jpg",
      description:
        "MarkitMe helps businesses across Canada grow with strategic web design, SEO, branding and digital marketing that builds visibility and attracts customers.",
      telephone: "+1-613-981-4844",
      address: {
        "@type": "PostalAddress",
        streetAddress: "34 Minowan Miikan Lane",
        addressLocality: "Toronto",
        addressRegion: "ON",
        postalCode: "M6J 0G3",
        addressCountry: "CA",
      },
      areaServed: {
        "@type": "Country",
        name: "Canada",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+1-613-981-4844",
        contactType: "customer service",
        areaServed: "CA",
        availableLanguage: ["English"],
      },
      email: "info@markitme.ca",
      sameAs: [
        "https://www.instagram.com/markitme.ca/",
        "https://www.linkedin.com/company/markitme-ca/",
        "https://www.facebook.com/profile.php?id=61570996980204",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.markitme.ca/#website",
      url: "https://www.markitme.ca",
      name: "MarkitMe",
      publisher: {
        "@id": "https://www.markitme.ca/#organization",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://www.markitme.ca/#homepage",
      url: "https://www.markitme.ca/",
      name: "MarkitMe Digital Strategy & Creative",
      isPartOf: {
        "@id": "https://www.markitme.ca/#website",
      },
      about: {
        "@id": "https://www.markitme.ca/#organization",
      },
    },
    {
      "@type": "ItemList",
      "@id": "https://www.markitme.ca/#services",
      name: "MarkitMe Products and Services",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Service",
            "@id": "https://www.markitme.ca/products/web-design-development",
            name: "Web Design & Development",
            url: "https://www.markitme.ca/products/web-design-development",
            provider: { "@id": "https://www.markitme.ca/#organization" },
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "Service",
            "@id": "https://www.markitme.ca/products/seo-services",
            name: "SEO Services",
            url: "https://www.markitme.ca/products/seo-services",
            provider: { "@id": "https://www.markitme.ca/#organization" },
          },
        },
        {
          "@type": "ListItem",
          position: 3,
          item: {
            "@type": "Service",
            "@id": "https://www.markitme.ca/products/social-media-marketing",
            name: "Social Media Marketing",
            url: "https://www.markitme.ca/products/social-media-marketing",
            provider: { "@id": "https://www.markitme.ca/#organization" },
          },
        },
        {
          "@type": "ListItem",
          position: 4,
          item: {
            "@type": "Service",
            "@id": "https://www.markitme.ca/products/brand-marketing",
            name: "Brand Marketing",
            url: "https://www.markitme.ca/products/brand-marketing",
            provider: { "@id": "https://www.markitme.ca/#organization" },
          },
        },
        {
          "@type": "ListItem",
          position: 5,
          item: {
            "@type": "Service",
            "@id": "https://www.markitme.ca/products/video-production",
            name: "Video Production",
            url: "https://www.markitme.ca/products/video-production",
            provider: { "@id": "https://www.markitme.ca/#organization" },
          },
        },
        {
          "@type": "ListItem",
          position: 6,
          item: {
            "@type": "Service",
            "@id": "https://www.markitme.ca/products/content-marketing",
            name: "Content Marketing",
            url: "https://www.markitme.ca/products/content-marketing",
            provider: { "@id": "https://www.markitme.ca/#organization" },
          },
        },
        {
          "@type": "ListItem",
          position: 7,
          item: {
            "@type": "Service",
            "@id": "https://www.markitme.ca/products/photography",
            name: "Photography Services",
            url: "https://www.markitme.ca/products/photography",
            provider: { "@id": "https://www.markitme.ca/#organization" },
          },
        },
      ],
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${jakarta.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        className="
          flex
          min-h-full
          flex-col
          bg-[var(--background)]
          text-[var(--foreground)]
        "
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4CJN3PLT5L"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', 'G-4CJN3PLT5L');
          `}
        </Script>

        <RecaptchaProvider>
          <WebMCPTools />
          <Header />

          <main className="flex-1">
            {children}
            <HomePopupModal />
          </main>

          <Footer />
        </RecaptchaProvider>
      </body>
    </html>
  );
}