import { ReactNode } from 'react'

export default function Callout({ children }: { children: ReactNode }) {
  return (
    <blockquote className="border-primary-500 bg-primary-50 dark:bg-primary-950/20 my-6 rounded-r-md border-l-4 px-5 py-4 text-gray-800 italic dark:text-gray-200">
      {children}
    </blockquote>
  )
}
