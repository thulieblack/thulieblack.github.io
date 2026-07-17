'use client'

import { useEffect, useRef } from 'react'
import { useTheme } from 'next-themes'

type Node = { x: number; y: number; vx: number; vy: number; r: number }

const NODE_COUNT = 28
const LINK_DISTANCE = 140
const REPEL_RADIUS = 90

// Ambient node-graph behind the hero eyebrow line — a nod to the site's
// community-building theme. Purely decorative (aria-hidden), so it stays
// static when prefers-reduced-motion is set instead of animating forever.
const CommunityGraph = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const dpr = window.devicePixelRatio || 1
    let width = 0
    let height = 0
    let nodes: Node[] = []
    const mouse = { x: -9999, y: -9999 }

    const isDark = resolvedTheme === 'dark'
    const nodeColor = isDark ? 'rgba(240,180,41,0.55)' : 'rgba(184,121,10,0.45)'
    const lineColor = isDark ? 'rgba(127,166,189,0.18)' : 'rgba(47,74,92,0.14)'

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      width = canvas.width = rect.width * dpr
      height = canvas.height = rect.height * dpr
    }

    const seed = () => {
      nodes = Array.from({ length: NODE_COUNT }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18 * dpr,
        vy: (Math.random() - 0.5) * 0.18 * dpr,
        r: (Math.random() * 1.6 + 1) * dpr,
      }))
    }

    const drawStatic = () => {
      ctx.clearRect(0, 0, width, height)
      ctx.fillStyle = nodeColor
      for (const n of nodes) {
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    let raf = 0
    const frame = () => {
      ctx.clearRect(0, 0, width, height)
      for (const n of nodes) {
        n.x += n.vx
        n.y += n.vy
        if (n.x < 0 || n.x > width) n.vx *= -1
        if (n.y < 0 || n.y > height) n.vy *= -1
        const dx = mouse.x - n.x
        const dy = mouse.y - n.y
        if (dx * dx + dy * dy < REPEL_RADIUS * REPEL_RADIUS * dpr) {
          n.x -= dx * 0.01
          n.y -= dy * 0.01
        }
      }
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]
          const b = nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          const max = LINK_DISTANCE * dpr
          if (dist < max) {
            ctx.strokeStyle = lineColor
            ctx.globalAlpha = 1 - dist / max
            ctx.lineWidth = dpr
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }
      ctx.globalAlpha = 1
      ctx.fillStyle = nodeColor
      for (const n of nodes) {
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fill()
      }
      raf = requestAnimationFrame(frame)
    }

    const onPointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = (e.clientX - rect.left) * dpr
      mouse.y = (e.clientY - rect.top) * dpr
    }
    const onPointerLeave = () => {
      mouse.x = -9999
      mouse.y = -9999
    }
    const onResize = () => {
      resize()
      seed()
      if (reduceMotion) drawStatic()
    }

    resize()
    seed()
    canvas.addEventListener('pointermove', onPointerMove)
    canvas.addEventListener('pointerleave', onPointerLeave)
    window.addEventListener('resize', onResize)

    if (reduceMotion) {
      drawStatic()
    } else {
      raf = requestAnimationFrame(frame)
    }

    return () => {
      cancelAnimationFrame(raf)
      canvas.removeEventListener('pointermove', onPointerMove)
      canvas.removeEventListener('pointerleave', onPointerLeave)
      window.removeEventListener('resize', onResize)
    }
  }, [resolvedTheme])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-auto absolute inset-0 h-full w-full opacity-60"
    />
  )
}

export default CommunityGraph
