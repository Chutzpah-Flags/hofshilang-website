import { Link } from "@/i18n/navigation";

// Brand logo: the HofShiLang wordmark in action blue (a lighter blue on dark
// backgrounds, e.g. the footer, to keep contrast).
export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      aria-label="HofShiLang — Início"
      className="group inline-flex items-center"
    >
      <span
        className={`text-[1.1875rem] font-semibold tracking-[-0.025em] transition-opacity group-hover:opacity-80 ${
          light ? "text-link-dark" : "text-accent"
        }`}
      >
        HofShiLang
      </span>
    </Link>
  );
}
