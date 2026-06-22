'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Container from '@/components/ui/Container';
import Image from 'next/image';

interface Partner {
  id: string;
  name: string;
  type: 'donor' | 'implementation' | 'technical' | 'government';
  logo: string;
  description: string;
  website?: string;
  partnership_since: string;
  projects: string[];
  featured?: boolean;
}

export default function PartnersSection() {
  const t = useTranslations('Partners');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [hoveredPartner, setHoveredPartner] = useState<string | null>(null);

  const partners: Partner[] = [
    {
      id: 'conservation-allies',
      name: 'Conservation Allies',
      type: 'donor',
      logo: '/partners/conservation-allies.png',
      description: t('partners.conservation_allies.description'),
      partnership_since: '2026',
      projects: ['COFAV Protection Program'],
      featured: true,
    },
    {
      id: 'conservation-international',
      name: 'Conservation International',
      type: 'donor',
      logo: '/partners/conservation-international.png',
      description: t('partners.conservation_international.description'),
      partnership_since: '2010',
      projects: ['Conservation Pact', 'COBA Development'],
    },
    {
      id: 'undp-gef',
      name: 'UNDP / GEF',
      type: 'donor',
      logo: '/partners/undp-gef.png',
      description: t('partners.undp_gef.description'),
      partnership_since: '2011',
      projects: ['MIKEA Forest Management'],
    },
    {
      id: 'fid',
      name: 'FID (Fonds d\'Intervention pour le Développement)',
      type: 'government',
      logo: '/partners/fid.png',
      description: t('partners.fid.description'),
      partnership_since: '2002',
      projects: ['PCD Development', 'SAGE Management'],
    },
    {
      id: 'usaid-eri',
      name: 'USAID / ERI',
      type: 'donor',
      logo: '/partners/usaid-eri.png',
      description: t('partners.usaid_eri.description'),
      partnership_since: '2006',
      projects: ['Natural Resource Transfer'],
    },
    {
      id: 'page-giz',
      name: 'PAGE-GIZ',
      type: 'implementation',
      logo: '/partners/page-giz.png',
      description: t('partners.page_giz.description'),
      partnership_since: '2018',
      projects: ['Rural Development'],
    },
    {
      id: 'orn-haute-matsiatra',
      name: 'ORN Haute Matsiatra',
      type: 'government',
      logo: '/partners/orn.png',
      description: t('partners.orn_haute_matsiatra.description'),
      partnership_since: '2013',
      projects: ['Nutrition Programs', 'Community Health'],
    },
    {
      id: 'psdr-upep',
      name: 'PSDR UPEP',
      type: 'implementation',
      logo: '/partners/psdr.png',
      description: t('partners.psdr_upep.description'),
      partnership_since: '2003',
      projects: ['Community Development', 'Farmer Organizations'],
    },
  ];

  const partnerTypes = [
    { key: 'all', label: t('filter_all'), count: partners.length },
    { key: 'donor', label: t('types.donor'), count: partners.filter(p => p.type === 'donor').length },
    { key: 'implementation', label: t('types.implementation'), count: partners.filter(p => p.type === 'implementation').length },
    { key: 'technical', label: t('types.technical'), count: partners.filter(p => p.type === 'technical').length },
    { key: 'government', label: t('types.government'), count: partners.filter(p => p.type === 'government').length },
  ];

  const filteredPartners = selectedType === 'all' 
    ? partners 
    : partners.filter(partner => partner.type === selectedType);

  const typeColors = {
    donor: { bg: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-200' },
    implementation: { bg: 'bg-green-100', text: 'text-green-700', border: 'border-green-200' },
    technical: { bg: 'bg-purple-100', text: 'text-purple-700', border: 'border-purple-200' },
    government: { bg: 'bg-orange-100', text: 'text-orange-700', border: 'border-orange-200' },
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-20">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, rgba(34, 139, 34, 0.03) 25%, transparent 25%), 
                           linear-gradient(-45deg, rgba(34, 139, 34, 0.03) 25%, transparent 25%), 
                           linear-gradient(45deg, transparent 75%, rgba(34, 139, 34, 0.03) 75%), 
                           linear-gradient(-45deg, transparent 75%, rgba(34, 139, 34, 0.03) 75%)`,
          backgroundSize: '60px 60px',
          backgroundPosition: '0 0, 0 30px, 30px -30px, -30px 0px',
        }} />
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

        {/* Partnership Stats */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl bg-white p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-brand-green">8+</div>
            <div className="text-sm text-gray-600">{t('stats.active_partners')}</div>
          </div>
          <div className="rounded-xl bg-white p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-brand-green">22</div>
            <div className="text-sm text-gray-600">{t('stats.years_collaboration')}</div>
          </div>
          <div className="rounded-xl bg-white p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-brand-green">140M</div>
            <div className="text-sm text-gray-600">{t('stats.current_funding')} MGA</div>
          </div>
          <div className="rounded-xl bg-white p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-brand-green">12+</div>
            <div className="text-sm text-gray-600">{t('stats.joint_projects')}</div>
          </div>
        </div>

        {/* Partner type filters */}
        <div className="mt-16 flex flex-wrap justify-center gap-3">
          {partnerTypes.map((type) => (
            <button
              key={type.key}
              onClick={() => setSelectedType(type.key)}
              className={`flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ${
                selectedType === type.key
                  ? 'bg-brand-green text-white shadow-lg scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-100 shadow-md hover:shadow-lg'
              }`}
            >
              {type.label}
              <span className={`inline-flex h-5 w-5 items-center justify-center rounded-full text-xs ${
                selectedType === type.key
                  ? 'bg-white/20 text-white'
                  : 'bg-gray-200 text-gray-600'
              }`}>
                {type.count}
              </span>
            </button>
          ))}
        </div>

        {/* Partners Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredPartners.map((partner) => (
            <div
              key={partner.id}
              className={`group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                partner.featured ? 'ring-2 ring-brand-accent ring-opacity-50' : ''
              }`}
              onMouseEnter={() => setHoveredPartner(partner.id)}
              onMouseLeave={() => setHoveredPartner(null)}
            >
              {/* Featured badge */}
              {partner.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="inline-flex items-center rounded-full bg-brand-accent px-3 py-1 text-xs font-medium text-white">
                    {t('featured_partner')}
                  </span>
                </div>
              )}

              {/* Logo section */}
              <div className="relative h-32 bg-gradient-to-br from-gray-50 to-gray-100 p-6">
                <div className="flex h-full items-center justify-center">
                  <div className="h-16 w-full bg-gray-200 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500 text-sm">{partner.name}</span>
                  </div>
                </div>
                
                {/* Partnership duration */}
                <div className="absolute bottom-2 left-2">
                  <span className="text-xs text-gray-500">
                    {t('since')} {partner.partnership_since}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900 group-hover:text-brand-green-dark transition-colors">
                    {partner.name}
                  </h3>
                  <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium border ${
                    typeColors[partner.type].bg
                  } ${typeColors[partner.type].text} ${typeColors[partner.type].border}`}>
                    {t(`types.${partner.type}`)}
                  </span>
                </div>

                <p className="mb-4 text-sm text-gray-600 leading-relaxed">
                  {partner.description}
                </p>

                {/* Projects */}
                <div className="mb-4">
                  <h4 className="mb-2 text-xs font-medium text-gray-500 uppercase tracking-wide">
                    {t('key_projects')}
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {partner.projects.slice(0, 2).map((project, index) => (
                      <span
                        key={index}
                        className="inline-block rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-700"
                      >
                        {project}
                      </span>
                    ))}
                    {partner.projects.length > 2 && (
                      <span className="inline-block rounded-full bg-brand-green/10 px-2 py-1 text-xs text-brand-green">
                        +{partner.projects.length - 2} {t('more')}
                      </span>
                    )}
                  </div>
                </div>

                {/* Action buttons - shown on hover */}
                <div className={`flex gap-2 transition-all duration-300 ${
                  hoveredPartner === partner.id ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
                }`}>
                  <button className="flex-1 rounded-lg bg-brand-green px-4 py-2 text-sm font-medium text-white transition hover:bg-brand-green-dark">
                    {t('view_projects')}
                  </button>
                  {partner.website && (
                    <button className="rounded-lg border border-gray-300 p-2 text-gray-600 transition hover:bg-gray-50">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partnership CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block rounded-2xl bg-gradient-to-r from-brand-green to-emerald-600 p-8 text-white shadow-2xl">
            <h3 className="mb-4 text-2xl font-bold">
              {t('cta_title')}
            </h3>
            <p className="mb-6 max-w-2xl text-lg text-green-100">
              {t('cta_description')}
            </p>
            <a
              href="#contact"
              className="inline-flex items-center rounded-xl bg-white px-8 py-4 font-semibold text-brand-green shadow-lg transition hover:shadow-xl hover:scale-105"
            >
              {t('cta_button')}
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}