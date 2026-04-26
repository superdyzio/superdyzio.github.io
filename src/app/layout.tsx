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
          <div className="px-4 py-3 sm:px-5 sm:py-4 lg:px-6 2xl:h-16 2xl:py-3">
            <div className="flex items-center justify-between gap-3 2xl:grid 2xl:grid-cols-[1fr_auto_1fr] 2xl:items-center 2xl:gap-4">
              <Link href="/" className="text-left text-base font-bold tracking-tight text-gray-900 transition-colors hover:text-blue-700 sm:text-lg 2xl:justify-self-start 2xl:text-xl dark:text-gray-100 dark:hover:text-blue-400">
              superdyzio<span className="text-blue-600">.dev</span>
              </Link>
              <nav className="hidden w-full items-center justify-center gap-4 2xl:flex 2xl:text-base">
                <MainNavigationLinks isAuthenticated={isAuthenticated} locale={locale} />
              </nav>
              <div className="flex items-center justify-end gap-3 text-sm 2xl:gap-4 2xl:justify-self-end">
                <LanguageSwitcher locale={locale} />
                <ThemeToggle />
                <details className="relative sm:hidden">
                  <summary className="cursor-pointer list-none rounded-md border border-gray-200 px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:border-blue-300 hover:text-blue-700 dark:border-gray-700 dark:text-gray-200 dark:hover:border-blue-500 dark:hover:text-blue-400">
                    Menu
                  </summary>
                  <nav className="absolute right-0 top-11 z-10 min-w-52 rounded-lg border border-gray-200 bg-white p-3 shadow-lg dark:border-gray-700 dark:bg-gray-900">
                    <div className="flex flex-col items-start gap-2 text-sm">
                      <MainNavigationLinks isAuthenticated={isAuthenticated} locale={locale} />
                    </div>
                  </nav>
                </details>
              </div>
            </div>
            <nav className="mt-3 hidden w-full items-center justify-start gap-3 overflow-x-auto text-xs sm:flex sm:text-[0.78rem] md:text-sm lg:text-[0.95rem] 2xl:hidden">
              <MainNavigationLinks isAuthenticated={isAuthenticated} locale={locale} />
            </nav>
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
