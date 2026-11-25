export interface MentorshipProject {
  title: string
  description: string
  href?: string // the project repo
  results?: { label: string; href: string }[] // what the project produced
}

export interface Mentorship {
  program: string
  year: number
  role: string
  organization?: string
  projects: MentorshipProject[]
}

const mentorshipsData: Mentorship[] = [
  {
    program: 'Google Summer of Code',
    year: 2024,
    role: 'Mentor',
    organization: 'Postman',
    projects: [
      {
        title: 'AsyncAPI Conference Website',
        description: 'Mentored a contributor working on the AsyncAPI Conference Website.',
        href: 'https://github.com/asyncapi/conference-website',
      },
    ],
  },
  {
    program: 'AsyncAPI Mentorship Program',
    year: 2024,
    role: 'Mentor',
    organization: 'AsyncAPI Initiative',
    projects: [
      {
        title: 'Onboarding Contributor Guides',
        description:
          'Clear, structured onboarding guides, with written docs and video tutorials, so new contributors can find their way into the project quickly.',
        href: 'https://github.com/asyncapi/generator',
        results: [
          {
            label: 'Onboarding guide',
            href: 'https://www.asyncapi.com/docs/community/000-onboarding',
          },
        ],
      },
      {
        title: 'Expand AsyncAPI Community Docs',
        description:
          'Community documentation covering contribution flows, Git workflows, maintainership, ambassadors, and governance.',
        href: 'https://github.com/asyncapi/community',
        results: [
          {
            label: 'Community docs',
            href: 'https://www.asyncapi.com/docs/community',
          },
        ],
      },
    ],
  },
]

export default mentorshipsData
