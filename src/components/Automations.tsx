import { Terminal } from "lucide-react";
import { Reveal } from "./Reveal";
import { BentoGrid, type BentoItem } from "./ui/bento-grid";
import { automations } from "@/data";

export function Automations() {
  const items: BentoItem[] = automations.map((a) => ({
    title: a.title,
    description: a.description,
    tag: a.tag,
    href: a.href,
    featured: a.featured,
    colSpan: a.colSpan,
    icon: <Terminal className="h-5 w-5 stroke-[1.5] text-text-faint transition-colors group-hover:text-lime" />,
  }));

  return (
    <section id="automacoes" className="mx-auto max-w-[1120px] border-t border-line-soft px-6 py-24 sm:px-10">
      <Reveal>
        <span className="font-mono text-[13px] uppercase tracking-[0.12em] text-amber">05 — Automações</span>
        <h2 className="mt-2.5 max-w-[720px] text-[clamp(26px,3.4vw,38px)] font-semibold">
          Integrações e automações que publiquei em código aberto.
        </h2>
        <p className="mt-3.5 max-w-[720px] text-[15px] text-text-dim">
          Ferramentas que construí para resolver dores reais de operação — Shopify, TalentLMS, ActiveCampaign e
          SharePoint conversando entre si. Código no{" "}
          <a
            href="https://github.com/eduserpa"
            target="_blank"
            rel="noopener"
            className="border-b border-amber/40 text-amber hover:border-lime hover:text-lime"
          >
            GitHub
          </a>
          .
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mt-10">
        <BentoGrid items={items} cardClassName="p-5" />
      </Reveal>

      <a
        href="https://github.com/eduserpa?tab=repositories"
        target="_blank"
        rel="noopener"
        className="mt-9 inline-block border-b border-lime/40 font-mono text-sm text-lime hover:border-white hover:text-white"
      >
        Ver todos os repositórios no GitHub ↗
      </a>
    </section>
  );
}
