import { getTranslations } from 'next-intl/server';
import ActivityCard from '@/components/ui/ActivityCard';
import Container from '@/components/ui/Container';
import SectionHeader from '@/components/ui/SectionHeader';

const cards = [
  { key: 'card_1', tagKey: 'tag_1', color: 'green' as const, icon: '🏛️' },
  { key: 'card_2', tagKey: 'tag_2', color: 'blue' as const, icon: '🎓' },
  { key: 'card_3', tagKey: 'tag_3', color: 'orange' as const, icon: '📋' },
  { key: 'card_4', tagKey: 'tag_4', color: 'purple' as const, icon: '📊' },
  { key: 'card_5', tagKey: 'tag_5', color: 'green' as const, icon: '🌱' },
  { key: 'card_6', tagKey: 'tag_6', color: 'red' as const, icon: '💼' },
];

export default async function ActivitiesSection() {
  const t = await getTranslations('Activities');

  return (
    <section id="activities" className="bg-gray-50 py-24 lg:py-28">
      <Container>
        <SectionHeader eyebrow={t('eyebrow')} title={t('title')} subtitle={t('subtitle')} />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {cards.map(({ key, tagKey, color, icon }) => (
            <ActivityCard
              key={key}
              tag={t(tagKey)}
              tagColor={color}
              icon={icon}
              title={t(`${key}_title`)}
              description={t(`${key}_desc`)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
