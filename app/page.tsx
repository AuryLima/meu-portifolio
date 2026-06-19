"use client";

import { useEffect, useState } from "react";

// ─── Dados ────────────────────────────────────────────────────────────────────

const frases = [
  "Desenvolvedor Full Stack",
  "Especialista em React & Next.js",
  "Apaixonado por Desenvolvimento Web",
  "Construindo soluções modernas",
];

const skills = [
  { categoria: "Frontend", itens: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { categoria: "Backend", itens: ["Node.js", "NestJS", "REST API"] },
  { categoria: "Banco de Dados", itens: ["PostgreSQL", "MySQL",] },
  { categoria: "DevOps & Ferramentas", itens: ["Git", "Docker", "Vercel", "Linux"] },
];

const projetos = [
  {
    titulo: "Converor de Moedas",
    descricao: "Aplicação criada usando python.",
    tags: ["Python", "Conversor de Moedas", "currency converter"],
    github: "https://github.com/AuryLima/CONVERSOR-DE-MOEDAS",
    demo: "#",
  },
  {
    titulo: "Controle de Gastos",
    descricao: "Aplicação criada para o usuario controlar seus gastos mensais.",
    tags: ["Python", "Controle de Gastos", "Expense Control"],
    github: "https://github.com/AuryLima/CONTROLE-GASTOS",
    demo: "#",
  },
  {
    titulo: "Calculadora de Juros Simples",
    descricao: "Aplicação criada para calcular juros simples.",
    tags: ["Python", "Calculadora", "Simple interest"],
    github: "https://github.com/AuryLima/CALCULADORA-JUROS-SIMPLES",
    demo: "#",
  },
];

// ─── Componente Principal ─────────────────────────────────────────────────────

export default function Home() {
  const [fraseIndex, setFraseIndex] = useState(0);
  const [texto, setTexto] = useState("");
  const [deletando, setDeletando] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const frase = frases[fraseIndex];
    if (!deletando && charIndex < frase.length) {
      const t = setTimeout(() => { setTexto(frase.slice(0, charIndex + 1)); setCharIndex(p => p + 1); }, 80);
      return () => clearTimeout(t);
    }
    if (!deletando && charIndex === frase.length) {
      const t = setTimeout(() => setDeletando(true), 2000);
      return () => clearTimeout(t);
    }
    if (deletando && charIndex > 0) {
      const t = setTimeout(() => { setTexto(frase.slice(0, charIndex - 1)); setCharIndex(p => p - 1); }, 40);
      return () => clearTimeout(t);
    }
    if (deletando && charIndex === 0) {
      setDeletando(false);
      setFraseIndex(p => (p + 1) % frases.length);
    }
  }, [charIndex, deletando, fraseIndex]);

  return (
    <>
      {/* ── INÍCIO ── */}
      <section id="inicio" className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-3xl w-full">
          <p className="font-mono text-blue-400 text-sm mb-4 tracking-widest uppercase">
            Olá, mundo! Eu sou
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-zinc-100 mb-4 leading-tight">
            Auridinei<br />
            <span className="text-blue-500">Abreu</span>
          </h1>
          <div className="h-10 mb-8 flex items-center">
            <span className="text-xl md:text-2xl text-zinc-400 font-mono">
              {texto}
              <span className="animate-pulse text-blue-400">|</span>
            </span>
          </div>
          <p className="text-zinc-400 text-lg max-w-xl mb-10 leading-relaxed">
            Construo aplicações web completas — do banco de dados à interface —
            com foco em performance, boas práticas e código limpo.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/AuryLima?tab=repositories"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-md font-medium transition-colors"
            >
              Ver Projetos
            </a>
            <a
              href="#contato"
              className="px-6 py-3 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-zinc-100 rounded-md font-medium transition-colors"
            >
              Entrar em Contato
            </a>
          </div>
          <div className="flex items-center gap-6 mt-12">
            <a href="https://github.com/AuryLima" target="_blank" rel="noopener noreferrer"
              className="text-zinc-500 hover:text-zinc-100 transition-colors text-sm font-mono flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              AuryLima
            </a>
            <a href="https://www.linkedin.com/in/auridinei" target="_blank" rel="noopener noreferrer"
              className="text-zinc-500 hover:text-zinc-100 transition-colors text-sm font-mono flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Auridinei Lima
            </a>
          </div>
        </div>
      </section>

      {/* ── SOBRE ── */}
      <section id="sobre" className="py-24 px-6 border-t border-zinc-800">
        <div className="max-w-3xl mx-auto">
          <p className="font-mono text-blue-400 text-sm mb-2 tracking-widest uppercase">Quem sou eu</p>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-500 mb-8">Sobre mim</h2>
          <p className="text-zinc-400 text-lg leading-relaxed mb-6">
            Sou um desenvolvedor Full Stack apaixonado por criar soluções digitais completas e eficientes.
            Trabalho com as principais tecnologias do mercado, tanto no frontend quanto no backend,
            sempre buscando escrever código limpo, escalável e bem documentado.
          </p>
          <p className="text-zinc-400 text-lg leading-relaxed mb-12">
            Gosto de transformar ideias em produtos reais, desde a arquitetura do banco de dados
            até a experiência do usuário na tela.
          </p>

          {/* Skills */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((grupo) => (
              <div key={grupo.categoria} className="bg-zinc-900 border border-zinc-800 rounded-lg p-5">
                <h3 className="text-sm font-mono text-blue-400 mb-3 uppercase tracking-wider">
                  {grupo.categoria}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {grupo.itens.map((item) => (
                    <span key={item} className="text-sm text-zinc-300 bg-zinc-800 px-3 py-1 rounded-full">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJETOS ── */}
      <section id="projetos" className="py-24 px-6 border-t border-zinc-800">
        <div className="max-w-3xl mx-auto">
          <p className="font-mono text-blue-400 text-sm mb-2 tracking-widest uppercase">O que construí</p>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-500 mb-12">Projetos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projetos.map((projeto) => (
              <div key={projeto.titulo} className="bg-zinc-900 border border-zinc-800 rounded-lg p-5 flex flex-col gap-4 hover:border-zinc-600 transition-colors">
                <h3 className="text-zinc-100 font-semibold text-lg">{projeto.titulo}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed flex-1">{projeto.descricao}</p>
                <div className="flex flex-wrap gap-2">
                  {projeto.tags.map((tag) => (
                    <span key={tag} className="text-xs text-blue-400 bg-blue-950 px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 pt-2 border-t border-zinc-800">
                  <a href={projeto.github} target="_blank" rel="noopener noreferrer"
                    className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">
                    GitHub →
                  </a>
                  <a href={projeto.demo} target="_blank" rel="noopener noreferrer"
                    className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">
                    Demo →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTATO ── */}
      <section id="contato" className="py-24 px-6 border-t border-zinc-800">
        <div className="max-w-3xl mx-auto">
          <p className="font-mono text-blue-400 text-sm mb-2 tracking-widest uppercase">Bora conversar</p>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-500 mb-4">Contato</h2>
          <p className="text-zinc-400 text-lg mb-10 leading-relaxed">
            Estou aberto a novas oportunidades, projetos freelance
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://github.com/AuryLima"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-4 bg-zinc-900 border border-zinc-800 hover:border-zinc-600 rounded-lg text-zinc-300 hover:text-zinc-100 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/AuridineiLima"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-4 bg-zinc-900 border border-zinc-800 hover:border-zinc-600 rounded-lg text-zinc-300 hover:text-zinc-100 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
