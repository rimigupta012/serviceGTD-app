import { useEffect, useRef, useState } from 'react'

interface Stat {
  value: number
  suffix: string
  label: string
}

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [display, setDisplay] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const counted = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true
          const duration = 2000
          const start = Date.now()
          const step = () => {
            const progress = Math.min((Date.now() - start) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setDisplay(Math.floor(eased * value))
            if (progress < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value])

  return (
    <div ref={ref} className="text-4xl sm:text-5xl font-bold text-gradient">
      {display}{suffix}
    </div>
  )
}

export default function StatsCounter({ stats, light = false }: { stats: Stat[]; light?: boolean }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((stat, i) => (
        <div key={i} className="text-center">
          <AnimatedNumber value={stat.value} suffix={stat.suffix} />
          <p className={`mt-2 text-sm font-medium ${light ? 'text-gray-300' : 'text-gray-600'}`}>{stat.label}</p>
        </div>
      ))}
    </div>
  )
}
