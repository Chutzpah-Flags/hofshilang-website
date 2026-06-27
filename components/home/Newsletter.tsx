"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function Newsletter() {
  const t = useTranslations("home.newsletter");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="section-dark flex min-h-[100svh] flex-col justify-center py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center">
            <Eyebrow light>{t("eyebrow")}</Eyebrow>
          </div>
          <h2 className="mt-3 text-[clamp(2rem,5vw,3.25rem)] font-semibold leading-[1.07] tracking-[-0.03em] text-white">
            {t("title")}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[1.1875rem] text-on-dark-2">
            {t("subtitle")}
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="glass-dark mx-auto mt-9 flex max-w-md flex-col gap-2 rounded-full p-2 sm:flex-row"
          >
            <input
              type="email"
              required
              placeholder={t("placeholder")}
              aria-label={t("placeholder")}
              className="h-11 flex-1 rounded-full bg-transparent px-5 text-[0.95rem] text-white placeholder:text-on-dark-3 focus:outline-none"
            />
            <button
              type="submit"
              className="h-11 shrink-0 rounded-full bg-accent px-6 text-[0.95rem] font-medium text-white transition hover:bg-accent-hover active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-link-dark focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              {t("button")}
            </button>
          </form>

          <p className="mt-4 text-[0.85rem] text-on-dark-3" role="status">
            {submitted ? `✓ ${t("disclaimer")}` : t("disclaimer")}
          </p>
        </div>
      </Container>
    </section>
  );
}
