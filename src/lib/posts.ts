import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

import { Locale } from '@/lib/i18n';

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

interface GetAllPostsOptions {
  includeDrafts?: boolean;
  locale?: Locale;
}

interface RawPostMeta extends Omit<PostMeta, 'title' | 'description' | 'fileName'> {
  title: string;
  description: string;
  fileName: string;
  titlePl?: string;
  descriptionPl?: string;
  fileNamePl?: string;
}

function localizePostMeta(post: RawPostMeta, locale: Locale): PostMeta {
  const isPolish = locale === 'pl';

  return {
    ...post,
    title: isPolish ? (post.titlePl ?? post.title) : post.title,
    description: isPolish ? (post.descriptionPl ?? post.description) : post.description,
    fileName: isPolish ? (post.fileNamePl ?? post.fileName) : post.fileName,
  };
}

export function getAllPosts(options: GetAllPostsOptions = {}): PostMeta[] {
  const fileContents = fs.readFileSync(postsJsonPath, 'utf8');
  const posts: RawPostMeta[] = JSON.parse(fileContents);
  const shouldHideDrafts = !options.includeDrafts;
  const locale = options.locale ?? 'en';
  
  return posts
    .filter((post) => !shouldHideDrafts || post.status === 'published')
    .map((post) => localizePostMeta(post, locale))
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

export async function getPostBySlug(slug: string, options: GetAllPostsOptions = {}): Promise<PostContent | null> {
  const posts = getAllPosts(options);
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
