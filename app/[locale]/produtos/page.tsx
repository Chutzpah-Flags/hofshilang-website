import type { Metadata } from "next";
import Image from "next/image";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { IMG, unsplash } from "@/lib/images";

type Product = { tag: string; title: string; desc: string; cta: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "products" });
  return { title: t("title"), description: t("subtitle") };
}

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("products");
  const list = t.raw("list") as Product[];

  return (
    <>
      <PageHeader
        kicker={t("eyebrow")}
        title={t("title")}
        subtitle={t("subtitle")}
        image="flatlayMap"
      />
      <section className="py-[clamp(3.5rem,8vw,6rem)]">
        <Container>
          <div className="grid gap-x-12 gap-y-12 lg:grid-cols-2">
            {list.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <article className="group flex h-full flex-col">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[var(--radius-card)]">
                    <Image
                      src={unsplash(IMG.flatlayMap.id, 1100)}
                      alt={IMG.flatlayMap.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <span className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                    {p.tag}
                  </span>
                  <h2 className="mt-2 text-2xl font-semibold tracking-[-0.02em] text-ink">
                    {p.title}
                  </h2>
                  <p className="mt-3 flex-1 text-base leading-relaxed text-sub">
                    {p.desc}
                  </p>
                  <div className="mt-6">
                    <ButtonLink href="/contato" variant="primary">
                      {p.cta}
                    </ButtonLink>
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
