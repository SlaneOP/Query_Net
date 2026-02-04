import React, { useState } from 'react';
import { Sidebar, SidebarNav, SidebarNavItem } from '@/app/components/Sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/Card';
import { Badge } from '@/app/components/Badge';
import { 
  LayoutDashboard, 
  MessageSquarePlus, 
  MessageSquare, 
  MessageCircle,
  Award, 
  LogOut,
  TrendingUp,
  CheckCircle2
} from 'lucide-react';

interface UserDashboardProps {
  onNavigate: (page: string) => void;
  onLogout: () => void;
}

// Mock data
const mockStats = {
  totalQuestions: 12,
  answersGiven: 8,
  reputationPoints: 145
};

const mockRecentQuestions = [
  {
    id: 1,
    title: 'What is the difference between React hooks and class components?',
    status: 'expert-answered',
    answers: 3,
    date: '2 hours ago'
  },
  {
    id: 2,
    title: 'How does the TCP three-way handshake work?',
    status: 'pending',
    answers: 0,
    date: '5 hours ago'
  },
  {
    id: 3,
    title: 'Explain the concept of Big O notation in algorithms',
    status: 'public',
    answers: 5,
    date: '1 day ago'
  },
  {
    id: 4,
    title: 'What are the ACID properties in database systems?',
    status: 'expert-answered',
    answers: 2,
    date: '2 days ago'
  }
];

export function UserDashboard({ onNavigate, onLogout }: UserDashboardProps) {
  const [activeTab, setActiveTab] = useState('dashboard');

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return <Badge variant="warning">Pending Review</Badge>;
      case 'expert-answered':
        return <Badge variant="success">Expert Answered</Badge>;
      case 'public':
        return <Badge variant="info">Public</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <Sidebar>
        <SidebarNav>
          <SidebarNavItem
            icon={<LayoutDashboard />}
            active={activeTab === 'dashboard'}
            onClick={() => setActiveTab('dashboard')}
          >
            Dashboard
          </SidebarNavItem>
          <SidebarNavItem
            icon={<MessageSquarePlus />}
            active={activeTab === 'ask'}
            onClick={() => onNavigate('ask-question')}
          >
            Ask Question
          </SidebarNavItem>
          <SidebarNavItem
            icon={<MessageSquare />}
            active={activeTab === 'my-questions'}
            onClick={() => setActiveTab('my-questions')}
          >
            My Questions
          </SidebarNavItem>
          <SidebarNavItem
            icon={<MessageCircle />}
            active={activeTab === 'my-answers'}
            onClick={() => setActiveTab('my-answers')}
          >
            My Answers
          </SidebarNavItem>
          <SidebarNavItem
            icon={<Award />}
            active={activeTab === 'reputation'}
            onClick={() => setActiveTab('reputation')}
          >
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
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, Student!</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Total Questions Asked
                </CardTitle>
                <MessageSquare className="w-5 h-5 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground">
                {mockStats.totalQuestions}
              </div>
              <div className="flex items-center gap-1 text-sm text-emerald-600 mt-2">
                <TrendingUp className="w-4 h-4" />
                <span>+2 this week</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Answers Given
                </CardTitle>
                <CheckCircle2 className="w-5 h-5 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground">
                {mockStats.answersGiven}
              </div>
              <div className="flex items-center gap-1 text-sm text-emerald-600 mt-2">
                <TrendingUp className="w-4 h-4" />
                <span>+3 this week</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Reputation Points
                </CardTitle>
                <Award className="w-5 h-5 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground">
                {mockStats.reputationPoints}
              </div>
              <div className="flex items-center gap-1 text-sm text-emerald-600 mt-2">
                <TrendingUp className="w-4 h-4" />
                <span>+15 this week</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Questions */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockRecentQuestions.map((question) => (
                <div
                  key={question.id}
                  className="flex items-start justify-between p-4 border border-border rounded-lg hover:border-primary/50 transition-colors cursor-pointer"
                  onClick={() => onNavigate('question-details')}
                >
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground mb-2">
                      {question.title}
                    </h4>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{question.answers} answers</span>
                      <span>•</span>
                      <span>{question.date}</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    {getStatusBadge(question.status)}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
