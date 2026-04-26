import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Link from "next/link";
import { cookies } from 'next/headers';

import MainNavigationLinks from "@/components/MainNavigationLinks";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { isValidSessionToken, SESSION_COOKIE_NAME } from '@/lib/auth';
import { getTranslations } from '@/lib/i18n';
import { getLocaleFromCookies } from '@/lib/i18n.server';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "superdyzio.dev",
    template: "%s | superdyzio.dev",
  },
  description: "My experience as a speaker and developer",
  openGraph: {
    title: "superdyzio.dev",
    description: "My experience as a speaker and developer",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const sessionCookie = (await cookies()).get(SESSION_COOKIE_NAME)?.value;
  const isAuthenticated = isValidSessionToken(sessionCookie);
  const locale = await getLocaleFromCookies();
  const t = getTranslations(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => {
  try {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldUseDark = savedTheme ? savedTheme === 'dark' : prefersDark;
    document.documentElement.classList.toggle('dark', shouldUseDark);
  } catch (_error) {}
})();`,
          }}
        />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col bg-white text-gray-900 transition-colors dark:bg-gray-950 dark:text-gray-100`}>
        <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-md transition-colors dark:border-gray-800 dark:bg-gray-950/80">
          <div className="px-4 py-3 flex flex-col gap-4 sm:h-16 sm:py-0 sm:grid sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:gap-4">
            <Link href="/" className="self-start text-left text-lg font-bold tracking-tight text-gray-900 transition-colors hover:text-blue-700 sm:self-auto sm:justify-self-start sm:text-xl dark:text-gray-100 dark:hover:text-blue-400">
              superdyzio<span className="text-blue-600">.dev</span>
            </Link>
            <nav className="w-full flex flex-wrap items-center justify-start gap-x-5 gap-y-2 text-sm sm:flex-nowrap sm:justify-center sm:gap-6 md:gap-7 md:text-base">
              <MainNavigationLinks isAuthenticated={isAuthenticated} locale={locale} />
            </nav>
            <div className="w-full flex flex-wrap items-center justify-start gap-x-5 gap-y-2 text-sm sm:w-auto sm:flex-nowrap sm:justify-end sm:gap-6 md:gap-7 md:text-base">
              <LanguageSwitcher locale={locale} />
              <ThemeToggle />
            </div>
          </div>
        </header>
        <main className="flex-grow max-w-4xl mx-auto px-4 py-8 sm:py-10 md:py-12 w-full">
          {children}
        </main>
        <footer className="mt-12 border-t bg-gray-50 py-8 transition-colors dark:border-gray-800 dark:bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 text-center text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Dawid Perdek. {t.common.builtWith}
          </div>
        </footer>
      </body>
    </html>
  );
}
