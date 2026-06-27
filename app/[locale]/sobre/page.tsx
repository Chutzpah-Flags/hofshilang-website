import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

type Value = { title: string; desc: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  return { title: t("title"), description: t("lead") };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");
  const values = t.raw("values") as Value[];

  return (
    <>
      <PageHeader kicker={t("eyebrow")} title={t("title")} image="openRoad" />
      <section className="py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <p className="text-2xl font-medium leading-snug tracking-[-0.02em] text-ink">
                {t("lead")}
              </p>
              <p className="mt-6 text-lg leading-relaxed text-sub">
                {t("body")}
              </p>
              <div className="mt-8">
                <ButtonLink href="/contato" variant="primary" size="lg">
                  {t("cta")}
                </ButtonLink>
              </div>
            </div>

            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-accent">
                {t("valuesTitle")}
              </h2>
              <div className="mt-5 space-y-4">
                {values.map((v, i) => (
                  <Reveal key={v.title} delay={i * 0.08} y={16}>
                    <div className="rounded-2xl border border-line bg-parchment p-5">
                      <h3 className="font-semibold text-ink">{v.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-sub">
                        {v.desc}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
