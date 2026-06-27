import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/Container";
import { Logo } from "./Logo";

export function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");
  const year = new Date().getFullYear();

  const navLinks = [
    { href: "/servicos", label: nav("services") },
    { href: "/produtos", label: nav("products") },
    { href: "/empresas", label: nav("companies") },
    { href: "/sobre", label: nav("about") },
  ];
  const exploreLinks = [
    { href: "/blog", label: nav("blog") },
    { href: "/projetos", label: nav("projects") },
    { href: "/contato", label: nav("contact") },
  ];

  return (
    <footer className="section-dark">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo light />
            <p className="mt-4 max-w-xs text-[0.95rem] leading-relaxed text-on-dark-2">
              {t("tagline")}
            </p>
          </div>

          <FooterColumn title={t("nav")} links={navLinks} />
          <FooterColumn title={t("explore")} links={exploreLinks} />

          <div>
            <h3 className="text-[0.8rem] font-semibold uppercase tracking-wider text-on-dark-3">
              {t("legal")}
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <span className="text-[0.95rem] text-on-dark-2">{t("privacy")}</span>
              </li>
              <li>
                <span className="text-[0.95rem] text-on-dark-2">{t("terms")}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-on-dark-3">
            © {year} HofShiLang. {t("rights")}
          </p>
          <p className="text-xs text-on-dark-3">{t("madeWith")}</p>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <h3 className="text-[0.8rem] font-semibold uppercase tracking-wider text-on-dark-3">
        {title}
      </h3>
      <ul className="mt-4 space-y-3">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="text-[0.95rem] text-on-dark-2 transition hover:text-white"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
