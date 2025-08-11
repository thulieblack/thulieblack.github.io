'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

const Sun = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="h-5 w-5 transition-all duration-300"
  >
    <path
      fillRule="evenodd"
      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
      clipRule="evenodd"
    />
  </svg>
)

const Moon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="h-5 w-5 transition-all duration-300"
  >
    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
  </svg>
)

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  const toggleTheme = () => {
    if (resolvedTheme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  if (!mounted) {
    return <div className="h-6 w-12 animate-pulse rounded-full bg-blue-200 dark:bg-blue-600"></div>
  }

  return (
    <button
      onClick={toggleTheme}
      className="focus:ring-primary-500 relative inline-flex h-6 w-12 items-center rounded-full bg-blue-200 transition-colors duration-300 ease-in-out focus:ring-2 focus:ring-offset-2 focus:outline-none dark:bg-blue-600"
      aria-label={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {/* Toggle circle */}
      <span
        className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-lg transition-transform duration-300 ease-in-out ${
          resolvedTheme === 'dark' ? 'translate-x-6' : 'translate-x-0.5'
        }`}
      >
        {/* Icon inside the toggle circle */}
        <span className="flex h-full w-full items-center justify-center text-gray-500">
          {resolvedTheme === 'dark' ? <Moon /> : <Sun />}
        </span>
      </span>
    </button>
  )
}

export default ThemeSwitch
