import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"
import { buttonVariants } from "./buttonVariants"
import type { ButtonVariantProps } from "./buttonVariants"

type ButtonProps = React.ComponentProps<"button"> &
  ButtonVariantProps & {
    asChild?: boolean
  }

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button }
export type { ButtonVariantProps }
