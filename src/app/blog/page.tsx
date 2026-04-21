import { getAllPosts } from '@/lib/posts';
import PostList from '@/components/PostList';

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="space-y-10 sm:space-y-12">
      <header className="space-y-4">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight lg:text-5xl">Blog</h1>
        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl">
          Thoughts, guides, and insights on software development and tech culture.
        </p>
      </header>
      
      <PostList initialPosts={posts} />
    </div>
  );
}
