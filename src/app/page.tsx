import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';

export default function Home() {
  const latestPosts = getAllPosts().slice(0, 3);

  return (
    <div className="space-y-12">
      <section className="space-y-6">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          Hi, I'm <span className="text-blue-600">Dawid Perdek</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
          I'm a software developer, speaker, and mentor. This is my personal blog where I share my experiences and insights on technology and software development.
        </p>
        <div className="flex gap-4">
          <Link 
            href="/blog" 
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Read my blog
          </Link>
          <Link 
            href="/speaker" 
            className="px-6 py-3 border border-gray-300 font-medium rounded-lg hover:bg-gray-50 transition-colors"
          >
            My speaking experience
          </Link>
        </div>
      </section>
      
      <section className="pt-12 border-t space-y-8">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Latest from the blog</h2>
          <div className="h-1 w-20 bg-blue-600 rounded"></div>
        </div>
        <div className="grid gap-8">
          {latestPosts.length > 0 ? (
            latestPosts.map((post) => (
              <article key={post.slug} className="group relative">
                <Link href={`/blog/${post.slug}`} className="block space-y-3">
                  <time className="text-sm font-medium text-gray-500 uppercase tracking-wider" dateTime={post.publishedAt}>
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed max-w-2xl">
                    {post.description}
                  </p>
                  <div className="text-blue-600 font-medium inline-flex items-center group-hover:translate-x-1 transition-transform">
                    Read more 
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Link>
              </article>
            ))
          ) : (
            <p className="text-gray-500 italic bg-gray-50 p-6 rounded-xl border border-dashed">No posts yet. Stay tuned!</p>
          )}
        </div>
      </section>
    </div>
  );
}
