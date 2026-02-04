import React, { useState } from 'react';
import { Sidebar, SidebarNav, SidebarNavItem } from '@/app/components/Sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/Card';
import { Input } from '@/app/components/Input';
import { Textarea } from '@/app/components/Textarea';
import { Select } from '@/app/components/Select';
import { Button } from '@/app/components/Button';
import { 
  LayoutDashboard, 
  MessageSquarePlus, 
  MessageSquare, 
  MessageCircle,
  Award, 
  LogOut,
  Info
} from 'lucide-react';

interface AskQuestionPageProps {
  onNavigate: (page: string) => void;
  onLogout: () => void;
}

export function AskQuestionPage({ onNavigate, onLogout }: AskQuestionPageProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('computer-science');
  const [tags, setTags] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submit - would send to API in real app
    alert('Question submitted successfully! It will be reviewed by an expert within 24 hours.');
    onNavigate('user-dashboard');
  };

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <Sidebar>
        <SidebarNav>
          <SidebarNavItem
            icon={<LayoutDashboard />}
            onClick={() => onNavigate('user-dashboard')}
          >
            Dashboard
          </SidebarNavItem>
          <SidebarNavItem
            icon={<MessageSquarePlus />}
            active
          >
            Ask Question
          </SidebarNavItem>
          <SidebarNavItem icon={<MessageSquare />}>
            My Questions
          </SidebarNavItem>
          <SidebarNavItem icon={<MessageCircle />}>
            My Answers
          </SidebarNavItem>
          <SidebarNavItem icon={<Award />}>
            Reputation
          </SidebarNavItem>
          <div className="pt-4 mt-4 border-t border-sidebar-border">
            <SidebarNavItem icon={<LogOut />} onClick={onLogout}>
              Logout
            </SidebarNavItem>
          </div>
        </SidebarNav>
      </Sidebar>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="max-w-3xl">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Ask a Question</h1>
            <p className="text-muted-foreground">
              Get help from our community of experts and learners
            </p>
          </div>

          {/* Info Banner */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 flex gap-3">
            <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-blue-900 font-medium mb-1">
                Your question will be reviewed by an expert
              </p>
              <p className="text-sm text-blue-800">
                Questions are reviewed within 24 hours to ensure quality. If not reviewed within this time, 
                your question will be automatically published to the community.
              </p>
            </div>
          </div>

          {/* Question Form */}
          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  label="Question Title"
                  placeholder="e.g., What is the difference between Stack and Queue?"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />

                <Textarea
                  label="Question Description"
                  placeholder="Provide detailed context and any relevant information..."
                  rows={8}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />

                <Select
                  label="Category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  options={[
                    { value: 'computer-science', label: 'Computer Science' },
                    { value: 'mathematics', label: 'Mathematics' },
                    { value: 'physics', label: 'Physics' },
                    { value: 'chemistry', label: 'Chemistry' },
                    { value: 'biology', label: 'Biology' },
                    { value: 'engineering', label: 'Engineering' },
                    { value: 'business', label: 'Business' },
                    { value: 'other', label: 'Other' },
                  ]}
                />

                <Input
                  label="Tags"
                  placeholder="e.g., data-structures, algorithms, java (comma-separated)"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                />

                <div className="flex gap-3 pt-4">
                  <Button type="submit" size="lg">
                    Submit Question
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    onClick={() => onNavigate('user-dashboard')}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
