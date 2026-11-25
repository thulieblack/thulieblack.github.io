'use client'

import { useEffect, useRef, useState } from 'react'

// Figures from my resume. Keep these in sync with it.
const STATS = [
  { value: 5, suffix: '+', label: 'years in DevRel & Open Source' },
  { value: 9000, suffix: '+', label: 'community members' },
  { value: 60, suffix: '%', label: 'faster contributor onboarding' },
  { value: 2800, suffix: '+', label: 'subscribers reached monthly' },
]

const DURATION_MS = 1400

const useCountUp = (target: number, start: boolean) => {
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!start) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setN(target)
      return
    }
    let raf = 0
    const t0 = performance.now()
    const tick = (t: number) => {
      const p = Math.min((t - t0) / DURATION_MS, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setN(Math.round(target * eased))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, start])
  return n
}

const Stat = ({ value, suffix, label, start }) => {
  const n = useCountUp(value, start)
  return (
    <div className="fun-card rounded-lg border-2 border-gray-200/60 bg-white p-4 text-center dark:border-gray-700/60 dark:bg-gray-800">
      <p className="text-primary-500 dark:text-primary-400 font-serif text-3xl font-extrabold tabular-nums">
        {n.toLocaleString('en-US')}
        {suffix}
      </p>
      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{label}</p>
    </div>
  )
}

// Counters that tick up from zero the first time they scroll into view.
const AboutStats = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [start, setStart] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setStart(true)
          io.disconnect()
        }
      },
      { threshold: 0.4 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div ref={ref} className="not-prose my-10 grid grid-cols-2 gap-4 md:grid-cols-4">
      {STATS.map((s) => (
        <Stat key={s.label} {...s} start={start} />
      ))}
    </div>
  )
}

export default AboutStats
