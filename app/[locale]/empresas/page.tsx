import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

type Company = { name: string; tagline: string; desc: string; cta: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "companies" });
  return { title: t("title"), description: t("subtitle") };
}

export default async function CompaniesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("companies");
  const list = t.raw("list") as Company[];

  return (
    <>
      <PageHeader
        kicker={t("eyebrow")}
        title={t("title")}
        subtitle={t("subtitle")}
        image="cityDusk"
      />
      <section className="py-20">
        <Container>
          <div className="grid gap-6">
            {list.map((c, i) => (
              <Reveal key={c.name} delay={i * 0.08}>
                <article className="grid items-center gap-8 rounded-[var(--radius-card)] border border-line bg-parchment p-8 md:grid-cols-[200px_1fr]">
                  <div className="section-dark flex aspect-square items-center justify-center rounded-2xl">
                    <span className="text-2xl font-semibold tracking-[-0.02em] text-white">
                      {c.name}
                    </span>
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                      {c.tagline}
                    </span>
                    <h2 className="mt-2 text-2xl font-semibold tracking-[-0.02em] text-ink">
                      {c.name}
                    </h2>
                    <p className="mt-3 max-w-2xl text-base leading-relaxed text-sub">
                      {c.desc}
                    </p>
                    <div className="mt-5">
                      <ButtonLink href="/produtos" variant="secondary">
                        {c.cta}
                      </ButtonLink>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
