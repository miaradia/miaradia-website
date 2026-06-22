import Badge from '@/components/ui/Badge';
import type { ProjectMeta } from '@/data/projects';

type ProjectTimelineProps = {
  projects: Array<
    ProjectMeta & {
      title: string;
      description: string;
      categoryLabel: string;
      highlightBadge?: string;
      amountLabel?: string;
    }
  >;
  labels: {
    client: string;
    locations: string;
  };
};

const categoryVariants: Record<
  ProjectMeta['category'],
  'green' | 'blue' | 'orange' | 'red' | 'purple'
> = {
  Governance: 'blue',
  Conservation: 'green',
  Development: 'orange',
  Health: 'purple',
};

export default function ProjectTimeline({ projects, labels }: ProjectTimelineProps) {
  return (
    <div className="relative space-y-8 border-l-2 border-brand-green/30 pl-8 md:pl-10">
      {projects.map((project) => (
        <article key={project.id} className="relative">
          <div className="absolute -left-[calc(2rem+5px)] top-6 h-3 w-3 rounded-full border-2 border-white bg-brand-green shadow md:-left-[calc(2.5rem+5px)]" />

          <div
            className={`rounded-2xl border bg-white p-6 shadow-sm transition-shadow hover:shadow-md md:p-8 ${
              project.highlight
                ? 'border-brand-green ring-1 ring-brand-green/20'
                : 'border-gray-100'
            }`}
          >
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <time className="text-sm font-bold uppercase tracking-wide text-gray-500">
                {project.year}
              </time>
              <Badge variant={categoryVariants[project.category]}>{project.categoryLabel}</Badge>
            </div>

            <h3 className="text-lg font-bold text-gray-900 md:text-xl">{project.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-600 md:text-base">
              {project.description}
            </p>

            {project.contracts.length > 0 && (
              <ul className="mt-4 space-y-1 text-xs text-gray-500">
                {project.contracts.map((contract) => (
                  <li key={contract} className="flex gap-2">
                    <span aria-hidden="true">📄</span>
                    <span>{contract}</span>
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-xs text-gray-500">
              <p>
                <span className="font-semibold text-gray-700">{labels.client}:</span>{' '}
                {project.client}
              </p>
              {project.locations && project.locations.length > 0 && (
                <p>
                  <span className="font-semibold text-gray-700">{labels.locations}:</span>{' '}
                  {project.locations.join(', ')}
                </p>
              )}
            </div>

            {project.amountLabel && (
              <p className="mt-4 text-base font-bold text-brand-green">{project.amountLabel}</p>
            )}

            {project.highlight && project.highlightBadge && (
              <div className="mt-4">
                <Badge variant="highlight">{project.highlightBadge}</Badge>
              </div>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}
