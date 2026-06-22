'use client';

import { useState, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Container from '@/components/ui/Container';
import Image from 'next/image';

interface GalleryItem {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  category: 'fieldwork' | 'training' | 'community' | 'conservation' | 'infrastructure';
  image: string;
  tags: string[];
  photographer?: string;
}

export default function FieldGallerySection() {
  const t = useTranslations('FieldGallery');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 'cofav-patrol-1',
      title: t('items.cofav_patrol_1.title'),
      description: t('items.cofav_patrol_1.description'),
      location: 'COFAV Corridor',
      date: '2024-03',
      category: 'conservation',
      image: '/gallery/cofav-patrol-1.jpg',
      tags: ['Law Enforcement', 'Forest Protection', 'COFAV'],
      photographer: 'MIARADIA Field Team',
    },
    {
      id: 'community-meeting-1',
      title: t('items.community_meeting_1.title'),
      description: t('items.community_meeting_1.description'),
      location: 'Fianarantsoa',
      date: '2024-02',
      category: 'community',
      image: '/gallery/community-meeting-1.jpg',
      tags: ['Community Engagement', 'PCD Development', 'Local Governance'],
    },
    {
      id: 'training-session-1',
      title: t('items.training_session_1.title'),
      description: t('items.training_session_1.description'),
      location: 'Vohibato',
      date: '2024-01',
      category: 'training',
      image: '/gallery/training-session-1.jpg',
      tags: ['Capacity Building', 'Professional Training', 'Skills Development'],
    },
    {
      id: 'forest-monitoring',
      title: t('items.forest_monitoring.title'),
      description: t('items.forest_monitoring.description'),
      location: 'COFAV Corridor',
      date: '2024-04',
      category: 'conservation',
      image: '/gallery/forest-monitoring.jpg',
      tags: ['Forest Monitoring', 'GIS Mapping', 'Conservation'],
    },
    {
      id: 'health-program',
      title: t('items.health_program.title'),
      description: t('items.health_program.description'),
      location: 'Haute Matsiatra',
      date: '2023-11',
      category: 'community',
      image: '/gallery/health-program.jpg',
      tags: ['Community Health', 'Nutrition', 'Rural Health'],
    },
    {
      id: 'infrastructure-dev',
      title: t('items.infrastructure_dev.title'),
      description: t('items.infrastructure_dev.description'),
      location: 'Ankazoabo Sud',
      date: '2023-09',
      category: 'infrastructure',
      image: '/gallery/infrastructure-dev.jpg',
      tags: ['Infrastructure', 'Rural Development', 'Community Projects'],
    },
    {
      id: 'field-research',
      title: t('items.field_research.title'),
      description: t('items.field_research.description'),
      location: 'Ikongo',
      date: '2023-08',
      category: 'fieldwork',
      image: '/gallery/field-research.jpg',
      tags: ['Research', 'Data Collection', 'Impact Assessment'],
    },
    {
      id: 'drone-survey',
      title: t('items.drone_survey.title'),
      description: t('items.drone_survey.description'),
      location: 'COFAV Corridor',
      date: '2024-05',
      category: 'conservation',
      image: '/gallery/drone-survey.jpg',
      tags: ['Drone Technology', 'Aerial Survey', 'Forest Protection'],
    },
  ];

  const categories = [
    { key: 'all', label: t('filter_all'), count: galleryItems.length },
    { key: 'conservation', label: t('categories.conservation'), count: galleryItems.filter(item => item.category === 'conservation').length },
    { key: 'community', label: t('categories.community'), count: galleryItems.filter(item => item.category === 'community').length },
    { key: 'training', label: t('categories.training'), count: galleryItems.filter(item => item.category === 'training').length },
    { key: 'fieldwork', label: t('categories.fieldwork'), count: galleryItems.filter(item => item.category === 'fieldwork').length },
    { key: 'infrastructure', label: t('categories.infrastructure'), count: galleryItems.filter(item => item.category === 'infrastructure').length },
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const openLightbox = (item: GalleryItem) => {
    setSelectedImage(item);
    setCurrentIndex(filteredItems.findIndex(i => i.id === item.id));
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % filteredItems.length
      : (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    
    setCurrentIndex(newIndex);
    setSelectedImage(filteredItems[newIndex]);
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') navigateImage('prev');
      if (e.key === 'ArrowRight') navigateImage('next');
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentIndex, filteredItems]);

  const categoryColors = {
    fieldwork: 'bg-blue-100 text-blue-700',
    training: 'bg-purple-100 text-purple-700',
    community: 'bg-green-100 text-green-700',
    conservation: 'bg-emerald-100 text-emerald-700',
    infrastructure: 'bg-orange-100 text-orange-700',
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-green-50 py-20">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, rgba(34, 139, 34, 0.02) 0px, rgba(34, 139, 34, 0.02) 1px, transparent 1px, transparent 20px),
                           repeating-linear-gradient(-45deg, rgba(34, 139, 34, 0.02) 0px, rgba(34, 139, 34, 0.02) 1px, transparent 1px, transparent 20px)`,
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

        {/* Gallery Stats */}
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          <div className="rounded-xl bg-white p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-brand-green">{galleryItems.length}</div>
            <div className="text-sm text-gray-600">{t('total_photos')}</div>
          </div>
          <div className="rounded-xl bg-white p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-brand-green">{new Set(galleryItems.map(item => item.location)).size}</div>
            <div className="text-sm text-gray-600">{t('locations_covered')}</div>
          </div>
          <div className="rounded-xl bg-white p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-brand-green">2+</div>
            <div className="text-sm text-gray-600">{t('years_documented')}</div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="mt-16 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setSelectedCategory(category.key)}
              className={`flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ${
                selectedCategory === category.key
                  ? 'bg-brand-green text-white shadow-lg scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-100 shadow-md hover:shadow-lg'
              }`}
            >
              {category.label}
              <span className={`inline-flex h-5 w-5 items-center justify-center rounded-full text-xs ${
                selectedCategory === category.key
                  ? 'bg-white/20 text-white'
                  : 'bg-gray-200 text-gray-600'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
              onClick={() => openLightbox(item)}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                {/* Placeholder image */}
                <div className="h-full w-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="text-2xl mb-2">📸</div>
                    <div className="text-sm">{item.title}</div>
                  </div>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                {/* Category badge */}
                <div className="absolute top-3 left-3">
                  <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${
                    categoryColors[item.category]
                  }`}>
                    {t(`categories.${item.category}`)}
                  </span>
                </div>

                {/* View icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="rounded-full bg-white/20 p-3 backdrop-blur-sm">
                    <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="mb-2 font-semibold text-gray-900 group-hover:text-brand-green-dark transition-colors">
                  {item.title}
                </h3>
                
                <div className="mb-3 flex items-center gap-4 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {item.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {new Date(item.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'short' })}
                  </span>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="mt-3 flex flex-wrap gap-1">
                  {item.tags.slice(0, 2).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="inline-block rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                  {item.tags.length > 2 && (
                    <span className="inline-block rounded-full bg-brand-green/10 px-2 py-1 text-xs text-brand-green">
                      +{item.tags.length - 2}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="mt-12 text-center">
          <button className="inline-flex items-center rounded-xl bg-brand-green px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-brand-green-dark hover:shadow-xl hover:scale-105">
            {t('load_more')}
            <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>
        </div>
      </Container>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
          <div className="relative max-h-full max-w-5xl w-full">
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition hover:bg-black/70"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Navigation buttons */}
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition hover:bg-black/70"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition hover:bg-black/70"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Main image */}
            <div className="relative overflow-hidden rounded-2xl bg-white">
              <div className="aspect-[16/10] w-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="text-4xl mb-4">📸</div>
                  <div className="text-xl mb-2">{selectedImage.title}</div>
                  <div className="text-sm">{selectedImage.location} • {selectedImage.date}</div>
                </div>
              </div>

              {/* Image info */}
              <div className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-gray-900">{selectedImage.title}</h3>
                  <span className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${
                    categoryColors[selectedImage.category]
                  }`}>
                    {t(`categories.${selectedImage.category}`)}
                  </span>
                </div>

                <div className="mb-4 flex items-center gap-6 text-sm text-gray-600">
                  <span className="flex items-center gap-2">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    {selectedImage.location}
                  </span>
                  <span className="flex items-center gap-2">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {new Date(selectedImage.date).toLocaleDateString('fr-FR', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </span>
                  {selectedImage.photographer && (
                    <span className="flex items-center gap-2">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      </svg>
                      {selectedImage.photographer}
                    </span>
                  )}
                </div>

                <p className="mb-4 text-gray-700 leading-relaxed">{selectedImage.description}</p>

                <div className="flex flex-wrap gap-2">
                  {selectedImage.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Image counter */}
            <div className="mt-4 text-center text-white">
              <span className="text-sm">
                {currentIndex + 1} / {filteredItems.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}