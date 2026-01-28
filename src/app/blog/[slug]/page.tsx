import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPosts } from '@/lib/posts';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-2xl mx-auto space-y-8">
      <header className="space-y-4">
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
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl leading-tight">
          {post.title}
        </h1>
        <p className="text-xl text-gray-500 italic">
          {post.description}
        </p>
      </header>

      <div 
        className="prose prose-slate max-w-none prose-headings:font-bold prose-a:text-blue-600 hover:prose-a:underline prose-img:rounded-xl"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }} 
      />
    </article>
  );
}
