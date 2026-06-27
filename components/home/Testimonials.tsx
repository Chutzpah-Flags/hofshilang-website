import { useTranslations } from "next-intl";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

type Testimonial = { quote: string; name: string; role: string };

export function Testimonials() {
  const t = useTranslations("home.testimonials");
  const list = t.raw("list") as Testimonial[];

  return (
    <Section tone="parchment">
      <div className="max-w-2xl">
        <Eyebrow>{t("eyebrow")}</Eyebrow>
        <h2 className="mt-3 text-[clamp(2rem,5vw,3.25rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-ink">
          {t("title")}
        </h2>
      </div>

      <div className="mt-14 grid gap-4 md:grid-cols-3">
        {list.map((item, i) => (
          <Reveal key={i} delay={i * 0.1} y={20}>
            <figure className="glass flex h-full flex-col rounded-[var(--radius-card)] p-7">
              <blockquote className="flex-1 text-[1.1875rem] leading-snug tracking-[-0.01em] text-ink">
                {item.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-ink/5 text-[0.95rem] font-semibold text-ink">
                  {item.name.charAt(0)}
                </span>
                <span>
                  <span className="block text-[0.95rem] font-semibold text-ink">
                    {item.name}
                  </span>
                  <span className="block text-[0.85rem] text-sub">{item.role}</span>
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
