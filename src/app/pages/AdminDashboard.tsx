import React, { useState } from 'react';
import { Sidebar, SidebarNav, SidebarNavItem } from '@/app/components/Sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/Card';
import { Badge } from '@/app/components/Badge';
import { Button } from '@/app/components/Button';
import { 
  LayoutDashboard, 
  Users, 
  UserCheck,
  MessageSquare,
  Flag,
  LogOut,
  Eye,
  Edit,
  Trash2,
  TrendingUp,
  Activity
} from 'lucide-react';

interface AdminDashboardProps {
  onNavigate: (page: string) => void;
  onLogout: () => void;
}

// Mock data
const mockStats = {
  totalUsers: 1243,
  totalExperts: 45,
  totalQuestions: 3892,
  activeToday: 156
};

const mockUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'User', status: 'Active', joined: '2025-01-15', reputation: 145 },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active', joined: '2025-01-20', reputation: 87 },
  { id: 3, name: 'Dr. Sarah Johnson', email: 'sarah@example.com', role: 'Expert', status: 'Active', joined: '2025-01-10', reputation: 2450 },
  { id: 4, name: 'Mike Chen', email: 'mike@example.com', role: 'User', status: 'Active', joined: '2025-01-25', reputation: 320 },
  { id: 5, name: 'Prof. Robert Brown', email: 'robert@example.com', role: 'Expert', status: 'Active', joined: '2025-01-05', reputation: 3120 }
];

const mockQuestions = [
  { id: 1, title: 'What is polymorphism in OOP?', author: 'John Doe', status: 'Public', answers: 5, date: '2026-01-28' },
  { id: 2, title: 'How does garbage collection work?', author: 'Jane Smith', status: 'Pending', answers: 0, date: '2026-01-28' },
  { id: 3, title: 'Explain React hooks', author: 'Mike Chen', status: 'Expert Answered', answers: 3, date: '2026-01-27' },
  { id: 4, title: 'Difference between SQL and NoSQL', author: 'Alice Brown', status: 'Public', answers: 8, date: '2026-01-27' }
];

export function AdminDashboard({ onNavigate, onLogout }: AdminDashboardProps) {
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
            icon={<Users />}
            active={activeTab === 'users'}
            onClick={() => setActiveTab('users')}
          >
            Users
          </SidebarNavItem>
          <SidebarNavItem
            icon={<UserCheck />}
            active={activeTab === 'experts'}
            onClick={() => setActiveTab('experts')}
          >
            Experts
          </SidebarNavItem>
          <SidebarNavItem
            icon={<MessageSquare />}
            active={activeTab === 'questions'}
            onClick={() => setActiveTab('questions')}
          >
            Questions
          </SidebarNavItem>
          <SidebarNavItem
            icon={<Flag />}
            active={activeTab === 'reports'}
            onClick={() => setActiveTab('reports')}
          >
            Reports
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
          <h1 className="text-3xl font-bold text-foreground mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage users, experts, and platform content</p>
        </div>

        {/* Analytics Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Total Users
                </CardTitle>
                <Users className="w-5 h-5 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground">
                {mockStats.totalUsers.toLocaleString()}
              </div>
              <div className="flex items-center gap-1 text-sm text-emerald-600 mt-2">
                <TrendingUp className="w-4 h-4" />
                <span>+12% this month</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Active Experts
                </CardTitle>
                <UserCheck className="w-5 h-5 text-emerald-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground">
                {mockStats.totalExperts}
              </div>
              <div className="flex items-center gap-1 text-sm text-emerald-600 mt-2">
                <TrendingUp className="w-4 h-4" />
                <span>+3 this month</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Total Questions
                </CardTitle>
                <MessageSquare className="w-5 h-5 text-blue-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground">
                {mockStats.totalQuestions.toLocaleString()}
              </div>
              <div className="flex items-center gap-1 text-sm text-emerald-600 mt-2">
                <TrendingUp className="w-4 h-4" />
                <span>+234 this week</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Active Today
                </CardTitle>
                <Activity className="w-5 h-5 text-amber-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground">
                {mockStats.activeToday}
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Users online now
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Users Table */}
        {activeTab === 'dashboard' && (
          <>
            <Card className="mb-6">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Recent Users</CardTitle>
                  <Button variant="outline" size="sm">
                    View All Users
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Name</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Email</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Role</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Status</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Reputation</th>
                        <th className="text-right py-3 px-4 text-sm font-semibold text-muted-foreground">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockUsers.map((user) => (
                        <tr key={user.id} className="border-b border-border hover:bg-muted/50">
                          <td className="py-3 px-4">
                            <div className="font-medium text-foreground">{user.name}</div>
                          </td>
                          <td className="py-3 px-4 text-muted-foreground">{user.email}</td>
                          <td className="py-3 px-4">
                            <Badge variant={user.role === 'Expert' ? 'info' : 'secondary'}>
                              {user.role}
                            </Badge>
                          </td>
                          <td className="py-3 px-4">
                            <Badge variant="success">{user.status}</Badge>
                          </td>
                          <td className="py-3 px-4 text-foreground font-medium">{user.reputation}</td>
                          <td className="py-3 px-4">
                            <div className="flex items-center justify-end gap-2">
                              <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                                <Eye className="w-4 h-4 text-muted-foreground" />
                              </button>
                              <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                                <Edit className="w-4 h-4 text-muted-foreground" />
                              </button>
                              <button className="p-2 hover:bg-destructive/10 rounded-lg transition-colors">
                                <Trash2 className="w-4 h-4 text-destructive" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Recent Questions</CardTitle>
                  <Button variant="outline" size="sm">
                    View All Questions
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Question</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Author</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Status</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Answers</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Date</th>
                        <th className="text-right py-3 px-4 text-sm font-semibold text-muted-foreground">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockQuestions.map((question) => (
                        <tr key={question.id} className="border-b border-border hover:bg-muted/50">
                          <td className="py-3 px-4">
                            <div className="font-medium text-foreground max-w-md">{question.title}</div>
                          </td>
                          <td className="py-3 px-4 text-muted-foreground">{question.author}</td>
                          <td className="py-3 px-4">
                            <Badge 
                              variant={
                                question.status === 'Pending' ? 'warning' : 
                                question.status === 'Expert Answered' ? 'success' : 
                                'info'
                              }
                            >
                              {question.status}
                            </Badge>
                          </td>
                          <td className="py-3 px-4 text-foreground">{question.answers}</td>
                          <td className="py-3 px-4 text-muted-foreground">{question.date}</td>
                          <td className="py-3 px-4">
                            <div className="flex items-center justify-end gap-2">
                              <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                                <Eye className="w-4 h-4 text-muted-foreground" />
                              </button>
                              <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                                <Edit className="w-4 h-4 text-muted-foreground" />
                              </button>
                              <button className="p-2 hover:bg-destructive/10 rounded-lg transition-colors">
                                <Trash2 className="w-4 h-4 text-destructive" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </>
        )}
      </main>
    </div>
  );
}
