import type { ReactNode } from "react";
import { Container } from "./Container";

type Tone = "white" | "parchment" | "dark";

const tones: Record<Tone, string> = {
  white: "bg-white text-ink",
  parchment: "section-parchment",
  dark: "section-dark",
};

// Full-viewport Apple-style tile. The surface color is the section divider.
export function Section({
  children,
  tone = "white",
  className = "",
  contained = true,
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
  contained?: boolean;
}) {
  return (
    <section
      className={`relative flex min-h-[100svh] flex-col justify-center overflow-hidden py-28 ${tones[tone]} ${className}`}
    >
      {contained ? <Container>{children}</Container> : children}
    </section>
  );
}
