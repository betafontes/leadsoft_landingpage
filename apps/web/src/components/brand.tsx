type BrandProps = { footer?: boolean };

export function Brand({ footer = false }: BrandProps) {
  return (
    <a
      href="/#inicio"
      aria-label="LeadSoft, início"
      className="flex w-fit flex-col items-start transition-opacity hover:opacity-80"
    >
      <img
        className={footer ? "block w-[150px] max-w-full" : "block w-[140px] max-w-full"}
        src="/leadsoft-logo.svg"
        alt="LeadSoft"
      />
      <span className="ml-1 mt-0.5 font-mono text-[8px] font-medium tracking-[1.7px] text-slate-300">
        SOLUÇÕES WEB
      </span>
    </a>
  );
}