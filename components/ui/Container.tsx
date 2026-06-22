type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'section';
};

export default function Container({
  children,
  className = '',
  as: Tag = 'div',
}: ContainerProps) {
  return (
    <Tag className={`max-w-7xl mx-auto px-6 lg:px-8 ${className}`}>
      {children}
    </Tag>
  );
}
