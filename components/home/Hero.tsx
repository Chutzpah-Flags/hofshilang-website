"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Globe } from "@/components/visuals/Globe";

export function Hero() {
  const t = useTranslations("home.hero");
  const reduce = useReducedMotion();
  const ease = [0.2, 0.7, 0.2, 1] as const;

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-white">
      <Container className="relative">
        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative z-10 pt-24 lg:pt-0">
            <motion.h1
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease }}
              className="text-[clamp(2.75rem,7vw,5rem)] font-semibold leading-[1.04] tracking-[-0.03em] text-ink"
            >
              {t("title")}
            </motion.h1>

            <motion.p
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease, delay: 0.12 }}
              className="mt-6 max-w-xl text-[1.3125rem] leading-[1.4] tracking-[-0.01em] text-sub"
            >
              {t("subtitle")}
            </motion.p>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease, delay: 0.24 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <ButtonLink href="/contato" variant="primary" size="lg">
                {t("ctaPrimary")}
              </ButtonLink>
              <ButtonLink href="/servicos" variant="secondary" size="lg">
                {t("ctaSecondary")}
              </ButtonLink>
            </motion.div>
          </div>

          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease, delay: 0.1 }}
            className="relative mx-auto w-full max-w-[34rem]"
          >
            <Globe />
          </motion.div>
        </div>
      </Container>

      <ScrollHint />
    </section>
  );
}

function ScrollHint() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-7 flex justify-center">
      <span className="flex h-9 w-5 items-start justify-center rounded-full border border-ink/25 p-1.5">
        <span className="h-1.5 w-1 animate-bounce rounded-full bg-ink/40" />
      </span>
    </div>
  );
}
