import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'outline';
}

export const Badge = ({ children, variant = 'default' }: BadgeProps) => {
  const styles = {
    default: "bg-slate-800 text-slate-300",
    success: "bg-emerald-900/30 text-emerald-400 border border-emerald-900",
    warning: "bg-amber-900/30 text-amber-400 border border-amber-900",
    outline: "border border-slate-700 text-slate-400"
  };

  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${styles[variant]}`}>
      {children}
    </span>
  );
};