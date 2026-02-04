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

interface RegisterPageProps {
  onNavigate: (page: string) => void;
  onRegister: (role: string) => void;
}

export function RegisterPage({ onNavigate, onRegister }: RegisterPageProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('user');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    // Mock registration - in real app this would call an API
    onRegister(role);
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
          <p className="text-muted-foreground">Join our academic community today</p>
        </div>

        {/* Registration Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Create Account</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                label="Full Name"
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={errors.name}
              />

              <Input
                label="Email Address"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={errors.email}
              />

              <Input
                label="Password"
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={errors.password}
              />

              <Input
                label="Confirm Password"
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                error={errors.confirmPassword}
              />

              <Select
                label="Register as"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                options={[
                  { value: 'user', label: 'User / Student' },
                  { value: 'expert', label: 'Subject Expert' },
                ]}
              />

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <div className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-blue-900">
                    By registering as an expert, you'll be able to review and answer questions in your field of expertise.
                  </p>
                </div>
              </div>

              <Button type="submit" className="w-full" size="lg">
                Create Account
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Already have an account?{' '}
                <button
                  onClick={() => onNavigate('login')}
                  className="text-primary hover:underline font-medium"
                >
                  Login here
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
