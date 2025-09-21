"use client";

import { useState } from "react";

interface LoadingButtonProps {
  children: React.ReactNode;
  onClick?: () => void | Promise<void>;
  disabled?: boolean;
  className?: string;
  variant?: "primary" | "secondary";
  type?: "button" | "submit" | "reset";
}

export default function LoadingButton({
  children,
  onClick,
  disabled = false,
  className = "",
  variant = "primary",
  type = "button"
}: LoadingButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    if (disabled || isLoading || !onClick) return;
    
    try {
      setIsLoading(true);
      await onClick();
    } catch (error) {
      console.error('Button action failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const baseClasses = `
    relative px-6 py-3 rounded-lg font-semibold transition-all duration-200
    focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900
    disabled:cursor-not-allowed
  `;

  const variantClasses = variant === "primary" 
    ? `
      bg-cyan-400 text-slate-900 
      hover:bg-cyan-300 shadow-lg shadow-cyan-500/20
      disabled:bg-cyan-400/50 disabled:shadow-none
    `
    : `
      bg-white/10 text-white border border-white/20
      hover:bg-white/20 
      disabled:bg-white/5 disabled:text-white/50 disabled:border-white/10
    `;

  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled || isLoading}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      <span 
        className={`
          transition-opacity duration-200
          ${isLoading ? 'opacity-0' : 'opacity-100'}
        `}
      >
        {children}
      </span>
      
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </button>
  );
}