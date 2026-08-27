export function Footer() {
  return (
    <footer className="mx-auto flex max-w-[1120px] flex-wrap justify-between gap-2 gap-x-6 px-6 py-12 font-mono text-[12.5px] text-text-faint sm:px-10">
      <span>Eduardo Serpa © 2026</span>
      <span>Indaiatuba, São Paulo, Brasil</span>
      <span>
        Feito com <span className="text-amber">&lt;3</span> por{" "}
        <a href="https://lucerpy.com.br/" target="_blank" rel="noopener" className="border-b border-line text-text-dim hover:border-lime hover:text-lime">
          Lucerpy
        </a>
      </span>
    </footer>
  );
}
