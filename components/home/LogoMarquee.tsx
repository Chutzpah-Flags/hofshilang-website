// Languages you can learn — an honest, on-brand marquee (endonyms).
const LANGUAGES = [
  "English",
  "Español",
  "Français",
  "Deutsch",
  "Italiano",
  "Português",
  "日本語",
  "中文",
  "한국어",
  "العربية",
];

export function LogoMarquee() {
  const row = [...LANGUAGES, ...LANGUAGES];

  return (
    <section className="border-y border-line bg-white py-14">
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="flex w-max animate-[marquee_36s_linear_infinite] items-center gap-16 pr-16">
          {row.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="whitespace-nowrap text-[1.3125rem] font-semibold tracking-[-0.02em] text-ink/35"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
