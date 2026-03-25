import React from "react";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

type InputProps = {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
  clearable?: boolean;
  onClear?: () => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

const inputVariants = cva(
  "w-full rounded-lg border text-sm outline-none transition px-3 py-2",
  {
    variants: {
      state: {
        default: "border-gray-300 bg-white focus:border-primary-blue",
        error: "border-red-500 focus:border-red-500",
        disabled:
          "border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed",
      },

      hasIcon: {
        true: "pl-9",
      },

      hasClear: {
        true: "pr-9",
      },
    },

    defaultVariants: {
      state: "default",
    },
  },
);

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { label, error, icon, clearable, onClear, disabled, className, ...props },
    ref,
  ) => {
    return (
      <div className="w-full space-y-1">
        {label && <label className="text-sm text-gray-600">{label}</label>}

        <div className="relative">
          {/* left icon */}
          {icon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              {icon}
            </div>
          )}

          <input
            ref={ref}
            disabled={disabled}
            className={cn(
              inputVariants({
                state: error ? "error" : disabled ? "disabled" : "default",
                hasIcon: !!icon,
                hasClear: clearable,
              }),
              className,
            )}
            {...props}
          />

          {/* clear button */}
          {clearable && !disabled && (
            <button
              type="button"
              onClick={onClear}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          )}
        </div>

        {/* error message */}
        {error && <p className="text-xs text-red-500">{error}</p>}
      </div>
    );
  },
);

Input.displayName = "Input";
