import tagData from 'app/tag-data.json'
import Tag from '@/components/Tag'

// Roles alongside the real blog tags — plain text, not linked, since there's
// no /tags page behind them the way there is for actual post tags.
const roles = [
  'Maintainer',
  'Contributor',
  'Program Manager',
  'Documentation Writer',
  'Community Advocate',
  'Community Builder',
  'Governance',
  'Developer',
]

// Real tags excluded from the marquee display (still fully valid /tags pages,
// just not shown in this particular scroll).
const excludedTags = ['community', 'community-management']

const TagMarquee = () => {
  const tags = Object.keys(tagData).filter((t) => !excludedTags.includes(t))
  if (!tags.length) return null

  const items = [
    ...tags.map((text) => ({ text, isTag: true })),
    ...roles.map((text) => ({ text, isTag: false })),
  ]
  const loop = [...items, ...items]

  return (
    <div className="group my-8 overflow-hidden border-y border-gray-200 py-3 dark:border-gray-700">
      <div className="marquee-track flex w-max gap-2 group-hover:[animation-play-state:paused]">
        {loop.map((item, i) =>
          item.isTag ? (
            <Tag key={`${item.text}-${i}`} text={item.text} />
          ) : (
            <span
              key={`${item.text}-${i}`}
              className="text-primary-500 dark:text-primary-400 mr-3 text-sm font-medium uppercase"
            >
              {item.text}
            </span>
          )
        )}
      </div>
    </div>
  )
}

export default TagMarquee
