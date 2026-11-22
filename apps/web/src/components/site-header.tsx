import { Brand } from "@/components/brand";

const navigation = [
  { label: "Início", href: "#inicio", active: true },
  { label: "Para Você", href: "#solucoes" },
  { label: "Empresa", href: "#empresa" },
  { label: "Carreira", href: "#carreira" },
  { label: "RavenDB", href: "#ravendb" },
];

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-20 grid h-[106px] grid-cols-[1fr_auto] grid-rows-[48px_32px] items-center border-b border-white/5 bg-deep/75 backdrop-blur-md px-5 py-3 md:flex md:h-[100px] md:justify-between md:px-7 xl:px-[max(38px,calc((100vw-1700px)/2))]">
      <Brand />
      <nav className="order-3 col-span-2 flex min-w-0 items-center gap-5 overflow-x-auto whitespace-nowrap font-display text-sm text-slate-100 [scrollbar-width:none] md:absolute md:left-1/2 md:top-1/2 md:order-none md:-translate-x-1/2 md:-translate-y-1/2 md:gap-[clamp(22px,3vw,51px)] md:overflow-visible md:text-lg [&::-webkit-scrollbar]:hidden" aria-label="Navegação principal">
        {navigation.map((item) => (
          <a
            className={item.active ? "border-b-2 border-cyan py-1.5 transition-colors hover:text-cyan" : "border-b-2 border-transparent py-1.5 transition-colors hover:border-cyan hover:text-cyan"}
            href={item.href}
            key={item.href}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
