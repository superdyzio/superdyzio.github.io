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
      
      <section className="pt-12 border-t">
        <h2 className="text-2xl font-bold mb-6">Latest from the blog</h2>
        <div className="grid gap-6">
          {latestPosts.length > 0 ? (
            latestPosts.map((post) => (
              <article key={post.slug} className="group">
                <Link href={`/blog/${post.slug}`} className="block space-y-2">
                  <time className="text-sm text-gray-500" dateTime={post.publishedAt}>
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                  <h3 className="text-xl font-bold group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600">
                    {post.description}
                  </p>
                </Link>
              </article>
            ))
          ) : (
            <p className="text-gray-500 italic">No posts yet. Stay tuned!</p>
          )}
        </div>
      </section>
    </div>
  );
}
