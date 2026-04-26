'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

import { Locale, getTranslations } from '@/lib/i18n';

interface AuthStatusProps {
  initialAuth: boolean;
  locale: Locale;
}

export default function AuthStatus({ initialAuth, locale }: AuthStatusProps) {
  const [isAuth, setIsAuth] = useState(initialAuth);
  const t = getTranslations(locale);

  useEffect(() => {
    setIsAuth(initialAuth);
  }, [initialAuth]);

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    setIsAuth(false);
    window.location.href = '/blog';
  };

  if (isAuth) {
    return (
      <button 
        onClick={handleLogout}
        className="text-gray-700 hover:text-blue-700 transition-colors dark:text-gray-300 dark:hover:text-blue-400"
      >
        {t.nav.logout}
      </button>
    );
  }

  return (
    <Link href="/login" className="text-gray-700 hover:text-blue-700 transition-colors dark:text-gray-300 dark:hover:text-blue-400">
      {t.nav.login}
    </Link>
  );
}
