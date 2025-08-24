import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-[#1D3242] text-white shadow-xs hover:bg-[#2E4E65] hover:shadow-[0_0_12px_rgba(46,78,101,0.6)]",

        destructive:
          "bg-[#E8B21A] text-black shadow-xs hover:bg-[#c79815] hover:shadow-[0_0_12px_rgba(232,178,26,0.6)] focus-visible:ring-[#E8B21A]/30",

        outline:
          "border border-[#B0B8C1] bg-transparent text-[#B0B8C1] shadow-xs hover:bg-[#2E4E65] hover:text-white hover:shadow-[0_0_12px_rgba(176,184,193,0.5)]",

        secondary:
          "bg-[#2E4E65] text-white shadow-xs hover:bg-[#1D3242] hover:shadow-[0_0_12px_rgba(29,50,66,0.6)]",

        ghost:
          "hover:bg-[#1A73E8]/10 text-[#1A73E8] hover:shadow-[0_0_10px_rgba(26,115,232,0.4)]",

        link: "text-[#1A73E8] underline-offset-4 hover:underline hover:shadow-[0_0_8px_rgba(26,115,232,0.3)]",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
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

export { Button, buttonVariants };
