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
 * Signup Page with Zylo Authentication
 *
 * Uses Zylo Client authentication via useAuth() hook
 */
export default function SignupPage() {
  const router = useRouter();
  const auth = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Client-side validation
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters long');
      setLoading(false);
      return;
    }

    try {
      await auth.signUp(email, password, {
        full_name: fullName || undefined,
        username: username || undefined,
      });
      // Redirect to home on success
      router.push('/');
    } catch (err: any) {
      setError(err.message || 'Signup failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background py-12 px-4">
      <Card className="w-full max-w-md border-border shadow-sm">
        <CardHeader className="space-y-2">
          <CardTitle className="text-3xl font-semibold text-center tracking-tight">
            Create Account
          </CardTitle>
          <CardDescription className="text-center text-base">
            Sign up to get started with your account
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

            {/* Optional Fields - Full Name & Username */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="full-name" className="text-sm font-medium">
                  Full Name <span className="text-muted-foreground">(optional)</span>
                </Label>
                <Input
                  id="full-name"
                  type="text"
                  placeholder="John Doe"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  disabled={loading}
                  className="h-11"
                  autoComplete="name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="username" className="text-sm font-medium">
                  Username <span className="text-muted-foreground">(optional)</span>
                </Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="johndoe"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  disabled={loading}
                  className="h-11"
                  autoComplete="username"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={loading}
                className="h-11"
                autoComplete="new-password"
              />
              <p className="text-xs text-muted-foreground leading-relaxed">
                Must be at least 8 characters
              </p>
            </div>

            {/* Confirm Password Field */}
            <div className="space-y-2">
              <Label htmlFor="confirm-password" className="text-sm font-medium">
                Confirm Password
              </Label>
              <Input
                id="confirm-password"
                type="password"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                disabled={loading}
                className="h-11"
                autoComplete="new-password"
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
              {loading ? 'Creating account...' : 'Create Account'}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center border-t border-border py-6">
          <p className="text-sm text-muted-foreground">
            Already have an account?{' '}
            <Link href="/auth/login" className="font-medium text-foreground hover:underline">
              Sign in
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
