import Image from "next/image";
import { Container } from "./Container";
import { Eyebrow } from "./Eyebrow";
import { IMG, unsplash } from "@/lib/images";

type ImageKey = keyof typeof IMG;

export function PageHeader({
  kicker,
  title,
  subtitle,
  image = "planeWindow",
}: {
  kicker: string;
  title: string;
  subtitle?: string;
  image?: ImageKey;
}) {
  const img = IMG[image];
  return (
    <section className="section-dark relative isolate flex min-h-[78svh] items-end overflow-hidden">
      <Image
        src={unsplash(img.id, 2400)}
        alt={img.alt}
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-black/55 to-black/20" />
      <Container className="relative pb-16 pt-40">
        <div className="max-w-3xl">
          <Eyebrow light>{kicker}</Eyebrow>
          <h1 className="mt-3 text-[clamp(2.75rem,7vw,5rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-white">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 max-w-2xl text-[1.25rem] leading-relaxed text-on-dark-2">
              {subtitle}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
