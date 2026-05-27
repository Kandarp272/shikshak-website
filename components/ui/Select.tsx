import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { label: string; value: string }[];
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, options, className, ...props }, ref) => {
    return (
      <div className="w-full space-y-2">
        {label && (
          <label className="block text-sm font-medium text-text-secondary">
            {label}
          </label>
        )}
        <select
          ref={ref}
          className={cn(
            "w-full bg-[#1A1F26] border border-glass-border rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-primary/50 transition-all duration-200 appearance-none cursor-pointer",
            error && "border-red-500/50 focus:border-red-500/50",
            className
          )}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} className="bg-bg-surface">
              {opt.label}
            </option>
          ))}
        </select>
        {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
      </div>
    );
  }
);

Select.displayName = "Select";

export default Select;
