import * as React from 'react'
import { cn } from '@/lib/utils'

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'flex-1 bg-transparent text-[0.95rem] text-white outline-none placeholder:text-[#8694a4]',
        className,
      )}
      {...props}
    />
  )
}

export { Input }
