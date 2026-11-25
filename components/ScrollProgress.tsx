'use client'

import { useEffect, useState } from 'react'

// Thin gold bar across the top of the page that grows as you scroll.
const ScrollProgress = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? Math.min(window.scrollY / max, 1) : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <div aria-hidden="true" className="fixed inset-x-0 top-0 z-[60] h-1">
      <div
        className="from-primary-400 to-primary-700 h-full origin-left bg-gradient-to-r"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  )
}

export default ScrollProgress
