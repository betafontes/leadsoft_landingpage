import type { Metadata } from "next";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Para Você | LeadSoft® Soluções Tecnológicas",
  description: "Conheça o Team as a Service, a Imersão Tech e o processo de desenvolvimento da LeadSoft.",
};

const stages = [
  {
    number: "01",
    title: "Diagnóstico",
    description: "Entendemos o contexto do negócio, os objetivos e os requisitos. Alinhamos as ideias e definimos as funcionalidades que fazem sentido para o projeto.",
  },
  {
    number: "02",
    title: "Planejamento",
    description: "Organizamos prioridades, equipe e próximos passos em um plano de ação construído junto com você.",
  },
  {
    number: "03",
    title: "Desenvolvimento",
    description: "Construímos em ciclos curtos, com colaboração próxima e entregas contínuas para validar o caminho durante o projeto.",
  },
  {
    number: "04",
    title: "Aprimoramento",
    description: "Acompanhamos a evolução do produto e ajustamos a solução junto com as necessidades do seu negócio.",
  },
];

const squadRoles = ["Developers", "UX Designers", "Product Owners", "Tech Leads"];

export default function SolutionsPage() {
  return (
    <main className="overflow-x-clip bg-night text-white">
      <SiteHeader />

      <section className="relative isolate flex min-h-[680px] items-center overflow-hidden bg-[#050a17] px-5 pb-20 pt-32 sm:min-h-[720px] md:px-10 lg:min-h-[760px] lg:px-[max(7vw,72px)]" id="inicio">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_76%_38%,#103d7b55,transparent_42%),radial-gradient(ellipse_at_10%_100%,#05b8f51a,transparent_44%)]" />
        <div className="absolute inset-0 -z-10 opacity-30 [background-image:radial-gradient(#9ccfff_0.7px,transparent_0.7px)] [background-size:38px_38px]" />
        <div className="mx-auto w-full max-w-[1250px]">
          <p className="mb-6 flex items-center gap-3 text-[10px] font-bold tracking-[2.5px] text-cyan sm:text-xs"><span className="h-px w-8 bg-cyan" />SOLUÇÕES LEADSOFT</p>
          <div className="grid items-end gap-10 lg:grid-cols-[1.15fr_0.65fr] lg:gap-20">
            <div>
              <h1 className="max-w-[850px] font-display text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl md:text-6xl lg:text-[clamp(58px,6vw,82px)]">Tecnologia que aproxima <span className="text-cyan">ideias do próximo passo.</span></h1>
              <p className="mt-6 max-w-[650px] text-sm leading-7 text-slate-300 sm:text-base">Da estratégia à entrega, criamos soluções sob medida com colaboração, clareza e times preparados para tirar boas ideias do papel.</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a className="inline-flex min-h-12 items-center gap-3 rounded-full bg-gradient-to-r from-cyan to-electric px-6 font-display text-xs font-semibold text-white shadow-[0_12px_40px_#006aff35] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_48px_#006aff55] sm:text-sm" href="#taas">Conheça o TaaS <span aria-hidden="true">↘</span></a>
                <a className="inline-flex min-h-12 items-center gap-3 rounded-full border border-white/20 px-6 font-display text-xs text-slate-100 transition-colors duration-500 hover:border-cyan hover:text-cyan sm:text-sm" href="#consultoria-tech">Explore a Imersão Tech <span aria-hidden="true">↘</span></a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 border-t border-white/10 pt-5 lg:mb-2">
              <div><span className="font-display text-2xl text-cyan sm:text-3xl">01</span><p className="mt-2 text-[10px] leading-5 text-slate-400 sm:text-xs">Times multidisciplinares</p></div>
              <div><span className="font-display text-2xl text-cyan sm:text-3xl">10</span><p className="mt-2 text-[10px] leading-5 text-slate-400 sm:text-xs">Dias úteis por Sprint</p></div>
            </div>
          </div>
          <div className="mt-14 flex flex-wrap gap-x-7 gap-y-2 border-t border-white/10 pt-5 text-[9px] tracking-[1.5px] text-slate-500 sm:text-[10px]">
            <a className="transition-colors hover:text-cyan" href="#taas">01 / TEAM AS A SERVICE</a>
            <a className="transition-colors hover:text-cyan" href="#consultoria-tech">02 / IMERSÃO TECH</a>
            <a className="transition-colors hover:text-cyan" href="#metodologia">03 / NOSSA JORNADA</a>
          </div>
        </div>
      </section>

      <ScrollReveal delayMs={50}>
        <section className="relative px-5 py-20 sm:px-8 md:py-28 lg:px-10" id="taas">
          <div className="mx-auto grid max-w-[1220px] items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <div className="relative min-h-[360px] overflow-hidden rounded-2xl border border-white/10 bg-slate-900 sm:min-h-[480px]">
              <img className="absolute inset-0 h-full w-full object-cover" src="https://www.leadsoft.inf.br/_next/static/media/Sistema-Web.75671c75.jpg" alt="Equipe LeadSoft planejando um projeto de software" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061329]/95 via-blue-950/20 to-transparent" />
              <div className="absolute inset-x-5 bottom-5 rounded-xl border border-white/20 bg-[#0b1a32]/65 p-5 backdrop-blur-xl sm:inset-x-7 sm:bottom-7 sm:p-7">
                <p className="text-[9px] font-semibold tracking-[2px] text-cyan">SQUADS MULTIDISCIPLINARES</p>
                <div className="mt-4 flex flex-wrap gap-2">{squadRoles.map((role) => <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[10px] text-slate-200 sm:text-xs" key={role}>{role}</span>)}</div>
              </div>
            </div>
            <div>
              <p className="mb-5 text-[10px] font-bold tracking-[2.5px] text-cyan sm:text-xs">01 / TIMES SOB MEDIDA</p>
              <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-[clamp(38px,4vw,54px)]">TaaS — Team as a <span className="text-cyan">Service.</span></h2>
              <p className="mt-6 text-sm leading-7 text-slate-300 sm:text-[15px]">O Team as a Service é um plano de assinatura mensal que oferece squads multidisciplinares para desenvolvimento contínuo. O time atua como uma extensão do seu negócio, com identidade própria e colaboração próxima.</p>
              <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-[15px]">As equipes reúnem Developers, UX Designers, Product Owners e Tech Leads, seguindo Dual Track Agile e práticas do SDLC — Software Development Life Cycle.</p>
              <div className="mt-8 grid gap-4 border-y border-white/10 py-6 sm:grid-cols-2">
                <div><p className="font-display text-sm text-white">Upstream</p><p className="mt-2 text-xs leading-6 text-slate-400">Descoberta e entendimento das oportunidades, antes de definir o que construir.</p></div>
                <div><p className="font-display text-sm text-white">Downstream</p><p className="mt-2 text-xs leading-6 text-slate-400">Entrega de software em Sprints de 10 dias úteis, com evolução contínua.</p></div>
              </div>
              <a className="mt-8 inline-flex min-h-12 items-center gap-3 rounded-full bg-gradient-to-r from-cyan to-electric px-6 font-display text-xs font-semibold text-white transition-all duration-500 hover:-translate-y-1 sm:text-sm" href="https://wa.me/5541991777488?text=Ol%C3%A1%2C%20quero%20conversar%20sobre%20o%20TaaS%20da%20LeadSoft." target="_blank" rel="noreferrer">Conversar sobre TaaS <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal delayMs={80}>
        <section className="bg-surface-raised px-5 py-20 sm:px-8 md:py-28 lg:px-10" id="consultoria-tech">
          <div className="mx-auto grid max-w-[1220px] items-center gap-10 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
            <div className="order-2 lg:order-1">
              <p className="mb-5 text-[10px] font-bold tracking-[2.5px] text-cyan sm:text-xs">02 / IMERSÃO TECH</p>
              <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-[clamp(38px,4vw,54px)]">Transformando ideias em <span className="text-cyan">soluções inovadoras.</span></h2>
              <p className="mt-6 text-sm leading-7 text-slate-300 sm:text-[15px]">A Imersão Tech é uma consultoria que transforma ideias em soluções tecnológicas sob medida. A abordagem é personalizada e construída em estreita colaboração com o cliente, para compreender necessidades, objetivos e contexto do negócio.</p>
              <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-[15px]">O trabalho pode abranger desde a análise de requisitos até o desenvolvimento e a implementação de sistemas, conectando as decisões técnicas às expectativas do projeto.</p>
              <div className="mt-8 space-y-3">
                {["Entendimento das necessidades e análise de requisitos", "Definição de uma solução alinhada aos objetivos", "Desenvolvimento e implementação de sistemas"].map((item, index) => <div className="flex items-start gap-3 text-xs leading-6 text-slate-300 sm:text-sm" key={item}><span className="mt-0.5 font-display text-cyan">0{index + 1}</span><span>{item}</span></div>)}
              </div>
              <a className="mt-8 inline-flex min-h-12 items-center gap-3 rounded-full border border-cyan/60 px-6 font-display text-xs text-white transition-all duration-500 hover:bg-cyan hover:text-night sm:text-sm" href="https://wa.me/5541991777488?text=Ol%C3%A1%2C%20quero%20conversar%20sobre%20a%20Imers%C3%A3o%20Tech." target="_blank" rel="noreferrer">Conversar sobre a Imersão Tech <span aria-hidden="true">↗</span></a>
            </div>
            <div className="relative order-1 min-h-[340px] overflow-hidden rounded-2xl border border-white/10 bg-slate-900 sm:min-h-[450px] lg:order-2">
              <img className="absolute inset-0 h-full w-full object-cover" src="https://www.leadsoft.inf.br/_next/static/media/Consultoria-Tecnol%C3%B3gica.ee46f541.jpg" alt="Profissional analisando uma solução tecnológica" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#071327]/90 via-blue-950/10 to-transparent" />
              <div className="absolute bottom-5 left-5 border-l-2 border-cyan pl-4 sm:bottom-8 sm:left-8"><p className="font-display text-lg text-white sm:text-2xl">Imersão Tech</p><p className="mt-1 text-[9px] tracking-[1.5px] text-slate-300">IDEIAS COM DIREÇÃO</p></div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal delayMs={70}>
        <section className="px-5 py-20 sm:px-8 md:py-28 lg:px-10" id="metodologia">
          <div className="mx-auto max-w-[1220px]">
            <div className="mx-auto max-w-[720px] text-center">
              <p className="mb-4 text-[10px] font-bold tracking-[2.5px] text-cyan sm:text-xs">NOSSA JORNADA</p>
              <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">Um processo claro.<br /><span className="text-cyan">Uma parceria de verdade.</span></h2>
              <p className="mx-auto mt-5 max-w-[620px] text-sm leading-7 text-slate-400">Para oferecer soluções inteligentes e inovadoras, seguimos etapas que mantêm todo mundo na mesma trajetória.</p>
            </div>
            <div className="mt-12 grid border-y border-white/10 sm:grid-cols-2 xl:mt-16 xl:grid-cols-4">
              {stages.map((stage) => <article className="group relative min-h-[220px] border-b border-white/10 p-6 transition-colors duration-500 hover:bg-white/[0.025] sm:p-7 xl:border-b-0 xl:border-r xl:last:border-r-0" key={stage.number}><span className="font-display text-xs tracking-[2px] text-cyan">{stage.number}</span><span className="absolute right-6 top-6 text-lg text-blue-400 transition-transform duration-500 group-hover:rotate-45">✳</span><h3 className="mb-3 mt-9 font-display text-xl font-medium sm:text-2xl">{stage.title}</h3><p className="text-xs leading-6 text-slate-400 sm:text-[13px]">{stage.description}</p></article>)}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="relative overflow-hidden border-y border-white/10 bg-gradient-to-r from-[#0b1b36] via-[#101a2e] to-[#07111f] px-5 py-16 sm:px-8 md:py-20 lg:px-10">
          <div className="absolute -right-16 -top-32 size-80 rounded-full border border-cyan/10" />
          <div className="relative mx-auto flex max-w-[1220px] flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div><p className="mb-3 text-[10px] font-bold tracking-[2px] text-cyan">VAMOS CONVERSAR?</p><h2 className="font-display text-2xl font-semibold sm:text-3xl">Sua próxima ideia pode começar aqui.</h2><p className="mt-3 max-w-[600px] text-xs leading-6 text-slate-400 sm:text-sm">Conte um pouco sobre o seu desafio. A gente ajuda a encontrar o próximo passo.</p></div>
            <a className="inline-flex min-h-12 shrink-0 items-center gap-3 rounded-full bg-gradient-to-r from-cyan to-electric px-6 font-display text-xs font-semibold text-white transition-all duration-500 hover:-translate-y-1 sm:text-sm" href="https://wa.me/5541991777488?text=Ol%C3%A1%2C%20gostaria%20de%20conhecer%20as%20solu%C3%A7%C3%B5es%20da%20LeadSoft." target="_blank" rel="noreferrer">Fale com a LeadSoft <span aria-hidden="true">↗</span></a>
          </div>
        </section>
      </ScrollReveal>

      <SiteFooter />
    </main>
  );
}