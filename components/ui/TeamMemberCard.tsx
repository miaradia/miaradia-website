import Badge from '@/components/ui/Badge';
import type { TeamCategory, TeamStatus } from '@/data/team';

type TeamMemberCardProps = {
  name: string;
  role: string;
  categoryLabel: string;
  category: TeamCategory;
  status: TeamStatus;
  statusLabel: string;
  expertise: string[];
};

const categoryVariants: Record<TeamCategory, 'green' | 'blue' | 'orange' | 'gray'> = {
  Management: 'green',
  Technical: 'blue',
  Field: 'orange',
  Support: 'gray',
};

const statusVariants: Record<TeamStatus, 'green' | 'gray' | 'blue'> = {
  active: 'green',
  available: 'blue',
  former: 'gray',
};

export default function TeamMemberCard({
  name,
  role,
  categoryLabel,
  category,
  status,
  statusLabel,
  expertise,
}: TeamMemberCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-green/20 hover:shadow-lg">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-brand-green to-brand-green-dark text-lg font-bold text-white">
        {name.charAt(0)}
      </div>

      <h3 className="text-lg font-bold text-gray-900">{name}</h3>
      <p className="mt-1 font-medium text-brand-green">{role}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        <Badge variant={categoryVariants[category]}>{categoryLabel}</Badge>
        <Badge variant={statusVariants[status]} size="sm">
          {statusLabel}
        </Badge>
      </div>

      <ul className="mt-5 flex flex-1 flex-wrap gap-2">
        {expertise.map((item) => (
          <li
            key={item}
            className="rounded-full bg-gray-50 px-2.5 py-1 text-xs text-gray-600"
          >
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
