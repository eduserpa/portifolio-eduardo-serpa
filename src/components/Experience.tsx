import { RefreshCw, PenLine, ShoppingCart, Wrench, Briefcase } from "lucide-react";
import { Reveal } from "./Reveal";
import { timeline } from "@/data";

const icons = [RefreshCw, PenLine, ShoppingCart, Wrench, Briefcase];

export function Experience() {
  return (
    <section id="experiencia" className="mx-auto max-w-[1120px] border-t border-line-soft px-6 py-24 sm:px-10">
      <Reveal>
        <span className="font-mono text-[13px] uppercase tracking-[0.12em] text-amber">03 — Experiência</span>
        <h2 className="mt-2.5 max-w-[720px] text-[clamp(26px,3.4vw,38px)] font-semibold">
          Uma trajetória construída em cima do próprio e-commerce.
        </h2>
      </Reveal>

      <ol className="relative ml-6 mt-12 border-l border-line-soft">
        {timeline.map((item, i) => {
          const Icon = icons[i];
          return (
            <Reveal key={item.title} delay={i * 0.06}>
              <li className="relative grid grid-cols-1 gap-2 border-t border-line-soft py-7 first:border-t-0 sm:grid-cols-[140px_1fr] sm:gap-8">
                <div className="absolute -left-6 top-7 flex h-[34px] w-[34px] -translate-x-1/2 items-center justify-center rounded-full border border-line bg-bg">
                  <Icon className="h-[17px] w-[17px] stroke-[1.5] text-lime" />
                </div>
                <div className="pt-0.5 font-mono text-[13px] text-text-faint sm:pl-5">{item.when}</div>
                <div>
                  <h3 className="mb-2 text-[17px] font-semibold">{item.title}</h3>
                  <p className="max-w-[68ch] text-[14.5px] text-text-dim">{item.body}</p>
                </div>
              </li>
            </Reveal>
          );
        })}
      </ol>
    </section>
  );
}
