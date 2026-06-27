"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

function Counter({ value }: { value: string }) {
  const reduce = useReducedMotion();
  const match = value.match(/[\d.,]+/);
  const numeric = match ? parseInt(match[0].replace(/[.,]/g, ""), 10) : 0;
  const [prefix, suffix] = match
    ? [value.slice(0, match.index), value.slice((match.index ?? 0) + match[0].length)]
    : ["", ""];

  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(reduce ? (match?.[0] ?? value) : "0");

  useEffect(() => {
    if (!inView || reduce || numeric === 0) return;
    const controls = animate(0, numeric, {
      duration: 1.6,
      ease: [0.2, 0.7, 0.2, 1],
      onUpdate: (v) => setDisplay(Math.round(v).toLocaleString("pt-BR")),
    });
    return () => controls.stop();
    // `match` is intentionally excluded from deps: value.match() returns a new
    // array each render, which would restart the animation in a loop. numeric,
    // inView and reduce are the only real inputs.
  }, [inView, numeric, reduce]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

export function ImpactStats() {
  const t = useTranslations("home.impact");
  const keys = ["clients", "approval", "countries"] as const;

  return (
    <section className="section-dark flex min-h-[100svh] flex-col justify-center py-28">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow light>{t("eyebrow")}</Eyebrow>
          <h2 className="mt-3 text-[clamp(2rem,5vw,3.25rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-white">
            {t("title")}
          </h2>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {keys.map((key, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.12, ease: [0.2, 0.7, 0.2, 1] }}
              className="glass-dark rounded-[var(--radius-card)] p-8"
            >
              <p className="text-[clamp(3rem,7vw,4rem)] font-semibold leading-none tracking-[-0.04em] text-white">
                <Counter value={t(`stats.${key}.value`)} />
              </p>
              <p className="mt-3 text-[0.95rem] text-on-dark-2">
                {t(`stats.${key}.label`)}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
