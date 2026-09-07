import { Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

import Header from "../components/Header";
import Footer from "../components/Footer";
import HomePopupModal from "@/components/HomePopupModal";

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
  title: "MarkitMe | Strategy, Creative & Digital Growth",
  description:
    "MarkitMe helps businesses grow through branding, website development, digital marketing, and strategy.",
  icons: {
    icon: "/images/favicon.png",
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
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
        <Header />

        <main className="flex-1">
          {children}
          <HomePopupModal />
        </main>

        <Footer />
      </body>
    </html>
  );
}