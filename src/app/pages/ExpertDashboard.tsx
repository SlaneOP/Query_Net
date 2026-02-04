import React, { useState, useEffect } from 'react';
import { Sidebar, SidebarNav, SidebarNavItem } from '@/app/components/Sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/Card';
import { Badge } from '@/app/components/Badge';
import { Button } from '@/app/components/Button';
import { 
  LayoutDashboard, 
  Clock, 
  CheckCircle2,
  LogOut,
  AlertCircle,
  TrendingUp,
  MessageSquare
} from 'lucide-react';

interface ExpertDashboardProps {
  onNavigate: (page: string) => void;
  onLogout: () => void;
}

// Mock data
const mockStats = {
  pendingQuestions: 8,
  answeredToday: 5,
  totalAnswered: 127
};

const mockPendingQuestions = [
  {
    id: 1,
    title: 'Explain the concept of polymorphism in OOP',
    category: 'Computer Science',
    askedBy: 'Alice Brown',
    timeRemaining: 18 * 3600 + 30 * 60, // 18h 30m in seconds
    postedTime: '5 hours ago'
  },
  {
    id: 2,
    title: 'How does garbage collection work in Java?',
    category: 'Computer Science',
    askedBy: 'Bob Smith',
    timeRemaining: 22 * 3600 + 15 * 60, // 22h 15m in seconds
    postedTime: '1 hour ago'
  },
  {
    id: 3,
    title: 'What is the difference between SQL and NoSQL databases?',
    category: 'Database Systems',
    askedBy: 'Carol White',
    timeRemaining: 12 * 3600 + 45 * 60, // 12h 45m in seconds
    postedTime: '11 hours ago'
  },
  {
    id: 4,
    title: 'Explain async/await in JavaScript',
    category: 'Web Development',
    askedBy: 'David Lee',
    timeRemaining: 3 * 3600 + 20 * 60, // 3h 20m in seconds
    postedTime: '20 hours ago'
  }
];

function TimeRemaining({ seconds }: { seconds: number }) {
  const [timeLeft, setTimeLeft] = useState(seconds);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => Math.max(0, prev - 1));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const secs = timeLeft % 60;

  const isUrgent = timeLeft < 4 * 3600; // Less than 4 hours

  return (
    <div className={`flex items-center gap-1.5 ${isUrgent ? 'text-destructive' : 'text-amber-600'}`}>
      <Clock className="w-4 h-4" />
      <span className="font-medium">
        {hours}h {minutes}m {secs}s
      </span>
    </div>
  );
}

export function ExpertDashboard({ onNavigate, onLogout }: ExpertDashboardProps) {
  const [activeTab, setActiveTab] = useState('dashboard');

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
            icon={<AlertCircle />}
            active={activeTab === 'pending'}
            onClick={() => setActiveTab('pending')}
          >
            Pending Questions
            {mockStats.pendingQuestions > 0 && (
              <Badge variant="danger" className="ml-auto">
                {mockStats.pendingQuestions}
              </Badge>
            )}
          </SidebarNavItem>
          <SidebarNavItem
            icon={<CheckCircle2 />}
            active={activeTab === 'answered'}
            onClick={() => setActiveTab('answered')}
          >
            Answered Questions
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
          <h1 className="text-3xl font-bold text-foreground mb-2">Expert Dashboard</h1>
          <p className="text-muted-foreground">Review and answer student questions</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Pending Questions
                </CardTitle>
                <AlertCircle className="w-5 h-5 text-amber-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground">
                {mockStats.pendingQuestions}
              </div>
              <p className="text-sm text-amber-600 mt-2">
                Awaiting your review
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Answered Today
                </CardTitle>
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground">
                {mockStats.answeredToday}
              </div>
              <div className="flex items-center gap-1 text-sm text-emerald-600 mt-2">
                <TrendingUp className="w-4 h-4" />
                <span>Great work!</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Total Answered
                </CardTitle>
                <MessageSquare className="w-5 h-5 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground">
                {mockStats.totalAnswered}
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                All time
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Pending Questions Table */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Pending Questions</CardTitle>
              <Badge variant="warning">
                {mockStats.pendingQuestions} pending
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {mockPendingQuestions.map((question) => (
                <div
                  key={question.id}
                  className="flex items-center gap-4 p-4 border border-border rounded-lg hover:border-primary/50 transition-colors"
                >
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-2">
                      {question.title}
                    </h4>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                      <Badge variant="secondary">{question.category}</Badge>
                      <span>Asked by {question.askedBy}</span>
                      <span>•</span>
                      <span>{question.postedTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="text-xs text-muted-foreground mb-1">Time Remaining</div>
                      <TimeRemaining seconds={question.timeRemaining} />
                    </div>
                    <Button
                      variant="primary"
                      onClick={() => onNavigate('question-details')}
                    >
                      Answer
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {mockPendingQuestions.length === 0 && (
              <div className="text-center py-12">
                <CheckCircle2 className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                <p className="text-muted-foreground">No pending questions at the moment</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Info Card */}
        <Card className="mt-6 bg-blue-50 border-blue-200">
          <CardContent className="pt-6">
            <div className="flex gap-3">
              <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-blue-900 mb-1">
                  24-Hour Review Policy
                </h4>
                <p className="text-sm text-blue-800">
                  Questions that are not reviewed within 24 hours will be automatically published to the 
                  public community. Please prioritize questions with less time remaining.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
