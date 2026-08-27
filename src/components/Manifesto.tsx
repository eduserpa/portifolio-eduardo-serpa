import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";
import { TextReveal } from "./ui/text-reveal";
import GradientRevealText, { type GradientRevealTextRef } from "./ui/gradient-reveal-text";

export function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [trigger, setTrigger] = useState(false);
  const gradA = useRef<GradientRevealTextRef>(null);
  const gradB = useRef<GradientRevealTextRef>(null);

  useEffect(() => {
    if (inView) {
      setTrigger(true);
      const t1 = setTimeout(() => gradA.current?.animate(), 900);
      const t2 = setTimeout(() => gradB.current?.animate(), 1200);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    }
  }, [inView]);

  return (
    <section className="relative overflow-hidden border-t border-line-soft px-6 py-28 sm:px-10">
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime/[0.04] blur-[140px]" />
      <div ref={ref} className="relative mx-auto max-w-[880px] text-center">
        <TextReveal
          as="p"
          per="word"
          preset="fade-in-blur"
          trigger={trigger}
          speedReveal={0.9}
          className="text-[clamp(28px,4.6vw,52px)] font-display font-semibold leading-[1.15] text-text"
        >
          Concebo, construo com IA, valido e opero — sem soltar a mão do processo em nenhuma etapa.
        </TextReveal>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 font-mono text-sm text-text-dim">
          <span>Feito com</span>
          <GradientRevealText ref={gradA} trigger="inView" direction="ltr" duration={0.6} className="font-semibold">
            e-commerce
          </GradientRevealText>
          <span>+</span>
          <GradientRevealText
            ref={gradB}
            trigger="inView"
            direction="ltr"
            duration={0.6}
            gradient="linear-gradient(to right, #E8A659, #CCEC7B)"
            className="font-semibold"
          >
            IA aplicada
          </GradientRevealText>
          <span>de verdade.</span>
        </div>
      </div>
    </section>
  );
}
