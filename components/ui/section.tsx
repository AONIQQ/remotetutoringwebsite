import * as React from "react"
import { cn } from "@/lib/utils"

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  background?: "default" | "primary" | "secondary"
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, background = "default", ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          "py-12 px-4 md:px-6",
          {
            "bg-background text-foreground": background === "default",
            "bg-primary text-primary-foreground": background === "primary",
            "bg-secondary text-secondary-foreground": background === "secondary",
          },
          className
        )}
        {...props}
      />
    )
  }
)
Section.displayName = "Section"

export { Section }