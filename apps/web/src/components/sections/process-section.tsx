const stages = [
  { number: "01", title: "Diagnóstico", description: "Entendemos o contexto do negócio, os objetivos e os requisitos do projeto." },
  { number: "02", title: "Planejamento", description: "Definimos prioridades, equipe e um plano de ação alinhado com você." },
  { number: "03", title: "Desenvolvimento", description: "Construímos em ciclos curtos, com colaboração próxima e entregas contínuas." },
  { number: "04", title: "Aprimoramento", description: "Acompanhamos a evolução do produto e melhoramos junto com o seu negócio." },
];

export function ProcessSection() {
  return (
    <section className="bg-gradient-to-b from-surface-raised to-night px-5 py-[69px] md:px-0 md:py-[95px]" id="processo">
      <div className="mx-auto max-w-[1220px] md:w-[calc(100%-72px)]">
        <div className="mx-auto mb-7 max-w-[610px] text-center md:mb-12" data-reveal-sequence>
          <p className="mb-4 text-[11px] font-bold tracking-[2px] text-cyan md:text-[12px]">NOSSA JORNADA</p>
          <h2 className="mb-4 font-display text-[35px] font-semibold leading-tight tracking-tight md:text-[clamp(35px,4vw,50px)]">
            Um processo claro.<br /><span className="text-cyan">Uma parceria de verdade.</span>
          </h2>
          <p className="mx-auto max-w-[520px] text-[12px] leading-relaxed text-muted md:text-[13px]">
            Para criar soluções inteligentes e inovadoras, seguimos etapas que mantêm todo mundo na mesma trajetória.
          </p>
        </div>
        <div className="grid grid-cols-1 border-y sm:grid-cols-2 xl:grid-cols-4 border-divider" data-reveal-sequence>
          {stages.map((stage, index) => (
            <article
              className={`relative min-h-[168px] border-b border-divider p-4 sm:min-h-[194px] sm:p-5 xl:min-h-[226px] xl:border-b-0 xl:p-7 ${index % 2 === 0 ? "sm:border-r" : "xl:border-r-0"}`}
              key={stage.number}
            >
              <span className="text-[11px] tracking-[1.5px] text-cyan sm:text-xs">{stage.number}</span>
              <span className="absolute right-4 top-4 text-[17px] text-blue-400 md:text-lg">✳</span>
              <h3 className="mb-2 mt-8 font-display text-[18px] font-medium sm:mb-3 sm:mt-10 sm:text-[20px] xl:mt-11 xl:text-[22px]">{stage.title}</h3>
              <p className="text-[11px] leading-relaxed text-slate-300 sm:text-[12px]">{stage.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
