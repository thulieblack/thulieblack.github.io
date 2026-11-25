import Image from './Image'
import Link from './Link'

interface CardProps {
  title: string
  description: string
  imgSrc?: string
  href?: string
  role?: string
  contributions?: string[]
}

const Card = ({ title, description, imgSrc, href, role, contributions }: CardProps) => (
  <div className="md max-w-[544px] p-4 md:w-1/2">
    <div
      className={`${
        imgSrc && 'h-full'
      } fun-card overflow-hidden rounded-lg border-2 border-gray-200/60 bg-white dark:border-gray-700/60 dark:bg-gray-800`}
    >
      {imgSrc &&
        (href ? (
          <Link href={href} aria-label={`Link to ${title}`}>
            <Image
              alt={title}
              src={imgSrc}
              className="object-cover object-center md:h-36 lg:h-48"
              width={544}
              height={306}
            />
          </Link>
        ) : (
          <Image
            alt={title}
            src={imgSrc}
            className="object-cover object-center md:h-36 lg:h-48"
            width={544}
            height={306}
          />
        ))}
      <div className="p-6">
        {role && (
          <p className="text-primary-500 dark:text-primary-400 mb-2 text-xs font-semibold tracking-wide uppercase">
            {role}
          </p>
        )}
        <h2 className="mb-3 text-2xl leading-8 font-bold tracking-tight">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
        {contributions && contributions.length > 0 && (
          <ul className="mb-4 list-disc space-y-1 pl-5 text-sm text-gray-600 dark:text-gray-300">
            {contributions.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        )}
        {href && (
          <Link
            href={href}
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 text-base leading-6 font-medium"
            aria-label={`Link to ${title}`}
          >
            Learn more &rarr;
          </Link>
        )}
      </div>
    </div>
  </div>
)

export default Card
