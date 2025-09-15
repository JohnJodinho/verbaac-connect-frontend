import * as React from "react"

import { cn } from "../../lib/utils"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
  success?: boolean
  prefixIcon?: React.ReactNode
  suffixIcon?: React.ReactNode
  label?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, success, prefixIcon, suffixIcon, label, ...props }, ref) => {
    const inputClass = cn(
      "flex h-9 w-full rounded-lg border bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      error && "border-red-500 ring-red-500",
      success && "border-green-500 ring-green-500",
      className
    );
    return (
      <div className="flex flex-col gap-1 w-full">
        {label && <label className="text-sm font-medium text-foreground" htmlFor={props.id}>{label}</label>}
        <div className="flex items-center border rounded-lg bg-background">
          {prefixIcon && <span className="pl-2 text-muted-foreground">{prefixIcon}</span>}
          <input
            type={type}
            className={inputClass}
            ref={ref}
            aria-invalid={error}
            aria-label={label}
            {...props}
          />
          {suffixIcon && <span className="pr-2 text-muted-foreground">{suffixIcon}</span>}
        </div>
        {error && <span className="text-xs text-red-500 mt-1">{typeof error === 'string' ? error : 'Invalid input'}</span>}
        {success && <span className="text-xs text-green-500 mt-1">{typeof success === 'string' ? success : 'Looks good!'}</span>}
      </div>
    );
  }
)
Input.displayName = "Input"

export { Input }
