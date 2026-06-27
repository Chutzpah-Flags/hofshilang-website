import { useTranslations } from "next-intl";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function FreedomSection() {
  const t = useTranslations("home.freedom");
  const items = t.raw("items") as string[];

  return (
    <Section tone="parchment">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <Eyebrow>{t("eyebrow")}</Eyebrow>
          <h2 className="mt-3 text-[clamp(2rem,5vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-ink">
            {t("title")}
          </h2>
          <p className="mt-6 max-w-md text-[1.25rem] leading-[1.45] text-sub">
            {t("intro")}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/contato" variant="primary" size="lg">
              {t("ctaPrimary")}
            </ButtonLink>
            <ButtonLink href="/servicos" variant="secondary" size="lg">
              {t("ctaSecondary")}
            </ButtonLink>
          </div>
        </div>

        <ul>
          {items.map((item, i) => (
            <Reveal key={i} delay={i * 0.05} y={14}>
              <li className="flex items-baseline gap-4 border-b border-line py-4">
                <span className="h-[7px] w-[7px] shrink-0 translate-y-[-2px] rounded-full bg-accent" />
                <span className="text-[1.125rem] leading-snug text-ink">
                  {item}
                </span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
