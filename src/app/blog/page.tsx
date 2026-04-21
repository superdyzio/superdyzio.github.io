import { getAllPosts } from '@/lib/posts';
import PostList from '@/components/PostList';

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="page-stack">
      <header className="page-header">
        <h1 className="page-title">Blog</h1>
        <p className="page-lead max-w-2xl">
          Thoughts, guides, and insights on software development and tech culture.
        </p>
      </header>
      
      <PostList initialPosts={posts} />
    </div>
  );
}
