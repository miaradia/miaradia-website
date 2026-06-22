import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import ContactForm from '@/components/ui/ContactForm';
import Container from '@/components/ui/Container';
import SectionHeader from '@/components/ui/SectionHeader';

export default async function ContactSection() {
  const t = await getTranslations('Contact');

  return (
    <section id="contact" className="bg-gradient-to-b from-gray-50 to-white py-24 lg:py-28">
      <Container>
        <SectionHeader eyebrow={t('eyebrow')} title={t('title')} subtitle={t('subtitle')} />

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <ContactForm />

          <div className="relative min-h-[420px]">
            <Image
              src="/base-vie.jpeg"
              alt={t('image_alt')}
              fill
              className="rounded-2xl object-cover shadow-xl"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            <div className="absolute bottom-6 left-6 right-6">
              <div className="rounded-2xl border border-orange-200/30 bg-brand-accent/95 p-6 shadow-lg backdrop-blur-sm">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white">
                    <svg
                      className="h-6 w-6 text-brand-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-white">{t('opening_hours')}</p>
                    <p className="text-orange-50">{t('open_24_7')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
