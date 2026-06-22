'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import Container from '@/components/ui/Container';

interface CounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}

function AnimatedCounter({ end, duration = 2000, prefix = '', suffix = '' }: CounterProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const startTime = Date.now();
          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeOutQuart * end));
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          animate();
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return (
    <span ref={elementRef}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

export default function ImpactMetricsSection() {
  const t = useTranslations('ImpactMetrics');

  const metrics = [
    {
      value: 22,
      label: t('years_experience'),
      icon: '🌱',
      suffix: '',
    },
    {
      value: 12,
      label: t('projects_completed'),
      icon: '📋',
      suffix: '+',
    },
    {
      value: 4,
      label: t('regions_cofav'),
      icon: '🗺️',
      suffix: ' régions',
    },
    {
      value: 15,
      label: t('communes_served'),
      icon: '🏘️',
      suffix: '+',
    },
    {
      value: 140000000,
      label: t('current_funding_mga'),
      icon: '💰',
      prefix: '',
      format: 'currency'
    },
    {
      value: 8,
      label: t('active_partnerships'),
      icon: '🤝',
      suffix: '+',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50 py-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 right-10 h-32 w-32 rounded-full bg-gradient-to-br from-brand-green/20 to-transparent blur-2xl" />
        <div className="absolute bottom-20 left-10 h-48 w-48 rounded-full bg-gradient-to-tr from-emerald-200/40 to-transparent blur-3xl" />
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

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              {/* Card gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-green/5 to-emerald-100/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              
              <div className="relative">
                <div className="mb-4 text-4xl">{metric.icon}</div>
                
                <div className="mb-2 text-3xl font-bold text-gray-900 lg:text-4xl">
                  {metric.format === 'currency' ? (
                    <span className="text-2xl lg:text-3xl">
                      <AnimatedCounter 
                        end={metric.value} 
                        prefix={metric.prefix}
                        suffix={' MGA'}
                      />
                    </span>
                  ) : (
                    <AnimatedCounter 
                      end={metric.value} 
                      prefix={metric.prefix}
                      suffix={metric.suffix}
                    />
                  )}
                </div>
                
                <p className="text-sm font-medium text-gray-600 lg:text-base">
                  {metric.label}
                </p>

                {/* Animated progress bar */}
                <div className="mt-4 h-1 overflow-hidden rounded-full bg-gray-100">
                  <div className="h-full w-0 rounded-full bg-gradient-to-r from-brand-green to-emerald-500 transition-all duration-2000 ease-out group-hover:w-full" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center rounded-2xl bg-white p-8 shadow-lg sm:flex-row sm:gap-6">
            <div className="mb-4 sm:mb-0 sm:text-left">
              <h3 className="text-xl font-semibold text-gray-900">
                {t('cta_title')}
              </h3>
              <p className="mt-2 text-gray-600">
                {t('cta_description')}
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center rounded-xl bg-brand-green px-6 py-3 text-white font-semibold shadow-lg transition hover:bg-brand-green-dark hover:shadow-xl"
            >
              {t('cta_button')}
              <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}