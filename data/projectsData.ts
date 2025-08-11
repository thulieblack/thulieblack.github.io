interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'AsyncAPI Community',
    description: `The AsyncAPI Community Repo is the central hub of all community documentation and resources relevant to the AsyncAPI Community. From Community Documentation, Onboarding Guides, Governance and Charter, this repo is the place to find all the information you need to get started with the AsyncAPI Community.`,
    imgSrc: '/static/images/banner-community.png',
    href: 'https://github.com/asyncapi/community',
  },
  {
    title: 'AsyncAPI Conference Website',
    description: `From Idea to Execution, the AsyncAPI Conference Website showcases the power of the AsyncAPI Community and the conferences that bring us together.`,
    imgSrc: '/static/images/banner-community.png',
    href: 'https://github.com/asyncapi/conference-website',
  },
]

export default projectsData
