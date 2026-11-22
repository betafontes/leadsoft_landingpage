"use client";

import { useEffect, useState } from "react";

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const companySection = document.getElementById("empresa");
    if (!companySection) return;

    const updateVisibility = () => {
      const sectionTop = companySection.getBoundingClientRect().top + window.scrollY;
      setIsVisible(window.scrollY >= sectionTop + 40);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);

    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  return (
    <a
      className={`fixed bottom-4 right-0 z-30 grid size-[48px] place-items-center bg-transparent transition-opacity duration-500 ease-out hover:scale-105 md:bottom-6 md:right-1 md:size-[56px] ${isVisible ? "animate-whatsapp-rise" : "pointer-events-none translate-y-5 scale-90 opacity-0"}`}
      href="https://wa.me/5541991777488"
      target="_blank"
      rel="noreferrer"
      aria-label="Fale com a LeadSoft pelo WhatsApp"
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
    >
      <svg className="block size-full fill-none" viewBox="0 0 32 32" aria-hidden="true">
        <path
          stroke="#e5e7eb"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16 3.3A12.1 12.1 0 0 0 5.6 21.6L4 28l6.6-1.7A12.1 12.1 0 1 0 16 3.3Z"
        />
        <path
          fill="#e5e7eb"
          transform="translate(1.5 .7) scale(.9)"
          d="M12.2 10.1c-.3-.7-.6-.7-.9-.7h-.8c-.3 0-.7.1-1.1.5-.4.4-1.4 1.4-1.4 3.3s1.4 3.8 1.6 4.1c.2.3 2.7 4.3 6.6 5.8 3.3 1.3 3.9 1 4.6.9.7-.1 2.2-.9 2.5-1.8.3-.9.3-1.6.2-1.8-.1-.2-.4-.3-.8-.5l-2.4-1.2c-.3-.1-.6-.2-.8.2-.2.4-.9 1.2-1.1 1.5-.2.2-.4.3-.8.1-.4-.2-1.7-.6-3.2-2-1.2-1.1-2-2.4-2.3-2.8-.2-.4 0-.6.2-.8l.6-.7c.2-.2.3-.4.4-.6.1-.2 0-.5 0-.7l-1.1-2.8Z"
        />
      </svg>
    </a>
  );
}