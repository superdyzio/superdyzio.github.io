import { getAllPosts } from '@/lib/posts';
import PostList from '@/components/PostList';
import { cookies } from 'next/headers';

import { isValidSessionToken, SESSION_COOKIE_NAME } from '@/lib/auth';
import { getTranslations } from '@/lib/i18n';
import { getLocaleFromCookies } from '@/lib/i18n.server';

export default async function BlogIndex() {
  const sessionCookie = (await cookies()).get(SESSION_COOKIE_NAME)?.value;
  const authenticated = isValidSessionToken(sessionCookie);
  const locale = await getLocaleFromCookies();
  const posts = getAllPosts({ includeDrafts: authenticated, locale });
  const t = getTranslations(locale);

  return (
    <div className="page-stack">
      <header className="page-header">
        <h1 className="page-title">{t.blog.title}</h1>
        <p className="page-lead max-w-2xl">
          {t.blog.lead}
        </p>
      </header>
      
      <PostList posts={posts} authenticated={authenticated} locale={locale} />
    </div>
  );
}
