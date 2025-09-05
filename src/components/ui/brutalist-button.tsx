import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const brutalistButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-label text-sm transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border-2 border-charcoal uppercase tracking-wider",
  {
    variants: {
      variant: {
        primary: "bg-deep-green text-background hover:bg-deep-blue hover:shadow-glow-secondary active:translate-y-1 shadow-brutalist hover:shadow-brutalist-hover",
        secondary: "bg-background text-charcoal hover:bg-secondary active:translate-y-1 shadow-brutalist hover:shadow-brutalist-hover",
        ghost: "border-transparent bg-transparent hover:bg-secondary text-foreground hover:text-secondary-foreground",
        destructive: "bg-red-600 text-background hover:bg-red-700 active:translate-y-1 shadow-brutalist hover:shadow-brutalist-hover"
      },
      size: {
        default: "h-12 px-8 py-3",
        sm: "h-10 px-6 py-2 text-xs",
        lg: "h-14 px-12 py-4 text-base",
        icon: "h-12 w-12"
      },
      fullWidth: {
        true: "w-full",
        false: ""
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
      fullWidth: false
    },
  }
)

export interface BrutalistButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof brutalistButtonVariants> {
  asChild?: boolean
}

const BrutalistButton = React.forwardRef<HTMLButtonElement, BrutalistButtonProps>(
  ({ className, variant, size, fullWidth, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(brutalistButtonVariants({ variant, size, fullWidth, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
BrutalistButton.displayName = "BrutalistButton"

export { BrutalistButton, brutalistButtonVariants }