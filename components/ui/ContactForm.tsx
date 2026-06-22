'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function ContactForm() {
  const t = useTranslations('Contact');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('loading');

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch('https://formsubmit.co/ajax/assomiaradia@gmail.com', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setStatus('success');
        event.currentTarget.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <div className="h-full rounded-2xl border border-gray-100 bg-white p-8 shadow-sm lg:p-10">
      {status === 'success' && (
        <div className="mt-6 rounded-xl border border-green-200 bg-green-50 p-4 text-green-800">
          <p className="font-bold">{t('success_title')}</p>
          <p className="mt-1">{t('success_message')}</p>
        </div>
      )}

      {status === 'error' && (
        <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4 text-red-800">
          <p>{t('error_message')}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <input type="hidden" name="_subject" value={t('form_subject')} />
        <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              {t('firstname')} *
            </label>
            <input
              type="text"
              name="firstname"
              placeholder={t('placeholder_firstname')}
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-brand-green focus:ring-2 focus:ring-brand-green/20"
              required
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              {t('lastname')} *
            </label>
            <input
              type="text"
              name="lastname"
              placeholder={t('placeholder_lastname')}
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-brand-green focus:ring-2 focus:ring-brand-green/20"
              required
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-700">{t('email')} *</label>
          <input
            type="email"
            name="email"
            placeholder={t('placeholder_email')}
            className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-brand-green focus:ring-2 focus:ring-brand-green/20"
            required
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-700">{t('subject')} *</label>
          <input
            type="text"
            name="subject"
            placeholder={t('placeholder_subject')}
            className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-brand-green focus:ring-2 focus:ring-brand-green/20"
            required
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-700">{t('message')} *</label>
          <textarea
            name="message"
            rows={5}
            placeholder={t('placeholder_message')}
            className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-brand-green focus:ring-2 focus:ring-brand-green/20"
            required
          />
        </div>

        <button
          type="submit"
          disabled={status === 'loading' || status === 'success'}
          className={`w-full rounded-xl py-4 font-bold text-white shadow-md transition ${
            status === 'loading'
              ? 'cursor-not-allowed bg-gray-400'
              : 'bg-brand-green hover:bg-brand-green-dark hover:shadow-lg'
          }`}
        >
          {status === 'loading' ? t('sending') : t('submit')}
        </button>
      </form>
    </div>
  );
}
