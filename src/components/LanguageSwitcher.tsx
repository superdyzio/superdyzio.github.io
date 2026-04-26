'use client';

import { useTransition } from 'react';
import { useRouter } from 'next/navigation';

import { LOCALE_COOKIE_NAME, Locale, getTranslations } from '@/lib/i18n';

interface LanguageSwitcherProps {
  locale: Locale;
}

export default function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const t = getTranslations(locale);

  const setLocale = (nextLocale: Locale) => {
    document.cookie = `${LOCALE_COOKIE_NAME}=${nextLocale}; path=/; max-age=31536000; samesite=lax`;
    startTransition(() => {
      router.refresh();
    });
  };

  return (
    <div className="inline-flex items-center gap-1 rounded-lg border border-gray-200 p-1 text-xs dark:border-gray-700" aria-label={t.common.language}>
      <button
        type="button"
        onClick={() => setLocale('en')}
        disabled={isPending}
        className={`rounded px-2 py-1 transition-colors ${
          locale === 'en'
            ? 'bg-blue-600 text-white'
            : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
        }`}
      >
        {t.common.english}
      </button>
      <button
        type="button"
        onClick={() => setLocale('pl')}
        disabled={isPending}
        className={`rounded px-2 py-1 transition-colors ${
          locale === 'pl'
            ? 'bg-blue-600 text-white'
            : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
        }`}
      >
        {t.common.polish}
      </button>
    </div>
  );
}