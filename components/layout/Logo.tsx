import { Link } from "@/i18n/navigation";

// Provisional monochrome wordmark until the final brand asset is supplied.
export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      aria-label="HofShiLang — Início"
      className="group flex items-center gap-2.5"
    >
      <span
        className={`inline-flex h-8 w-8 items-center justify-center rounded-[0.6rem] ${
          light ? "bg-white text-black" : "bg-ink text-white"
        }`}
      >
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M6 19V5M6 12h12M18 5v14"
            stroke="currentColor"
            strokeWidth="2.1"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span
        className={`text-[1.0625rem] font-semibold tracking-[-0.02em] ${
          light ? "text-white" : "text-ink"
        }`}
      >
        HofShiLang
      </span>
    </Link>
  );
}
