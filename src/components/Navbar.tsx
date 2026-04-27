"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#servizi", label: "Servizi" },
    { href: "#team", label: "Staff" },
    { href: "#prezzi", label: "Prezzi" },
    { href: "#contatti", label: "Contatti" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#F8F4EF]/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex-shrink-0">
          <Image
            src="/logo-studiopharma-2093999140.png"
            alt="Studio Pharma"
            width={130}
            height={44}
            className="h-10 w-auto object-contain"
            priority
          />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm tracking-[0.18em] uppercase transition-colors duration-200 font-medium ${
                scrolled
                  ? "text-[#6B5D54] hover:text-[#1A1714]"
                  : "text-white/75 hover:text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://app.shaggyowl.com/accesso-cliente/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-sm tracking-[0.18em] uppercase px-6 py-2.5 border transition-all duration-300 font-medium ${
              scrolled
                ? "border-[#1A1714] text-[#1A1714] hover:bg-[#1A1714] hover:text-[#F7F3EE]"
                : "border-white/65 text-white hover:bg-white hover:text-[#1A1714]"
            }`}
          >
            Prenota
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 flex flex-col gap-[5px] justify-center"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span
            className={`block h-px w-6 transition-all duration-300 ${
              scrolled ? "bg-[#1A1714]" : "bg-white"
            } ${open ? "rotate-45 translate-y-[7px]" : ""}`}
          />
          <span
            className={`block h-px w-6 transition-all duration-300 ${
              scrolled ? "bg-[#1A1714]" : "bg-white"
            } ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-px w-6 transition-all duration-300 ${
              scrolled ? "bg-[#1A1714]" : "bg-white"
            } ${open ? "-rotate-45 -translate-y-[7px]" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 bg-[#F8F4EF] border-t border-[#E8DDD5]/60 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm tracking-[0.18em] uppercase text-[#6B5D54] hover:text-[#1A1714] transition-colors font-medium"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://app.shaggyowl.com/accesso-cliente/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm tracking-[0.18em] uppercase border border-[#1A1714] px-6 py-3 text-center hover:bg-[#1A1714] hover:text-[#F7F3EE] transition-all duration-300 font-medium"
          >
            Prenota ora
          </a>
        </div>
      </div>
    </nav>
  );
}
