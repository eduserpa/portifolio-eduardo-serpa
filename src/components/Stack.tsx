import { Store, Server, Cpu, Megaphone } from "lucide-react";
import { Reveal } from "./Reveal";
import { Marquee } from "./ui/marquee";
import { stackGroups, stackTicker } from "@/data";

const icons = [Store, Server, Cpu, Megaphone];

export function Stack() {
  return (
    <section id="stack" className="border-t border-line-soft px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-[1120px]">
        <Reveal>
          <span className="font-mono text-[13px] uppercase tracking-[0.12em] text-amber">02 — Stack</span>
          <h2 className="mt-2.5 max-w-[720px] text-[clamp(26px,3.4vw,38px)] font-semibold">
            Ferramentas que uso no dia a dia.
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
          {stackGroups.map((group, i) => {
            const Icon = icons[i];
            return (
              <div key={group.title}>
                <div className="mb-3.5 flex h-[38px] w-[38px] items-center justify-center rounded-[10px] border border-line">
                  <Icon className="h-[18px] w-[18px] stroke-[1.5] text-amber" />
                </div>
                <h3 className="mb-4 text-sm font-semibold text-amber">{group.title}</h3>
                <ul className="flex flex-wrap gap-2.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-line px-3 py-1.5 font-mono text-[12.5px] text-text-dim transition-colors hover:border-lime hover:text-text"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </Reveal>
      </div>

      <Reveal delay={0.2} className="relative mt-16 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <Marquee pauseOnHover speed="slow">
          {stackTicker.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-line bg-bg-card px-5 py-2.5 font-mono text-sm text-text-dim"
            >
              {tech}
            </span>
          ))}
        </Marquee>
      </Reveal>
    </section>
  );
}
