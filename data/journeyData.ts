export interface Role {
  organization: string
  title: string
  period: string
  points: string[]
}

// Work experience from my resume, newest first. Talks, mentorships, and
// individual contributions live on their own pages, so they aren't repeated here.
const journeyData: Role[] = [
  {
    organization: 'AsyncAPI Initiative',
    title: 'Senior Community Manager',
    period: 'Feb 2023 – Present',
    points: [
      'Lead the global community strategy, connecting community growth with developer adoption and contributor engagement',
      'Scale and manage a global developer community, using engagement analytics and community-health signals',
      'Shortened contributor onboarding through better documentation, information architecture, and onboarding resources',
      'Define and run annual community goals across 6+ programs, and build pathways from contributor to maintainer and leader',
      'Own the community content strategy across blogs, newsletters, and community communications',
    ],
  },
  {
    organization: 'EnAccess Foundation',
    title: 'Community Manager Consultant (Part-time)',
    period: 'Mar 2025 – Present',
    points: [
      'Develop the community strategy for Open Source in Energy Access, engaging practitioners, researchers, and developers across regions',
      'Grew the Discord community by 265% from 200 members, through recurring virtual community programs',
      'Built and launched the OSEA Community website (osea-community.org) as the home for the community',
      'Created and lead the OSEA Ambassador Program, connecting technical contributors with energy-access practitioners and projects',
      'Wrote the community Code of Conduct and Contribution Guide',
      'Own community content, including blogs on the MicroPowerManager roadmap and community showcases',
    ],
  },
  {
    organization: 'Google Season of Docs, AsyncAPI',
    title: 'Technical Writer & Developer Relations',
    period: 'May 2022 – Jan 2023',
    points: [
      'Revamped the documentation information architecture to improve onboarding, discoverability, and usability',
      'Created technical docs, diagrams, and resources to help developers understand and adopt the AsyncAPI Specification',
    ],
  },
  {
    organization: 'Turing.com',
    title: 'Technical Content Writer',
    period: 'Feb 2022 – Dec 2022',
    points: [
      'Wrote technical articles for an audience of 1 million+ developers, validated with engineers and data scientists',
    ],
  },
  {
    organization: 'Patworc / Fractional IP',
    title: 'Junior Data Scientist',
    period: 'Sep 2021 – Feb 2022',
    points: [
      'Used NLP to analyse patents and scientific articles, and built Tableau and Power BI dashboards for board presentations',
    ],
  },
  {
    organization: 'Bhala AI',
    title: 'Junior Data Scientist',
    period: 'Apr 2021 – Sep 2021',
    points: ['Built sentiment analysis models and African-language features for a mobile keyboard'],
  },
]

export default journeyData
