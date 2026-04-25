import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPosts } from '@/lib/posts';
import { cookies } from 'next/headers';

import { isValidSessionToken, SESSION_COOKIE_NAME } from '@/lib/auth';

export async function generateStaticParams() {
  const posts = getAllPosts({ includeDrafts: false });
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const sessionCookie = (await cookies()).get(SESSION_COOKIE_NAME)?.value;
  const authenticated = isValidSessionToken(sessionCookie);
  const post = await getPostBySlug(slug, { includeDrafts: true });

  if (!post) {
    notFound();
  }

  if (post.status === 'draft' && !authenticated) {
    return (
      <div className="bg-amber-50 border border-amber-200 text-amber-800 p-8 rounded-2xl text-center my-12">
        <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
          <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m0 0v2m0-2h2m-2 0H10m10-6V7a4 4 0 00-8 0v4M5 11h14a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold mb-2">Private Draft</h2>
        <p className="text-amber-700 mb-6 max-w-md mx-auto">
          This post is currently in draft mode and is only visible to the site administrator.
        </p>
        <a
          href="/login"
          className="inline-block bg-amber-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-amber-700 transition-colors"
        >
          Admin Login
        </a>
      </div>
    );
  }

  return (
    <article className="space-y-10 sm:space-y-12">
      <header className="space-y-6">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-sm font-medium text-gray-500 dark:text-gray-400">
          <time dateTime={post.publishedAt} className="uppercase tracking-wider">
            {new Date(post.publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          {post.status === 'draft' && (
            <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-tight dark:bg-yellow-900/50 dark:text-yellow-200">Draft</span>
          )}
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight lg:text-5xl leading-tight text-gray-900 dark:text-gray-100">
          {post.title}
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl dark:text-gray-300">
          {post.description}
        </p>
      </header>

      <div className="h-px bg-gray-200 dark:bg-gray-800"></div>

      <div
        className="prose prose-base sm:prose-lg prose-slate dark:prose-invert max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-a:text-blue-600 dark:prose-a:text-blue-400 hover:prose-a:underline prose-img:rounded-2xl prose-pre:bg-gray-900 prose-pre:shadow-lg"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </article>
  );
}
