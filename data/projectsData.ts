export interface Project {
  title: string
  role: string // my role on the project, shown as a badge
  description: string
  contributions?: string[] // what I personally did — keep these concrete
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'AsyncAPI Community',
    role: 'Maintainer · Senior Community Manager',
    description: `The central hub for AsyncAPI's community documentation, onboarding, governance, and charter. I maintain it and use it to make the community easier to join and to keep running.`,
    contributions: [
      'Built a community documentation process from scratch, from auditing where knowledge lived to recording decisions',
      'Formed a working group so ownership of the docs is shared, not held by a few people',
      'Set up triage and mentorship pathways so new contributors can actually get started',
      'Help shape governance as a member of the Technical Steering Committee',
    ],
    imgSrc: '/static/images/banner-community.png',
    href: 'https://github.com/asyncapi/community',
  },
  {
    title: 'AsyncAPI Conference',
    role: 'Organizer · Maintainer',
    description: `I organize AsyncAPI Conf, which brings together AsyncAPI enthusiasts and experts from around the world, and I maintain the conference website from idea to launch.`,
    contributions: [
      'Organize the AsyncAPI Conf series and spoke at the AsyncAPI Conference at FOST London 2026',
      "Shared the conference's journey from side project to industry standard at DeveloperWeek 2026",
      'Maintain the conference website that runs schedules, speakers, and calls for papers',
    ],
    imgSrc: '/static/images/banner-community.png',
    href: 'https://github.com/asyncapi/conference-website',
  },
  {
    title: 'AsyncAPI Website',
    role: 'Maintainer · Docs & Blog',
    description: `The official AsyncAPI website, home to the specification docs, guides, and community blog. I maintain its documentation and blog content.`,
    contributions: [
      'Maintain the documentation so it stays accurate and approachable for new users',
      'Review and publish blog posts from the community',
    ],
    imgSrc: '/static/images/banner-community.png',
    href: 'https://github.com/asyncapi/website',
  },
]

export default projectsData
