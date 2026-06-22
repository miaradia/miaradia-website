import { getTranslations } from 'next-intl/server';
import Container from '@/components/ui/Container';
import SectionHeader from '@/components/ui/SectionHeader';
import TeamMemberCard from '@/components/ui/TeamMemberCard';
import { teamMeta } from '@/data/team';

export default async function TeamSection() {
  const t = await getTranslations('Team');

  return (
    <section id="members" className="bg-gray-50 py-24 lg:py-28">
      <Container>
        <SectionHeader eyebrow={t('eyebrow')} title={t('title')} subtitle={t('subtitle')} />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {teamMeta.map((member) => {
            const expertise = t.raw(`members.${member.id}.expertise`) as string[];

            return (
              <TeamMemberCard
                key={member.id}
                name={member.name}
                role={t(`members.${member.id}.role`)}
                categoryLabel={t(`categories.${member.category}`)}
                category={member.category}
                status={member.status}
                statusLabel={t(`status.${member.status}`)}
                expertise={expertise}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
}
