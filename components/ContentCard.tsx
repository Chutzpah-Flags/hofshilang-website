import Image from "next/image";
import { Link } from "@/i18n/navigation";
import type { ContentMeta } from "@/lib/content";
import { IMG, unsplash } from "@/lib/images";
import { Reveal } from "@/components/ui/Reveal";

export function ContentCard({
  meta,
  basePath,
  cta,
  index = 0,
}: {
  meta: ContentMeta;
  basePath: string;
  cta: string;
  index?: number;
}) {
  const img = IMG[meta.image];
  return (
    <Reveal delay={index * 0.06}>
      <Link href={`${basePath}/${meta.slug}`} className="group block">
        <div className="relative aspect-[16/11] overflow-hidden rounded-[var(--radius-card)]">
          <Image
            src={unsplash(img.id, 900)}
            alt={img.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-[1.04]"
          />
        </div>
        <div className="mt-4 flex items-center gap-2 text-xs text-sub">
          <span className="font-medium text-accent">{meta.category}</span>
          <span aria-hidden>·</span>
          <span>{meta.readingTime}</span>
        </div>
        <h3 className="mt-2 text-xl font-semibold leading-snug tracking-[-0.02em] text-ink transition group-hover:text-accent">
          {meta.title}
        </h3>
        <p className="mt-2 text-[0.95rem] leading-relaxed text-sub">
          {meta.excerpt}
        </p>
        <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
          {cta}
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden
            className="transition group-hover:translate-x-1"
          >
            <path
              d="M5 12h14M13 6l6 6-6 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </Link>
    </Reveal>
  );
}
