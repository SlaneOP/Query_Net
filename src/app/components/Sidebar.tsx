import React from 'react';
import { clsx } from 'clsx';
import { GraduationCap } from 'lucide-react';

interface SidebarProps {
  children: React.ReactNode;
  className?: string;
}

export function Sidebar({ children, className }: SidebarProps) {
  return (
    <aside
      className={clsx(
        'w-64 bg-sidebar border-r border-sidebar-border min-h-screen',
        className
      )}
    >
      <div className="p-6">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <GraduationCap className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-semibold text-foreground">QueryNet</span>
        </div>
        {children}
      </div>
    </aside>
  );
}

interface SidebarNavProps {
  children: React.ReactNode;
}

export function SidebarNav({ children }: SidebarNavProps) {
  return <nav className="space-y-1">{children}</nav>;
}

interface SidebarNavItemProps {
  icon?: React.ReactNode;
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}

export function SidebarNavItem({ icon, children, active = false, onClick }: SidebarNavItemProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors duration-200',
        'text-left',
        active
          ? 'bg-primary text-primary-foreground'
          : 'text-sidebar-foreground hover:bg-sidebar-accent'
      )}
    >
      {icon && <span className="w-5 h-5 flex-shrink-0">{icon}</span>}
      <span>{children}</span>
    </button>
  );
}
