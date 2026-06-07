import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "alpha" | "beta" | "coming-soon" | "success";
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ children, variant = "alpha", className }) => {
  const variants = {
    alpha: "bg-primary/5 text-primary border-primary/10",
    beta: "bg-secondary/5 text-secondary border-secondary/10",
    "coming-soon": "bg-text-muted/5 text-text-muted border-text-muted/10",
    success: "bg-success/5 text-success border-success/10",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-4 py-1.5 rounded-full text-[10px] tracking-wider uppercase font-bold border",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
};

export default Badge;
