import { Link } from "@/i18n/navigation";

// Brand logo: an action-blue "HLANG" badge paired with the full HofShiLang
// wordmark. `light` flips the wordmark colour for dark backgrounds (footer);
// the blue badge works on both.
export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      aria-label="HofShiLang — Início"
      className="group flex items-center gap-2.5"
    >
      <svg
        width="58"
        height="24"
        viewBox="0 0 58 24"
        fill="none"
        aria-hidden
        className="transition-transform duration-300 group-hover:scale-[1.04]"
      >
        <rect width="58" height="24" rx="6" fill="#0071e3" />
        <text
          x="29"
          y="12.5"
          textAnchor="middle"
          dominantBaseline="central"
          fontFamily="-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', Arial, sans-serif"
          fontSize="12"
          fontWeight="700"
          letterSpacing="0.4"
          fill="#ffffff"
        >
          HLANG
        </text>
      </svg>
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
