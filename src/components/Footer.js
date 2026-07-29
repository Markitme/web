import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0a0a] py-10">
      {" "}
      <div className="container-custom">
        {" "}
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
          {" "}
          <div>
            {" "}
            <Link
              href="/"
              className="text-2xl font-black tracking-[-0.08em] text-white"
            >
              MARK<span className="text-[#c8ff00]">IT</span>ME{" "}
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-6 text-white/40">
              Strategy, creativity, technology, and marketing built to help
              ambitious businesses grow.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/50">
            <Link href="/about" className="transition hover:text-[#c8ff00]">
              About
            </Link>

            <Link href="/services" className="transition hover:text-[#c8ff00]">
              Services
            </Link>

            <Link href="/work" className="transition hover:text-[#c8ff00]">
              Work
            </Link>

            <Link href="/blog" className="transition hover:text-[#c8ff00]">
              Blog
            </Link>

            <Link href="/contact" className="transition hover:text-[#c8ff00]">
              Contact
            </Link>
          </nav>
        </div>
        <div className="mt-10 flex flex-col justify-between gap-4 border-t border-white/10 pt-7 text-sm text-white/35 sm:flex-row">
          <p>© {new Date().getFullYear()} MarkitMe. All rights reserved.</p>

          <div className="flex gap-5">
            <Link
              href="/privacy-policy"
              className="transition hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms-and-conditions"
              className="transition hover:text-white"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
