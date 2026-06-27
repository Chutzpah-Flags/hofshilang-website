import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  const t = useTranslations("notFound");

  return (
    <section className="section-dark flex min-h-[80svh] items-center">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <p className="text-7xl font-semibold tracking-[-0.04em] text-link-dark">404</p>
          <h1 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white">
            {t("title")}
          </h1>
          <p className="mt-3 text-on-dark-2">{t("subtitle")}</p>
          <div className="mt-8 flex justify-center">
            <ButtonLink href="/" variant="primary" size="lg">
              {t("cta")}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
