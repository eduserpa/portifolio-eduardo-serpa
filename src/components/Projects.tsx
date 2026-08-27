import { ShoppingCart, Building2, LayoutDashboard, TrendingUp, Shirt, FileText } from "lucide-react";
import { Reveal } from "./Reveal";
import { BentoGrid, type BentoItem } from "./ui/bento-grid";
import { projects } from "@/data";

const iconByTag: Record<string, typeof ShoppingCart> = {
  "E-commerce": ShoppingCart,
  Institucional: Building2,
  App: LayoutDashboard,
};

export function Projects() {
  const items: BentoItem[] = projects.map((p) => {
    const Icon = iconByTag[p.tag] ?? FileText;
    return {
      title: p.title,
      description: p.description,
      tag: p.tag,
      stats: p.stats,
      href: p.href,
      featured: p.featured,
      colSpan: p.colSpan,
      icon: <Icon className="h-5 w-5 stroke-[1.5] text-text-faint transition-colors group-hover:text-lime" />,
    };
  });

  return (
    <section id="projetos" className="mx-auto max-w-[1120px] border-t border-line-soft px-6 py-24 sm:px-10">
      <Reveal>
        <span className="font-mono text-[13px] uppercase tracking-[0.12em] text-amber">04 — Projetos</span>
        <h2 className="mt-2.5 max-w-[720px] text-[clamp(26px,3.4vw,38px)] font-semibold">
          Cases reais, muitos construídos na Lucerpy.
        </h2>
        <p className="mt-3.5 max-w-[720px] text-[15px] text-text-dim">
          Uma seleção de projetos de e-commerce e sites institucionais, incluindo trabalhos autorais assinados pela
          minha própria agência, a{" "}
          <a
            href="https://lucerpy.com.br"
            target="_blank"
            rel="noopener"
            className="border-b border-amber/40 text-amber hover:border-lime hover:text-lime"
          >
            Lucerpy
          </a>
          .
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mt-10">
        <BentoGrid items={items} />
      </Reveal>

      <a
        href="https://lucerpy.com.br/projetos"
        target="_blank"
        rel="noopener"
        className="mt-9 inline-block border-b border-lime/40 font-mono text-sm text-lime hover:border-white hover:text-white"
      >
        Ver portfólio completo na Lucerpy ↗
      </a>
    </section>
  );
}
