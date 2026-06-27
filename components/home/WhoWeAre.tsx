import { useTranslations } from "next-intl";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ConnectionNetwork } from "@/components/visuals/ConnectionNetwork";

export function WhoWeAre() {
  const t = useTranslations("home.whoWeAre");

  return (
    <Section tone="white">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Eyebrow>{t("eyebrow")}</Eyebrow>
          <h2 className="mt-3 max-w-lg text-[clamp(2rem,5vw,3.25rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-ink">
            {t("title")}
          </h2>
          <p className="mt-6 max-w-md text-[1.25rem] leading-[1.45] text-sub">
            {t("body")}
          </p>
          <div className="mt-8">
            <ButtonLink href="/sobre" variant="secondary" size="lg">
              {t("cta")}
            </ButtonLink>
          </div>
        </div>

        <Reveal className="relative" y={20}>
          <div className="glass-panel relative aspect-[4/5] overflow-hidden rounded-[var(--radius-card)]">
            <ConnectionNetwork className="absolute inset-0 h-full w-full" />
          </div>
          {/* "12 anos" seal — elevated white badge with the blue accent number */}
          <div className="absolute bottom-6 left-6 rounded-[1.25rem] bg-white px-7 py-5 shadow-[0_10px_34px_rgba(0,0,0,0.24)] ring-1 ring-black/5">
            <div className="flex items-end gap-2">
              <span className="text-[3.5rem] font-semibold leading-[0.85] tracking-[-0.04em] text-accent">
                {t("sealValue")}
              </span>
              <span className="mb-1 h-2 w-2 rounded-full bg-accent" aria-hidden />
            </div>
            <p className="mt-2 text-[0.8rem] font-semibold uppercase tracking-[0.08em] text-ink">
              {t("seal")}
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
