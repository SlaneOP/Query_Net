import React, { useState } from 'react';
import { Sidebar, SidebarNav, SidebarNavItem } from '@/app/components/Sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/Card';
import { Badge } from '@/app/components/Badge';
import { Button } from '@/app/components/Button';
import { Textarea } from '@/app/components/Textarea';
import { 
  LayoutDashboard, 
  MessageSquarePlus, 
  MessageSquare, 
  MessageCircle,
  Award, 
  LogOut,
  ThumbsUp,
  ThumbsDown,
  User,
  Clock,
  MessageSquareText
} from 'lucide-react';

interface QuestionDetailsPageProps {
  onNavigate: (page: string) => void;
  onLogout: () => void;
}

// Mock data
const mockQuestion = {
  id: 1,
  title: 'What is the difference between React hooks and class components?',
  description: `I'm learning React and I'm confused about when to use hooks versus class components. 
  
  Can someone explain:
  1. The main differences between them
  2. When to use one over the other
  3. Are class components deprecated?
  
  I've been using class components so far but I see a lot of code using hooks now.`,
  status: 'expert-answered',
  author: 'John Doe',
  date: '2 hours ago',
  views: 45,
  tags: ['react', 'javascript', 'hooks']
};

const mockAnswers = [
  {
    id: 1,
    content: `React Hooks were introduced in React 16.8 as a way to use state and other React features without writing a class. Here are the key differences:

**Main Differences:**
- Hooks allow you to use state and lifecycle features in functional components
- Class components require more boilerplate code
- Hooks make it easier to reuse stateful logic between components

**When to use:**
- New projects: Use hooks (recommended by React team)
- Existing projects: Either continue with classes or gradually migrate
- Class components are NOT deprecated, they're still fully supported

**Example:**
Class: You need constructor, this.state, this.setState
Hooks: Just use useState() and useEffect()

Hope this helps!`,
    author: 'Dr. Sarah Johnson',
    authorType: 'Expert',
    reputation: 2450,
    upvotes: 12,
    downvotes: 1,
    date: '1 hour ago',
    isExpertAnswer: true
  },
  {
    id: 2,
    content: `Great explanation above! I'd also add that hooks make testing easier and reduce the need for HOCs (Higher Order Components). The React team recommends hooks for new code.`,
    author: 'Mike Chen',
    authorType: 'User',
    reputation: 320,
    upvotes: 5,
    downvotes: 0,
    date: '45 minutes ago',
    isExpertAnswer: false
  }
];

export function QuestionDetailsPage({ onNavigate, onLogout }: QuestionDetailsPageProps) {
  const [newAnswer, setNewAnswer] = useState('');

  const handleSubmitAnswer = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Answer submitted successfully!');
    setNewAnswer('');
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
            onClick={() => onNavigate('ask-question')}
          >
            Ask Question
          </SidebarNavItem>
          <SidebarNavItem icon={<MessageSquare />} active>
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
        <div className="max-w-4xl">
          {/* Question Card */}
          <Card className="mb-6">
            <CardHeader>
              <div className="flex items-start justify-between mb-4">
                <Badge variant="success">Expert Answered</Badge>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {mockQuestion.date}
                  </span>
                  <span>{mockQuestion.views} views</span>
                </div>
              </div>
              <CardTitle className="text-2xl mb-4">{mockQuestion.title}</CardTitle>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <User className="w-4 h-4" />
                <span>Asked by {mockQuestion.author}</span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-foreground whitespace-pre-line mb-4">
                {mockQuestion.description}
              </div>
              <div className="flex flex-wrap gap-2">
                {mockQuestion.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Answers Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <MessageSquareText className="w-6 h-6" />
              {mockAnswers.length} Answers
            </h2>

            <div className="space-y-4">
              {mockAnswers.map((answer) => (
                <Card key={answer.id} className={answer.isExpertAnswer ? 'border-2 border-emerald-200 bg-emerald-50/30' : ''}>
                  <CardContent className="pt-6">
                    {answer.isExpertAnswer && (
                      <div className="mb-3">
                        <Badge variant="success">✓ Expert Answer</Badge>
                      </div>
                    )}
                    
                    <div className="flex gap-4">
                      {/* Vote Section */}
                      <div className="flex flex-col items-center gap-2">
                        <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                          <ThumbsUp className="w-5 h-5 text-muted-foreground hover:text-primary" />
                        </button>
                        <span className="font-semibold text-foreground">
                          {answer.upvotes - answer.downvotes}
                        </span>
                        <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                          <ThumbsDown className="w-5 h-5 text-muted-foreground hover:text-destructive" />
                        </button>
                      </div>

                      {/* Answer Content */}
                      <div className="flex-1">
                        <div className="text-foreground whitespace-pre-line mb-4">
                          {answer.content}
                        </div>
                        
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <User className="w-4 h-4" />
                            <span className="font-medium text-foreground">{answer.author}</span>
                            {answer.isExpertAnswer && (
                              <Badge variant="info" className="text-xs">Expert</Badge>
                            )}
                            <span>•</span>
                            <span className="flex items-center gap-1">
                              <Award className="w-4 h-4" />
                              {answer.reputation} reputation
                            </span>
                          </div>
                          <span className="text-muted-foreground">{answer.date}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Add Answer Section */}
          <Card>
            <CardHeader>
              <CardTitle>Your Answer</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmitAnswer} className="space-y-4">
                <Textarea
                  placeholder="Write your answer here..."
                  rows={6}
                  value={newAnswer}
                  onChange={(e) => setNewAnswer(e.target.value)}
                  required
                />
                <Button type="submit">
                  Post Answer
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
