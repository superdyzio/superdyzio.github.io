import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPosts } from '@/lib/posts';
import DraftGuard from '@/components/DraftGuard';

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
    <DraftGuard postStatus={post.status}>
      <article className="space-y-10 sm:space-y-12">
        <header className="space-y-6">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-sm font-medium text-gray-500">
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
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight lg:text-5xl leading-tight text-gray-900">
            {post.title}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl">
            {post.description}
          </p>
        </header>

        <div className="h-px bg-gray-200"></div>

        <div 
          className="prose prose-base sm:prose-lg prose-slate max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-a:text-blue-600 hover:prose-a:underline prose-img:rounded-2xl prose-pre:bg-gray-900 prose-pre:shadow-lg"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }} 
        />
      </article>
    </DraftGuard>
  );
}
