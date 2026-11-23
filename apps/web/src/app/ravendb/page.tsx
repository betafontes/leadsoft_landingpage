import type { Metadata } from "next";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "RavenDB | LeadSoft® Soluções Tecnológicas",
  description: "Conheça o RavenDB e como a LeadSoft apoia empresas com arquitetura, licenciamento, treinamento e migração de dados.",
};

const features = [
  { number: "01", title: "Documentos JSON", text: "Um modelo de dados flexível que acompanha a evolução das regras do seu domínio." },
  { number: "02", title: "Transações ACID", text: "Consistência transacional para operações confiáveis, inclusive em cenários distribuídos." },
  { number: "03", title: "Indexação automática", text: "Índices gerados e otimizados para acelerar consultas sem configuração manual constante." },
  { number: "04", title: "Alta disponibilidade", text: "Clusterização, replicação e recuperação para manter aplicações prontas para crescer." },
  { number: "05", title: "Backup e segurança", text: "Backups automatizados, certificados e gestão de acesso integrados à plataforma." },
  { number: "06", title: "Cloud ou on-premise", text: "Opções de hospedagem em Azure, AWS, Google Cloud ou na própria infraestrutura." },
];

const support = [
  { number: "01", title: "Arquitetura e modelagem", text: "Desenhamos soluções orientadas ao domínio, com práticas de DDD e arquitetura hexagonal." },
  { number: "02", title: "Licenciamento", text: "Apoiamos a escolha entre Cloud e on-premise e apresentamos condições para licenças de produção." },
  { number: "03", title: "Treinamento de equipes", text: "Capacitamos o time em modelagem de dados, desenvolvimento e boas práticas com RavenDB." },
  { number: "04", title: "Migração de dados", text: "Planejamos a transição de tecnologias SQL para RavenDB com atenção à continuidade do produto." },
];

const milestones = [
  { year: "2018", title: "Primeiras soluções", text: "A LeadSoft adota RavenDB em projetos e aprofunda o trabalho com arquitetura orientada a objetos." },
  { year: "2020", title: "Arquitetura evolui", text: "O time amplia o uso de Domain Driven Design e arquitetura hexagonal em suas soluções." },
  { year: "2024", title: "Parceria oficial", text: "A relação com RavenDB se fortalece após encontros na Developer Week, em San Francisco." },
];

