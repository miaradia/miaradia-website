import Badge from '@/components/ui/Badge';

type ActivityCardProps = {
  tag: string;
  tagColor: 'green' | 'blue' | 'orange' | 'purple' | 'red';
  icon: React.ReactNode;
  title: string;
  description: string;
};

const tagVariants = {
  green: 'green',
  blue: 'blue',
  orange: 'orange',
  purple: 'purple',
  red: 'red',
} as const;

const iconBgColors = {
  green: 'bg-green-50',
  blue: 'bg-blue-50',
  orange: 'bg-orange-50',
  purple: 'bg-purple-50',
  red: 'bg-red-50',
};

export default function ActivityCard({
  tag,
  tagColor,
  icon,
  title,
  description,
}: ActivityCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-green/20 hover:shadow-xl">
      <div
        className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl ${iconBgColors[tagColor]} transition-transform group-hover:scale-110`}
      >
        <span className="text-2xl" aria-hidden="true">
          {icon}
        </span>
      </div>

      <Badge variant={tagVariants[tagColor]} size="sm">
        {tag}
      </Badge>

      <h3 className="mt-5 text-xl font-bold text-gray-900 transition-colors group-hover:text-brand-green">
        {title}
      </h3>

      <p className="mt-3 flex-1 leading-relaxed text-gray-600">{description}</p>
    </article>
  );
}
