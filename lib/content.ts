import type { ComponentType } from "react";
import type { IMG } from "./images";

export type ContentMeta = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readingTime: string;
  image: keyof typeof IMG;
};

export type ContentEntry = {
  meta: ContentMeta;
  load: () => Promise<{ default: ComponentType }>;
};

/**
 * Local MDX registry. Post bodies live in /content as .mdx files; metadata is
 * declared here so list pages can render without compiling every post.
 * Add a new entry to publish a post.
 */
export const blogPosts: ContentEntry[] = [
  {
    meta: {
      slug: "vocabulario-em-contexto",
      title: "Vocabulário em contexto: pare de decorar listas",
      excerpt:
        "Por que palavras soltas escapam da memória e como aprender vocabulário dentro de textos e diálogos reais.",
      date: "2026-05-28",
      category: "Método",
      readingTime: "5 min",
      image: "street",
    },
    load: () => import("@/content/blog/vocabulario-em-contexto.mdx"),
  },
  {
    meta: {
      slug: "repeticao-espacada",
      title: "Repetição espaçada: por que você esquece e como lembrar",
      excerpt:
        "A curva do esquecimento explica por que decorar não basta. Entenda como revisar na hora certa muda tudo.",
      date: "2026-05-12",
      category: "Memória",
      readingTime: "4 min",
      image: "dunes",
    },
    load: () => import("@/content/blog/repeticao-espacada.mdx"),
  },
  {
    meta: {
      slug: "conversar-com-ia",
      title: "Falar desde o primeiro dia: conversando com IA",
      excerpt:
        "Esperar estar pronto para falar é o erro mais comum. Veja como praticar conversação sem medo, desde o início.",
      date: "2026-04-30",
      category: "Conversação",
      readingTime: "6 min",
      image: "cityDusk",
    },
    load: () => import("@/content/blog/conversar-com-ia.mdx"),
  },
];

export const projects: ContentEntry[] = [
  {
    meta: {
      slug: "ingles-em-90-dias",
      title: "De zero a uma conversa em inglês em 90 dias",
      excerpt:
        "Como a leitura imersiva diária e a prática com IA levaram um iniciante à primeira conversa real.",
      date: "2026-03-18",
      category: "História",
      readingTime: "Caso",
      image: "planeWindow",
    },
    load: () => import("@/content/projetos/ingles-em-90-dias.mdx"),
  },
  {
    meta: {
      slug: "retomando-o-frances",
      title: "Como retomei o francês depois de 10 anos",
      excerpt:
        "Reativar um idioma adormecido com revisão espaçada e áudio nativo — sem começar do zero.",
      date: "2026-02-22",
      category: "História",
      readingTime: "Caso",
      image: "paris",
    },
    load: () => import("@/content/projetos/retomando-o-frances.mdx"),
  },
];

export function getEntry(entries: ContentEntry[], slug: string) {
  return entries.find((e) => e.meta.slug === slug);
}
