import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { Reveal } from "./Reveal";

const items = [
  { icon: Mail, label: "E-mail", value: "eduardo.m.serpa@gmail.com", href: "mailto:eduardo.m.serpa@gmail.com" },
  { icon: Phone, label: "Telefone", value: "(19) 99887-1795", href: "tel:+5519998871795" },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "/in/eduardoserpa ↗",
    href: "https://www.linkedin.com/in/eduardoserpa",
    external: true,
  },
  { icon: Github, label: "GitHub", value: "/eduserpa ↗", href: "https://github.com/eduserpa", external: true },
];

export function Contact() {
  return (
    <section id="contato" className="mx-auto max-w-[1120px] border-t border-line-soft px-6 py-24 sm:px-10">
      <Reveal>
        <span className="font-mono text-[13px] uppercase tracking-[0.12em] text-amber">07 / Contato</span>
        <h2 className="mt-2.5 max-w-[720px] text-[clamp(26px,3.4vw,38px)] font-semibold">
          Aberto a CLT ou PJ, remoto, híbrido ou presencial.
        </h2>
        <p className="mt-3.5 max-w-[720px] text-[15px] text-text-dim">
          Se meu perfil faz sentido pra sua vaga ou projeto, vamos conversar.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener" : undefined}
            className="flex flex-col gap-2 rounded-2xl border border-line p-5 transition-all hover:-translate-y-1 hover:border-lime"
          >
            <item.icon className="mb-1 h-[22px] w-[22px] stroke-[1.5] text-amber" />
            <span className="font-mono text-[11.5px] uppercase tracking-[0.08em] text-text-faint">{item.label}</span>
            <span className="break-words text-[15px] font-semibold">{item.value}</span>
          </a>
        ))}
      </Reveal>
    </section>
  );
}
