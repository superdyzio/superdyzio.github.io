import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Link from "next/link";

import MainNavigationLinks from "@/components/MainNavigationLinks";
import ThemeToggle from "@/components/ThemeToggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "superdyzio.blog",
    template: "%s | superdyzio.blog",
  },
  description: "My experience as a speaker and developer",
  openGraph: {
    title: "superdyzio.blog",
    description: "My experience as a speaker and developer",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
          <nav className="max-w-4xl mx-auto px-4 py-3 flex flex-col gap-3 sm:h-16 sm:py-0 sm:flex-row sm:items-center sm:justify-between">
            <Link href="/" className="self-start text-lg font-bold tracking-tight text-gray-900 transition-colors hover:text-blue-700 sm:self-auto sm:text-xl dark:text-gray-100 dark:hover:text-blue-400">
              superdyzio<span className="text-blue-600">.blog</span>
            </Link>
            <div className="w-full flex flex-wrap items-center gap-x-4 gap-y-2 text-sm sm:w-auto sm:flex-nowrap sm:gap-5 md:gap-6 md:text-base">
              <MainNavigationLinks />
              <ThemeToggle />
            </div>
          </nav>
        </header>
        <main className="flex-grow max-w-4xl mx-auto px-4 py-8 sm:py-10 md:py-12 w-full">
          {children}
        </main>
        <footer className="mt-12 border-t bg-gray-50 py-8 transition-colors dark:border-gray-800 dark:bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 text-center text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Dawid Perdek. Built with Next.js and Tailwind.
          </div>
        </footer>
      </body>
    </html>
  );
}
