import { getAllPosts } from '@/lib/posts';
import PostList from '@/components/PostList';
import { cookies } from 'next/headers';

import { isValidSessionToken, SESSION_COOKIE_NAME } from '@/lib/auth';

export default async function BlogIndex() {
  const sessionCookie = (await cookies()).get(SESSION_COOKIE_NAME)?.value;
  const authenticated = isValidSessionToken(sessionCookie);
  const posts = getAllPosts({ includeDrafts: authenticated });

  return (
    <div className="page-stack">
      <header className="page-header">
        <h1 className="page-title">Blog</h1>
        <p className="page-lead max-w-2xl">
          Thoughts, guides, and insights on software development and tech culture.
        </p>
      </header>
      
      <PostList posts={posts} authenticated={authenticated} />
    </div>
  );
}
