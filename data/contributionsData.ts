export interface ContributionItem {
  label: string
  docsHref?: string // the live page this work produced, if any
  href?: string // the pull request (or other GitHub link)
  hrefLabel?: string // text for that link; defaults to 'PR'
  date?: string // ISO date the PR was merged
}

export interface ContributionGroup {
  title: string
  repo: string // owner/name, shown under the title
  repoHref: string
  summary: string
  links?: { label: string; href: string }[] // live docs pages for the whole group
  items: ContributionItem[]
}

// Highlights of my merged pull requests. To add one, append to the relevant group's items.
const contributionsData: ContributionGroup[] = [
  {
    title: 'Open Source in Energy Access (EnAccess)',
    repo: 'EnAccess',
    repoHref: 'https://github.com/EnAccess',
    summary:
      'Built the OSEA community from the ground up: launched its website, wrote its governance docs, created the Ambassador Program, and grew the Discord community by 265% from 200 members.',
    links: [
      { label: 'OSEA Community', href: 'https://osea-community.org/' },
      { label: 'Ambassadors', href: 'https://osea-community.org/ambassadors/' },
    ],
    items: [
      {
        label: 'Built and launched the OSEA Community website',
        href: 'https://osea-community.org/',
      },
      {
        label: 'Wrote the Code of Conduct and Contribution Guide',
        href: 'https://github.com/EnAccess/enaccess-repo-tf/pull/1',
      },
      {
        label: 'Created and lead the OSEA Ambassador Program',
        href: 'https://osea-community.org/ambassadors/',
      },
      {
        label: 'Blog: MicroPowerManager roadmap for off-grid energy',
        href: 'https://enaccess.org/micro-power-manager-roadmap-off-grid-energy/',
      },
      {
        label: 'Blog: Community showcase with Aaron Tushabe',
        href: 'https://enaccess.org/open-source-energy-access-community-showcase-with-aaron-tushabe/',
      },
    ],
  },
  {
    title: 'AsyncAPI Documentation',
    repo: 'asyncapi/website',
    repoHref: 'https://github.com/asyncapi/website',
    summary:
      'Led the completion of the AsyncAPI Style Guide and review contributor work against it. Wrote core concept docs that explain the building blocks of AsyncAPI to newcomers.',
    links: [
      { label: 'Style Guide', href: 'https://www.asyncapi.com/docs/community/011-styleguide' },
      { label: 'Concepts docs', href: 'https://www.asyncapi.com/docs/concepts' },
    ],
    items: [
      {
        label: 'Led the AsyncAPI Style Guide to completion and reviewed contributor work',
        href: 'https://github.com/asyncapi/community/issues?q=is%3Aissue+state%3Aclosed+style+guide',
      },
      {
        label: 'Server concepts doc',
        docsHref: 'https://www.asyncapi.com/docs/concepts/server',
        href: 'https://github.com/asyncapi/website/pull/807',
        date: '2022-09-19',
      },
      {
        label: 'Channel concepts doc',
        docsHref: 'https://www.asyncapi.com/docs/concepts/channel',
        href: 'https://github.com/asyncapi/website/pull/1007',
        date: '2022-10-26',
      },
      {
        label: 'Message concepts doc',
        docsHref: 'https://www.asyncapi.com/docs/concepts/message',
        href: 'https://github.com/asyncapi/website/pull/944',
        date: '2022-11-09',
      },
      {
        label: 'Update the ADEO case study to AsyncAPI v3',
        href: 'https://github.com/asyncapi/website/pull/4221',
        date: '2025-07-07',
      },
    ],
  },
  {
    title: 'AsyncAPI Generator',
    repo: 'asyncapi/generator',
    repoHref: 'https://github.com/asyncapi/generator',
    summary:
      'Contributed to the Python client template and the test setup of the tool that turns AsyncAPI documents into code and docs.',
    items: [
      {
        label: 'Add a README for the Python client',
        href: 'https://github.com/asyncapi/generator/pull/1725',
        date: '2025-12-11',
      },
      {
        label: 'Add tests for the Python constructor',
        href: 'https://github.com/asyncapi/generator/pull/1555',
        date: '2025-05-21',
      },
      {
        label: 'Make component tests check the rendered output',
        href: 'https://github.com/asyncapi/generator/pull/1511',
        date: '2025-04-23',
      },
      {
        label: 'Move fixtures to the test folder',
        href: 'https://github.com/asyncapi/generator/pull/1499',
        date: '2025-04-16',
      },
    ],
  },
  {
    title: 'Python MQTT Client Template',
    repo: 'derberg/python-mqtt-client-template',
    repoHref: 'https://github.com/derberg/python-mqtt-client-template',
    summary: 'Added features to an AsyncAPI template that generates a Python MQTT client.',
    items: [
      {
        label: 'Support the receive operation',
        href: 'https://github.com/derberg/python-mqtt-client-template/pull/12',
        date: '2024-02-27',
      },
      {
        label: 'Add docstrings to the functions',
        href: 'https://github.com/derberg/python-mqtt-client-template/pull/15',
        date: '2024-04-02',
      },
      {
        label: 'Add a requirements.txt file',
        href: 'https://github.com/derberg/python-mqtt-client-template/pull/10',
        date: '2023-08-01',
      },
    ],
  },
  {
    title: 'AsyncAPI Blog',
    repo: 'asyncapi/website',
    repoHref: 'https://github.com/asyncapi/website',
    summary:
      'Write the regular community summaries and annual reviews that keep the community up to date, since 2023.',
    items: [
      {
        label: 'October 2026 community summary',
        href: 'https://github.com/asyncapi/website/pull/5885',
        date: '2026-11-04',
      },
      {
        label: 'Code of Conduct incident report',
        href: 'https://github.com/asyncapi/website/pull/4148',
        date: '2025-07-28',
      },
      {
        label: 'Annual review',
        href: 'https://github.com/asyncapi/website/pull/2549',
        date: '2024-01-29',
      },
    ],
  },
]

export default contributionsData
