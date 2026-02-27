import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'src/content/posts');
const postsJsonPath = path.join(process.cwd(), 'src/content/posts.json');

export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  status: 'published' | 'draft';
  fileName: string;
}

export interface PostContent extends PostMeta {
  contentHtml: string;
}

export function getAllPosts(): PostMeta[] {
  const fileContents = fs.readFileSync(postsJsonPath, 'utf8');
  const posts: PostMeta[] = JSON.parse(fileContents);
  
  return posts
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

export async function getPostBySlug(slug: string): Promise<PostContent | null> {
  const posts = getAllPosts();
  const postMeta = posts.find(p => p.slug === slug);
  
  if (!postMeta) return null;
  
  const fullPath = path.join(postsDirectory, postMeta.fileName);
  if (!fs.existsSync(fullPath)) return null;
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);
  
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();
  
  return {
    ...postMeta,
    contentHtml,
  };
}
