'use client'

import { useRef, useState, type ReactNode, type PointerEvent } from 'react'

const MAX_TILT = 12 // degrees

// Tilts the portrait in 3D toward the pointer, with a soft light that follows it,
// and pops a wave on hover. Static when prefers-reduced-motion is set (via CSS).
const PortraitTilt = ({ children }: { children: ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [style, setStyle] = useState({ rx: 0, ry: 0, gx: 50, gy: 50, active: false })

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    setStyle({
      rx: (0.5 - y) * MAX_TILT * 2,
      ry: (x - 0.5) * MAX_TILT * 2,
      gx: x * 100,
      gy: y * 100,
      active: true,
    })
  }

  const reset = () => setStyle({ rx: 0, ry: 0, gx: 50, gy: 50, active: false })

  return (
    <div className="[perspective:800px]">
      <div
        ref={ref}
        onPointerMove={onMove}
        onPointerLeave={reset}
        className="portrait-tilt relative"
        style={{
          transform: `rotateX(${style.rx}deg) rotateY(${style.ry}deg) scale(${style.active ? 1.04 : 1})`,
        }}
      >
        {children}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-1.5 rounded-full transition-opacity duration-300"
          style={{
            opacity: style.active ? 1 : 0,
            background: `radial-gradient(circle at ${style.gx}% ${style.gy}%, rgba(255,255,255,0.28), transparent 55%)`,
          }}
        />
        <span
          aria-hidden="true"
          className={`portrait-wave absolute -top-1 -right-1 text-4xl ${style.active ? 'is-waving' : ''}`}
        >
          👋🏿
        </span>
      </div>
    </div>
  )
}

export default PortraitTilt
