import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Superdyzio Blog",
  description: "My experience as a speaker and developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <header className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
          <nav className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
            <Link href="/" className="font-bold text-xl tracking-tight">
              superdyzio<span className="text-blue-600">.blog</span>
            </Link>
            <div className="flex gap-6">
              <Link href="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
              <Link href="/speaker" className="hover:text-blue-600 transition-colors">Speaker</Link>
            </div>
          </nav>
        </header>
        <main className="flex-grow max-w-4xl mx-auto px-4 py-12 w-full">
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
