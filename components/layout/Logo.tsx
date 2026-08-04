import { Link } from "@/i18n/navigation";

// Brand logo: an action-blue rounded-square "HL" monogram (matching the favicon)
// paired with the HLANG wordmark. `light` flips the wordmark colour for use on
// dark backgrounds (e.g. the footer); the blue chip works on both.
export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      aria-label="HLANG — Início"
      className="group flex items-center gap-2.5"
    >
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-[0.6rem] bg-accent text-white transition-transform duration-300 group-hover:scale-[1.06]">
        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M5 6.5v11M5 12h5M10 6.5v11M14.5 6.5v11M14.5 17.5h4.5"
            stroke="currentColor"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span
        className={`text-[1.0625rem] font-semibold tracking-[-0.02em] ${
          light ? "text-white" : "text-ink"
        }`}
      >
        HLANG
      </span>
    </Link>
  );
}
