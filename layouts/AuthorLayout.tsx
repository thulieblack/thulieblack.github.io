import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import siteMetadata from '@/data/siteMetadata'
import PortraitTilt from '@/components/about/PortraitTilt'

// The About page uses its own portrait; `avatar` (frontmatter) stays the
// small photo used elsewhere on the site, such as on blog posts.
const ABOUT_PORTRAIT = '/static/images/about-portrait.webp'

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

export default function AuthorLayout({ children, content }: Props) {
  const { name, email, bluesky, linkedin, github } = content

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="font-serif text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:space-y-0 xl:gap-x-8">
          <div className="flex flex-col items-center pt-8 xl:sticky xl:top-28">
            <PortraitTilt>
              <div className="avatar-halo">
                <div className="rounded-full bg-gray-50 p-1.5 dark:bg-gray-900">
                  <Image
                    src={ABOUT_PORTRAIT}
                    alt={`Portrait of ${name}`}
                    width={448}
                    height={448}
                    className="h-56 w-56 rounded-full object-cover object-[50%_30%]"
                  />
                </div>
              </div>
            </PortraitTilt>
            <h3 className="pt-4 pb-2 text-2xl leading-8 font-bold tracking-tight">{name}</h3>
            <div className="flex space-x-3 pt-6">
              <SocialIcon kind="mail" href={`mailto:${email}`} />
              <SocialIcon kind="github" href={github} />
              <SocialIcon kind="linkedin" href={linkedin} />
              <SocialIcon kind="bluesky" href={bluesky} />
              <SocialIcon kind="youtube" href={siteMetadata.youtube} />
              <SocialIcon kind="medium" href={siteMetadata.medium} />
            </div>
          </div>
          <div className="prose dark:prose-invert max-w-none pt-8 pb-8 xl:col-span-2">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
