'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface AuthStatusProps {
  initialAuth: boolean;
}

export default function AuthStatus({ initialAuth }: AuthStatusProps) {
  const [isAuth, setIsAuth] = useState(initialAuth);

  useEffect(() => {
    setIsAuth(initialAuth);
  }, [initialAuth]);

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    setIsAuth(false);
    window.location.href = '/blog';
  };

  if (isAuth) {
    return (
      <button 
        onClick={handleLogout}
        className="text-gray-700 hover:text-blue-700 transition-colors dark:text-gray-300 dark:hover:text-blue-400"
      >
        Logout
      </button>
    );
  }

  return (
    <Link href="/login" className="text-gray-700 hover:text-blue-700 transition-colors dark:text-gray-300 dark:hover:text-blue-400">
      Login
    </Link>
  );
}
