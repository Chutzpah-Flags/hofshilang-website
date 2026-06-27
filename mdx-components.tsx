import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="mt-10 text-3xl font-semibold tracking-[-0.03em] text-ink sm:text-4xl">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="mt-10 text-2xl font-semibold tracking-[-0.03em] text-ink">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-8 text-xl font-semibold tracking-[-0.02em] text-ink">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="mt-5 text-[1.0625rem] leading-relaxed text-sub">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="mt-5 list-disc space-y-2 pl-6 text-[1.0625rem] text-sub">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="mt-5 list-decimal space-y-2 pl-6 text-[1.0625rem] text-sub">
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="leading-relaxed">{children}</li>,
    a: ({ children, href }) => (
      <a
        href={href}
        className="font-medium text-accent underline underline-offset-4 transition hover:text-accent-hover"
      >
        {children}
      </a>
    ),
    blockquote: ({ children }) => (
      <blockquote className="mt-6 border-l-2 border-accent pl-5 text-[1.0625rem] text-ink/80">
        {children}
      </blockquote>
    ),
    strong: ({ children }) => (
      <strong className="font-semibold text-ink">{children}</strong>
    ),
    ...components,
  };
}
