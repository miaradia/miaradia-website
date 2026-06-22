'use client';

import { useState, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Container from '@/components/ui/Container';

interface InterventionArea {
  id: string;
  name: string;
  region: string;
  coordinates: { x: number; y: number };
  projects: number;
  communes: number;
  status: 'active' | 'completed' | 'planned';
  description: string;
  keyProjects: string[];
}

interface MapPin {
  area: InterventionArea;
  x: number;
  y: number;
}

export default function GeographicMapSection() {
  const t = useTranslations('GeographicMap');
  const [selectedArea, setSelectedArea] = useState<InterventionArea | null>(null);
  const [hoveredArea, setHoveredArea] = useState<string | null>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  const interventionAreas: InterventionArea[] = [
    {
      id: 'fianarantsoa',
      name: 'Fianarantsoa',
      region: 'Haute Matsiatra',
      coordinates: { x: 45, y: 65 },
      projects: 4,
      communes: 15,
      status: 'active',
      description: t('areas.fianarantsoa.description'),
      keyProjects: ['PCD Development', 'Training Programs', 'COFAV Protection'],
    },
    {
      id: 'cofav-corridor',
      name: 'Corridor COFAV (Ambositra-Vondrozo)',
      region: 'Haute Matsiatra - Ihorombe - Atsimo Atsinanana',
      coordinates: { x: 52, y: 58 },
      projects: 1,
      communes: 25,
      status: 'active',
      description: t('areas.cofav_corridor.description'),
      keyProjects: ['Law Enforcement', 'Forest Protection', 'Community Patrols'],
    },
    {
      id: 'ikongo',
      name: 'Ikongo',
      region: 'Vatovavy Fitovinany',
      coordinates: { x: 48, y: 55 },
      projects: 2,
      communes: 5,
      status: 'completed',
      description: t('areas.ikongo.description'),
      keyProjects: ['Conservation Pact', 'COBA Strengthening'],
    },
    {
      id: 'mikea',
      name: 'MIKEA Forest',
      region: 'Toliara',
      coordinates: { x: 25, y: 80 },
      projects: 1,
      communes: 4,
      status: 'completed',
      description: t('areas.mikea.description'),
      keyProjects: ['Forest Management', 'UNDP/GEF Project'],
    },
    {
      id: 'vohibato',
      name: 'Vohibato',
      region: 'Haute Matsiatra',
      coordinates: { x: 42, y: 68 },
      projects: 2,
      communes: 8,
      status: 'completed',
      description: t('areas.vohibato.description'),
      keyProjects: ['Nutrition Programs', 'Community Health'],
    },
    {
      id: 'morombe',
      name: 'Morombe',
      region: 'Atsimo Andrefana',
      coordinates: { x: 28, y: 78 },
      projects: 1,
      communes: 3,
      status: 'completed',
      description: t('areas.morombe.description'),
      keyProjects: ['Rural Development', 'PCD Planning'],
    },
    {
      id: 'ankazoabo',
      name: 'Ankazoabo Sud',
      region: 'Atsimo Andrefana',
      coordinates: { x: 22, y: 82 },
      projects: 1,
      communes: 2,
      status: 'completed',
      description: t('areas.ankazoabo.description'),
      keyProjects: ['Environmental Management', 'SAGE Program'],
    },
  ];

  const statusColors = {
    active: { 
      bg: 'bg-green-500', 
      ring: 'ring-green-400', 
      text: 'text-green-700',
      label: t('status.active')
    },
    completed: { 
      bg: 'bg-blue-500', 
      ring: 'ring-blue-400', 
      text: 'text-blue-700',
      label: t('status.completed')
    },
    planned: { 
      bg: 'bg-yellow-500', 
      ring: 'ring-yellow-400', 
      text: 'text-yellow-700',
      label: t('status.planned')
    },
  };

  const totalStats = {
    projects: interventionAreas.reduce((sum, area) => sum + area.projects, 0),
    communes: interventionAreas.reduce((sum, area) => sum + area.communes, 0),
    regions: [...new Set(interventionAreas.map(area => area.region))].length,
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50 py-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 h-40 w-40 rounded-full bg-gradient-to-br from-blue-300/30 to-transparent blur-3xl" />
        <div className="absolute bottom-20 right-20 h-32 w-32 rounded-full bg-gradient-to-tr from-green-300/40 to-transparent blur-2xl" />
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

        {/* Overall Stats */}
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          <div className="rounded-xl bg-white p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-brand-green">{totalStats.projects}</div>
            <div className="text-sm text-gray-600">{t('total_projects')}</div>
          </div>
          <div className="rounded-xl bg-white p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-brand-green">{totalStats.communes}</div>
            <div className="text-sm text-gray-600">{t('total_communes')}</div>
          </div>
          <div className="rounded-xl bg-white p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-brand-green">{totalStats.regions}</div>
            <div className="text-sm text-gray-600">{t('regions_covered')}</div>
          </div>
        </div>

        {/* Interactive Map */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {/* Map Container */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl bg-white p-6 shadow-2xl">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-900">
                  {t('map_title')}
                </h3>
                
                {/* Legend */}
                <div className="flex gap-4 text-sm">
                  {Object.entries(statusColors).map(([status, colors]) => (
                    <div key={status} className="flex items-center gap-2">
                      <div className={`h-3 w-3 rounded-full ${colors.bg}`} />
                      <span className="text-gray-600">{colors.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Madagascar Map SVG */}
              <div 
                ref={mapRef}
                className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-gradient-to-br from-blue-100 to-green-100"
              >
                {/* Simplified Madagascar outline */}
                <svg
                  viewBox="0 0 100 120"
                  className="absolute inset-0 h-full w-full"
                  style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))' }}
                >
                  {/* Madagascar island shape (simplified) */}
                  <path
                    d="M35 10 Q40 8 45 12 Q55 15 60 25 Q65 35 62 45 Q58 55 60 65 Q65 75 62 85 Q58 95 50 105 Q45 110 40 108 Q35 105 32 95 Q28 85 30 75 Q25 65 28 55 Q30 45 28 35 Q30 25 32 15 Q35 12 35 10 Z"
                    fill="#e5f3e5"
                    stroke="#22c55e"
                    strokeWidth="0.5"
                    className="transition-all duration-300"
                  />
                  
                  {/* Intervention area pins */}
                  {interventionAreas.map((area) => (
                    <g key={area.id}>
                      {/* Pin shadow */}
                      <circle
                        cx={area.coordinates.x + 1}
                        cy={area.coordinates.y + 1}
                        r="3"
                        fill="rgba(0,0,0,0.2)"
                        className="transition-all duration-300"
                      />
                      
                      {/* Main pin */}
                      <circle
                        cx={area.coordinates.x}
                        cy={area.coordinates.y}
                        r={hoveredArea === area.id ? "5" : "3.5"}
                        fill="white"
                        stroke={statusColors[area.status].bg.replace('bg-', '')}
                        strokeWidth="2"
                        className={`cursor-pointer transition-all duration-300 ${
                          selectedArea?.id === area.id ? 'animate-pulse' : ''
                        }`}
                        onMouseEnter={() => setHoveredArea(area.id)}
                        onMouseLeave={() => setHoveredArea(null)}
                        onClick={() => setSelectedArea(area)}
                      />
                      
                      {/* Inner pin dot */}
                      <circle
                        cx={area.coordinates.x}
                        cy={area.coordinates.y}
                        r={hoveredArea === area.id ? "2.5" : "2"}
                        className={`cursor-pointer transition-all duration-300 ${statusColors[area.status].bg}`}
                        onMouseEnter={() => setHoveredArea(area.id)}
                        onMouseLeave={() => setHoveredArea(null)}
                        onClick={() => setSelectedArea(area)}
                      />

                      {/* Area label */}
                      {(hoveredArea === area.id || selectedArea?.id === area.id) && (
                        <text
                          x={area.coordinates.x}
                          y={area.coordinates.y - 8}
                          textAnchor="middle"
                          fontSize="3"
                          fill="#374151"
                          className="font-semibold pointer-events-none"
                        >
                          {area.name}
                        </text>
                      )}
                    </g>
                  ))}
                </svg>

                {/* Floating info cards */}
                {hoveredArea && (
                  <div className="absolute top-4 right-4 max-w-xs rounded-lg bg-white p-4 shadow-xl border border-gray-200">
                    {(() => {
                      const area = interventionAreas.find(a => a.id === hoveredArea);
                      return area ? (
                        <>
                          <h4 className="font-semibold text-gray-900">{area.name}</h4>
                          <p className="text-sm text-gray-600">{area.region}</p>
                          <div className="mt-2 grid grid-cols-2 gap-2 text-xs">
                            <div>
                              <span className="font-medium">{area.projects}</span> {t('projects_short')}
                            </div>
                            <div>
                              <span className="font-medium">{area.communes}</span> {t('communes_short')}
                            </div>
                          </div>
                        </>
                      ) : null;
                    })()}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Area Details Panel */}
          <div className="lg:col-span-1">
            <div className="rounded-2xl bg-white p-6 shadow-2xl h-full">
              {selectedArea ? (
                <>
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {selectedArea.name}
                    </h3>
                    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${
                      statusColors[selectedArea.status].bg.replace('bg-', 'bg-opacity-20 bg-')
                    } ${statusColors[selectedArea.status].text}`}>
                      {statusColors[selectedArea.status].label}
                    </span>
                  </div>

                  <p className="mb-4 text-sm text-gray-600">{selectedArea.region}</p>
                  
                  <div className="mb-6 grid grid-cols-2 gap-4">
                    <div className="rounded-lg bg-gray-50 p-3 text-center">
                      <div className="text-xl font-bold text-brand-green">{selectedArea.projects}</div>
                      <div className="text-xs text-gray-600">{t('projects')}</div>
                    </div>
                    <div className="rounded-lg bg-gray-50 p-3 text-center">
                      <div className="text-xl font-bold text-brand-green">{selectedArea.communes}</div>
                      <div className="text-xs text-gray-600">{t('communes')}</div>
                    </div>
                  </div>

                  <p className="mb-4 text-sm text-gray-700 leading-relaxed">
                    {selectedArea.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="mb-3 text-sm font-semibold text-gray-900">{t('key_projects')}</h4>
                    <div className="space-y-2">
                      {selectedArea.keyProjects.map((project, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="h-1.5 w-1.5 rounded-full bg-brand-green" />
                          {project}
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedArea(null)}
                    className="w-full rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-200"
                  >
                    {t('close_details')}
                  </button>
                </>
              ) : (
                <div className="text-center text-gray-500">
                  <div className="mb-4 text-4xl">🗺️</div>
                  <h3 className="mb-2 text-lg font-semibold">{t('select_area_title')}</h3>
                  <p className="text-sm">{t('select_area_description')}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Areas List */}
        <div className="mt-16">
          <h3 className="mb-8 text-center text-2xl font-semibold text-gray-900">
            {t('all_areas_title')}
          </h3>
          
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {interventionAreas.map((area) => (
              <button
                key={area.id}
                onClick={() => setSelectedArea(area)}
                className={`text-left rounded-xl bg-white p-4 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                  selectedArea?.id === area.id ? 'ring-2 ring-brand-green ring-opacity-50' : ''
                }`}
              >
                <div className="mb-2 flex items-center justify-between">
                  <h4 className="font-semibold text-gray-900">{area.name}</h4>
                  <span className={`h-3 w-3 rounded-full ${statusColors[area.status].bg}`} />
                </div>
                
                <p className="mb-3 text-sm text-gray-600">{area.region}</p>
                
                <div className="flex justify-between text-xs text-gray-500">
                  <span>{area.projects} {t('projects_short')}</span>
                  <span>{area.communes} {t('communes_short')}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}