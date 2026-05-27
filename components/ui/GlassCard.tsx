import React from "react";
import { cn } from "@/lib/utils"; // I'll need to create this lib/utils.ts

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className, hover = false }) => {
  return (
    <div
      className={cn(
        "glass-card p-6",
        hover && "glass-card-hover",
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlassCard;
