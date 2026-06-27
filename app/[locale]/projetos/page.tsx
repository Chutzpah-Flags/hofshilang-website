import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { ContentCard } from "@/components/ContentCard";
import { projects } from "@/lib/content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "projects" });
  return { title: t("title"), description: t("subtitle") };
}

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("projects");

  return (
    <>
      <PageHeader
        kicker={t("eyebrow")}
        title={t("title")}
        subtitle={t("subtitle")}
        image="aerialCity"
      />
      <section className="py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2">
            {projects.map((project, i) => (
              <ContentCard
                key={project.meta.slug}
                meta={project.meta}
                basePath="/projetos"
                cta={t("viewProject")}
                index={i}
              />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
