import { Reveal } from "./Reveal";
import { education } from "@/data";

export function Education() {
  return (
    <section id="formacao" className="mx-auto max-w-[1120px] border-t border-line-soft px-6 py-24 sm:px-10">
      <Reveal>
        <span className="font-mono text-[13px] uppercase tracking-[0.12em] text-amber">06 — Formação &amp; Certificações</span>
        <h2 className="mt-2.5 max-w-[720px] text-[clamp(26px,3.4vw,38px)] font-semibold">
          Base técnica construída com constância.
        </h2>
      </Reveal>

      <Reveal delay={0.1} className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2">
        <div>
          <h3 className="mb-4.5 text-sm font-semibold text-amber">Formação acadêmica</h3>
          <ul>
            {education.academic.map((item) => (
              <li key={item.title} className="flex flex-col gap-1 border-t border-line-soft py-3.5 first:border-t-0">
                <strong className="text-[15px] font-semibold">{item.title}</strong>
                <span className="text-[13px] text-text-faint">{item.sub}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-4.5 text-sm font-semibold text-amber">Certificações</h3>
          <ul>
            {education.certifications.map((cert) => (
              <li
                key={cert}
                className="flex items-center justify-between gap-3 border-t border-line-soft py-3.5 text-[14.5px] text-text-dim first:border-t-0"
              >
                <span>{cert}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
