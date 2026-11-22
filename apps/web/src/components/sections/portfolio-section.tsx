"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const projects = [
  { name: "Case Chosen School", projectId: "223848797" },
  { name: "Chosen Barber Shop", projectId: "223738377" },
  { name: "Site Inforlube System", projectId: "160442665" },
  { name: "Case — Landing Page Chosen", projectId: "155377349" },
] as const;

export function PortfolioSection() {
  const railRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateArrows = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;

    setCanScrollLeft(rail.scrollLeft > 2);
    setCanScrollRight(rail.scrollWidth - rail.clientWidth - rail.scrollLeft > 2);
  }, []);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    const observer = new ResizeObserver(updateArrows);
    observer.observe(rail);
    window.addEventListener("resize", updateArrows);
    const frame = requestAnimationFrame(updateArrows);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateArrows);
      cancelAnimationFrame(frame);
    };
  }, [updateArrows]);

  const scroll = (direction: "left" | "right") => {
    const rail = railRef.current;
    if (!rail) return;

    rail.scrollBy({
      left: direction === "right" ? rail.clientWidth * 0.8 : -rail.clientWidth * 0.8,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-surface px-5 py-[70px] md:px-0 md:py-[93px]" id="portfolio">
      <div className="mx-auto mb-6 flex max-w-[1220px] items-end justify-between gap-3 md:mb-8 md:w-[calc(100%-72px)]">
        <div>
          <p className="mb-3 text-[11px] font-bold tracking-[2px] text-cyan md:text-[12px]">ALGUNS PROJETOS</p>
          <h2 className="font-display text-[35px] font-semibold md:text-[45px]">Ideias em órbita.</h2>
        </div>
        <a className="mb-1 inline-flex items-center gap-1.5 border-b border-cyan/60 pb-2 text-[11px] text-sky-300 transition-all hover:gap-3 md:gap-3 md:text-[13px]" href="https://www.behance.net/leadsofsolue/" target="_blank" rel="noreferrer">
          Veja mais projetos <span>↗</span>
        </a>
      </div>

      <div className="relative mx-auto max-w-[1220px] md:w-[calc(100%-72px)]">
        <div
          className="flex snap-x snap-mandatory gap-2.5 overflow-x-auto scroll-smooth [scrollbar-width:none] md:gap-[18px] [&::-webkit-scrollbar]:hidden"
          onScroll={updateArrows}
          ref={railRef}
        >
          {projects.map((project) => (
            <div className="w-[calc((100%-10px)/2)] flex-none snap-start overflow-hidden rounded-lg border border-white/10 bg-black shadow-[0_12px_32px_#0006] md:w-[calc((100%-54px)/4)]" key={project.projectId}>
              <iframe
                className="h-[260px] w-full border-0 md:h-[316px]"
                src={`https://www.behance.net/embed/project/${project.projectId}?ilo0=1`}
                title={project.name}
                loading="lazy"
                scrolling="no"
                allowFullScreen
                onLoad={updateArrows}
              />
            </div>
          ))}
        </div>

        {canScrollLeft && (
          <button
            aria-label="Rolar projetos para a esquerda"
            className="absolute left-2 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full border border-white/40 bg-night/80 text-3xl text-white shadow-lg backdrop-blur transition-colors hover:bg-cyan hover:text-night md:-left-5 md:size-12"
            onClick={() => scroll("left")}
            type="button"
          >
            ‹
          </button>
        )}
        {canScrollRight && (
          <button
            aria-label="Rolar projetos para a direita"
            className="absolute right-2 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full border border-white/40 bg-night/80 text-3xl text-white shadow-lg backdrop-blur transition-colors hover:bg-cyan hover:text-night md:-right-5 md:size-12"
            onClick={() => scroll("right")}
            type="button"
          >
            ›
          </button>
        )}
      </div>
    </section>
  );
}