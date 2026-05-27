import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "alpha" | "beta" | "coming-soon" | "success";
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ children, variant = "alpha", className }) => {
  const variants = {
    alpha: "bg-amber-500/10 text-amber-500 border-amber-500/20",
    beta: "bg-secondary/10 text-secondary border-secondary/20",
    "coming-soon": "bg-text-muted/10 text-text-muted border-text-muted/20",
    success: "bg-success/10 text-success border-success/20",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
};

export default Badge;
