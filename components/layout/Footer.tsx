'use client';

import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');
  const tNav = useTranslations('Navbar');
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '#home', key: 'home' as const },
    { href: '#about', key: 'about' as const },
    { href: '#activities', key: 'activities' as const },
    { href: '#projects', key: 'projects' as const },
    { href: '#members', key: 'team' as const },
    { href: '#contact', key: 'contact' as const },
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: '#', icon: 'linkedin' },
    { name: 'Twitter', href: '#', icon: 'twitter' },
    { name: 'Facebook', href: '#', icon: 'facebook' },
    { name: 'YouTube', href: '#', icon: 'youtube' },
  ];

  const impactStats = [
    { value: '22+', label: 'Years of Experience' },
    { value: '60+', label: 'Communes Served' },
    { value: '5+', label: 'Regions Covered' },
    { value: '8+', label: 'Partners' },
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 h-40 w-40 rounded-full bg-gradient-to-br from-brand-green/20 to-transparent blur-3xl" />
        <div className="absolute bottom-20 left-20 h-32 w-32 rounded-full bg-gradient-to-tr from-emerald-300/10 to-transparent blur-2xl" />
      </div>

      {/* Main footer content */}
      <div className="relative">
        {/* Top section - Impact banner */}
        <div className="border-b border-gray-800 bg-gradient-to-r from-brand-green/10 to-emerald-600/5 py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center">
              <h3 className="mb-6 text-2xl font-bold text-white md:text-3xl">
                {t('impact_title')}
              </h3>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {impactStats.map((stat, index) => (
                  <div key={index} className="group">
                    <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:scale-105">
                      <div className="text-3xl font-bold text-brand-green">{stat.value}</div>
                      <div className="mt-1 text-sm text-gray-300">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main footer sections */}
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-4">
            {/* Organization info */}
            <div className="lg:col-span-2">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-green to-emerald-600">
                  <span className="text-xl font-bold text-white">M</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{tNav('org_name')}</h3>
                  <p className="text-sm text-gray-400">{tNav('subtitle')}</p>
                </div>
              </div>

              <p className="mb-6 max-w-lg leading-relaxed text-gray-300">{t('description')}</p>

              {/* Active grant highlight */}
              <div className="mb-8 overflow-hidden rounded-2xl border border-brand-green/30 bg-gradient-to-br from-brand-green/20 to-emerald-600/10 p-6 backdrop-blur-sm">
                <div className="mb-3 flex items-center gap-2">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-brand-green" />
                  <p className="text-sm font-semibold text-brand-green">{t('grant_title')}</p>
                </div>
                <p className="text-sm leading-relaxed text-gray-300">{t('grant_description')}</p>
                <div className="mt-4 flex items-center gap-4 text-xs text-gray-400">
                  <span className="flex items-center gap-1">
                    <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    2026 Active
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                    140M MGA
                  </span>
                </div>
              </div>

              {/* Social media links */}
              <div>
                <h4 className="mb-4 text-sm font-semibold text-gray-300">{t('follow_us')}</h4>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="group flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 transition-all duration-300 hover:bg-brand-green hover:scale-110"
                      aria-label={social.name}
                    >
                      <span className="text-gray-400 group-hover:text-white transition-colors">
                        {social.icon === 'linkedin' && '💼'}
                        {social.icon === 'twitter' && '🐦'}
                        {social.icon === 'facebook' && '📘'}
                        {social.icon === 'youtube' && '📺'}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="mb-6 text-sm font-bold uppercase tracking-wider text-brand-green">
                {t('quick_links')}
              </h4>
              <ul className="space-y-4">
                {quickLinks.map(({ href, key }) => (
                  <li key={key}>
                    <a 
                      href={href} 
                      className="group flex items-center gap-2 text-gray-400 transition-all duration-300 hover:text-brand-green hover:translate-x-1"
                    >
                      <div className="h-1 w-1 rounded-full bg-gray-600 group-hover:bg-brand-green transition-colors" />
                      {tNav(key)}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Newsletter signup */}
              <div className="mt-8">
                <h4 className="mb-3 text-sm font-semibold text-gray-300">{t('newsletter_title')}</h4>
                <p className="mb-4 text-xs text-gray-400">{t('newsletter_description')}</p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder={t('email_placeholder')}
                    className="flex-1 rounded-lg bg-gray-800 px-3 py-2 text-sm text-white placeholder-gray-500 border border-gray-700 focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green"
                  />
                  <button className="rounded-lg bg-brand-green px-4 py-2 text-sm font-medium text-white transition hover:bg-brand-green-dark">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Contact info */}
            <div>
              <h4 className="mb-6 text-sm font-bold uppercase tracking-wider text-brand-green">
                {t('contact_info')}
              </h4>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 items-center justify-center rounded bg-gray-800">
                    <svg className="h-3 w-3 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                  </div>
                  <div className="text-sm text-gray-400">
                    <p className="font-medium text-gray-300">{t('address_title')}</p>
                    <p>{t('location')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 items-center justify-center rounded bg-gray-800">
                    <svg className="h-3 w-3 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="text-sm">
                    <p className="font-medium text-gray-300">{t('email_title')}</p>
                    <a href={`mailto:${t('email')}`} className="text-gray-400 transition hover:text-brand-green">
                      {t('email')}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 items-center justify-center rounded bg-gray-800">
                    <svg className="h-3 w-3 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="text-sm">
                    <p className="font-medium text-gray-300">{t('phone_title')}</p>
                    <p className="text-gray-400">{t('phone')}</p>
                  </div>
                </div>
              </div>

              {/* Founded info */}
              <div className="mt-8 rounded-lg border border-gray-800 bg-gray-900/50 p-4">
                <p className="text-xs text-gray-500">
                  <span className="font-medium text-gray-400">{t('founded')}</span>
                </p>
                <p className="mt-1 text-xs text-gray-400">{t('registration_info')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 bg-black/30">
          <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="text-center md:text-left">
                <p className="text-sm text-gray-400">{t('copyright', { year: currentYear })}</p>
                <p className="mt-1 text-xs text-gray-500">{t('all_rights_reserved')}</p>
              </div>

              <div className="flex flex-wrap items-center gap-6 text-sm">
                <a href="#" className="text-gray-400 transition hover:text-brand-green">
                  {t('privacy')}
                </a>
                <a href="#" className="text-gray-400 transition hover:text-brand-green">
                  {t('legal')}
                </a>
                <a href="#" className="text-gray-400 transition hover:text-brand-green">
                  {t('cgu')}
                </a>
                <a href="#" className="text-gray-400 transition hover:text-brand-green">
                  {t('accessibility')}
                </a>
              </div>

              {/* Language switcher */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500">{t('language')}:</span>
                <div className="flex gap-1">
                  <button className="rounded px-2 py-1 text-xs text-brand-green bg-brand-green/10">
                    EN
                  </button>
                  <button className="rounded px-2 py-1 text-xs text-gray-400 hover:text-brand-green">
                    FR
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
