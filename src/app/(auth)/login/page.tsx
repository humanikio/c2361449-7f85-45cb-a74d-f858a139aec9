'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/lib/zylo/hooks';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';

/**
 * Login Page with Zylo Authentication
 *
 * Uses Zylo Client authentication via useAuth() hook
 */
export default function LoginPage() {
  const router = useRouter();
  const auth = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await auth.login(email, password);
      // Redirect to home on success
      router.push('/');
    } catch (err: any) {
      setError(err.message || 'Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background py-12 px-4">
      <Card className="w-full max-w-md border-border shadow-sm">
        <CardHeader className="space-y-2">
          <CardTitle className="text-3xl font-semibold text-center tracking-tight">
            Welcome Back
          </CardTitle>
          <CardDescription className="text-center text-base">
            Sign in to your account to continue
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Field */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
                className="h-11"
                autoComplete="email"
              />
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-sm font-medium">
                  Password
                </Label>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={loading}
                className="h-11"
                autoComplete="current-password"
              />
            </div>

            {/* Error Alert */}
            {error && (
              <Alert variant="destructive" className="py-3">
                <AlertDescription className="text-sm">{error}</AlertDescription>
              </Alert>
            )}

            {/* Submit Button */}
            <Button type="submit" className="w-full h-11 font-medium" disabled={loading}>
              {loading ? 'Signing in...' : 'Sign In'}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center border-t border-border py-6">
          <p className="text-sm text-muted-foreground">
            Don&apos;t have an account?{' '}
            <Link href="/auth/signup" className="font-medium text-foreground hover:underline">
              Sign up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
