import { getTranslations } from "next-intl/server";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { cofavActions } from "@/data/cofavAction";

export default async function CofavActionsSection() {
  const t = await getTranslations("Cofav");

  return (
    <section
      id="cofav"
      className="bg-gradient-to-br from-green-950 via-green-900 to-green-800 py-24 text-white"
    >
      <Container>
        <SectionHeader
          eyebrow={t("eyebrow")}
          title={t("title")}
          subtitle={t("subtitle")}
          theme="dark"
        />

        <div className="mb-16 rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-green-300">
                140 M Ar
              </div>
              <p className="mt-2 text-green-100">
                {t("grant_amount")}
              </p>
            </div>

            <div>
              <div className="text-5xl font-bold text-green-300">
                2026
              </div>
              <p className="mt-2 text-green-100">
                {t("grant_active")}
              </p>
            </div>

            <div>
              <div className="text-5xl font-bold text-green-300">
                COFAV
              </div>
              <p className="mt-2 text-green-100">
                {t("grant_location")}
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cofavActions.map((action) => (
            <div
              key={action.id}
              className="rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur transition hover:bg-white/15"
            >
              <div className="mb-5 text-5xl">
                {action.icon}
              </div>

              <h3 className="mb-4 text-xl font-bold">
                {t(`actions.${action.id}.title`)}
              </h3>

              <p className="leading-relaxed text-green-100">
                {t(`actions.${action.id}.description`)}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}