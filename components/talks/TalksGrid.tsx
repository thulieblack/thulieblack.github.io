'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { formatDate } from 'pliny/utils/formatDate'
import siteMetadata from '@/data/siteMetadata'
import Image from '@/components/Image'
import Link from '@/components/Link'
import type { Talk } from '@/data/talksData'

const formatTalkMeta = (talk: Talk) =>
  `${formatDate(talk.date, siteMetadata.locale)}${talk.location ? ` • ${talk.location}` : ''}`

const yearFilterButtonClass = (isActive: boolean) =>
  `rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
    isActive
      ? 'border-primary-500 bg-primary-500 text-white'
      : 'hover:border-primary-500 hover:text-primary-500 border-gray-300 text-gray-600 dark:border-gray-700 dark:text-gray-300'
  }`

const TalksGrid = ({ talks }: { talks: Talk[] }) => {
  const [activeYear, setActiveYear] = useState<number | 'all'>('all')
  const [active, setActive] = useState<Talk | null>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)

  const years = useMemo(
    () =>
      Array.from(new Set(talks.map((t) => new Date(t.date).getFullYear()))).sort((a, b) => b - a),
    [talks]
  )

  const visible = useMemo(
    () =>
      activeYear === 'all'
        ? talks
        : talks.filter((t) => new Date(t.date).getFullYear() === activeYear),
    [talks, activeYear]
  )

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (active) {
      if (!dialog.open) dialog.showModal()
    } else if (dialog.open) {
      dialog.close()
    }
  }, [active])

  if (!talks.length) {
    return (
      <div className="rounded-lg border border-dashed border-gray-300 p-12 text-center text-gray-500 dark:border-gray-700 dark:text-gray-400">
        No talks published yet — check back soon.
      </div>
    )
  }

  return (
    <div>
      {years.length > 1 && (
        <div className="mb-8 flex flex-wrap gap-2">
          <button
            onClick={() => setActiveYear('all')}
            className={yearFilterButtonClass(activeYear === 'all')}
          >
            All
          </button>
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setActiveYear(year)}
              className={yearFilterButtonClass(activeYear === year)}
            >
              {year}
            </button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((talk) => (
          <button
            key={`${talk.title}-${talk.date}`}
            onClick={() => setActive(talk)}
            className="group overflow-hidden rounded-lg border-2 border-gray-200/60 bg-white text-left transition-all duration-300 ease-in-out hover:shadow-xl dark:border-gray-700/60 dark:bg-gray-800"
          >
            <div className="aspect-video w-full overflow-hidden bg-gray-100 dark:bg-gray-900">
              <Image
                src={talk.imgSrc}
                alt={talk.title}
                width={640}
                height={360}
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />
            </div>
            <div className="p-5">
              <p className="text-primary-500 dark:text-primary-400 text-xs font-semibold tracking-wide uppercase">
                {talk.event}
              </p>
              <h3 className="mt-1 font-serif text-xl font-bold text-gray-900 dark:text-gray-100">
                {talk.title}
              </h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                {formatTalkMeta(talk)}
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions -- native <dialog> already closes on Escape via showModal(); this only adds click-outside-to-dismiss */}
      <dialog
        ref={dialogRef}
        onClick={(e) => {
          if (e.target === dialogRef.current) setActive(null)
        }}
        onClose={() => setActive(null)}
        className="fixed top-1/2 left-1/2 max-h-[85vh] w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-lg bg-white p-0 backdrop:bg-black/70 dark:bg-gray-800"
      >
        {active && (
          <div className="relative">
            <button
              onClick={() => setActive(null)}
              aria-label="Close"
              className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-lg text-white transition hover:bg-black/80"
            >
              &times;
            </button>
            <Image
              src={active.imgSrc}
              alt={active.title}
              width={800}
              height={800}
              className="max-h-[50vh] w-full bg-gray-100 object-contain dark:bg-gray-900"
            />
            <div className="p-6">
              <p className="text-primary-500 dark:text-primary-400 text-xs font-semibold tracking-wide uppercase">
                {active.event}
              </p>
              <h3 className="mt-1 font-serif text-2xl font-bold text-gray-900 dark:text-gray-100">
                {active.title}
              </h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                {formatTalkMeta(active)}
              </p>
              <p className="mt-4 text-gray-700 dark:text-gray-300">{active.description}</p>
              {active.href && (
                <Link
                  href={active.href}
                  className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 mt-4 inline-block font-medium"
                >
                  Watch or view slides &rarr;
                </Link>
              )}
            </div>
          </div>
        )}
      </dialog>
    </div>
  )
}

export default TalksGrid
