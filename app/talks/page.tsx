import talksData from '@/data/talksData'
import TalksGrid from '@/components/talks/TalksGrid'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Talks' })

export default function TalksPage() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="font-serif text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            Talks
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Conferences, meetups, and events I&apos;ve spoken at.
          </p>
        </div>
        <div className="py-12">
          <TalksGrid talks={talksData} />
        </div>
      </div>
    </>
  )
}
