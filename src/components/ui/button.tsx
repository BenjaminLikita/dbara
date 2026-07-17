import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "cursor-pointer inline-flex items-center justify-center font-sora gap-2 whitespace-nowrap rounded-full text-[0.95rem] font-semibold transition-all duration-250 outline-none focus-visible:ring-2 focus-visible:ring-accent-teal focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-white hover:bg-(image:--accent-gradient)",
        secondary: "bg-(image:--accent-gradient) text-primary",
        dark: "border border-white/8 bg-[#0e1c2c] text-white hover:bg-[#16273b]",
        outline: "border border-current bg-transparent",
        link: "hover:bg-white/10 text-white transition-colors duration-200",
        ghost: "hover:bg-white/10",
      },
      size: {
        default: "py-2.5 px-7",
        sm: "py-2 px-5",
        lg: "w-full px-5 py-2",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export { Button, buttonVariants };
