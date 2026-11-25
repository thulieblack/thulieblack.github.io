'use client'

import Image from '@/components/Image'
import Link from '@/components/Link'
import RotatingHat from './RotatingHat'

const ProfileCard = () => {
  return (
    <div className="mb-8">
      <div className="relative overflow-hidden rounded-lg border border-gray-200 bg-white p-8 transition-all duration-300 ease-in-out hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
        {/* A ghostly, full-size version of my photo on the left side of the card — just for fun, not meant to be too visible */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-0 opacity-[0.16] grayscale dark:opacity-[0.30]">
          <Image
            src="/static/images/avatar.png"
            alt=""
            width={1200}
            height={1280}
            className="h-full w-auto object-contain"
          />
        </div>
        <div className="relative z-10 text-center">
          <div className="space-y-6">
            {/* Greeting */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl dark:text-gray-100">
                Welcome! I'm Thulisile
              </h2>
              <p className="text-primary-500 dark:text-primary-400 mt-2 text-lg md:text-xl">
                [pronounced To-lee-c-leh] or Thulie in short
              </p>
            </div>

            <RotatingHat />

            {/* Short Description */}
            <div className="space-y-4 text-lg leading-relaxed text-gray-700 md:text-xl dark:text-gray-300">
              <p>
                I build and support Open Source programs and communities, the kind where
                contributors feel welcome, documentation makes sense, and people want to stick
                around.
              </p>
              <p>
                I wear many hats: Maintainer, Contributor, Program Manager, Documentation Writer,
                Community Advocate, and occasional data person. What ties it all together? Helping
                people do their best work in Open Source. Feel free to reach out{' '}
                <span className="emoji-wiggle">💜</span>!
              </p>
              <p className="font-bold">
                <span className="emoji-wiggle">👑</span>Yēšūaʿ (Yeshua) IS LORD!
                <span className="emoji-wiggle">👑</span>
              </p>
            </div>

            {/* Calls to action */}
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/talks"
                className="hover:border-primary-500 hover:text-primary-500 rounded-full border border-gray-300 px-5 py-2 text-sm font-semibold text-gray-700 transition-colors dark:border-gray-600 dark:text-gray-200"
              >
                Conference Talks
              </Link>
              <Link
                href="/projects"
                className="hover:border-primary-500 hover:text-primary-500 rounded-full border border-gray-300 px-5 py-2 text-sm font-semibold text-gray-700 transition-colors dark:border-gray-600 dark:text-gray-200"
              >
                Open Source
              </Link>
              <Link
                href="/about"
                className="hover:border-primary-500 hover:text-primary-500 rounded-full border border-gray-300 px-5 py-2 text-sm font-semibold text-gray-700 transition-colors dark:border-gray-600 dark:text-gray-200"
              >
                About Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
