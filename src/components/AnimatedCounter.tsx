import { useEffect, useRef, useState } from 'react'

type AnimatedCounterProps = {
  target: number
  className?: string
}

export function AnimatedCounter({ target, className }: AnimatedCounterProps) {
  const [value, setValue] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const animate = () => {
      if (started.current) return
      started.current = true
      const duration = 1400
      const start = performance.now()

      const step = (now: number) => {
        const progress = Math.min((now - start) / duration, 1)
        setValue(Math.floor(progress * target))
        if (progress < 1) requestAnimationFrame(step)
        else setValue(target)
      }

      requestAnimationFrame(step)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) animate()
        })
      },
      { threshold: 0.4 },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  )
}
