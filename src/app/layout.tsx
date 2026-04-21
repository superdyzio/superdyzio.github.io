import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Link from "next/link";

import AuthStatus from "@/components/AuthStatus";

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
  const navLinkClassName = "text-gray-700 hover:text-blue-700 transition-colors";

  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <header className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
          <nav className="max-w-4xl mx-auto px-4 py-3 flex flex-col gap-3 sm:h-16 sm:py-0 sm:flex-row sm:items-center sm:justify-between">
            <Link href="/" className="font-bold text-lg sm:text-xl tracking-tight self-start sm:self-auto text-gray-900 hover:text-blue-700 transition-colors">
              superdyzio<span className="text-blue-600">.blog</span>
            </Link>
            <div className="w-full flex flex-wrap gap-x-4 gap-y-2 text-sm sm:w-auto sm:flex-nowrap sm:gap-5 md:gap-6 md:text-base">
              <Link href="/#about" className={navLinkClassName}>About</Link>
              <Link href="/blog" className={navLinkClassName}>Blog</Link>
              <Link href="/speaker" className={navLinkClassName}>Speaker</Link>
              <Link href="/experience" className={navLinkClassName}>Experience</Link>
              <Link href="/offer" className={navLinkClassName}>Offer</Link>
              <Link href="/contact" className={navLinkClassName}>Contact</Link>
              <AuthStatus />
            </div>
          </nav>
        </header>
        <main className="flex-grow max-w-4xl mx-auto px-4 py-8 sm:py-10 md:py-12 w-full">
          {children}
        </main>
        <footer className="border-t py-8 bg-gray-50 mt-12">
          <div className="max-w-4xl mx-auto px-4 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Dawid Perdek. Built with Next.js and Tailwind.
          </div>
        </footer>
      </body>
    </html>
  );
}
