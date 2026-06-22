import { getTranslations } from 'next-intl/server';
import Container from '@/components/ui/Container';
import ProjectTimeline from '@/components/ui/ProjectTimeline';
import SectionHeader from '@/components/ui/SectionHeader';
import { projectsMeta } from '@/data/projects';

export default async function ProjectsSection() {
  const t = await getTranslations('Projects');

  const projects = projectsMeta.map((project) => ({
    ...project,
    title: t(`items.${project.id}.title`),
    description: t(`items.${project.id}.description`),
    categoryLabel: t(`categories.${project.category}`),
    highlightBadge: project.highlight ? t('current_grant_badge') : undefined,
    amountLabel: project.amount
      ? t('amount_label', { amount: project.amount.toLocaleString() })
      : undefined,
  }));

  return (
    <section id="projects" className="bg-white py-24 lg:py-28">
      <Container>
        <SectionHeader eyebrow={t('eyebrow')} title={t('title')} subtitle={t('subtitle')} />

        <ProjectTimeline
          projects={projects}
          labels={{
            client: t('client_label'),
            locations: t('locations_label'),
          }}
        />
      </Container>
    </section>
  );
}
