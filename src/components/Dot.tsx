import { cn } from '@/lib/utils'

type DotProps = {
  small?: boolean
  className?: string
  style?: React.CSSProperties
}

export function Dot({ small, className, style }: DotProps) {
  return (
    <span
      aria-hidden
      style={style}
      className={cn(
        'absolute rounded-full bg-accent-green shadow-[0_0_12px_2px_rgba(61,220,151,0.65)] animate-pulse-dot',
        small ? 'size-1' : 'size-1.5',
        className,
      )}
    />
  )
}
