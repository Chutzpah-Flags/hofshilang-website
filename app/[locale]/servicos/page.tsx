import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

type Service = { title: string; desc: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services" });
  return { title: t("title"), description: t("subtitle") };
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("services");
  const list = t.raw("list") as Service[];

  return (
    <>
      <PageHeader
        kicker={t("eyebrow")}
        title={t("title")}
        subtitle={t("subtitle")}
        image="terminal"
      />
      <section className="py-[clamp(3.5rem,8vw,6rem)]">
        <Container>
          <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {list.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.06} y={18}>
                <article className="grid grid-cols-[auto_1fr] gap-5 border-t border-line pt-6">
                  <span className="text-lg font-semibold text-accent tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h2 className="text-xl font-semibold tracking-[-0.02em] text-ink">
                      {s.title}
                    </h2>
                    <p className="mt-2 text-[0.95rem] leading-relaxed text-sub">
                      {s.desc}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-16">
            <ButtonLink href="/contato" variant="primary" size="lg">
              {t("cta")}
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
