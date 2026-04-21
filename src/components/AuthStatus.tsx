'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { isLoggedIn, logout } from '@/lib/auth';

export default function AuthStatus() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    setIsAuth(isLoggedIn());
  }, []);

  const handleLogout = () => {
    logout();
    setIsAuth(false);
    window.location.href = '/';
  };

  if (isAuth) {
    return (
      <button 
        onClick={handleLogout}
        className="text-gray-700 hover:text-blue-700 transition-colors"
      >
        Logout
      </button>
    );
  }

  return (
    <Link href="/login" className="text-gray-700 hover:text-blue-700 transition-colors">
      Login
    </Link>
  );
}
