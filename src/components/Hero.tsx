import { motion } from "framer-motion";
import { KineticGrid } from "./ui/kinetic-grid";
import { Tilt } from "./ui/tilt";
import { Spotlight } from "./ui/spotlight";
import { TextReveal } from "./ui/text-reveal";
import { ShimmerButton } from "./ui/shimmer-button";
import { PhotoOrbit } from "./ui/photo-orbit";
import { CircularBorderBeam } from "./ui/circular-border-beam";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[calc(100vh-73px)] items-center overflow-hidden px-6 py-16 sm:px-10">
      <KineticGrid className="opacity-70" />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-lime/10 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-0 h-[380px] w-[380px] rounded-full bg-amber/10 blur-[120px]"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-[1160px] grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-12">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 font-mono text-[13px] uppercase tracking-[0.12em] text-amber"
          >
            Indaiatuba, SP, Brasil
          </motion.p>

          <h1 className="text-[clamp(48px,7.5vw,92px)] font-bold leading-[0.98]">
            <TextReveal as="span" per="char" preset="fade-in-blur" speedReveal={2.4} speedSegment={1.8} className="block">
              Eduardo
            </TextReveal>
            <TextReveal
              as="span"
              per="char"
              preset="fade-in-blur"
              speedReveal={2.4}
              speedSegment={1.8}
              delay={0.22}
              className="block"
            >
              Serpa
            </TextReveal>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mb-5 mt-5 text-[clamp(17px,2vw,20px)] font-medium"
          >
            Especialista em E-commerce &amp; Integrações
            <br />
            Automação e IA Aplicada
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.05 }}
            className="mb-8 max-w-[46ch] text-[15.5px] text-text-dim"
          >
            5 anos de Shopify, pós-graduação em Inteligência Artificial pela UFPR e um jeito de trabalhar direto: concebo
            a arquitetura, dirijo a construção assistida por IA, valido cada etapa e opero o resultado.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mb-7 flex flex-wrap items-center gap-3.5"
          >
            <ShimmerButton href="#projetos" shimmerColor="#CCEC7B" className="rounded-full">
              Ver projetos
            </ShimmerButton>
            <a
              href="#contato"
              className="inline-flex items-center rounded-full border border-line px-6 py-3 text-[14.5px] font-semibold transition-all hover:-translate-y-0.5 hover:border-amber hover:text-amber"
            >
              Falar comigo
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.35 }}
            className="flex flex-wrap gap-5 font-mono text-[13.5px] text-text-dim"
          >
            <a href="https://www.linkedin.com/in/eduardo-serpa" target="_blank" rel="noopener" className="hover:text-lime">
              LinkedIn ↗
            </a>
            <a href="https://github.com/eduserpa" target="_blank" rel="noopener" className="hover:text-lime">
              GitHub ↗
            </a>
            <a href="https://lucerpy.com.br" target="_blank" rel="noopener" className="hover:text-lime">
              Lucerpy ↗
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative justify-self-center"
        >
          <PhotoOrbit className="hidden sm:block" />

          <Tilt
            rotationFactor={10}
            springOptions={{ stiffness: 150, damping: 15 }}
            className="group relative z-10 mx-auto rounded-full"
            style={{ width: "min(560px,88vw)", height: "min(560px,88vw)" }}
          >
            <CircularBorderBeam ringWidth={4} duration={4} />
            <Spotlight className="z-20 from-lime/50 via-lime/15 to-transparent blur-2xl" size={300} />
            <div className="absolute inset-2 overflow-hidden rounded-full border-[4px] border-bg shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)]">
              <div className="pointer-events-none absolute inset-0 z-10 mix-blend-overlay [background:linear-gradient(200deg,rgba(204,236,123,0.16),rgba(12,13,17,0.15)_45%,rgba(232,166,89,0.10))]" />
              <img
                src="/eduardo.jpg"
                alt="Retrato de Eduardo Serpa"
                width={560}
                height={560}
                className="h-full w-full object-cover object-[center_15%] [filter:grayscale(0.15)_contrast(1.05)]"
              />
            </div>
          </Tilt>
          <span className="absolute -bottom-2 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-full bg-amber px-3.5 py-1.5 font-mono text-xs text-bg">
            // status: disponível
          </span>
        </motion.div>
      </div>
    </section>
  );
}
