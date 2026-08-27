import { Lightbulb, Code2, ShieldCheck, Gauge } from "lucide-react";
import { Reveal } from "./Reveal";

const process = [
  { icon: Lightbulb, title: "Concepção", body: "Entendo o problema e desenho a arquitetura da solução." },
  { icon: Code2, title: "Construção", body: "Dirijo o desenvolvimento assistido por IA, linha a linha." },
  { icon: ShieldCheck, title: "Validação", body: "Testo e confiro cada etapa antes de seguir adiante." },
  { icon: Gauge, title: "Operação", body: "Coloco no ar e acompanho o resultado de perto." },
];

export function About() {
  return (
    <section id="sobre" className="mx-auto max-w-[1120px] border-t border-line-soft px-6 py-24 sm:px-10">
      <Reveal>
        <span className="font-mono text-[13px] uppercase tracking-[0.12em] text-amber">01 — Sobre</span>
        <h2 className="mt-2.5 max-w-[720px] text-[clamp(26px,3.4vw,38px)] font-semibold">
          Da concepção à operação, sem soltar a mão do processo.
        </h2>
      </Reveal>

      <Reveal delay={0.1} className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="text-[19px] leading-[1.65] text-text">
            Atuo com e-commerce há cinco anos — temas, catálogo, SEO e integrações no Shopify — e sou pós-graduado em
            Inteligência Artificial pela UFPR. Uso desenvolvimento assistido por IA para tirar soluções do papel:
            concebo a arquitetura, dirijo a construção, valido cada etapa e opero o resultado.
          </p>
          <p className="mt-4.5 text-[15px] text-text-dim">
            Hoje, no trabalho autônomo, construo uma plataforma que sincroniza Shopify, ERP fiscal e CRM — com proteção
            anti-loop e nenhuma escrita externa sem confirmação explícita — além de um pipeline em Python/Blender que
            transforma arquivos CAD em imagens de catálogo validadas contra desenho técnico.
          </p>
        </div>
        <div className="flex flex-col gap-5 border-t border-line pt-5 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
          <div className="flex flex-col">
            <strong className="font-display text-[26px] text-lime">5+</strong>
            <span className="text-[13px] text-text-faint">anos com Shopify</span>
          </div>
          <div className="flex flex-col">
            <strong className="font-display text-[26px] text-lime">UFPR</strong>
            <span className="text-[13px] text-text-faint">pós-graduação em IA</span>
          </div>
          <div className="flex flex-col">
            <strong className="font-display text-[26px] text-lime">FATEC-SP</strong>
            <span className="text-[13px] text-text-faint">Redes &amp; Segurança</span>
          </div>
        </div>
      </Reveal>

      <div className="relative mt-14 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-line-soft pt-12 sm:grid-cols-4">
        {process.map((step, i) => (
          <Reveal key={step.title} delay={i * 0.08}>
            <div className="flex flex-col gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-[10px] border border-line">
                <step.icon className="h-[18px] w-[18px] stroke-[1.5] text-lime" />
              </div>
              <h4 className="font-display text-base font-semibold">{step.title}</h4>
              <p className="text-[13.5px] text-text-dim">{step.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
