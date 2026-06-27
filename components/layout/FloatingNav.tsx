"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { Logo } from "./Logo";
import { LocaleSwitcher } from "./LocaleSwitcher";

export function FloatingNav() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobile(false);
    setDropdown(false);
  }, [pathname]);

  const whatWeDo = [
    { href: "/servicos", label: t("services"), desc: t("servicesDesc") },
    { href: "/produtos", label: t("products"), desc: t("productsDesc") },
    { href: "/empresas", label: t("companies"), desc: t("companiesDesc") },
  ];
  const links = [
    { href: "/blog", label: t("blog") },
    { href: "/projetos", label: t("projects") },
    { href: "/sobre", label: t("about") },
    { href: "/contato", label: t("contact") },
  ];

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-3.5">
      <nav
        className={`glass-nav pointer-events-auto flex h-[3.375rem] w-full max-w-[65rem] items-center justify-between gap-4 rounded-[1.125rem] px-3.5 transition-all duration-300 ${
          scrolled ? "glass-nav-scrolled" : ""
        }`}
      >
        <Logo />

        {/* Desktop links */}
        <div className="hidden items-center gap-0.5 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
          >
            <button
              type="button"
              className={`flex items-center gap-1 rounded-full px-3.5 py-2 text-[0.8125rem] tracking-[-0.01em] transition ${
                whatWeDo.some((l) => isActive(l.href))
                  ? "text-ink"
                  : "text-ink/70 hover:text-ink"
              }`}
              aria-expanded={dropdown}
            >
              {t("whatWeDo")}
              <Chevron open={dropdown} />
            </button>
            <AnimatePresence>
              {dropdown && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute left-0 top-full w-72 pt-3"
                >
                  <div className="glass overflow-hidden rounded-[1.125rem] p-2">
                    {whatWeDo.map((l) => (
                      <Link
                        key={l.href}
                        href={l.href}
                        className="block rounded-xl px-3.5 py-2.5 transition hover:bg-white/50"
                      >
                        <span
                          className={`block text-[0.95rem] font-medium tracking-[-0.01em] ${
                            isActive(l.href) ? "text-accent" : "text-ink"
                          }`}
                        >
                          {l.label}
                        </span>
                        <span className="mt-0.5 block text-[0.8rem] leading-snug text-sub">
                          {l.desc}
                        </span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`rounded-full px-3.5 py-2 text-[0.8125rem] tracking-[-0.01em] transition ${
                isActive(l.href) ? "text-ink" : "text-ink/70 hover:text-ink"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-1.5">
          <LocaleSwitcher />
          <Link
            href="/contato"
            className="hidden rounded-full bg-accent px-4 py-2 text-[0.8125rem] font-medium text-white transition hover:bg-accent-hover active:scale-[0.96] sm:inline-flex"
          >
            {t("cta")}
          </Link>
          <button
            type="button"
            aria-label={mobile ? t("closeMenu") : t("openMenu")}
            onClick={() => setMobile((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink hover:bg-black/5 lg:hidden"
          >
            <Burger open={mobile} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobile && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="glass pointer-events-auto fixed inset-x-4 top-[4.75rem] z-40 rounded-[1.5rem] p-4 lg:hidden"
          >
            <p className="px-3 pb-1 pt-2 text-xs font-semibold uppercase tracking-wider text-sub">
              {t("whatWeDo")}
            </p>
            {whatWeDo.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="block rounded-xl px-3 py-2.5 text-[1.0625rem] font-medium text-ink hover:bg-white/50"
              >
                {l.label}
              </Link>
            ))}
            <div className="my-2 h-px bg-line" />
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="block rounded-xl px-3 py-2.5 text-[1.0625rem] font-medium text-ink hover:bg-white/50"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contato"
              className="mt-3 flex items-center justify-center rounded-full bg-accent px-4 py-3 text-[0.95rem] font-medium text-white"
            >
              {t("cta")}
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 24 24"
      fill="none"
      className={`transition-transform ${open ? "rotate-180" : ""}`}
      aria-hidden
    >
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Burger({ open }: { open: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d={open ? "M6 6l12 12M6 18L18 6" : "M4 7h16M4 12h16M4 17h16"}
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
