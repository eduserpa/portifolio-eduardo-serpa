import { motion } from "framer-motion";
import { BackgroundBeams } from "./ui/background-beams";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[calc(100vh-73px)] items-center overflow-hidden px-6 py-16 sm:px-10">
      <BackgroundBeams className="opacity-40" />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-lime/10 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-0 h-[380px] w-[380px] rounded-full bg-amber/10 blur-[120px]"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-[1120px] grid-cols-1 items-center gap-12 lg:grid-cols-[1.3fr_0.9fr] lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="mb-4 font-mono text-[13px] uppercase tracking-[0.12em] text-amber">Indaiatuba, SP — Brasil</p>
          <h1 className="text-[clamp(48px,7.5vw,92px)] font-bold leading-[0.98]">
            Eduardo
            <br />
            Serpa
          </h1>
          <p className="mb-5 mt-5 text-[clamp(17px,2vw,20px)] font-medium">
            Especialista em E-commerce &amp; Integrações
            <br />
            Automação e IA Aplicada
          </p>
          <p className="mb-8 max-w-[46ch] text-[15.5px] text-text-dim">
            5 anos de Shopify, pós-graduação em Inteligência Artificial pela UFPR e um jeito de trabalhar direto: concebo
            a arquitetura, dirijo a construção assistida por IA, valido cada etapa e opero o resultado.
          </p>
          <div className="mb-7 flex flex-wrap gap-3.5">
            <a
              href="#projetos"
              className="inline-flex items-center rounded-full bg-lime px-6 py-3 text-[14.5px] font-semibold text-bg transition-transform hover:-translate-y-0.5 hover:bg-[#d9f299]"
            >
              Ver projetos
            </a>
            <a
              href="#contato"
              className="inline-flex items-center rounded-full border border-line px-6 py-3 text-[14.5px] font-semibold transition-all hover:-translate-y-0.5 hover:border-amber hover:text-amber"
            >
              Falar comigo
            </a>
          </div>
          <div className="flex flex-wrap gap-5 font-mono text-[13.5px] text-text-dim">
            <a href="https://www.linkedin.com/in/eduardoserpa" target="_blank" rel="noopener" className="hover:text-lime">
              LinkedIn ↗
            </a>
            <a href="https://github.com/eduserpa" target="_blank" rel="noopener" className="hover:text-lime">
              GitHub ↗
            </a>
            <a href="https://lucerpy.com.br" target="_blank" rel="noopener" className="hover:text-lime">
              Lucerpy ↗
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative justify-self-center"
        >
          <div className="relative aspect-[4/5] w-[min(340px,72vw)] overflow-hidden rounded-[20px] border border-line shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)]">
            <div className="pointer-events-none absolute inset-0 z-10 mix-blend-overlay [background:linear-gradient(200deg,rgba(204,236,123,0.16),rgba(12,13,17,0.15)_45%,rgba(232,166,89,0.10))]" />
            <img
              src="/eduardo.jpg"
              alt="Retrato de Eduardo Serpa"
              width={340}
              height={425}
              className="h-full w-full object-cover [filter:grayscale(0.15)_contrast(1.05)]"
            />
          </div>
          <span className="absolute -bottom-[18px] left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-amber px-3.5 py-1.5 font-mono text-xs text-bg">
            // status: disponível
          </span>
        </motion.div>
      </div>
    </section>
  );
}
