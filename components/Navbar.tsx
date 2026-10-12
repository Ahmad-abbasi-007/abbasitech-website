"use client";
import { useState, useEffect } from "react";
import BrandLogo from "./BrandLogo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = ["Services", "Portfolio", "About", "Contact"];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#050A15]/80 backdrop-blur-xl border-b border-[#1687FF]/20 py-3"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center group">
          <BrandLogo compact showTagline={false} className="items-center" />
        </a>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-8 lg:gap-10 text-sm font-medium">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-white/70 hover:text-white transition group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1687FF] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-block relative bg-gradient-to-r from-[#1687FF] to-[#4DA6FF] px-5 sm:px-6 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-semibold shadow-lg shadow-[#1687FF]/30 hover:shadow-[#1687FF]/50 hover:scale-105 transition-all duration-300"
          >
            Get a Quote
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg border border-[#1687FF]/30"
            aria-label="Menu"
          >
            <span
              className={`w-5 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-5 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-5 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#050A15]/95 backdrop-blur-xl border-t border-[#1687FF]/20 px-6 py-6 flex flex-col gap-4">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-white/80 hover:text-[#1687FF] transition py-2 text-base font-medium"
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="bg-gradient-to-r from-[#1687FF] to-[#4DA6FF] px-6 py-3 rounded-lg text-sm font-semibold text-center mt-2"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </nav>
  );
}