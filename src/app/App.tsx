import React, { useState } from 'react';
import { LandingPage } from '@/app/pages/LandingPage';
import { LoginPage } from '@/app/pages/LoginPage';
import { RegisterPage } from '@/app/pages/RegisterPage';
import { UserDashboard } from '@/app/pages/UserDashboard';
import { AskQuestionPage } from '@/app/pages/AskQuestionPage';
import { QuestionDetailsPage } from '@/app/pages/QuestionDetailsPage';
import { ExpertDashboard } from '@/app/pages/ExpertDashboard';
import { AdminDashboard } from '@/app/pages/AdminDashboard';

type Page = 
  | 'landing' 
  | 'login' 
  | 'register' 
  | 'user-dashboard' 
  | 'ask-question'
  | 'question-details'
  | 'expert-dashboard' 
  | 'admin-dashboard';

type UserRole = 'user' | 'expert' | 'admin' | null;

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');
  const [userRole, setUserRole] = useState<UserRole>(null);

  const handleLogin = (role: string) => {
    setUserRole(role as UserRole);
    
    // Navigate to appropriate dashboard based on role
    switch (role) {
      case 'user':
        setCurrentPage('user-dashboard');
        break;
      case 'expert':
        setCurrentPage('expert-dashboard');
        break;
      case 'admin':
        setCurrentPage('admin-dashboard');
        break;
      default:
        setCurrentPage('landing');
    }
  };

  const handleRegister = (role: string) => {
    // After registration, automatically log in
    handleLogin(role);
  };

  const handleLogout = () => {
    setUserRole(null);
    setCurrentPage('landing');
  };

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
  };

  // Render the appropriate page based on current state
  const renderPage = () => {
    switch (currentPage) {
      case 'landing':
        return <LandingPage onNavigate={handleNavigate} />;
      
      case 'login':
        return <LoginPage onNavigate={handleNavigate} onLogin={handleLogin} />;
      
      case 'register':
        return <RegisterPage onNavigate={handleNavigate} onRegister={handleRegister} />;
      
      case 'user-dashboard':
        return <UserDashboard onNavigate={handleNavigate} onLogout={handleLogout} />;
      
      case 'ask-question':
        return <AskQuestionPage onNavigate={handleNavigate} onLogout={handleLogout} />;
      
      case 'question-details':
        return <QuestionDetailsPage onNavigate={handleNavigate} onLogout={handleLogout} />;
      
      case 'expert-dashboard':
        return <ExpertDashboard onNavigate={handleNavigate} onLogout={handleLogout} />;
      
      case 'admin-dashboard':
        return <AdminDashboard onNavigate={handleNavigate} onLogout={handleLogout} />;
      
      default:
        return <LandingPage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen">
      {renderPage()}
    </div>
  );
}

export default App;
