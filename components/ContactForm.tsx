"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

export function ContactForm() {
  const t = useTranslations("contact.form");
  const nav = useTranslations("nav");
  const [sent, setSent] = useState(false);

  const interests = [
    nav("services"),
    nav("products"),
    nav("companies"),
    nav("about"),
  ];

  const field =
    "h-12 w-full rounded-xl border border-line bg-parchment px-4 text-sm text-ink placeholder:text-sub/70 transition focus:border-accent/60 focus:outline-none focus:ring-2 focus:ring-accent/20";

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="rounded-[var(--radius-card)] border border-line bg-white p-7"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium text-ink">{t("name")}</span>
          <input
            required
            type="text"
            placeholder={t("namePlaceholder")}
            className={`mt-1.5 ${field}`}
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-ink">{t("email")}</span>
          <input
            required
            type="email"
            placeholder={t("emailPlaceholder")}
            className={`mt-1.5 ${field}`}
          />
        </label>
      </div>

      <label className="mt-5 block">
        <span className="text-sm font-medium text-ink">{t("interest")}</span>
        <select className={`mt-1.5 ${field}`} defaultValue={interests[0]}>
          {interests.map((i) => (
            <option key={i}>{i}</option>
          ))}
        </select>
      </label>

      <label className="mt-5 block">
        <span className="text-sm font-medium text-ink">{t("message")}</span>
        <textarea
          rows={5}
          placeholder={t("messagePlaceholder")}
          className="mt-1.5 w-full rounded-xl border border-line bg-parchment px-4 py-3 text-sm text-ink placeholder:text-sub/70 transition focus:border-accent/60 focus:outline-none focus:ring-2 focus:ring-accent/20"
        />
      </label>

      <button
        type="submit"
        className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-full bg-accent px-6 text-sm font-medium text-white transition hover:bg-accent-hover active:scale-[0.97] sm:w-auto"
      >
        {t("submit")}
      </button>

      {sent && (
        <p className="mt-4 text-sm font-medium text-accent">
          ✓ {t("submit")} — OK
        </p>
      )}
      <p className="mt-4 text-xs text-sub">{t("note")}</p>
    </form>
  );
}
