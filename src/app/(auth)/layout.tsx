'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/zylo/hooks';

/**
 * Auth Layout - Protects auth pages and redirects authenticated users
 *
 * This layout wraps login and signup pages to:
 * 1. Check if user is already authenticated
 * 2. Redirect to home if they are
 * 3. Show loading state while checking authentication
 */
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const auth = useAuth();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    async function checkAuth() {
      try {
        const user = await auth.getCurrentUser();
        if (user) {
          // User is authenticated, redirect to home
          router.push('/');
        }
      } catch (error) {
        // User is not authenticated, allow access to auth pages
        console.log('Auth check: User not authenticated');
      } finally {
        setIsChecking(false);
      }
    }

    checkAuth();
  }, [auth, router]);

  if (isChecking) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return <>{children}</>;
}
