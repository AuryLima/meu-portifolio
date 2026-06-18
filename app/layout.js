export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-8 mt-20">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-zinc-500">
          © {new Date().getFullYear()} Auridinei Abreu. Feito com Next.js & Tailwind.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/seuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-500 hover:text-zinc-100 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/seuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-500 hover:text-zinc-100 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}