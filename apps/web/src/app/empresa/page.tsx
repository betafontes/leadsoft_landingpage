import type { Metadata } from "next";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Empresa | LeadSoft® Soluções Tecnológicas",
  description: "Conheça a história, a missão e os valores que orientam a LeadSoft desde 2018.",
};

const values = [
  { number: "01", title: "Honestidade", text: "Agimos com transparência, assumimos limites e alinhamos expectativas com clareza." },
  { number: "02", title: "Respeito", text: "Valorizamos cada pessoa, acolhemos ideias diferentes e construímos relações sem julgamentos." },
  { number: "03", title: "Comunicação", text: "Falamos de forma clara, registramos decisões e compartilhamos o que o time precisa saber." },
  { number: "04", title: "Colaboração", text: "Trabalhamos pelo objetivo comum, fortalecendo diálogos e ajudando uns aos outros." },
  { number: "05", title: "Lealdade", text: "Honramos compromissos e cuidamos da confiança construída com o time e nossos parceiros." },
  { number: "06", title: "Humildade", text: "Mantemos abertura para aprender, reconhecer erros, ouvir e considerar outras perspectivas." },
  { number: "07", title: "Olho-no-olho", text: "Estar presente é ouvir com atenção, participar de verdade e cultivar conversas próximas." },
  { number: "08", title: "Proatividade", text: "Antecipamos necessidades e buscamos maneiras de contribuir antes mesmo de alguém pedir." },
  { number: "09", title: "Ambição", text: "Buscamos excelência todos os dias e temos coragem para transformar o possível." },
  { number: "10", title: "Conhecimento", text: "Aprendemos continuamente e compartilhamos o que sabemos para fazer todo mundo avançar." },
];

