const services = [
  {
    index: "01 / TIMES SOB MEDIDA",
    href: "/solucoes#taas",
    title: "TaaS — Team as a Service",
    description: "Impulsione seu negócio com soluções de software sob medida. Tenha acesso a um time completo à sua disposição, sem a burocracia, os riscos ou o modelo engessado dos projetos tradicionais.",
    image: "https://www.leadsoft.inf.br/_next/static/media/Sistema-Web.75671c75.jpg",
    imageAlt: "Equipe colaborando em um projeto de software",
  },
  {
    index: "02 / IMERSÃO TECH",
    href: "/solucoes#consultoria-tech",
    title: "Consultoria Tech",
    description: "O diagnóstico é o primeiro passo para traçar um plano de ação estratégico para as necessidades da sua empresa. Conheça nossa consultoria e descubra novas possibilidades.",
    image: "https://www.leadsoft.inf.br/_next/static/media/Consultoria-Tecnol%C3%B3gica.ee46f541.jpg",
    imageAlt: "Especialista analisando uma solução tecnológica",
  },
];

function ServiceCard({ service }: { service: (typeof services)[number] }) {
  return (
    <article className="group relative isolate flex min-h-[430px] sm:min-h-[470px] overflow-hidden rounded-xl bg-slate-800 lg:min-h-[515px]">
      <img className="absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src={service.image} alt={service.imageAlt} loading="lazy" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-blue-950/90 via-blue-700/35 to-slate-800/25" />
      <div className="mx-3 mb-3 mt-auto flex min-h-[258px] w-full flex-col items-center rounded-[17px] border border-blue-100/30 bg-gradient-to-br from-sky-100/30 to-blue-800/70 p-4 text-center shadow-xl backdrop-blur-xl md:mx-[17px] md:mb-[17px] md:min-h-[274px] md:rounded-[21px] md:p-6">
        <span className="self-start text-left text-[8px] tracking-[1.6px] text-blue-50/80">{service.index}</span>
        <h3 className="mt-4 font-display text-[clamp(22px,2.5vw,27px)] font-medium leading-tight text-white drop-shadow">{service.title}</h3>
        <p className="mb-4 mt-3 max-w-[390px] text-[12px] font-medium leading-relaxed text-white md:text-[13px]">{service.description}</p>
        <a className="mt-auto inline-flex min-h-[46px] items-center gap-3 rounded-full bg-white px-6 font-display text-sm font-bold text-blue-600 transition-colors duration-500 ease-in-out hover:bg-sky-50" href={service.href}>
          Saiba mais <span className="text-base">↗</span>
        </a>
      </div>
    </article>
  );
}

export function ServicesSection() {
  return (
    <section className="bg-surface px-0 py-[68px] md:py-[92px]" id="solucoes">
      <div className="mx-auto mb-6 flex w-[calc(100%-40px)] max-w-[1220px] flex-col justify-between gap-4 lg:mb-[34px] lg:w-[calc(100%-72px)] lg:flex-row lg:items-end" data-reveal-sequence>
        <div>
          <p className="mb-4 text-[11px] font-bold tracking-[2px] text-cyan md:text-[12px]">PARA VOCÊ</p>
          <h2 className="font-display text-[35px] font-semibold leading-tight tracking-tight text-white md:text-[clamp(35px,4vw,50px)]">
            Tecnologia que aproxima<br /><span className="text-cyan">ideias do próximo passo.</span>
          </h2>
        </div>
        <p className="max-w-[340px] text-[12px] leading-relaxed text-muted lg:mb-1 lg:ml-5 md:text-[13px]">
          Times e soluções construídos para as necessidades de cada negócio.
        </p>
      </div>
      <div className="mx-auto grid w-[calc(100%-30px)] max-w-[920px] gap-3 sm:w-[calc(100%-40px)] sm:grid-cols-2 sm:gap-3 lg:w-[calc(100%-72px)] lg:gap-4" data-reveal-sequence>
        {services.map((service) => <ServiceCard key={service.index} service={service} />)}
      </div>
    </section>
  );
}
