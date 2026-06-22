type BadgeProps = {
  children: React.ReactNode;
  variant?: 'green' | 'blue' | 'orange' | 'purple' | 'red' | 'gray' | 'highlight';
  size?: 'sm' | 'md';
};

const variants = {
  green: 'bg-green-100 text-green-800 border-green-200',
  blue: 'bg-blue-100 text-blue-800 border-blue-200',
  orange: 'bg-orange-100 text-orange-800 border-orange-200',
  purple: 'bg-purple-100 text-purple-800 border-purple-200',
  red: 'bg-red-100 text-red-800 border-red-200',
  gray: 'bg-gray-100 text-gray-700 border-gray-200',
  highlight: 'bg-brand-green text-white border-brand-green',
};

const sizes = {
  sm: 'text-xs px-2.5 py-0.5',
  md: 'text-xs px-3 py-1',
};

export default function Badge({
  children,
  variant = 'green',
  size = 'md',
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full font-semibold border ${variants[variant]} ${sizes[size]}`}
    >
      {children}
    </span>
  );
}
