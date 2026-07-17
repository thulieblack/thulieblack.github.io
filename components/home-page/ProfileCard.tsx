// filepath: c:\Users\siban\Local Repos\tailwind-nextjs-starter-blog\components\home-page\ProfileCard.tsx
'use client'

import Image from '@/components/Image'

const ProfileCard = () => {
  return (
    <div className="mb-8">
      <div className="relative overflow-hidden rounded-lg border border-gray-200 bg-white p-8 transition-all duration-300 ease-in-out hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
        {/* A ghostly, full-size version of my photo on the left side of the card — just for fun, not meant to be too visible */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-0 opacity-[0.16] grayscale dark:opacity-[0.12]">
          <Image
            src="/static/images/avatar.png"
            alt=""
            width={1200}
            height={1280}
            className="h-full w-auto object-contain"
          />
        </div>
        {/* Text Content Only */}
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

            {/* Short Description */}
            <p className="text-lg leading-relaxed text-gray-700 md:text-xl dark:text-gray-300">
              I am an open-source fanatic, a community builder, a technical writer, and a Python
              programmer. Here, you will find my articles and what I have done and am currently
              working on. Please feel free to reach out to me
              <span className="emoji-wiggle">💜</span>!
              <br />
              <span className="font-bold">
                <span className="emoji-wiggle">👑</span>Yēšūaʿ (Yeshua) IS LORD!
                <span className="emoji-wiggle">👑</span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
