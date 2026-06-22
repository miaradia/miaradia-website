'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Container from '@/components/ui/Container';
import Image from 'next/image';

interface Expert {
  id: string;
  name: string;
  title: string;
  specialization: string[];
  experience: string;
  image: string;
  linkedIn?: string;
  email?: string;
  availability: 'available' | 'consulting' | 'project-based';
}

interface ExpertiseArea {
  id: string;
  name: string;
  description: string;
  experts: number;
  icon: string;
}

export default function ExpertNetworkSection() {
  const t = useTranslations('ExpertNetwork');
  const [selectedArea, setSelectedArea] = useState<string>('all');
  const [hoveredExpert, setHoveredExpert] = useState<string | null>(null);

  const expertiseAreas: ExpertiseArea[] = [
    {
      id: 'governance',
      name: t('areas.governance.name'),
      description: t('areas.governance.description'),
      experts: 8,
      icon: '🏛️',
    },
    {
      id: 'conservation',
      name: t('areas.conservation.name'),
      description: t('areas.conservation.description'),
      experts: 12,
      icon: '🌿',
    },
    {
      id: 'development',
      name: t('areas.development.name'),
      description: t('areas.development.description'),
      experts: 15,
      icon: '🚀',
    },
    {
      id: 'health',
      name: t('areas.health.name'),
      description: t('areas.health.description'),
      experts: 6,
      icon: '🏥',
    },
    {
      id: 'research',
      name: t('areas.research.name'),
      description: t('areas.research.description'),
      experts: 10,
      icon: '🔬',
    },
  ];

  const experts: Expert[] = [
    {
      id: 'expert-1',
      name: 'Dr. Sarah Johnson',
      title: t('experts.expert_1.title'),
      specialization: ['Environmental Law', 'Policy Development', 'COFAV Protection'],
      experience: '15+ years',
      image: '/experts/expert-1.jpg',
      availability: 'available',
    },
    {
      id: 'expert-2',
      name: 'Prof. Michael Chen',
      title: t('experts.expert_2.title'),
      specialization: ['GIS Mapping', 'Remote Sensing', 'Forest Monitoring'],
      experience: '12+ years',
      image: '/experts/expert-2.jpg',
      availability: 'consulting',
    },
    {
      id: 'expert-3',
      name: 'Dr. Amina Rakoto',
      title: t('experts.expert_3.title'),
      specialization: ['Community Health', 'Nutrition Programs', 'Rural Development'],
      experience: '18+ years',
      image: '/experts/expert-3.jpg',
      availability: 'project-based',
    },
    {
      id: 'expert-4',
      name: 'James Wilson',
      title: t('experts.expert_4.title'),
      specialization: ['Local Governance', 'Capacity Building', 'Municipal Planning'],
      experience: '20+ years',
      image: '/experts/expert-4.jpg',
      availability: 'available',
    },
    {
      id: 'expert-5',
      name: 'Dr. Elena Ratsimba',
      title: t('experts.expert_5.title'),
      specialization: ['Biodiversity Research', 'Ecosystem Management', 'Conservation Biology'],
      experience: '14+ years',
      image: '/experts/expert-5.jpg',
      availability: 'consulting',
    },
    {
      id: 'expert-6',
      name: 'Robert Martinez',
      title: t('experts.expert_6.title'),
      specialization: ['Project Management', 'Impact Assessment', 'Monitoring & Evaluation'],
      experience: '16+ years',
      image: '/experts/expert-6.jpg',
      availability: 'available',
    },
  ];

  const availabilityColors = {
    available: { bg: 'bg-green-100', text: 'text-green-700', dot: 'bg-green-500' },
    consulting: { bg: 'bg-yellow-100', text: 'text-yellow-700', dot: 'bg-yellow-500' },
    'project-based': { bg: 'bg-blue-100', text: 'text-blue-700', dot: 'bg-blue-500' },
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-gray-50 py-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 h-40 w-40 rounded-full bg-gradient-to-br from-brand-green/30 to-transparent blur-3xl" />
        <div className="absolute bottom-20 left-20 h-32 w-32 rounded-full bg-gradient-to-tr from-emerald-300/40 to-transparent blur-2xl" />
      </div>

      <Container className="relative">
        <div className="text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-brand-green">
            {t('eyebrow')}
          </p>
          <h2 className="mx-auto max-w-4xl text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
            {t('title')}
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600 md:text-xl">
            {t('subtitle')}
          </p>
        </div>

        {/* Expertise Areas */}
        <div className="mt-16">
          <h3 className="mb-8 text-center text-2xl font-semibold text-gray-900">
            {t('areas_title')}
          </h3>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {expertiseAreas.map((area) => (
              <div
                key={area.id}
                className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-green/5 to-emerald-100/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                <div className="relative text-center">
                  <div className="mb-4 text-3xl">{area.icon}</div>
                  <h4 className="mb-2 font-semibold text-gray-900">{area.name}</h4>
                  <p className="mb-3 text-sm text-gray-600">{area.description}</p>
                  {/* <span className="inline-flex items-center rounded-full bg-brand-green px-3 py-1 text-xs font-medium text-white">
                    {area.experts} {t('experts_count')}
                  </span> */}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Experts */}
        {/*  */}

        {/* Network Stats */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-brand-green to-emerald-600 p-8 text-white">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="text-3xl font-bold">50+</div>
              <div className="text-sm text-green-100">{t('stats.total_experts')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">15+</div>
              <div className="text-sm text-green-100">{t('stats.specializations')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">200+</div>
              <div className="text-sm text-green-100">{t('stats.projects_completed')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-sm text-green-100">{t('stats.availability')}</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}