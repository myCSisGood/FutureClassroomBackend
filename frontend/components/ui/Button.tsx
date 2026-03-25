import React, { ButtonHTMLAttributes, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full font-medium transition-all focus-visible:outline-none disabled:pointer-events-none select-none cursor-pointer disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        primary: [
          "bg-gray-90 text-white",
          "hover:bg-[radial-gradient(186.67%_186.67%_at_50%_201.25%,#007FA9_0%,#262626_100%)]",
          "active:bg-black",
          "disabled:bg-gray-40 disabled:text-gray-30",
        ],
        secondary: [
          "bg-[#E6E6E6] text-[#1A1A1A]",
          "hover:bg-[#D9D9D9]",
          "active:bg-[#2C5F78] active:text-white",
          "disabled:bg-[#E6E6E6] disabled:text-[#BFBFBF] opacity-50",
        ],
      },
      size: {
        small: "h-10 px-4 text-sm min-w-[80px]",
        medium: "h-10 px-6 text-base min-w-[100px]",
        large: "h-10 px-8 text-lg min-w-[120px]", // 根據你的需求，Large 增加間距
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
  },
);

// 繼承標準 Button 屬性，這樣 onClick, type, disabled 都能直接用
export interface ButtonProps
  extends
    ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean; // 預留給未來如果需要搭配 Radix Slot 使用
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <button
        type={props.type || "button"}
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props} // onClick, type="submit" 等都會自動注入到這裡
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export { Button };
