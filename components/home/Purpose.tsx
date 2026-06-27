import { useTranslations } from "next-intl";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

// Keys are historical; meanings are now: reading · audio · conversation · review.
const ICONS: Record<string, string> = {
  // open book — immersive reading
  financial:
    "M12 6.5C10.5 5.2 7.8 4.7 4.5 5.2v12.6c3.3-.5 6 0 7.5 1.3M12 6.5c1.5-1.3 4.2-1.8 7.5-1.3v12.6c-3.3-.5-6 0-7.5 1.3M12 6.5v12.7",
  // headphones — native audio
  geographic:
    "M5 13v-1a7 7 0 0 1 14 0v1M5 13h1.5a1.5 1.5 0 0 1 1.5 1.5v3A1.5 1.5 0 0 1 6.5 19H6a1 1 0 0 1-1-1v-5Zm14 0h-1.5a1.5 1.5 0 0 0-1.5 1.5v3A1.5 1.5 0 0 0 17.5 19h.5a1 1 0 0 0 1-1v-5Z",
  // speech bubble — AI conversation
  fiscal: "M4.5 5.5h15v9h-9l-4 4v-4h-2v-9ZM8.5 10h.01M12 10h.01M15.5 10h.01",
  // repeat arrows — spaced repetition
  personal:
    "M16.5 3.5l3 3-3 3M4.5 11V9.5a3 3 0 0 1 3-3h12M7.5 20.5l-3-3 3-3M19.5 13v1.5a3 3 0 0 1-3 3h-12",
};

export function Purpose() {
  const t = useTranslations("home.purpose");
  const keys = ["financial", "geographic", "fiscal", "personal"] as const;

  return (
    <Section tone="parchment">
      <div className="max-w-2xl">
        <Eyebrow>{t("eyebrow")}</Eyebrow>
        <h2 className="mt-3 text-[clamp(2rem,5vw,3.25rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-ink">
          {t("title")}
        </h2>
        <p className="mt-5 max-w-xl text-[1.25rem] leading-[1.45] text-sub">
          {t("body")}
        </p>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {keys.map((key, i) => (
          <Reveal key={key} delay={i * 0.08} y={20}>
            <article className="glass h-full rounded-[var(--radius-card)] p-7">
              <span className="flex h-10 w-10 items-center justify-center text-accent">
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path
                    d={ICONS[key]}
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <h3 className="mt-5 text-[1.3125rem] font-semibold tracking-[-0.02em] text-ink">
                {t(`items.${key}.title`)}
              </h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-sub">
                {t(`items.${key}.desc`)}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
