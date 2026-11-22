"use client";

import { useEffect, useState } from "react";
import { Brand } from "@/components/brand";

const navigation = [
  { label: "In\u00edcio", href: "#inicio", active: true },
  { label: "Para Voc\u00ea", href: "#solucoes" },
  { label: "Empresa", href: "#empresa" },
  { label: "Carreira", href: "#carreira" },
  { label: "RavenDB", href: "#ravendb" },
];

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 24);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-40 flex h-[76px] items-center justify-between border-b px-4 py-2 transition-all duration-300 sm:px-6 lg:h-[96px] lg:px-7 xl:px-[max(38px,calc((100vw-1700px)/2))] ${isScrolled ? "border-white/5 bg-deep/75 shadow-[0_12px_30px_#0005] backdrop-blur-md" : "border-transparent bg-transparent shadow-none backdrop-blur-none"}`}>
      <Brand />

      <button
        aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={isMenuOpen}
        aria-controls="primary-navigation"
        className="grid size-10 place-items-center rounded-lg border border-white/10 text-white transition-colors duration-500 ease-in-out hover:border-cyan/50 hover:text-cyan focus-visible:outline-2 focus-visible:outline-cyan lg:hidden"
        onClick={() => setIsMenuOpen((open) => !open)}
        type="button"
      >
        <svg className="size-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          {isMenuOpen ? (
            <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          ) : (
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          )}
        </svg>
      </button>

      <nav
        id="primary-navigation"
        className={`${isMenuOpen ? "flex" : "hidden"} absolute inset-x-4 top-[calc(100%+8px)] max-h-[calc(100svh-96px)] flex-col gap-1 overflow-y-auto rounded-xl border border-white/10 bg-[#080b14]/95 p-3 shadow-2xl backdrop-blur-lg font-display text-sm text-slate-100 lg:inset-x-auto lg:left-1/2 lg:top-1/2 lg:flex lg:max-h-none lg:-translate-x-1/2 lg:-translate-y-1/2 lg:flex-row lg:items-center lg:gap-[clamp(22px,3vw,51px)] lg:overflow-visible lg:whitespace-nowrap lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none lg:backdrop-blur-none lg:text-lg`}
        aria-label="Navega\u00e7\u00e3o principal"
      >
        {navigation.map((item) => (
          <a
            className={`${item.active ? "border-cyan lg:text-white" : "border-transparent hover:border-cyan hover:text-cyan"} block w-full rounded-md border-b-2 px-3 py-3 transition-colors duration-300 ease-in-out lg:w-auto lg:rounded-none lg:px-0 lg:py-1.5`}
            href={item.href}
            key={item.href}
            onClick={() => setIsMenuOpen(false)}
            aria-current={item.active ? "page" : undefined}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}