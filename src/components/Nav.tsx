const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#stack", label: "Stack" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#projetos", label: "Projetos" },
  { href: "#automacoes", label: "Automações" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-line-soft bg-bg/70 px-6 py-5 backdrop-blur-md sm:px-10">
      <a href="#top" className="font-mono text-[15px] font-medium tracking-wide">
        ES<span className="text-lime">.</span>
      </a>
      <nav className="flex items-center gap-4 text-sm text-text-dim sm:gap-8">
        {links.map((l) => (
          <a key={l.href} href={l.href} className="hidden transition-colors hover:text-text sm:inline">
            {l.label}
          </a>
        ))}
        <a
          href="#contato"
          className="rounded-full bg-lime px-4 py-2 font-semibold text-bg transition-colors hover:bg-[#d9f299]"
        >
          Contato
        </a>
      </nav>
    </header>
  );
}
