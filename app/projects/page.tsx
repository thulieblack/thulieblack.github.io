import projectsData from '@/data/projectsData'
import contributionsData from '@/data/contributionsData'
import mentorshipsData from '@/data/mentorshipsData'
import Card from '@/components/Card'
import Link from '@/components/Link'
import Reveal from '@/components/Reveal'
import { formatDate } from 'pliny/utils/formatDate'
import siteMetadata from '@/data/siteMetadata'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Open Source Work' })

const sections = [
  { id: 'maintain', label: 'Projects I Maintain' },
  { id: 'contributions', label: 'Contributions' },
  { id: 'mentorships', label: 'Mentorships' },
]

export default function OpenSourceWork() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="font-serif text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            Open Source Work
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            The projects I maintain, the contributions I've made, and the people I've mentored along
            the way.
          </p>
          <nav aria-label="On this page" className="flex flex-wrap items-center gap-2 pt-2">
            <span className="mr-1 text-sm font-semibold tracking-wide text-gray-500 uppercase dark:text-gray-400">
              On this page:
            </span>
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="hover:border-primary-500 hover:text-primary-500 rounded-full border border-gray-300 px-4 py-1.5 text-sm font-medium text-gray-700 transition-colors dark:border-gray-600 dark:text-gray-200"
              >
                {s.label}
              </a>
            ))}
          </nav>
        </div>

        <section id="maintain" className="scroll-mt-24 py-12">
          <h2 className="mb-6 font-serif text-2xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-gray-100">
            Projects I Maintain
          </h2>
          <div className="container">
            <div className="-m-4 flex flex-wrap">
              {projectsData.map((d) => (
                <Card
                  key={d.title}
                  title={d.title}
                  description={d.description}
                  imgSrc={d.imgSrc}
                  role={d.role}
                  contributions={d.contributions}
                  href={d.href}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="contributions" className="scroll-mt-24 py-12">
          <h2 className="mb-2 font-serif text-2xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-gray-100">
            Contributions
          </h2>
          <p className="mb-8 text-gray-500 dark:text-gray-400">
            Highlights from my work across docs, code generation, MQTT tooling, and community
            building, with links to the live pages and pull requests.
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {contributionsData.map((group, i) => (
              <Reveal key={group.title} delay={(i % 2) * 120}>
                <div className="fun-card h-full rounded-lg border-2 border-gray-200/60 bg-white p-6 dark:border-gray-700/60 dark:bg-gray-800">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                    {group.title}
                  </h3>
                  <Link
                    href={group.repoHref}
                    className="text-primary-500 hover:text-primary-600 dark:text-primary-400 text-sm font-medium"
                  >
                    {group.repo}
                  </Link>
                  <p className="mt-3 mb-4 text-gray-600 dark:text-gray-300">{group.summary}</p>
                  {group.links && (
                    <div className="mb-4 flex flex-wrap gap-2">
                      {group.links.map((l) => (
                        <Link
                          key={l.href}
                          href={l.href}
                          className="border-primary-500 text-primary-500 hover:bg-primary-500 dark:text-primary-400 rounded-full border px-3 py-1 text-xs font-semibold transition-colors hover:text-white"
                        >
                          {l.label} &rarr;
                        </Link>
                      ))}
                    </div>
                  )}
                  <ul className="space-y-2">
                    {group.items.map((item) => (
                      <li key={item.label} className="flex items-baseline justify-between gap-4">
                        <span className="text-sm">
                          <Link
                            href={item.docsHref ?? item.href ?? group.repoHref}
                            className="hover:text-primary-500 text-gray-800 underline decoration-gray-300 underline-offset-2 dark:text-gray-200 dark:decoration-gray-600"
                          >
                            {item.label}
                          </Link>
                          {item.docsHref && item.href && (
                            <Link
                              href={item.href}
                              className="hover:text-primary-500 ml-2 text-xs text-gray-500 dark:text-gray-400"
                            >
                              ({item.hrefLabel ?? 'PR'})
                            </Link>
                          )}
                        </span>
                        {item.date && (
                          <span className="shrink-0 text-xs text-gray-500 dark:text-gray-400">
                            {formatDate(item.date, siteMetadata.locale)}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="mentorships" className="scroll-mt-24 py-12">
          <h2 className="mb-2 font-serif text-2xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-gray-100">
            Mentorships
          </h2>
          <p className="mb-8 text-gray-500 dark:text-gray-400">
            Programs where I've mentored new contributors into Open Source.
          </p>
          <div className="space-y-6">
            {mentorshipsData.map((m) => (
              <Reveal key={`${m.program}-${m.year}`}>
                <div className="fun-card rounded-lg border-2 border-gray-200/60 bg-white p-6 dark:border-gray-700/60 dark:bg-gray-800">
                  <p className="text-primary-500 dark:text-primary-400 text-xs font-semibold tracking-wide uppercase">
                    {m.role} · {m.year}
                    {m.organization ? ` · ${m.organization}` : ''}
                  </p>
                  <h3 className="mt-1 text-xl font-bold text-gray-900 dark:text-gray-100">
                    {m.program}
                  </h3>
                  <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                    {m.projects.map((p) => (
                      <div key={p.title}>
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                          {p.href ? (
                            <Link href={p.href} className="hover:text-primary-500">
                              {p.title}
                            </Link>
                          ) : (
                            p.title
                          )}
                        </h4>
                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                          {p.description}
                        </p>
                        {p.results?.map((r) => (
                          <Link
                            key={r.href}
                            href={r.href}
                            className="text-primary-500 hover:text-primary-600 dark:text-primary-400 mt-2 mr-4 inline-block text-sm font-medium"
                          >
                            {r.label} &rarr;
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}
