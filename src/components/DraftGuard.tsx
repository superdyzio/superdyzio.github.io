'use client';

import { useState, useEffect } from 'react';
import { isLoggedIn } from '@/lib/auth';

interface DraftGuardProps {
  postStatus: 'published' | 'draft';
  children: React.ReactNode;
}

export default function DraftGuard({ postStatus, children }: DraftGuardProps) {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsAuth(isLoggedIn());
    setIsLoading(false);
  }, []);

  if (postStatus !== 'draft') {
    return <>{children}</>;
  }

  if (isLoading) {
    return (
      <div className="animate-pulse space-y-8">
        <div className="h-4 bg-gray-200 rounded w-1/4"></div>
        <div className="h-10 bg-gray-200 rounded w-3/4"></div>
        <div className="space-y-3">
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        </div>
      </div>
    );
  }

  if (isAuth) {
    return (
      <>
        <div className="bg-blue-50 border border-blue-100 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium mb-8">
          You are viewing this draft as an administrator.
        </div>
        {children}
      </>
    );
  }

  return (
    <div className="bg-amber-50 border border-amber-200 text-amber-800 p-8 rounded-2xl text-center my-12">
      <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
        <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m0 0v2m0-2h2m-2 0H10m10-6V7a4 4 0 00-8 0v4M5 11h14a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2z" />
        </svg>
      </div>
      <h2 className="text-2xl font-bold mb-2">Private Draft</h2>
      <p className="text-amber-700 mb-6 max-w-md mx-auto">
        This post is currently in draft mode and is only visible to the site administrator.
      </p>
      <a 
        href="/login" 
        className="inline-block bg-amber-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-amber-700 transition-colors"
      >
        Admin Login
      </a>
    </div>
  );
}
