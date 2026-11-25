'use client'

import { useEffect, useRef, useState } from 'react'
import journeyData from '@/data/journeyData'

// Interactive timeline of my work experience on the About page:
// - the gold line fills in as you scroll through it
// - each role expands/collapses on click (the current role starts open)
const Journey = () => {
  const listRef = useRef<HTMLOListElement>(null)
  const [fill, setFill] = useState(0)
  const [open, setOpen] = useState<Set<number>>(() => new Set([0]))

  useEffect(() => {
    const onScroll = () => {
      const el = listRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      // 0 when the list's top reaches the middle of the screen, 1 when its bottom does
      const mid = window.innerHeight * 0.6
      const p = (mid - rect.top) / rect.height
      setFill(Math.max(0, Math.min(1, p)))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  const toggle = (i: number) =>
    setOpen((prev) => {
      const next = new Set(prev)
      if (next.has(i)) next.delete(i)
      else next.add(i)
      return next
    })

  const allOpen = open.size === journeyData.length

  return (
    <section className="not-prose mt-12">
      <div className="mb-8 flex items-baseline justify-between gap-4">
        <h2 className="font-serif text-2xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-gray-100">
          My Journey
        </h2>
        <button
          type="button"
          onClick={() => setOpen(allOpen ? new Set() : new Set(journeyData.map((_, i) => i)))}
          className="text-primary-500 hover:text-primary-600 dark:text-primary-400 text-sm font-medium"
        >
          {allOpen ? 'Collapse all' : 'Expand all'}
        </button>
      </div>

      <ol ref={listRef} className="relative ml-3">
        {/* Track and the gold fill that grows with scroll */}
        <span
          aria-hidden="true"
          className="absolute top-0 bottom-0 -left-px w-0.5 bg-gray-200 dark:bg-gray-700"
        />
        <span
          aria-hidden="true"
          className="from-primary-400 to-primary-600 absolute top-0 -left-px w-0.5 origin-top bg-gradient-to-b"
          style={{ height: `${fill * 100}%` }}
        />

        {journeyData.map((role, i) => {
          const isOpen = open.has(i)
          const reached = fill * journeyData.length > i
          const panelId = `journey-role-${i}`
          return (
            <li key={`${role.organization}-${role.title}`} className="relative mb-6 ml-8 last:mb-0">
              <span
                aria-hidden="true"
                className={`absolute top-1.5 -left-[41px] h-4 w-4 rounded-full ring-4 ring-gray-50 transition-all duration-500 dark:ring-gray-900 ${
                  reached ? 'bg-primary-500 scale-110' : 'bg-gray-300 dark:bg-gray-600'
                }`}
              />
              <button
                type="button"
                onClick={() => toggle(i)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="group flex w-full items-start justify-between gap-4 text-left"
              >
                <span>
                  <span className="text-primary-500 dark:text-primary-400 block text-sm font-bold tracking-wide uppercase">
                    {role.period}
                  </span>
                  <span className="group-hover:text-primary-500 mt-1 block text-xl font-bold text-gray-900 transition-colors dark:text-gray-100">
                    {role.title}
                  </span>
                  <span className="block font-medium text-gray-600 dark:text-gray-400">
                    {role.organization}
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className={`group-hover:border-primary-500 group-hover:text-primary-500 mt-6 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gray-300 text-lg text-gray-500 transition-all duration-300 dark:border-gray-600 ${
                    isOpen ? 'rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </button>
              <div
                id={panelId}
                className={`grid transition-all duration-500 ease-out ${
                  isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <ul className="mt-3 space-y-1.5 overflow-hidden text-gray-700 dark:text-gray-300">
                  {role.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="text-primary-500" aria-hidden="true">
                        ▸
                      </span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          )
        })}
      </ol>
    </section>
  )
}

export default Journey
