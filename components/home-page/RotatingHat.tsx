'use client'

import { useEffect, useState } from 'react'

const HATS = [
  'Maintainer 🛠️',
  'Contributor 🌱',
  'Program Manager 📋',
  'Documentation Writer ✍️',
  'Community Advocate 📣',
  'Mentor 🤝',
  'Conference Organizer 🎤',
  'occasional data person 📊',
]

const TYPE_MS = 70
const DELETE_MS = 35
const HOLD_MS = 1600

// Typewriter that cycles through the hats I wear. With reduced motion it just
// swaps the word every few seconds instead of typing it out.
const RotatingHat = () => {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState(HATS[0])
  const [deleting, setDeleting] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    setReduceMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  }, [])

  useEffect(() => {
    const word = HATS[index]

    if (reduceMotion) {
      const t = setTimeout(() => {
        const next = (index + 1) % HATS.length
        setIndex(next)
        setText(HATS[next])
      }, HOLD_MS * 2)
      return () => clearTimeout(t)
    }

    let t: ReturnType<typeof setTimeout>
    if (!deleting && text === word) {
      t = setTimeout(() => setDeleting(true), HOLD_MS)
    } else if (deleting && text === '') {
      setDeleting(false)
      setIndex((i) => (i + 1) % HATS.length)
    } else {
      // Array.from keeps emoji intact instead of slicing them in half.
      const chars = Array.from(word)
      const current = Array.from(text)
      t = setTimeout(
        () =>
          setText(
            deleting ? current.slice(0, -1).join('') : chars.slice(0, current.length + 1).join('')
          ),
        deleting ? DELETE_MS : TYPE_MS
      )
    }
    return () => clearTimeout(t)
  }, [text, deleting, index, reduceMotion])

  return (
    <p className="text-lg text-gray-700 md:text-xl dark:text-gray-300">
      Today&apos;s hat:{' '}
      <span className="text-primary-500 dark:text-primary-400 font-semibold">
        <span aria-hidden="true">{text}</span>
        <span className="typewriter-caret" aria-hidden="true" />
        <span className="sr-only">
          Maintainer, Contributor, Program Manager, Documentation Writer, Community Advocate,
          Mentor, Conference Organizer, and occasional data person
        </span>
      </span>
    </p>
  )
}

export default RotatingHat
