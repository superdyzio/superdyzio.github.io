'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import AuthStatus from '@/components/AuthStatus';
import { Locale, getTranslations } from '@/lib/i18n';

const baseNavLinkClassName = 'transition-colors whitespace-nowrap';
const inactiveNavLinkClassName = 'text-gray-700 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-400';
const activeNavLinkClassName = 'font-semibold text-blue-700 dark:text-blue-400';

interface MainNavigationLinksProps {
  isAuthenticated: boolean;
  locale: Locale;
}

export default function MainNavigationLinks({ isAuthenticated, locale }: MainNavigationLinksProps) {
  const pathname = usePathname();
  const t = getTranslations(locale);

  const navItems = [
    { href: '/#about', label: t.nav.about, pathname: '/' },
    { href: '/blog', label: t.nav.blog, pathname: '/blog' },
    { href: '/playlist', label: t.nav.playlist, pathname: '/playlist' },
    { href: '/speaker', label: t.nav.speaker, pathname: '/speaker' },
    { href: '/experience', label: t.nav.experience, pathname: '/experience' },
    { href: '/offer', label: t.nav.offer, pathname: '/offer' },
    { href: '/contact', label: t.nav.contact, pathname: '/contact' },
  ];

  return (
    <>
      {navItems.map(({ href, label, pathname: itemPathname }) => {
        const isActive = pathname === itemPathname || pathname?.startsWith(`${itemPathname}/`);

        return (
          <Link
            key={href}
            href={href}
            aria-current={isActive ? 'page' : undefined}
            className={`${baseNavLinkClassName} ${isActive ? activeNavLinkClassName : inactiveNavLinkClassName}`}
          >
            {label}
          </Link>
        );
      })}
      <AuthStatus initialAuth={isAuthenticated} locale={locale} />
    </>
  );
}