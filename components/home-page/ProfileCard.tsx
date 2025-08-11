// filepath: c:\Users\siban\Local Repos\tailwind-nextjs-starter-blog\components\home-page\ProfileCard.tsx
'use client'

const ProfileCard = () => {
  return (
    <div className="mb-8">
      <div className="rounded-lg border border-gray-200 bg-white p-8 transition-all duration-300 ease-in-out hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
        {/* Text Content Only */}
        <div className="text-center">
          <div className="space-y-6">
            {/* Greeting */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl dark:text-gray-100">
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
              working on. Please feel free to reach out to me💜!
              <br />
              <span className="font-bold">👑Yēšūaʿ (Yeshua) IS LORD!👑</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
