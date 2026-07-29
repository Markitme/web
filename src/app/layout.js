import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ThemeProvider from "../components/ThemeProvider";

const geistSans = Geist({
variable: "--font-geist-sans",
subsets: ["latin"],
});

const geistMono = Geist_Mono({
variable: "--font-geist-mono",
subsets: ["latin"],
});

export const metadata = {
title: "MarkitMe | Strategy, Creative & Digital Growth",
description:
"MarkitMe helps businesses grow through branding, website development, digital marketing, and strategy.",
};

export default function RootLayout({ children }) {
return (
<html
lang="en"
className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
> 
<body className="min-h-full flex flex-col bg-[#0a0a0a] text-white"> <Header />
    <main className="flex-1">{children}</main>

    <Footer />
  </body>
</html>
);
}
