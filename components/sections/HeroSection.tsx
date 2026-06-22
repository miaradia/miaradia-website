import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import Container from '@/components/ui/Container';

export default async function HeroSection() {
  const t = await getTranslations('Hero');

  return (
    <section id="home" className="relative flex min-h-[92vh] items-center justify-center overflow-hidden text-white">
      <div className="absolute inset-0">
        <Image
          src="/hero-action.jpeg"
          alt={t('image_alt')}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/75" />
      </div>

      <Container className="relative z-10 py-24 text-center">
        <p className="mb-6 inline-block rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium uppercase tracking-widest backdrop-blur-sm">
          {t('eyebrow')}
        </p>

        <h1 className="mx-auto max-w-5xl text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
          {t('title')}
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg font-light italic text-gray-100 md:text-2xl">
          {t('subtitle')}
        </p>

        <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-gray-200 md:text-lg">
          {t('description')}
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="#about"
            className="rounded-full bg-brand-green px-10 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-brand-green-dark hover:shadow-xl"
          >
            {t('cta_mission')}
          </a>
          <a
            href="#contact"
            className="rounded-full border-2 border-white px-10 py-4 text-lg font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-brand-green"
          >
            {t('cta_contact')}
          </a>
        </div>

        <dl className="mx-auto mt-16 grid max-w-3xl grid-cols-3 gap-4 rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-md md:gap-8">
          {[1, 2, 3].map((num) => (
            <div key={num} className="text-center">
              <dt className="text-2xl font-bold text-white md:text-3xl">{t(`stat_${num}_value`)}</dt>
              <dd className="mt-1 text-xs uppercase tracking-wide text-gray-200 md:text-sm">
                {t(`stat_${num}_label`)}
              </dd>
            </div>
          ))}
        </dl>
      </Container>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
        <svg className="h-6 w-6 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
