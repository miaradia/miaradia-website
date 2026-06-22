'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Container from '@/components/ui/Container';
import { projectsMeta, type ProjectCategory } from '@/data';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  category: ProjectCategory;
  client: string;
  amount?: number;
  highlight?: boolean;
}

const categoryColors: Record<ProjectCategory, { bg: string; border: string; text: string }> = {
  Governance: { bg: 'bg-blue-100', border: 'border-blue-500', text: 'text-blue-700' },
  Conservation: { bg: 'bg-green-100', border: 'border-green-500', text: 'text-green-700' },
  Development: { bg: 'bg-purple-100', border: 'border-purple-500', text: 'text-purple-700' },
  Health: { bg: 'bg-red-100', border: 'border-red-500', text: 'text-red-700' },
};

export default function InteractiveTimelineSection() {
  const t = useTranslations('InteractiveTimeline');
  const tProjects = useTranslations('Projects');
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | 'All'>('All');
  const [hoveredEvent, setHoveredEvent] = useState<string | null>(null);

  // Transform project data into timeline events
  const timelineEvents: TimelineEvent[] = projectsMeta.map(project => ({
    year: project.year,
    title: tProjects(`items.${project.id}.title`),
    description: tProjects(`items.${project.id}.description`),
    category: project.category,
    client: project.client,
    amount: project.amount,
    highlight: project.highlight,
  }));

  const filteredEvents = selectedCategory === 'All' 
    ? timelineEvents 
    : timelineEvents.filter(event => event.category === selectedCategory);

  const categories: (ProjectCategory | 'All')[] = ['All', 'Conservation', 'Development', 'Governance', 'Health'];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-20">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(34, 139, 34, 0.1) 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, rgba(34, 139, 34, 0.05) 0%, transparent 50%)`,
        }} />
      </div>

      <Container className="relative">
        <div className="text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-brand-green">
            {t('eyebrow')}
          </p>
          <h2 className="mx-auto max-w-3xl text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
            {t('title')}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 md:text-xl">
            {t('subtitle')}
          </p>
        </div>

        {/* Category filters */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-brand-green text-white shadow-lg scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-100 shadow-md hover:shadow-lg'
              }`}
            >
              {category === 'All' ? t('filter_all') : tProjects(`categories.${category}`)}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="mt-16 relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-brand-green via-emerald-400 to-brand-green md:left-1/2" />

          <div className="space-y-12">
            {filteredEvents.map((event, index) => (
              <div
                key={`${event.year}-${index}`}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                } items-center`}
                onMouseEnter={() => setHoveredEvent(`${event.year}-${index}`)}
                onMouseLeave={() => setHoveredEvent(null)}
              >
                {/* Timeline node */}
                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 z-10">
                  <div className={`h-4 w-4 rounded-full border-4 transition-all duration-300 ${
                    event.highlight 
                      ? 'bg-brand-accent border-brand-accent shadow-lg scale-125' 
                      : hoveredEvent === `${event.year}-${index}`
                      ? 'bg-brand-green border-brand-green shadow-lg scale-110'
                      : 'bg-white border-brand-green'
                  }`} />
                </div>

                {/* Content card */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <div className={`group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 ${
                    hoveredEvent === `${event.year}-${index}` ? 'shadow-2xl scale-105' : ''
                  } ${event.highlight ? 'ring-2 ring-brand-accent ring-opacity-50' : ''}`}>
                    
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-green/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    
                    <div className="relative">
                      <div className="mb-3 flex items-center justify-between">
                        <span className="text-lg font-bold text-brand-green">{event.year}</span>
                        {event.highlight && (
                          <span className="inline-flex items-center rounded-full bg-brand-accent px-3 py-1 text-xs font-medium text-white">
                            {t('featured_project')}
                          </span>
                        )}
                      </div>

                      <h3 className="mb-3 text-xl font-semibold text-gray-900 group-hover:text-brand-green-dark transition-colors">
                        {event.title}
                      </h3>

                      <p className="mb-4 text-gray-600 leading-relaxed">
                        {event.description}
                      </p>

                      <div className="flex flex-wrap items-center gap-3">
                        <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium border-2 ${
                          categoryColors[event.category].bg
                        } ${categoryColors[event.category].border} ${categoryColors[event.category].text}`}>
                          {tProjects(`categories.${event.category}`)}
                        </span>

                        <span className="text-sm text-gray-500">
                          {event.client}
                        </span>

                        {event.amount && (
                          <span className="text-sm font-medium text-brand-green">
                            {event.amount.toLocaleString()} MGA
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center rounded-2xl bg-white p-6 shadow-lg">
            <div className="mr-6">
              <h3 className="text-lg font-semibold text-gray-900">
                {t('cta_title')}
              </h3>
              <p className="text-gray-600">
                {t('cta_description')}
              </p>
            </div>
            <a
              href="#projects"
              className="inline-flex items-center rounded-xl bg-brand-green px-6 py-3 text-white font-semibold shadow-lg transition hover:bg-brand-green-dark hover:shadow-xl"
            >
              {t('cta_button')}
              <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}