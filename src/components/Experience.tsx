import { RefreshCw, PenLine, ShoppingCart, Wrench, Briefcase } from "lucide-react";
import { Reveal } from "./Reveal";
import { TracingBeam } from "./ui/tracing-beam";
import { timeline } from "@/data";

const icons = [RefreshCw, PenLine, ShoppingCart, Wrench, Briefcase];

export function Experience() {
  return (
    <section id="experiencia" className="mx-auto max-w-[1120px] border-t border-line-soft px-6 py-24 sm:px-10">
      <Reveal>
        <span className="font-mono text-[13px] uppercase tracking-[0.12em] text-amber">03 / Experiência</span>
        <h2 className="mt-2.5 max-w-[720px] text-[clamp(26px,3.4vw,38px)] font-semibold">
          Uma trajetória construída em cima do próprio e-commerce.
        </h2>
      </Reveal>

      <div className="mt-16 pl-8 md:pl-20">
        <TracingBeam>
          <div className="flex flex-col gap-14">
            {timeline.map((item, i) => {
              const Icon = icons[i];
              return (
                <Reveal key={item.title} delay={i * 0.05}>
                  <div className="flex items-center gap-2.5 font-mono text-[13px] text-text-faint">
                    <Icon className="h-4 w-4 stroke-[1.5] text-lime" />
                    {item.when}
                  </div>
                  <h3 className="mb-2.5 mt-3 text-[17px] font-semibold">{item.title}</h3>
                  <p className="max-w-[68ch] text-[14.5px] text-text-dim">{item.body}</p>
                </Reveal>
              );
            })}
          </div>
        </TracingBeam>
      </div>
    </section>
  );
}
