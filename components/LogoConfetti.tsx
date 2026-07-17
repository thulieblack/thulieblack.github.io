'use client'

import { useState, type ReactNode, type CSSProperties } from 'react'

const COLORS = ['#fab005', '#f59f00', '#93620a', '#2f4a5c', '#e67700']
const PIECE_COUNT = 10

// A small delight on the crest: clicking it (without leaving the homepage)
// pops a quick radial confetti burst. Purely decorative — doesn't interfere
// with the logo's normal navigation link underneath it.
const LogoConfetti = ({ children }: { children: ReactNode }) => {
  const [bursts, setBursts] = useState<number[]>([])

  const trigger = () => {
    const id = Date.now() + Math.random()
    setBursts((b) => [...b, id])
    setTimeout(() => setBursts((b) => b.filter((x) => x !== id)), 850)
  }

  return (
    // This div wraps the logo *inside* the Header's <Link href="/">, which is
    // already the real, fully keyboard-accessible navigation control. This
    // onClick only adds a decorative confetti flourish on top of it — making
    // this div itself focusable would just add a redundant second tab stop.
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div className="relative" onClick={trigger}>
      {children}
      {bursts.map((id) => (
        <span key={id} aria-hidden="true" className="pointer-events-none absolute inset-0">
          {Array.from({ length: PIECE_COUNT }).map((_, i) => (
            <span
              key={i}
              className="confetti-piece"
              style={
                {
                  '--angle': `${(360 / PIECE_COUNT) * i}deg`,
                  backgroundColor: COLORS[i % COLORS.length],
                } as CSSProperties
              }
            />
          ))}
        </span>
      ))}
    </div>
  )
}

export default LogoConfetti
