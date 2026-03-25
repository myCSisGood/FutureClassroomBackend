import React, { InputHTMLAttributes, forwardRef, useId } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Image from "next/image";

const checkboxVariants = cva(
  "peer mt-1 w-6 h-6 shrink-0 appearance-none rounded-[4px] border transition-all cursor-pointer disabled:cursor-not-allowed",
  {
    variants: {
      intent: {
        primary: [
          "border-gray-90",
          "checked:bg-gray-90",
          /* To-do: use custom css variable checked:hover:bg-blue-radial */
          "checked:hover:bg-[radial-gradient(186.67%_186.67%_at_50%_201.25%,#007FA9_0%,#262626_100%)]",
          "disabled:bg-gray-40",
        ],
      },
    },
    defaultVariants: {
      intent: "primary",
    },
  },
);

interface CheckboxProps
  extends
    Omit<InputHTMLAttributes<HTMLInputElement>, "type">,
    VariantProps<typeof checkboxVariants> {
  label?: string;
  indeterminate?: boolean;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, intent, label, indeterminate, ...props }, ref) => {
    const id = useId();
    const internalRef = React.useRef<HTMLInputElement>(null);

    React.useEffect(() => {
      const el =
        (ref as React.MutableRefObject<HTMLInputElement>)?.current ||
        internalRef.current;
      if (el) {
        el.indeterminate = !!indeterminate;
      }
    }, [indeterminate, ref]);

    return (
      <label htmlFor={id} className="flex items-start gap-2 mt-4">
        <div className="relative flex items-center justify-center">
          <input
            {...props}
            type="checkbox"
            ref={ref || internalRef}
            id={id}
            className={cn(checkboxVariants({ intent, className }))}
          />

          <Image
            src="/icon/common/icon_check_white.svg"
            alt="Check"
            width={16}
            height={16}
            className="mt-1 absolute pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity"
          />

          {indeterminate && (
            <Image
              src="/icon/common/icon_minus_white.svg"
              alt="Minus"
              width={16}
              height={16}
              className="mt-1 absolute pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity"
            />
          )}
        </div>

        {label && (
          <span
            className={cn(
              "body-1-reg text-gray-90",
              props.disabled &&
                "body-1-reg text-gray-40 group-hover:text-gray-40",
            )}
          >
            {label}
          </span>
        )}
      </label>
    );
  },
);

Checkbox.displayName = "Checkbox";

export { Checkbox };
