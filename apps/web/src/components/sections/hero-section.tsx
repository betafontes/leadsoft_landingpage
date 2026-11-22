export function HeroSection() {
  return (
    <section className="relative isolate flex min-h-[max(700px,100svh)] items-center overflow-hidden bg-deep" id="inicio">
      <img className="absolute inset-0 -z-20 h-full w-full object-cover object-[70%_bottom] md:object-[56%_center]" src="/leadsoft-space-hero.png" alt="" aria-hidden="true" fetchPriority="high" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-deep/75 via-deep/35 to-transparent" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-deep/75 via-transparent to-deep/45 md:hidden" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-30 [background-image:radial-gradient(1px_1px_at_15%_25%,#fff_50%,transparent_65%),radial-gradient(1px_1px_at_27%_75%,#71ceff_50%,transparent_65%),radial-gradient(1px_1px_at_47%_35%,#fff_50%,transparent_65%)] [background-size:190px_160px,230px_200px,280px_220px]" />
      <div className="mx-auto mt-40 w-[calc(100%-42px)] max-w-[1620px] pb-16 md:mt-11 md:w-[86%]">
        <p className="mb-5 flex items-center gap-2.5 text-[8px] font-semibold tracking-[1.1px] text-slate-300 md:mb-7 md:text-[10px] md:tracking-[2px]">
          <span className="size-2 rounded-full bg-cyan shadow-[0_0_14px_#05b8f5]" />
          CURITIBA, BRASIL
        </p>
        <h1 className="font-display text-[clamp(47px,12vw,70px)] font-bold leading-[0.99] tracking-[-1.7px] text-white drop-shadow-[0_5px_28px_#02050bc9] md:text-[clamp(58px,6vw,86px)] md:tracking-[-2.5px]">
          Entregamos<br /><span className="text-cyan">Soluções</span><br /><span className="text-cyan">Tecnológicas</span>
        </h1>
        <p className="my-4 text-[17px] leading-relaxed text-slate-200 md:mb-8 md:mt-4 md:text-[clamp(19px,2vw,29px)]">
          por meio de times que<br className="hidden md:block" /> desenvolvem software.
        </p>
        <a className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-gradient-to-r from-cyan to-electric px-4 text-center font-display text-xs font-semibold text-white shadow-[0_8px_28px_#005cfb40] transition-transform hover:-translate-y-0.5 hover:shadow-[0_10px_28px_#0777ff48] sm:px-6 md:min-h-[51px] md:gap-4 md:px-6 md:text-sm" href="https://wa.me/5541991777488" target="_blank" rel="noreferrer">
          Fale com um de nossos especialistas <span className="text-lg">↗</span>
        </a>
        <div className="mt-10 flex items-center gap-3 text-[11px] tracking-[1.7px] text-slate-300 md:mt-[72px] md:text-[12px]">
          <span className="h-[36px] w-px bg-gradient-to-b from-cyan to-transparent" /> ROLE PARA EXPLORAR
        </div>
      </div>
      <p className="absolute right-9 top-1/5 hidden border-r border-white/30 px-2.5 py-2 text-[10px] tracking-[2px] text-white/90 drop-shadow-[0_0_8px_#49baff80] [writing-mode:vertical-rl] md:block">
        LEADSOFT® <span className="py-1.5 text-cyan">·</span> IDEIAS QUE DECOLAM
      </p>
      <a className="absolute bottom-5 right-5 grid size-9 place-items-center rounded-full border border-slate-300/40 text-lg text-white transition-colors hover:bg-white hover:text-night md:bottom-8 md:right-9" href="#solucoes" aria-label="Ir para a próxima seção">↓</a>
    </section>
  );
}
