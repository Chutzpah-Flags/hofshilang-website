import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { Link } from "@/i18n/navigation";
import { projects, getEntry } from "@/lib/content";
import { IMG, unsplash } from "@/lib/images";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.meta.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = getEntry(projects, slug);
  if (!entry) return {};
  return { title: entry.meta.title, description: entry.meta.excerpt };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const entry = getEntry(projects, slug);
  if (!entry) notFound();

  const t = await getTranslations("projects");
  const { default: Project } = await entry.load();

  return (
    <article className="pb-24">
      <header className="section-dark relative isolate overflow-hidden pb-14 pt-36 sm:pt-44">
        <Image
          src={unsplash(IMG[entry.meta.image].id, 2000)}
          alt={IMG[entry.meta.image].alt}
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover opacity-30"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-black/75 to-black/45" />
        <Container className="relative">
          <Link
            href="/projetos"
            className="inline-flex items-center gap-1.5 text-sm text-white/70 transition hover:text-white"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M19 12H5M11 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {t("backToList")}
          </Link>
          <div className="mt-6 flex items-center gap-2 text-xs text-on-dark-2">
            <span className="font-medium text-link-dark">{entry.meta.category}</span>
          </div>
          <h1 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-4xl">
            {entry.meta.title}
          </h1>
        </Container>
      </header>

      <Container className="mt-12">
        <div className="mx-auto max-w-2xl">
          <Project />
        </div>
      </Container>
    </article>
  );
}
