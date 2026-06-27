import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function GroupCards() {
  const t = useTranslations("home.group");
  const nav = useTranslations("nav");

  const cards = [
    { href: "/servicos", title: nav("services"), desc: nav("servicesDesc") },
    { href: "/produtos", title: nav("products"), desc: nav("productsDesc") },
    { href: "/empresas", title: nav("companies"), desc: nav("companiesDesc") },
  ];

  return (
    <Section tone="white">
      <div className="max-w-2xl">
        <Eyebrow>{t("eyebrow")}</Eyebrow>
        <h2 className="mt-3 text-[clamp(2rem,5vw,3.25rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-ink">
          {t("title")}
        </h2>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {cards.map((card, i) => (
          <Reveal key={card.href} delay={i * 0.1} y={20}>
            <Link
              href={card.href}
              className="group glass flex h-full flex-col rounded-[var(--radius-card)] p-8 transition hover:-translate-y-1"
            >
              <h3 className="text-[1.75rem] font-semibold tracking-[-0.02em] text-ink">
                {card.title}
              </h3>
              <p className="mt-3 flex-1 text-[1.0625rem] leading-relaxed text-sub">
                {card.desc}
              </p>
              <span className="mt-6 inline-flex items-center gap-1 text-[1.0625rem] text-accent">
                {nav("cta")}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                  className="transition group-hover:translate-x-1"
                >
                  <path
                    d="M9 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          </Reveal>
        ))}
      </div>

      <div className="mt-12">
        <ButtonLink href="/servicos" variant="primary" size="lg">
          {t("cta")}
        </ButtonLink>
      </div>
    </Section>
  );
}
