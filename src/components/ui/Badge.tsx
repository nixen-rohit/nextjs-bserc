import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  className?: string
  variant?: 'blue' | 'orange' | 'gold'
}

const variantClasses = {
  blue: 'text-primary border-primary/40 bg-primary/10',
  orange: 'text-secondary border-secondary/40 bg-secondary/10',
  gold: 'text-accent border-accent/40 bg-accent/10',
}

export default function Badge({
  children,
  className,
  variant = 'blue',
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-block border px-3 py-0.5 text-[10px] font-mono tracking-[0.2em] uppercase rounded-full',
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
