import contributionsData from '@/data/contributionsData'
import Link from '@/components/Link'
import Reveal from '@/components/Reveal'

const MAX_GROUPS = 2

const OpenSourceHighlights = () => (
  <section className="mb-12">
    <div className="mb-6 flex items-baseline justify-between">
      <h2 className="font-serif text-2xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-gray-100">
        Open Source
      </h2>
      <Link
        href="/projects"
        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 font-medium"
      >
        See all &rarr;
      </Link>
    </div>
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      {contributionsData.slice(0, MAX_GROUPS).map((group, i) => (
        <Reveal key={group.title} delay={i * 120}>
          <div className="fun-card h-full rounded-lg border-2 border-gray-200/60 bg-white p-5 dark:border-gray-700/60 dark:bg-gray-800">
            <h3 className="font-serif text-lg leading-snug font-bold text-gray-900 dark:text-gray-100">
              {group.title}
            </h3>
            <Link
              href={group.repoHref}
              className="text-primary-500 dark:text-primary-400 text-xs font-semibold"
            >
              {group.repo}
            </Link>
            <p className="mt-2 mb-3 text-sm text-gray-600 dark:text-gray-300">{group.summary}</p>
            <ul className="list-disc space-y-1 pl-5 text-sm">
              {group.items.slice(0, 2).map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.docsHref ?? item.href ?? group.repoHref}
                    className="hover:text-primary-500 text-gray-800 underline decoration-gray-300 underline-offset-2 dark:text-gray-200 dark:decoration-gray-600"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </div>
  </section>
)

export default OpenSourceHighlights
