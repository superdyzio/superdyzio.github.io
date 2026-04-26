import { cookies } from 'next/headers';

import { LOCALE_COOKIE_NAME, defaultLocale, isLocale } from '@/lib/i18n';

export async function getLocaleFromCookies() {
  const locale = (await cookies()).get(LOCALE_COOKIE_NAME)?.value;
  return isLocale(locale) ? locale : defaultLocale;
}