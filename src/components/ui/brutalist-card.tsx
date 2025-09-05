import * as React from "react"
import { cn } from "@/lib/utils"

const BrutalistCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    variant?: "default" | "charcoal" | "floating"
  }
>(({ className, variant = "default", ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "border-2 border-charcoal transition-all duration-300",
      {
        "bg-card text-card-foreground shadow-brutalist hover:shadow-brutalist-hover hover:-translate-y-1": variant === "default",
        "bg-card-charcoal text-card-charcoal-foreground shadow-brutalist hover:shadow-brutalist-hover hover:-translate-y-1": variant === "charcoal", 
        "bg-card text-card-foreground backdrop-blur-sm bg-opacity-90 shadow-lg hover:shadow-glow-primary": variant === "floating"
      },
      className
    )}
    {...props}
  />
))
BrutalistCard.displayName = "BrutalistCard"

const BrutalistCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
BrutalistCardHeader.displayName = "BrutalistCardHeader"

const BrutalistCardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("font-headline text-xl font-bold leading-none tracking-tight", className)}
    {...props}
  />
))
BrutalistCardTitle.displayName = "BrutalistCardTitle"

const BrutalistCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("font-body text-sm text-muted-foreground", className)}
    {...props}
  />
))
BrutalistCardDescription.displayName = "BrutalistCardDescription"

const BrutalistCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
BrutalistCardContent.displayName = "BrutalistCardContent"

const BrutalistCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
BrutalistCardFooter.displayName = "BrutalistCardFooter"

export { BrutalistCard, BrutalistCardHeader, BrutalistCardFooter, BrutalistCardTitle, BrutalistCardDescription, BrutalistCardContent }