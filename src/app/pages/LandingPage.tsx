import React from 'react';
import { Button } from '@/app/components/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/Card';
import { GraduationCap, Shield, Clock, Award, Users } from 'lucide-react';

interface LandingPageProps {
  onNavigate: (page: string) => void;
}

export function LandingPage({ onNavigate }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b border-border sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-foreground">QueryNet</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <button className="text-foreground hover:text-primary transition-colors">
                Home
              </button>
              <button className="text-foreground hover:text-primary transition-colors">
                Features
              </button>
              <button 
                onClick={() => onNavigate('login')}
                className="text-foreground hover:text-primary transition-colors"
              >
                Login
              </button>
              <Button onClick={() => onNavigate('register')}>
                Register
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-foreground mb-6">
              Ask. Learn. Share Knowledge – The Academic Way
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Connect with subject experts and get verified answers to your academic questions. 
              Every question is reviewed by qualified experts before being published to ensure quality and accuracy.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" onClick={() => onNavigate('register')}>
                Ask a Question
              </Button>
              <Button size="lg" variant="outline" onClick={() => onNavigate('register')}>
                Join as Expert
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Why Choose QueryNet?
            </h2>
            <p className="text-lg text-muted-foreground">
              A trusted platform for academic knowledge sharing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card hover>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Expert Moderation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Every question is reviewed by subject experts to ensure quality and relevance
                </p>
              </CardContent>
            </Card>

            <Card hover>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>24-Hour Auto Publish</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Questions are automatically published within 24 hours if not reviewed by an expert
                </p>
              </CardContent>
            </Card>

            <Card hover>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Reputation System</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Earn reputation points for providing helpful answers and quality questions
                </p>
              </CardContent>
            </Card>

            <Card hover>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Secure Academic Platform</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  University-friendly environment designed specifically for academic learning
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              How It Works
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Ask Your Question</h3>
              <p className="text-muted-foreground">
                Submit your academic question with detailed description and relevant tags
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Review</h3>
              <p className="text-muted-foreground">
                Subject experts review and answer your question within 24 hours
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Get Verified Answers</h3>
              <p className="text-muted-foreground">
                Receive quality answers from verified experts and the community
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-muted-foreground">
            <p className="mb-2">
              © 2026 QueryNet - Academic Question & Answer Platform
            </p>
            <p className="text-sm">
              This is a college project for educational purposes only
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
