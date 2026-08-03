import Link from "next/link";

import Image from "next/image";
export default function Footer() {
return ( <footer className="border-t border-black/10 bg-white py-10 text-black transition-colors duration-300 dark:border-white/10 dark:bg-[#0a0a0a] dark:text-white"> <div className="container-custom">
{/* Main Footer */} <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
{/* Brand */} <div> 

        {/* Logo */}
            <Link
              href="/"
              className="flex shrink-0 items-center"
              aria-label="MarkitMe Home"
            >
              {/* Light Mode: Light theme me show, Dark theme me hidden */}
              <Image
                src="/images/logo-light.png"
                alt="MarkitMe"
                width={190}
                height={60}
                priority
                className=" h-auto w-[145px] object-contain hidden dark:block  sm:w-[170px]"
              />

              {/* Dark Mode: Light theme me hidden, Dark theme me show */}
              <Image
                src="/images/logo-dark.png"
                alt="MarkitMe"
                width={190}
                height={60}
                priority
                className="block h-auto w-[145px] object-contain dark:hidden sm:w-[170px]"
              />
            </Link>
        <p className="mt-3 max-w-sm text-sm leading-6 text-black/50 dark:text-white/40">
          Strategy, creativity, technology, and marketing built to help
          ambitious businesses grow.
        </p>
      </div>

      {/* Footer Navigation */}
      <nav className="flex flex-wrap gap-x-6 gap-y-3">
        <Link
          href="/about"
          className="text-sm text-black/55 transition-colors duration-300 hover:text-[#8db800] dark:text-white/50 dark:hover:text-[#a7d503]"
        >
          About
        </Link>

        <Link
          href="/services"
          className="text-sm text-black/55 transition-colors duration-300 hover:text-[#8db800] dark:text-white/50 dark:hover:text-[#a7d503]"
        >
          Services
        </Link>

        <Link
          href="/work"
          className="text-sm text-black/55 transition-colors duration-300 hover:text-[#8db800] dark:text-white/50 dark:hover:text-[#a7d503]"
        >
          Work
        </Link>

        <Link
          href="/blog"
          className="text-sm text-black/55 transition-colors duration-300 hover:text-[#8db800] dark:text-white/50 dark:hover:text-[#a7d503]"
        >
          Blog
        </Link>

        <Link
          href="/contact"
          className="text-sm text-black/55 transition-colors duration-300 hover:text-[#8db800] dark:text-white/50 dark:hover:text-[#a7d503]"
        >
          Contact
        </Link>
      </nav>
    </div>

    {/* Bottom Footer */}
    <div className="mt-10 flex flex-col justify-between gap-4 border-t border-black/10 pt-7 text-sm text-black/40 sm:flex-row dark:border-white/10 dark:text-white/35">
      <p>
        © {new Date().getFullYear()} MarkitMe. All rights reserved.
      </p>

      <div className="flex flex-wrap gap-5">
        <Link
          href="/privacy-policy"
          className="transition-colors duration-300 hover:text-black dark:hover:text-white"
        >
          Privacy Policy
        </Link>

        <Link
          href="/terms-and-conditions"
          className="transition-colors duration-300 hover:text-black dark:hover:text-white"
        >
          Terms & Conditions
        </Link>
      </div>
    </div>
  </div>
</footer>


);
}
