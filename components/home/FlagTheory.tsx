import { useTranslations } from "next-intl";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

type Flag = { title: string; desc: string };

export function FlagTheory() {
  const t = useTranslations("home.flagTheory");
  const flags = t.raw("flags") as Flag[];

  return (
    <Section tone="dark">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Eyebrow light>{t("eyebrow")}</Eyebrow>
          <h2 className="mt-3 text-[clamp(2rem,5vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-white">
            {t("title")}
          </h2>
          <p className="mt-6 max-w-md text-[1.25rem] leading-[1.45] text-on-dark-2">
            {t("intro")}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {flags.map((flag, i) => (
            <Reveal key={i} delay={i * 0.08} y={18}>
              <article
                className={`glass-dark h-full rounded-[var(--radius-card)] p-6 ${
                  i === flags.length - 1 && flags.length % 2 ? "sm:col-span-2" : ""
                }`}
              >
                <span className="text-[0.95rem] font-semibold text-link-dark">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-[1.3125rem] font-semibold tracking-[-0.02em] text-white">
                  {flag.title}
                </h3>
                <p className="mt-1.5 text-[0.95rem] leading-relaxed text-on-dark-2">
                  {flag.desc}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
