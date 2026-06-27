// Apple-style eyebrow: a small accent-blue label above a section headline.
export function Eyebrow({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <p
      className={`text-[1.05rem] font-semibold tracking-[-0.01em] ${
        light ? "text-link-dark" : "text-accent"
      }`}
    >
      {children}
    </p>
  );
}
