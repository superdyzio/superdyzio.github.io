import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="space-y-12">
      <header className="space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Blog</h1>
        <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
          Thoughts, guides, and insights on software development and tech culture.
        </p>
      </header>
      
      <div className="grid gap-12 pt-8 border-t">
        {posts.length > 0 ? (
          posts.map((post) => (
            <article key={post.slug} className="group">
              <Link href={`/blog/${post.slug}`} className="block space-y-3">
                <div className="flex items-center gap-3 text-sm font-medium text-gray-500">
                  <time dateTime={post.publishedAt} className="uppercase tracking-wider">
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                  {post.status === 'draft' && (
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-tight">Draft</span>
                  )}
                </div>
                <h2 className="text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 leading-relaxed max-w-3xl">
                  {post.description}
                </p>
                <div className="text-blue-600 font-medium flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                  Read article 
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            </article>
          ))
        ) : (
          <p className="text-gray-500 italic bg-gray-50 p-8 rounded-2xl border border-dashed text-center">No posts published yet. Stay tuned!</p>
        )}
      </div>
    </div>
  );
}