export default function CompanyPage() {
  return (
    <main className="overflow-x-clip bg-night text-white">
      <SiteHeader />

      <section className="relative isolate flex min-h-[650px] items-center overflow-hidden bg-[#050a17] px-5 pb-20 pt-32 sm:min-h-[700px] md:px-10 lg:min-h-[760px] lg:px-[max(7vw,72px)]" id="inicio">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_78%_35%,#12508b45,transparent_42%),radial-gradient(ellipse_at_5%_100%,#05b8f51c,transparent_45%)]" />
        <div className="absolute inset-0 -z-10 opacity-25 [background-image:radial-gradient(#9ccfff_0.7px,transparent_0.7px)] [background-size:38px_38px]" />
        <div className="mx-auto grid w-full max-w-[1220px] items-center gap-14 lg:grid-cols-[1.15fr_0.75fr]">
          <div>
            <p className="mb-6 flex items-center gap-3 text-[10px] font-bold tracking-[2.5px] text-cyan sm:text-xs"><span className="h-px w-8 bg-cyan" />EMPRESA <span className="text-slate-500">·</span> DESDE 2018</p>
            <h1 className="max-w-[820px] font-display text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl md:text-6xl lg:text-[clamp(54px,5.6vw,76px)]">Ideias que ganham vida.<br /><span className="text-cyan">Juntas, vão mais longe.</span></h1>
            <p className="mt-7 max-w-[680px] text-sm leading-7 text-slate-300 sm:text-base">Criar soluções tecnológicas para negócios visionários, cativando pessoas por toda a galáxia. É assim que a LeadSoft transforma paixão por tecnologia e empreendedorismo em ideias que decolam.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a className="inline-flex min-h-12 items-center gap-3 rounded-full bg-gradient-to-r from-cyan to-electric px-6 font-display text-xs font-semibold text-white transition-all duration-500 hover:-translate-y-1 sm:text-sm" href="#historia">Nossa história <span aria-hidden="true">↓</span></a>
              <a className="inline-flex min-h-12 items-center gap-3 rounded-full border border-white/20 px-6 font-display text-xs text-slate-100 transition-colors duration-500 hover:border-cyan hover:text-cyan sm:text-sm" href="#valores">Nossos valores <span aria-hidden="true">↘</span></a>
            </div>
          </div>
          <div className="relative mx-auto grid aspect-square w-full max-w-[430px] place-items-center">
            <div className="absolute inset-[8%] rotate-[-22deg] rounded-[50%] border border-cyan/30" />
            <div className="absolute inset-[17%] rotate-[28deg] rounded-[50%] border border-blue-400/25" />
            <div className="absolute inset-[24%] rounded-full bg-[radial-gradient(circle_at_32%_28%,#54dfff,#1558d5_32%,#08132f_72%)] shadow-[0_0_100px_#0b70ff42]" />
            <div className="absolute left-[12%] right-[12%] top-1/2 h-[22%] -translate-y-1/2 -rotate-[22deg] rounded-[50%] border-[5px] border-cyan/70 shadow-[0_0_28px_#05b8f555]" />
            <span className="relative z-10 font-display text-7xl font-medium text-sky-100">λ</span>
            <span className="absolute right-[13%] top-[15%] text-2xl text-sky-100">✳</span>
            <span className="absolute bottom-[12%] left-[16%] text-xl text-cyan">✦</span>
            <span className="absolute bottom-[3%] text-[9px] tracking-[2px] text-slate-400">CRIAR · COLABORAR · DECOLAR</span>
          </div>
        </div>
      </section>

      <ScrollReveal>
        <section className="px-5 py-20 sm:px-8 md:py-28 lg:px-10" id="historia">
          <div className="mx-auto grid max-w-[1220px] items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            <div>
              <p className="mb-5 text-[10px] font-bold tracking-[2.5px] text-cyan sm:text-xs">NOSSA HISTÓRIA</p>
              <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">Mais do que tecnologia.<br /><span className="text-cyan">Somos impulso para novas ideias.</span></h2>
              <p className="mt-6 text-sm leading-7 text-slate-300 sm:text-[15px]">Nascida da paixão por tecnologia e empreendedorismo compartilhada por seus fundadores, a LeadSoft surgiu para investir em ideias e materializá-las. Desde 2018, criamos soluções inteligentes com software sob medida para as necessidades de cada negócio.</p>
              <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-[15px]">Acreditamos que os melhores resultados surgem de forma colaborativa. Por isso, desenvolvemos projetos a partir de uma visão conjunta com clientes e com o nosso time, sempre abertos a novas ideias.</p>
              <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-[15px]">Com lealdade e honestidade como guias, trabalhamos lado a lado com cada parceiro. A comunicação clara, a empatia e a vontade de aprender mantêm todos na mesma trajetória.</p>
              <p className="mt-7 border-l border-cyan/70 pl-4 font-display text-lg leading-relaxed text-white sm:text-xl">“Juntos, decolaremos.”</p>
            </div>
            <div className="relative min-h-[360px] overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-[0_24px_70px_#0008] sm:min-h-[470px]">
              <img className="absolute inset-0 h-full w-full object-cover" src="/leadsoft-company-photo.png" alt="Camisa da LeadSoft, headset e materiais de trabalho sobre uma mesa" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050914]/85 via-transparent to-transparent" />
              <span className="absolute bottom-6 left-6 text-[9px] font-semibold tracking-[2px] text-white/80">LEADSOFT® · SOLUÇÕES WEB</span>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal delayMs={70}>
        <section className="bg-surface-raised px-5 py-20 sm:px-8 md:py-28 lg:px-10" id="valores">
          <div className="mx-auto max-w-[1220px]">
            <div className="mb-10 max-w-[760px] sm:mb-14">
              <p className="mb-4 text-[10px] font-bold tracking-[2.5px] text-cyan sm:text-xs">O QUE NOS MOVE</p>
              <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">Valores que mantêm<br /><span className="text-cyan">a tripulação na mesma órbita.</span></h2>
              <p className="mt-5 max-w-[650px] text-sm leading-7 text-slate-400 sm:text-[15px]">Nossos princípios aparecem nas escolhas de todos os dias: na forma de ouvir, colaborar, compartilhar conhecimento e cumprir o que combinamos.</p>
            </div>
            <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 xl:grid-cols-5">
              {values.map((value) => <article className="group min-h-[200px] bg-[#0b0e16] p-5 transition-colors duration-500 hover:bg-[#101b2b] sm:p-6" key={value.number}><div className="flex items-center justify-between"><span className="font-display text-[10px] tracking-[2px] text-cyan">{value.number}</span><span className="text-sm text-blue-400 transition-transform duration-500 group-hover:rotate-45">✳</span></div><h3 className="mb-3 mt-7 font-display text-lg font-medium text-white">{value.title}</h3><p className="text-xs leading-6 text-slate-400">{value.text}</p></article>)}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="relative overflow-hidden border-y border-white/10 bg-gradient-to-r from-[#0b1b36] via-[#101a2e] to-[#07111f] px-5 py-16 sm:px-8 md:py-20 lg:px-10">
          <div className="absolute -right-16 -top-32 size-80 rounded-full border border-cyan/10" />
          <div className="relative mx-auto flex max-w-[1220px] flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div><p className="mb-3 text-[10px] font-bold tracking-[2px] text-cyan">VAMOS CONVERSAR?</p><h2 className="font-display text-2xl font-semibold sm:text-3xl">Vamos criar algo que faça a diferença?</h2><p className="mt-3 max-w-[600px] text-xs leading-6 text-slate-400 sm:text-sm">Conheça nossas soluções e conte o que você quer tirar do papel.</p></div>
            <a className="inline-flex min-h-12 shrink-0 items-center gap-3 rounded-full bg-gradient-to-r from-cyan to-electric px-6 font-display text-xs font-semibold text-white transition-all duration-500 hover:-translate-y-1 sm:text-sm" href="/solucoes">Conheça nossas soluções <span aria-hidden="true">↗</span></a>
          </div>
        </section>
      </ScrollReveal>

      <SiteFooter />
    </main>
  );
}