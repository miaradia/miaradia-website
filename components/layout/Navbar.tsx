'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';

const DONATION_LINK = '#';

const navLinks = [
  { href: '#home', key: 'home' as const },
  { href: '#about', key: 'about' as const },
  { href: '#activities', key: 'activities' as const },
  { href: '#projects', key: 'projects' as const },
  { href: '#cofav', key: 'cofav' as const, highlight: true },
  { href: '#members', key: 'team' as const },
  { href: '#contact', key: 'contact' as const },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('Navbar');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = (newLocale: 'fr' | 'en') => {
    router.replace(pathname, { locale: newLocale });
    setIsOpen(false);
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-100 bg-white/95 shadow-sm backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
        <a href="#home" className="group flex items-center gap-3">
          <Image
            src="/logo-miaradia.png"
            alt={t('logo_alt')}
            width={52}
            height={52}
            className="ring-2 ring-brand-green/10"
          />
          <div>
            <p className="text-lg font-bold text-gray-900 transition-colors group-hover:text-brand-green">
              {t('org_name')}
            </p>
            <p className="text-[11px] uppercase tracking-wider text-gray-500">{t('subtitle')}</p>
          </div>
        </a>

        <div className="hidden items-center gap-5 xl:flex">
          {navLinks.map(({ href, key, highlight }) => (
            <a
              key={key}
              href={href}
              className={`text-sm font-semibold tracking-wide transition-colors ${
                highlight
                  ? 'text-brand-green hover:text-brand-green-dark'
                  : 'text-gray-600 hover:text-brand-green'
              }`}
            >
              {t(key)}
            </a>
          ))}

          <div className="flex overflow-hidden rounded-lg border border-gray-200">
            {(['fr', 'en'] as const).map((lang) => (
              <button
                key={lang}
                type="button"
                onClick={() => switchLocale(lang)}
                className={`px-3 py-1.5 text-xs font-bold uppercase transition-colors ${
                  locale === lang
                    ? 'bg-brand-green text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
                aria-current={locale === lang ? 'true' : undefined}
              >
                {lang}
              </button>
            ))}
          </div>

          <a
            href={DONATION_LINK}
            className="rounded-full bg-brand-green px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-brand-green-dark hover:shadow-lg"
          >
            {t('donate')}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-gray-900 xl:hidden"
          aria-expanded={isOpen}
          aria-label={isOpen ? t('menu_close') : t('menu_open')}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-gray-100 bg-white px-6 py-6 xl:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map(({ href, key, highlight }) => (
              <a
                key={key}
                href={href}
                onClick={closeMenu}
                className={`text-base font-medium ${
                  highlight ? 'text-brand-green font-bold' : 'text-gray-700'
                }`}
              >
                {t(key)}
              </a>
            ))}

            <div className="flex gap-3 border-t border-gray-100 pt-4">
              {(['fr', 'en'] as const).map((lang) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => switchLocale(lang)}
                  className={`rounded-lg border px-4 py-2 text-sm font-bold uppercase ${
                    locale === lang
                      ? 'border-brand-green bg-brand-green text-white'
                      : 'border-gray-200 text-brand-green'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
