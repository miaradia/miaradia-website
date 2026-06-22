import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import Container from '@/components/ui/Container';
import SectionHeader from '@/components/ui/SectionHeader';

export default async function MissionSection() {
  const t = await getTranslations('Mission');

  return (
    <section id="mission" className="bg-gradient-to-br from-brand-green-dark via-brand-green to-green-900 py-24 text-white lg:py-28">
      <Container>
        <SectionHeader
          eyebrow={t('eyebrow')}
          title={t('title')}
          subtitle={t('main_goal')}
          theme="dark"
        />

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative order-2 lg:order-1">
            <Image
              src="/community-meeting.jpeg"
              alt={t('image_alt')}
              width={640}
              height={480}
              className="rounded-2xl shadow-2xl ring-1 ring-white/10"
            />
          </div>

          <div className="order-1 space-y-6 lg:order-2">
            <p className="text-lg leading-relaxed text-green-50">{t('description')}</p>
            <p className="font-semibold text-green-100">{t('sub_goals_intro')}</p>
            <ul className="space-y-4">
              {[1, 2, 3, 4].map((num) => (
                <li key={num} className="flex gap-4">
                  <span className="mt-2 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-brand-accent" aria-hidden="true" />
                  <span className="leading-relaxed text-green-50">{t(`goal_${num}`)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
