import { Brand } from "@/components/brand";

const footerLinks = [
  { label: "Empresa", href: "#empresa" },
  { label: "Para Você", href: "#solucoes" },
  { label: "Trabalhe Conosco", href: "#carreira" },
  { label: "RavenDB", href: "#ravendb" },
  { label: "Política de Privacidade ↗", href: "https://www.leadsoft.inf.br/Politica_de_Privacidade_LeadSoft.pdf", external: true },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/[0.07] bg-[#05070b]" id="contato">
      <div className="mx-auto grid grid-cols-2 gap-x-5 gap-y-8 max-w-[1220px] px-5 py-9 md:w-[calc(100%-72px)] md:grid-cols-[1.05fr_1fr_0.95fr] md:gap-12 md:py-11">
        <div className="col-span-2 flex flex-col items-start md:col-span-1">
          <Brand footer />
          <p className="mt-4 max-w-[230px] text-[12px] leading-relaxed text-slate-400">
            Soluções tecnológicas para negócios visionários.
          </p>
          <a className="mt-4 inline-flex items-center gap-2 text-xs text-slate-300 transition-colors duration-500 ease-in-out hover:text-cyan" href="https://www.instagram.com/leadsoft.inf/" target="_blank" rel="noreferrer">
            Instagram <span className="text-cyan">↗</span>
          </a>
        </div>

        <div className="order-3 col-span-1 min-w-0 space-y-3">
          <p className="text-[10px] font-bold tracking-[2px] text-slate-500">CONTATO</p>
          <a className="block w-fit break-all text-sm text-slate-100 transition-colors duration-500 ease-in-out hover:text-cyan" href="mailto:contato@leadsoft.inf.br">
            contato@leadsoft.inf.br
          </a>
          <a className="block w-fit text-xs leading-relaxed text-slate-400 transition-colors duration-500 ease-in-out hover:text-slate-200" href="https://maps.google.com/?q=Rua+Bras%C3%ADlio+Itiber%C3%AA+3953+Curitiba+PR" target="_blank" rel="noreferrer">
            R. Brasílio Itiberê, 3953, sala 302<br />Água Verde · Curitiba, PR · 80240-060
          </a>
          <a className="inline-flex w-fit flex-wrap items-center gap-2 rounded-full border border-white/10 px-3.5 py-2 text-xs text-slate-300 transition-colors duration-500 ease-in-out hover:border-cyan/50 hover:text-white" href="https://wa.me/5541991777488" target="_blank" rel="noreferrer">
            WhatsApp <span className="text-cyan">(41) 99177-7488</span>
          </a>
        </div>

        <nav className="order-2 col-span-1 md:col-span-1" aria-label="Links do rodapé">
          <p className="mb-4 text-[10px] font-bold tracking-[2px] text-slate-500">NAVEGUE</p>
          <div className="grid grid-cols-1 gap-y-3">
            {footerLinks.map((link) => (
              <a className="w-fit max-w-full break-words text-xs text-slate-300 transition-colors duration-500 ease-in-out hover:text-cyan" href={link.href} key={link.label} {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}>
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      </div>

      <div className="mx-auto flex max-w-[1220px] flex-col gap-3 border-t border-white/[0.07] px-5 py-4 text-[11px] text-slate-400 sm:flex-row sm:items-center sm:justify-between md:w-[calc(100%-72px)] md:px-0">
        <span className="font-medium"><b className="mr-1.5 text-sm text-cyan">λ</b>LeadSoft® Soluções Web</span>
        <span>© 2018–{new Date().getFullYear()} LeadSoft. Todos os direitos reservados.</span>
        <a className="w-fit text-[11px] font-semibold tracking-[1px] text-slate-300 transition-colors duration-500 ease-in-out hover:text-cyan" href="#inicio">VOLTAR AO TOPO ↑</a>
      </div>
    </footer>
  );
}