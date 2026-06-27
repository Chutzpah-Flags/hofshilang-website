"use client";

import { useLocale, useTranslations } from "next-intl";
import { useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const labels: Record<string, string> = {
  pt: "PT",
  en: "EN",
  es: "ES",
};

export function LocaleSwitcher({ light = false }: { light?: boolean }) {
  const locale = useLocale();
  const t = useTranslations("nav");
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const trigger = light
    ? "text-white/80 hover:text-white"
    : "text-ink/70 hover:text-ink";

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-label={t("language")}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={`flex items-center gap-1 rounded-full px-2.5 py-1.5 text-sm font-medium transition ${trigger}`}
      >
        <GlobeIcon />
        {labels[locale]}
      </button>
      {open && (
        <div className="glass absolute right-0 top-full z-50 mt-2 min-w-28 overflow-hidden rounded-2xl p-1">
          {routing.locales.map((loc) => (
            <button
              key={loc}
              onClick={() => {
                router.replace(pathname, { locale: loc });
                setOpen(false);
              }}
              className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm transition hover:bg-white/50 ${
                loc === locale ? "font-semibold text-accent" : "text-ink/80"
              }`}
            >
              {labels[loc]}
              {loc === locale && <CheckIcon />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function GlobeIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 13l4 4L19 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
