import type { Metadata } from "next";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Carreira | LeadSoft® Soluções Tecnológicas",
  description: "Trabalhe na LeadSoft: faça parte de um time criativo, colaborativo e apaixonado por tecnologia.",
};

const culture = [
  { number: "01", title: "Criatividade com liberdade", text: "Espaço para propor ideias, experimentar caminhos e buscar excelência no trabalho." },
  { number: "02", title: "Crescimento contínuo", text: "Incentivo ao desenvolvimento pessoal e profissional, com palestras e troca de conhecimento." },
  { number: "03", title: "Trabalho em equipe", text: "Design colaborativo e proximidade para transformar ideias em soluções de valor." },
  { number: "04", title: "Pluralidade", text: "Uma equipe que valoriza diferentes perspectivas e olha para as ideias, não para rótulos." },
];

export default function CareersPage() {
  const applicationUrl = "https://wa.me/5541991777488?text=Ol%C3%A1%2C%20tenho%20interesse%20na%20oportunidade%20de%20Desenvolvedor%20Full%20Stack%20Pleno%20na%20LeadSoft.%20Como%20posso%20enviar%20meu%20curr%C3%ADculo%3F";

  return (
    <main className="overflow-x-clip bg-night text-white">
      <SiteHeader />

      <section className="relative isolate flex min-h-[680px] items-center overflow-hidden bg-[#040916] px-5 pb-20 pt-32 sm:min-h-[720px] md:px-10 lg:min-h-[760px] lg:px-[max(7vw,72px)]" id="inicio">
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,#050916_0%,#050916d9_42%,#0509164a_100%),url('/leadsoft-space-hero.png')] bg-cover bg-[center_42%]" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-night/70 via-transparent to-night/30" />
        <div className="mx-auto w-full max-w-[1220px]">
          <p className="mb-6 flex items-center gap-3 text-[10px] font-bold tracking-[2.5px] text-cyan sm:text-xs"><span className="h-px w-8 bg-cyan" />CARREIRA · VEM COM A GENTE</p>
          <h1 className="max-w-[900px] font-display text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl md:text-6xl lg:text-[clamp(58px,6vw,82px)]">Bora conquistar o universo<br /><span className="text-cyan">com a gente?</span></h1>
          <p className="mt-6 max-w-[700px] text-sm leading-7 text-slate-200 sm:text-base">Venha fazer parte da LeadSoft® e seja um cientista à frente da inovação. Cresça com um time criativo, unido e apaixonado por tecnologia.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a className="inline-flex min-h-12 items-center gap-3 rounded-full bg-gradient-to-r from-cyan to-electric px-6 font-display text-xs font-semibold text-white transition-all duration-500 hover:-translate-y-1 sm:text-sm" href="#vagas">Ver oportunidade <span aria-hidden="true">↓</span></a>
            <a className="inline-flex min-h-12 items-center gap-3 rounded-full border border-white/25 px-6 font-display text-xs text-white transition-colors duration-500 hover:border-cyan hover:text-cyan sm:text-sm" href="#cultura">Conheça a cultura <span aria-hidden="true">↘</span></a>
          </div>
          <div className="mt-14 flex flex-wrap gap-x-7 gap-y-2 border-t border-white/15 pt-5 text-[9px] tracking-[1.5px] text-slate-400 sm:text-[10px]"><span>TECNOLOGIA</span><span>COLABORAÇÃO</span><span>INOVAÇÃO</span><span>DESENVOLVIMENTO</span></div>
        </div>
      </section>

      <ScrollReveal>
        <section className="px-5 py-20 sm:px-8 md:py-28 lg:px-10" id="sobre-a-equipe">
          <div className="mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div><p className="mb-5 text-[10px] font-bold tracking-[2.5px] text-cyan sm:text-xs">MAIS DO QUE UMA EMPRESA DE TECNOLOGIA</p><h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">Um laboratório de ideias.<br /><span className="text-cyan">Um time que faz acontecer.</span></h2></div>
            <div className="space-y-5 text-sm leading-7 text-slate-300 sm:text-[15px]">
              <p>Somos um laboratório de ideias em busca de criar oportunidades para nossos tripulantes e desenvolver serviços de valor para nossos clientes.</p>
              <p>Incentivamos o crescimento pessoal e profissional, transformando ideias em soluções com tecnologia, inovação e trabalho em equipe. Aqui, criatividade e responsabilidade caminham juntas.</p>
              <p>Trabalhamos em modelo presencial, com uma experiência próxima e colaborativa, em uma cultura descontraída e divertida. Buscamos pessoas curiosas, criativas e dispostas a crescer junto com o time.</p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal delayMs={60}>
        <section className="bg-surface-raised px-5 py-20 sm:px-8 md:py-28 lg:px-10" id="cultura">
          <div className="mx-auto max-w-[1220px]">
            <div className="mb-10 max-w-[730px] sm:mb-14"><p className="mb-4 text-[10px] font-bold tracking-[2.5px] text-cyan sm:text-xs">POR QUE FAZER PARTE DA TRIPULAÇÃO?</p><h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">Crescemos melhor<br /><span className="text-cyan">quando construímos juntos.</span></h2><p className="mt-5 text-sm leading-7 text-slate-400 sm:text-[15px]">Um time jovem e criativo, com liberdade para pensar, colaborar e entregar um trabalho de excelência.</p></div>
            <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 xl:grid-cols-4">
              {culture.map((item) => <article className="group min-h-[220px] bg-[#0b0e16] p-6 transition-colors duration-500 hover:bg-[#101b2b] sm:p-7" key={item.number}><div className="flex items-center justify-between"><span className="font-display text-[10px] tracking-[2px] text-cyan">{item.number}</span><span className="text-sm text-blue-400 transition-transform duration-500 group-hover:rotate-45">✳</span></div><h3 className="mb-3 mt-8 font-display text-lg font-medium">{item.title}</h3><p className="text-xs leading-6 text-slate-400 sm:text-[13px]">{item.text}</p></article>)}
            </div>
            <div className="mt-8 grid gap-4 rounded-xl border border-white/10 bg-[#0b0e16] p-5 sm:grid-cols-2 sm:p-7"><div><p className="font-display text-sm text-white">Palestras e aprendizado</p><p className="mt-2 text-xs leading-6 text-slate-400">Encontros com temas voltados ao desenvolvimento profissional e à troca de experiências.</p></div><div><p className="font-display text-sm text-white">Design colaborativo</p><p className="mt-2 text-xs leading-6 text-slate-400">Construção conjunta de projetos, com espaço para contribuir e aprender com a equipe.</p></div></div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal delayMs={70}>
        <section className="px-5 py-20 sm:px-8 md:py-28 lg:px-10" id="vagas">
          <div className="mx-auto max-w-[1220px]">
            <div className="mb-9"><p className="mb-4 text-[10px] font-bold tracking-[2.5px] text-cyan sm:text-xs">OPORTUNIDADE</p><h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">Sua próxima jornada<br /><span className="text-cyan">pode começar aqui.</span></h2><p className="mt-5 max-w-[650px] text-sm leading-7 text-slate-400">Confira a oportunidade divulgada pela LeadSoft e converse com a equipe sobre os próximos passos.</p></div>
            <article className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#101b30] to-[#0b0e16] p-6 sm:p-9">
              <div className="absolute -right-16 -top-24 size-64 rounded-full border border-cyan/10" />
              <div className="relative flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
                <div><p className="text-[9px] font-bold tracking-[2px] text-cyan">DESENVOLVIMENTO DE SOFTWARE</p><h3 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">Desenvolvedor Full Stack Pleno</h3><p className="mt-3 max-w-[620px] text-xs leading-6 text-slate-400 sm:text-sm">Faça parte de um time que transforma ideias em soluções tecnológicas e contribui de ponta a ponta para a construção de software.</p></div>
                <a className="inline-flex min-h-12 shrink-0 items-center gap-3 rounded-full bg-gradient-to-r from-cyan to-electric px-6 font-display text-xs font-semibold text-white transition-all duration-500 hover:-translate-y-1 sm:text-sm" href={applicationUrl} target="_blank" rel="noreferrer">Tenho interesse <span aria-hidden="true">↗</span></a>
              </div>
            </article>
            <p className="mt-5 text-[11px] leading-6 text-slate-500">A oportunidade e o processo seletivo podem mudar. Fale com a equipe para confirmar os detalhes e enviar seu currículo.</p>
            <div className="mt-12 border-t border-white/10 pt-7"><p className="text-sm text-slate-300">Não encontrou uma oportunidade alinhada ao seu perfil?</p><a className="mt-3 inline-flex items-center gap-2 border-b border-cyan/60 pb-2 text-xs text-cyan transition-all duration-500 hover:gap-4" href="mailto:contato@leadsoft.inf.br?subject=Interesse%20em%20trabalhar%20na%20LeadSoft">Envie uma apresentação para a LeadSoft <span aria-hidden="true">↗</span></a></div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="relative overflow-hidden border-y border-white/10 bg-gradient-to-r from-[#0b1b36] via-[#101a2e] to-[#07111f] px-5 py-16 sm:px-8 md:py-20 lg:px-10">
          <div className="absolute -right-16 -top-32 size-80 rounded-full border border-cyan/10" />
          <div className="relative mx-auto flex max-w-[1220px] flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div><p className="mb-3 text-[10px] font-bold tracking-[2px] text-cyan">VEM COM A GENTE</p><h2 className="font-display text-2xl font-semibold sm:text-3xl">Pronto para decolar?</h2><p className="mt-3 max-w-[600px] text-xs leading-6 text-slate-400 sm:text-sm">Dê o próximo passo e converse com a LeadSoft sobre a oportunidade.</p></div>
            <a className="inline-flex min-h-12 shrink-0 items-center gap-3 rounded-full border border-cyan/60 px-6 font-display text-xs text-white transition-all duration-500 hover:bg-cyan hover:text-night sm:text-sm" href={applicationUrl} target="_blank" rel="noreferrer">Fale sobre a vaga <span aria-hidden="true">↗</span></a>
          </div>
        </section>
      </ScrollReveal>

      <SiteFooter />
    </main>
  );
}