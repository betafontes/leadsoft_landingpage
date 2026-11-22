export function RavenDbSection() {
  return (
    <section className="relative overflow-hidden bg-night px-5 py-[70px] md:px-0 md:py-24" id="ravendb">
      <div className="mx-auto grid max-w-[900px] items-center gap-8 text-center md:w-[calc(100%-72px)] md:grid-cols-[0.65fr_1fr] md:gap-[90px] md:text-left">
        <div className="relative mx-auto grid size-[175px] place-items-center rounded-full border border-sky-400/50 text-[72px] font-bold text-sky-100 shadow-[inset_0_0_75px_#138cff24,0_0_60px_#0a76c924] before:absolute before:inset-5 before:rounded-full before:border before:border-cyan/35 after:absolute after:-inset-5 after:rounded-full after:border after:border-dashed after:border-blue-400/30 md:size-[285px] md:text-[104px]" aria-hidden="true">
          R<span className="absolute right-6 top-5 text-xl text-cyan md:right-12 md:top-10 md:text-2xl">↗</span>
        </div>
        <div>
          <p className="mb-3.5 text-[11px] font-bold tracking-[2px] text-cyan md:text-[12px]">PARCEIRO OFICIAL NO BRASIL</p>
          <h2 className="font-display text-[37px] font-semibold leading-tight md:text-[43px]">
            Dados prontos<br />para <span className="text-cyan">ir mais longe.</span>
          </h2>
          <p className="mx-auto mb-5 mt-4 max-w-[500px] text-[12px] leading-relaxed text-slate-300 md:mx-0 md:mb-6 md:text-[13px]">
            A LeadSoft ajuda empresas a tirar o melhor do RavenDB: um banco de dados NoSQL que simplifica o desenvolvimento, acompanha o crescimento e deixa seu time focar no que importa — o código.
          </p>
          <a className="inline-flex min-h-[45px] items-center gap-3 rounded-full border border-slate-500 px-5 text-sm text-slate-100 transition-colors hover:bg-white hover:text-night" href="https://www.leadsoft.inf.br/parceiros/ravendb" target="_blank" rel="noreferrer">
            Explore o RavenDB <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
