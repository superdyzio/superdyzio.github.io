import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';

export default function Home() {
  const latestPosts = getAllPosts().slice(0, 3);

  return (
    <div className="page-stack">
      <section className="section-stack">
        <h1 className="page-title">
          Hi, I'm <span className="text-blue-600">Dawid Perdek</span>
        </h1>
        <p className="page-lead max-w-2xl">
          I'm a software developer, speaker, and mentor. This is my personal blog where I share my experiences and insights on technology and software development.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <Link 
            href="/blog" 
            className="px-6 py-3 text-center bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Read my blog
          </Link>
          <Link 
            href="/speaker" 
            className="px-6 py-3 text-center border border-gray-300 font-medium rounded-lg hover:bg-gray-50 transition-colors"
          >
            My speaking experience
          </Link>
        </div>
      </section>
      
      <section id="about" className="section-divider section-stack">
        <div className="section-subtitle">
          <h2 className="section-title">About Me</h2>
          <div className="section-accent"></div>
        </div>
        <div className="prose prose-blue max-w-none text-gray-600 leading-relaxed">
          <p>
            I am a software developer with a passion for building high-quality applications and sharing knowledge. 
            With years of experience in the industry, I have worked on various projects ranging from small startups to large-scale enterprise systems.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            My expertise includes frontend development (Angular, React), backend systems, and decentralized applications (Web3). 
            I am also an active speaker at tech conferences and a mentor for aspiring developers.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies, speaking at meetups, or contributing to the developer community.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
      </section>
      
      <section className="section-divider section-stack">
        <div className="section-subtitle">
          <h2 className="section-title">Latest from the blog</h2>
          <div className="section-accent"></div>
        </div>
        <div className="grid gap-6">
          {latestPosts.length > 0 ? (
            latestPosts.map((post) => (
              <article key={post.slug} className="group relative">
                <Link href={`/blog/${post.slug}`} className="post-card-link">
                  <time className="text-sm font-medium text-gray-500 uppercase tracking-wider" dateTime={post.publishedAt}>
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed max-w-2xl">
                    {post.description}
                  </p>
                  <div className="text-blue-700 font-medium inline-flex items-center group-hover:translate-x-1 transition-transform">
                    Read more 
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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
