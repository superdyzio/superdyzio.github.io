import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Blog</h1>
        <p className="text-gray-600">Thoughts, guides, and insights on software development.</p>
      </header>
      
      <div className="grid gap-8">
        {posts.length > 0 ? (
          posts.map((post) => (
            <article key={post.slug} className="group border-b pb-8 last:border-0">
              <Link href={`/blog/${post.slug}`} className="block space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <time dateTime={post.publishedAt}>
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                  {post.status === 'draft' && (
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded text-xs font-medium">Draft</span>
                  )}
                </div>
                <h2 className="text-2xl font-bold group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {post.description}
                </p>
                <div className="text-blue-600 font-medium pt-2 flex items-center gap-1">
                  Read article <span>→</span>
                </div>
              </Link>
            </article>
          ))
        ) : (
          <p className="text-gray-500 italic">No posts published yet.</p>
        )}
      </div>
    </div>
  );
}
