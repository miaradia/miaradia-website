import { getTranslations } from 'next-intl/server';
import Container from '@/components/ui/Container';
import SectionHeader from '@/components/ui/SectionHeader';
import { COFAV_GRANT_AMOUNT, cofavTeamMeta } from '@/data/grants/cofav';

export default async function CofavGrantSection() {
  const t = await getTranslations('Cofav');

  return (
    <section id="cofav" className="bg-gradient-to-br from-green-950 via-brand-green-dark to-green-900 py-24 text-white lg:py-28">
      <Container>
        <SectionHeader
          eyebrow={t('eyebrow')}
          title={t('title')}
          subtitle={t('subtitle')}
          theme="dark"
        />

        <div className="space-y-6">
          {cofavTeamMeta.map((member) => {
            const responsibilities = t.raw(`roles.${member.id}.responsibilities`) as string[];

            return (
              <article
                key={member.id}
                className="rounded-2xl border border-green-700/50 bg-green-900/40 p-6 backdrop-blur-sm md:p-8"
              >
                <h3 className="text-xl font-bold text-green-50">{member.name}</h3>
                <p className="mb-5 mt-1 font-medium text-green-300">
                  {t(`roles.${member.id}.title`)}
                </p>

                <ul className="grid gap-2 md:grid-cols-2">
                  {responsibilities.map((item) => (
                    <li key={item} className="flex gap-2 text-sm leading-relaxed text-green-100">
                      <span className="text-brand-accent" aria-hidden="true">
                        •
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <div className="mt-12 rounded-2xl border border-brand-green/40 bg-brand-green/20 p-8 text-center backdrop-blur-sm">
          <h3 className="text-2xl font-bold">{t('grant_title')}</h3>
          <p className="mx-auto mt-3 max-w-2xl text-green-100">
            {t('grant_description', {
              amount: COFAV_GRANT_AMOUNT.toLocaleString(),
            })}
          </p>
        </div>
      </Container>
    </section>
  );
}
