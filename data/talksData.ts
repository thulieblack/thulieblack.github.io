export interface Talk {
  title: string
  event: string
  date: string // ISO date, e.g. '2026-03-14'
  location?: string
  description: string
  imgSrc: string
  href?: string // link to slides, recording, or the event page
}

// To add another talk: drop a banner image in public/static/images/talks/
// and add an entry below referencing it as imgSrc: '/static/images/talks/your-file-name.png'
const talksData: Talk[] = [
  {
    title: 'Open Source, Community & Strategic Volunteering: Your Hidden Technical Resume',
    event: 'Techrity TMP 6.0 Webinar Series',
    date: '2026-07-16',
    location: 'Online',
    description:
      'Practical strategies to increase your visibility, expand your professional network, and position yourself as a trusted voice in your industry.',
    imgSrc: '/static/images/talks/ad.png',
    //href: 'https://bit.ly/tmp6webinar-seriestwo',
  },
  {
    title: 'AsyncAPI Conference: From Side Project to Industry Standard',
    event: 'DeveloperWeek 2026',
    date: '2026-02-18',
    location: 'San Jose, CA',
    description: "AsyncAPI's journey from a side project to an industry standard.",
    imgSrc: '/static/images/talks/aa.jpeg',
  },
  {
    title: 'A Shared Responsibility: How You Can Get Involved in Sustaining The Initiative',
    event: 'apidays India 2025',
    date: '2025-10-08',
    location: 'Bengaluru, India',
    description:
      'How developers and organizations can get involved in sustaining the AsyncAPI Initiative.',
    imgSrc: '/static/images/talks/ac.jpg',
    href: 'https://youtu.be/9lDSZG8Ny98?si=Qc7VwMQ-SubFnp0d',
  },
  {
    title: 'Understanding the Role of Community in your Project',
    event: 'She Code Africa',
    date: '2024-10-25',
    location: 'Online',
    description: 'The role community plays in the success and sustainability of a project.',
    imgSrc: '/static/images/talks/ab.webp',
  },
]

export default talksData
