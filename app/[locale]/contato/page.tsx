import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { ButtonLink } from "@/components/ui/Button";
import { ContactForm } from "@/components/ContactForm";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });
  return { title: t("title"), description: t("subtitle") };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contact");

  return (
    <>
      <PageHeader
        kicker={t("eyebrow")}
        title={t("title")}
        subtitle={t("subtitle")}
        image="departureBoard"
      />
      <section className="py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
            <ContactForm />

            <aside className="space-y-6">
              <div className="rounded-[var(--radius-card)] border border-line bg-parchment p-7">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-accent">
                  {t("channelsTitle")}
                </h2>
                <a
                  href={`mailto:${t("email")}`}
                  className="mt-3 block text-xl font-semibold tracking-[-0.02em] text-ink transition hover:text-accent"
                >
                  {t("email")}
                </a>
              </div>

              <div className="section-dark rounded-[var(--radius-card)] p-7">
                <h2 className="text-xl font-semibold tracking-[-0.02em] text-white">
                  {t("scheduleTitle")}
                </h2>
                <p className="mt-2 text-sm text-on-dark-2">{t("scheduleDesc")}</p>
                <div className="mt-5">
                  <ButtonLink href="/contato" variant="glass">
                    {t("scheduleCta")}
                  </ButtonLink>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
