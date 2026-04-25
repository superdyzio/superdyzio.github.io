'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { PostMeta } from '@/lib/posts';
import { isLoggedIn } from '@/lib/auth';

interface PostListProps {
  initialPosts: PostMeta[];
}

export default function PostList({ initialPosts }: PostListProps) {
  const [posts, setPosts] = useState<PostMeta[]>([]);
  const [authenticated, setAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const isAuth = isLoggedIn();
    setAuthenticated(isAuth);
    
    if (isAuth) {
      setPosts(initialPosts);
    } else {
      setPosts(initialPosts.filter(p => p.status === 'published'));
    }
    setIsLoading(false);
  }, [initialPosts]);

  if (isLoading) {
    return (
      <div className="post-list">
        <p className="text-gray-500 italic dark:text-gray-400">Loading posts...</p>
      </div>
    );
  }

  return (
    <div className="page-stack">
      {authenticated && (
        <div className="inline-block bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium border border-blue-100 dark:border-blue-900/60 dark:bg-blue-950/50 dark:text-blue-300">
          Admin view active (seeing drafts)
        </div>
      )}
      
      <div className="post-list">
        {posts.length > 0 ? (
          posts.map((post) => (
            <article key={post.slug} className="group">
              <Link href={`/blog/${post.slug}`} className="post-card-link">
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
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors dark:text-gray-100 dark:group-hover:text-blue-400">
                  {post.title}
                </h2>
                <p className="text-gray-600 leading-relaxed max-w-3xl dark:text-gray-300">
                  {post.description}
                </p>
                <div className="text-blue-700 dark:text-blue-400 font-medium flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                  Read article 
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            </article>
          ))
        ) : (
          <p className="text-gray-500 italic bg-gray-50 p-8 rounded-2xl border border-dashed text-center dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400">No posts published yet. Stay tuned!</p>
        )}
      </div>
    </div>
  );
}
