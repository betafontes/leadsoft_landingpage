export function CareerSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-blue-950 to-[#0a1429]" id="carreira">
      <div className="relative mx-auto flex min-h-[380px] max-w-[1220px] flex-col justify-center py-12 md:w-[calc(100%-72px)] xl:min-h-[360px] xl:flex-row xl:items-center xl:justify-between xl:py-0" data-reveal-sequence>
        <div className="relative z-10 max-w-[680px] px-5 md:px-0">
          <p className="mb-4 text-[11px] font-bold tracking-[2px] text-cyan md:text-[12px]">VEM COM A GENTE</p>
          <h2 className="font-display text-[35px] font-semibold leading-tight md:text-[43px]">
            Bora conquistar o universo<br /><span className="text-cyan">com a gente?</span>
          </h2>
          <p className="mt-4 max-w-[620px] text-[12px] leading-relaxed text-slate-300 md:text-[13px]">
            Venha fazer parte da tripulação LeadSoft® e seja um cientista à frente da inovação. Cresça com um time criativo, unido e apaixonado por tecnologia.
          </p>
        </div>
        <a className="relative z-10 mx-5 mt-4 inline-flex min-h-12 w-fit items-center gap-3 rounded-full bg-gradient-to-r from-cyan to-electric px-5 font-display text-xs font-semibold text-white shadow-lg transition-all duration-500 ease-in-out hover:-translate-y-0.5 xl:mx-12 xl:mt-0 md:px-6 md:text-sm" href="/carreira">
          Trabalhe na LeadSoft <span className="text-lg">↗</span>
        </a>
        <div className="pointer-events-none absolute right-0 top-5 hidden text-center text-3xl leading-[3] text-sky-200/70 xl:block" aria-hidden="true">
          ✦　·　✧<br />　·　✦
        </div>
      </div>
    </section>
  );
}
