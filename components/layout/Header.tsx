"use client";

import { useState } from "react";

const links = [
  { href: "inicio",   label: "Início" },
  { href: "sobre",    label: "Sobre" },
  { href: "projetos", label: "Projetos" },
  { href: "contato",  label: "Contato" },
];

function scrollSuave(id: string) {
  const elemento = document.getElementById(id);
  if (!elemento) return;

  const inicio = window.scrollY;
  const destino = elemento.getBoundingClientRect().top + window.scrollY - 64;
  const distancia = destino - inicio;
  const duracao = 1400;
  let startTime: number | null = null;

  function easeInOutCubic(t: number) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function animar(timestamp: number) {
    if (!startTime) startTime = timestamp;
    const progresso = Math.min((timestamp - startTime) / duracao, 1);
    window.scrollTo(0, inicio + distancia * easeInOutCubic(progresso));
    if (progresso < 1) requestAnimationFrame(animar);
  }

  requestAnimationFrame(animar);
}

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
    e.preventDefault();
    scrollSuave(id);
    setMenuAberto(false);
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-sm border-b border-zinc-800">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#inicio"
          onClick={(e) => handleClick(e, "inicio")}
          className="font-mono text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
        >
          <span className="text-blue-400">{"<"}</span>
          auridinei
          <span className="text-blue-400">{" />"}</span>
        </a>

        {/* Navegação desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={`#${link.href}`}
              onClick={(e) => handleClick(e, link.href)}
              className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/curriculo.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm px-4 py-2 rounded-md border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition-all"
          >
            Currículo
          </a>
        </nav>

        {/* Botão mobile */}
        <button
          className="md:hidden text-zinc-400 hover:text-zinc-100"
          onClick={() => setMenuAberto(!menuAberto)}
          aria-label="Abrir menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuAberto ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Menu mobile */}
      {menuAberto && (
        <div className="md:hidden border-t border-zinc-800 bg-zinc-950">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={`#${link.href}`}
                onClick={(e) => handleClick(e, link.href)}
                className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/curriculo.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
            >
              Currículo →
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}