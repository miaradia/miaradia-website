import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import Container from '@/components/ui/Container';
import SectionHeader from '@/components/ui/SectionHeader';

export default async function HistorySection() {
  const t = await getTranslations('History');

  return (
    <section id="about" className="bg-white py-24 lg:py-28">
      <Container>
        <SectionHeader eyebrow={t('eyebrow')} title={t('title')} align="left" />

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6 text-lg leading-relaxed text-gray-700">
            <p>{t('p1')}</p>
            <p>{t('p2')}</p>
            <p>{t('p3')}</p>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 rounded-3xl bg-brand-green/10" aria-hidden="true" />
            <Image
              src="/limite-ap-ranobe.jpeg"
              alt={t('image_alt')}
              width={640}
              height={480}
              className="relative rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
