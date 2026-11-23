export function CompanySection() {
  return (
    <section className="bg-night px-5 py-[76px] md:px-0 md:py-20 lg:py-[116px]" id="empresa">
      <div className="mx-auto grid max-w-[1220px] items-center gap-3 lg:w-[calc(100%-72px)] lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 xl:gap-[66px]" data-reveal-sequence>
        <div className="max-w-[655px]">
          <p className="mb-6 border-l-[3px] border-electric pl-4 text-[11px] font-bold tracking-[2px] text-cyan">EMPRESA · DESDE 2018</p>
          <h2 className="mb-5 font-display text-[35px] font-semibold leading-tight tracking-tight md:mb-7 md:text-[clamp(38px,4.5vw,56px)]">
            Ideias que ganham vida.<br /><span className="text-cyan">Juntas, vão mais longe.</span>
          </h2>
          <p className="mb-4 text-[12px] leading-[1.9] text-slate-300 md:text-[14px]">
            Nascida da paixão por tecnologia e empreendedorismo compartilhada pelos seus fundadores, a LeadSoft® surgiu para investir em ideias e materializá-las, oferecendo soluções inteligentes com softwares sob medida para as necessidades do seu negócio.
          </p>
          <p className="text-[12px] leading-[1.9] text-slate-300 md:text-[14px]">
            Acreditamos que os melhores resultados surgem de forma colaborativa. Por isso, desenvolvemos nossos projetos a partir da ótica conjunta, com clientes e com o nosso time, sempre abertos a novas ideias.
          </p>
          <a className="mt-8 inline-flex items-center gap-3 border-b border-cyan/60 pb-2 text-[13px] text-sky-300 transition-all duration-500 ease-in-out hover:gap-5" href="/empresa">
            Conheça nossa história <span>↗</span>
          </a>
        </div>

        <div className="relative mx-auto h-[310px] w-full max-w-[410px] overflow-hidden rounded-2xl border border-white/10 shadow-[0_24px_70px_#0008] sm:h-[350px] lg:h-[410px]">
          <img className="h-full w-full object-cover object-center" src="/leadsoft-company-photo.png" alt="Camisa da LeadSoft sobre a mesa, ao lado de um headset e materiais de trabalho" loading="lazy" />
        </div>
      </div>
    </section>
  );
}
