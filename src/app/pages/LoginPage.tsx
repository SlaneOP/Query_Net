import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Select } from '../components/ui/select';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../components/ui/card';

import { GraduationCap, AlertCircle } from 'lucide-react';


interface LoginPageProps {
  onNavigate: (page: string) => void;
  onLogin: (role: string) => void;
}

export function LoginPage({ onNavigate, onLogin }: LoginPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    // Mock login - in real app this would call an API
    onLogin(role);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <GraduationCap className="w-7 h-7 text-white" />
            </div>
            <span className="text-3xl font-bold text-foreground">QueryNet</span>
          </div>
          <p className="text-muted-foreground">Welcome back! Please login to continue</p>
        </div>

        {/* Login Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="flex items-center gap-2 p-3 bg-destructive/10 border border-destructive/20 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0" />
                  <p className="text-sm text-destructive">{error}</p>
                </div>
              )}

              <Input
                label="Email Address"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <Input
                label="Password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <Select
                label="Login as"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                options={[
                  { value: 'user', label: 'User / Student' },
                  { value: 'expert', label: 'Subject Expert' },
                  { value: 'admin', label: 'Administrator' },
                ]}
              />

              <Button type="submit" className="w-full" size="lg">
                Login
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Don't have an account?{' '}
                <button
                  onClick={() => onNavigate('register')}
                  className="text-primary hover:underline font-medium"
                >
                  Register here
                </button>
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 text-center">
          <button
            onClick={() => onNavigate('landing')}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back to home
          </button>
        </div>
      </div>
    </div>
  );
}
