'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import AuthStatus from '@/components/AuthStatus';

const baseNavLinkClassName = 'transition-colors';
const inactiveNavLinkClassName = 'text-gray-700 hover:text-blue-700';
const activeNavLinkClassName = 'text-blue-700 font-semibold';

const navItems = [
  { href: '/#about', label: 'About', pathname: '/' },
  { href: '/blog', label: 'Blog', pathname: '/blog' },
  { href: '/playlist', label: 'Playlist', pathname: '/playlist' },
  { href: '/speaker', label: 'Speaker', pathname: '/speaker' },
  { href: '/experience', label: 'Experience', pathname: '/experience' },
  { href: '/offer', label: 'Offer', pathname: '/offer' },
  { href: '/contact', label: 'Contact', pathname: '/contact' },
];

export default function MainNavigationLinks() {
  const pathname = usePathname();

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
      <AuthStatus />
    </>
  );
}