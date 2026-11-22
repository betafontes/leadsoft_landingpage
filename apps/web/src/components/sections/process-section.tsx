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
        <div className="mx-auto mb-7 max-w-[610px] text-center md:mb-12">
          <p className="mb-4 text-[11px] font-bold tracking-[2px] text-cyan md:text-[12px]">NOSSA JORNADA</p>
          <h2 className="mb-4 font-display text-[35px] font-semibold leading-tight tracking-tight md:text-[clamp(35px,4vw,50px)]">
            Um processo claro.<br /><span className="text-cyan">Uma parceria de verdade.</span>
          </h2>
          <p className="mx-auto max-w-[520px] text-[12px] leading-relaxed text-muted md:text-[13px]">
            Para criar soluções inteligentes e inovadoras, seguimos etapas que mantêm todo mundo na mesma trajetória.
          </p>
        </div>
        <div className="grid grid-cols-2 border-y border-divider md:grid-cols-4">
          {stages.map((stage, index) => (
            <article
              className={index % 2 === 0 ? "relative min-h-[194px] border-b border-r border-divider p-5 md:min-h-[226px] md:border-b-0 md:p-7" : "relative min-h-[194px] border-b border-divider p-5 md:min-h-[226px] md:border-b-0 md:border-r md:border-divider md:p-7"}
              key={stage.number}
            >
              <span className="text-[11px] tracking-[1.5px] text-cyan md:text-xs">{stage.number}</span>
              <span className="absolute right-4 top-4 text-[17px] text-blue-400 md:text-lg">✳</span>
              <h3 className="mb-2 mt-8 font-display text-[18px] font-medium md:mb-3 md:mt-11 md:text-[22px]">{stage.title}</h3>
              <p className="text-[11px] leading-relaxed text-slate-300 md:text-[12px]">{stage.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