export default function RavenDbPage() {
  return (
    <main className="overflow-x-clip bg-night text-white">
      <SiteHeader />

      <section className="relative isolate flex min-h-[680px] items-center overflow-hidden bg-[#040916] px-5 pb-20 pt-32 sm:min-h-[720px] md:px-10 lg:min-h-[760px] lg:px-[max(7vw,72px)]" id="inicio">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_76%_45%,#124b8b55,transparent_42%),radial-gradient(ellipse_at_10%_100%,#05b8f51a,transparent_46%)]" />
        <div className="absolute inset-0 -z-10 opacity-25 [background-image:radial-gradient(#9ccfff_0.7px,transparent_0.7px)] [background-size:38px_38px]" />
        <div className="mx-auto grid w-full max-w-[1220px] items-center gap-12 lg:grid-cols-[1.1fr_0.8fr] lg:gap-20">
          <div>
            <p className="mb-6 flex items-center gap-3 text-[10px] font-bold tracking-[2.5px] text-cyan sm:text-xs"><span className="h-px w-8 bg-cyan" />PARCEIRO OFICIAL RAVENDB · BRASIL</p>
            <h1 className="font-display text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl md:text-6xl lg:text-[clamp(56px,6vw,80px)]">Dados prontos<br />para <span className="text-cyan">ir mais longe.</span></h1>
            <p className="mt-6 max-w-[650px] text-sm leading-7 text-slate-300 sm:text-base">Um banco de dados NoSQL multi-modelo, pensado para aplicações que precisam evoluir com flexibilidade, desempenho e disponibilidade.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a className="inline-flex min-h-12 items-center gap-3 rounded-full bg-gradient-to-r from-cyan to-electric px-6 font-display text-xs font-semibold text-white transition-all duration-500 hover:-translate-y-1 sm:text-sm" href="#vantagens">Conheça os recursos <span aria-hidden="true">↓</span></a>
              <a className="inline-flex min-h-12 items-center gap-3 rounded-full border border-white/20 px-6 font-display text-xs text-slate-100 transition-colors duration-500 hover:border-cyan hover:text-cyan sm:text-sm" href="https://ravendb.net/" target="_blank" rel="noreferrer">Site oficial RavenDB <span aria-hidden="true">↗</span></a>
            </div>
          </div>
          <div className="relative mx-auto grid aspect-square w-full max-w-[420px] place-items-center">
            <div className="absolute inset-[5%] rotate-[-20deg] rounded-[50%] border border-cyan/30" />
            <div className="absolute inset-[15%] rotate-[31deg] rounded-[50%] border border-blue-400/25" />
            <div className="absolute inset-[24%] rounded-full border border-sky-200/30 bg-[radial-gradient(circle_at_30%_26%,#73e7ff,#165dc3_35%,#07142d_75%)] shadow-[0_0_95px_#0b70ff4a]" />
            <div className="absolute left-[10%] right-[10%] top-1/2 h-[23%] -translate-y-1/2 -rotate-[20deg] rounded-[50%] border-[5px] border-cyan/75 shadow-[0_0_28px_#05b8f555]" />
            <span className="relative z-10 font-display text-7xl font-semibold text-white">R</span>
            <span className="absolute right-[10%] top-[14%] text-2xl text-sky-100">✳</span>
            <span className="absolute bottom-[10%] left-[14%] text-xl text-cyan">✦</span>
            <span className="absolute bottom-[1%] text-[9px] tracking-[2px] text-slate-400">NOSQL · DOCUMENTOS · ESCALA</span>
          </div>
        </div>
      </section>

      <ScrollReveal>
        <section className="px-5 py-20 sm:px-8 md:py-28 lg:px-10" id="visao-geral">
          <div className="mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div><p className="mb-5 text-[10px] font-bold tracking-[2.5px] text-cyan sm:text-xs">UMA NOVA FORMA DE MODELAR DADOS</p><h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">Menos estrutura rígida.<br /><span className="text-cyan">Mais espaço para evoluir.</span></h2></div>
            <div className="space-y-5 text-sm leading-7 text-slate-300 sm:text-[15px]">
              <p>O RavenDB é um banco de dados NoSQL multi-modelo, orientado a documentos. Os dados em JSON se conectam naturalmente às entidades da aplicação, ajudando a reduzir conversões e a complexidade de esquemas em domínios que mudam com o tempo.</p>
              <p>Com indexação automatizada, clustering e backups integrados, a plataforma reúne recursos para aplicações que precisam de consultas rápidas, disponibilidade contínua e crescimento consistente.</p>
              <p>É uma alternativa para sistemas de conteúdo, perfis de usuários, soluções IoT e outras aplicações em que flexibilidade e eficiência no desenvolvimento fazem diferença.</p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal delayMs={60}>
        <section className="bg-surface-raised px-5 py-20 sm:px-8 md:py-28 lg:px-10" id="vantagens">
          <div className="mx-auto max-w-[1220px]">
            <div className="mb-10 max-w-[760px] sm:mb-14"><p className="mb-4 text-[10px] font-bold tracking-[2.5px] text-cyan sm:text-xs">RECURSOS PARA CONSTRUIR COM CONFIANÇA</p><h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">Foque no que importa:<br /><span className="text-cyan">o código.</span></h2><p className="mt-5 max-w-[650px] text-sm leading-7 text-slate-400 sm:text-[15px]">Uma plataforma que combina flexibilidade de documentos com ferramentas integradas para simplificar o dia a dia de desenvolvimento e operação.</p></div>
            <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 xl:grid-cols-3">
              {features.map((feature) => <article className="group min-h-[210px] bg-[#0b0e16] p-6 transition-colors duration-500 hover:bg-[#101b2b] sm:p-7" key={feature.number}><div className="flex items-center justify-between"><span className="font-display text-[10px] tracking-[2px] text-cyan">{feature.number}</span><span className="text-sm text-blue-400 transition-transform duration-500 group-hover:rotate-45">✳</span></div><h3 className="mb-3 mt-8 font-display text-lg font-medium">{feature.title}</h3><p className="text-xs leading-6 text-slate-400 sm:text-[13px]">{feature.text}</p></article>)}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal delayMs={70}>
        <section className="px-5 py-20 sm:px-8 md:py-28 lg:px-10" id="parceria">
          <div className="mx-auto max-w-[1220px]">
            <div className="grid items-end gap-8 lg:grid-cols-[1fr_0.75fr] lg:gap-16">
              <div><p className="mb-5 text-[10px] font-bold tracking-[2.5px] text-cyan sm:text-xs">LEADSOFT + RAVENDB</p><h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">Tecnologia e experiência<br /><span className="text-cyan">do seu lado.</span></h2></div>
              <p className="text-sm leading-7 text-slate-400 sm:text-[15px]">Como parceira oficial no Brasil, a LeadSoft apoia empresas na adoção do RavenDB — da arquitetura e modelagem de dados à capacitação das equipes e evolução das soluções.</p>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {support.map((item) => <article className="min-h-[210px] border border-white/10 bg-[#0b0e16] p-5 sm:p-6" key={item.number}><span className="font-display text-[10px] tracking-[2px] text-cyan">{item.number}</span><h3 className="mb-3 mt-7 font-display text-lg font-medium">{item.title}</h3><p className="text-xs leading-6 text-slate-400">{item.text}</p></article>)}
            </div>
            <div className="mt-12 border-l border-cyan/60 pl-5 sm:pl-7"><p className="max-w-[850px] font-display text-xl leading-relaxed text-white sm:text-2xl">Escolher RavenDB é acelerar o desenvolvimento, reduzir custos e deixar seu software pronto para escalar.</p></div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="bg-surface-raised px-5 py-20 sm:px-8 md:py-24 lg:px-10" id="trajetoria">
          <div className="mx-auto max-w-[1220px]"><p className="mb-4 text-[10px] font-bold tracking-[2.5px] text-cyan sm:text-xs">UMA PARCERIA CONSTRUÍDA AO LONGO DO TEMPO</p><h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">Nossa trajetória com <span className="text-cyan">RavenDB.</span></h2>
            <div className="mt-10 grid gap-0 border-y border-white/10 md:grid-cols-3">
              {milestones.map((item) => <article className="border-b border-white/10 py-6 md:border-b-0 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0" key={item.year}><span className="font-display text-2xl text-cyan">{item.year}</span><h3 className="mb-2 mt-4 font-display text-lg">{item.title}</h3><p className="max-w-[330px] text-xs leading-6 text-slate-400">{item.text}</p></article>)}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="relative overflow-hidden border-y border-white/10 bg-gradient-to-r from-[#0b1b36] via-[#101a2e] to-[#07111f] px-5 py-16 sm:px-8 md:py-20 lg:px-10">
          <div className="absolute -right-16 -top-32 size-80 rounded-full border border-cyan/10" />
          <div className="relative mx-auto flex max-w-[1220px] flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div><p className="mb-3 text-[10px] font-bold tracking-[2px] text-cyan">PRÓXIMO PASSO</p><h2 className="font-display text-2xl font-semibold sm:text-3xl">Vamos falar sobre seus dados?</h2><p className="mt-3 max-w-[600px] text-xs leading-6 text-slate-400 sm:text-sm">Conte sobre seu projeto. A equipe LeadSoft pode ajudar com uma conversa técnica e os próximos passos.</p></div>
            <a className="inline-flex min-h-12 shrink-0 items-center gap-3 rounded-full bg-gradient-to-r from-cyan to-electric px-6 font-display text-xs font-semibold text-white transition-all duration-500 hover:-translate-y-1 sm:text-sm" href="https://wa.me/5541991777488?text=Ol%C3%A1%2C%20quero%20conversar%20sobre%20RavenDB%20com%20a%20LeadSoft." target="_blank" rel="noreferrer">Agende um briefing <span aria-hidden="true">↗</span></a>
          </div>
        </section>
      </ScrollReveal>

      <SiteFooter />
    </main>
  );
}