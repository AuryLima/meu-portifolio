import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// ─── Fontes ───────────────────────────────────────────────────────────────────
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira",
  display: "swap",
});

// ─── SEO / Metadados ──────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: {
    default: "Aury Abreu | Desenvolvedor Full Stack",
    template: "%s | Aury Abreu",
  },
  description:
    "Portfólio de Aury Abreu — desenvolvedor full stack especializado em React, Next.js e Node.js.",
  keywords: ["desenvolvedor", "full stack", "react", "next.js", "portfólio"],
  authors: [{ name: "Seu Nome", url: "https://seusite.com" }],
  creator: "Seu Nome",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://seusite.com",
    siteName: "Seu Nome | Portfólio",
    title: "Seu Nome | Desenvolvedor Full Stack",
    description:
      "Portfólio de Seu Nome — desenvolvedor full stack especializado em React, Next.js e Node.js.",
    images: [
      {
        url: "/og-image.jpg", // coloque uma imagem 1200x630 em /public
        width: 1200,
        height: 630,
        alt: "Seu Nome — Portfólio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Seu Nome | Desenvolvedor Full Stack",
    description:
      "Portfólio de Seu Nome — desenvolvedor full stack especializado em React, Next.js e Node.js.",
    images: ["/og-image.jpg"],
    creator: "@seutwitter",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// ─── Layout Raiz ──────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`
          ${inter.variable}
          ${firaCode.variable}
          font-sans
          bg-zinc-950
          text-zinc-100
          antialiased
          min-h-screen
          flex
          flex-col
        `}
      >
        {/* Cabeçalho fixo */}
        <Header />

        {/* Conteúdo principal */}
        <main className="flex-1">
          {children}
        </main>

        {/* Rodapé */}
        <Footer />
      </body>
    </html>
  );
}
