export interface Talk {
  title: string
  event: string
  date: string // ISO date, e.g. '2026-03-14'
  location?: string
  description: string
  imgSrc?: string // optional; cards without one show the event name instead
  href?: string // link to slides, recording, or the event page
}

// To add another talk: drop a banner image in public/static/images/talks/
// and add an entry below referencing it as imgSrc: '/static/images/talks/your-file-name.png'
const talksData: Talk[] = [
  {
    title: 'Designing Governance for Sustainable Open Standards',
    event: 'AsyncAPI Conference at FOST London',
    date: '2026-10-01',
    location: 'London, UK',
    description:
      "I will share what we've learned in the AsyncAPI community and talk about five key pillars for sustainable governance: transparency, shared ownership, succession, participation, and accountability.",
    imgSrc: '/static/images/talks/fost-london.jpg',
    href: 'https://cfp.asyncapi.com/london-2026/talk/YZJ3US/',
  },
  {
    title: 'Establishing a Documentation Process in an Open Source Community',
    event: 'Open Source Summit Europe 2026',
    date: '2026-10-08',
    location: 'Prague, Czechia',
    description:
      'Many communities reach a point where knowledge has naturally concentrated in the hands of a few dedicated people. It happens organically. Someone steps up, carries the weight, and keeps things moving. But without a process to capture and distribute that knowledge, the community becomes fragile without ever meaning to. Contributors arrive eager and leave quietly. Decisions get made but are never recorded. Onboarding repeats itself because nothing was ever written down.\n\nThis talk is about what happens when a community decides to change that. Drawing on experience as a maintainer and community manager, I will walk through the journey of building a documentation process from the ground up, not by writing more docs, but by shifting how the community thinks about knowledge itself. From auditing where knowledge lived, to creating structures for knowledge capture and decision documentation, forming a working group that distributed ownership, and building triage and mentorship pathways that made contribution genuinely accessible.',
    imgSrc: '/static/images/talks/oss-prague.jpg',
    href: 'https://osselceu2026.sched.com/event/2RabH/establishing-a-documentation-process-in-an-open-source-community-v-thulisile-sibanda-asyncapi-initiative',
  },
  {
    title: 'From Ingredients to Output: The AsyncAPI Generator 101',
    event: 'API Conf Lagos',
    date: '2025-07-18',
    location: 'Lagos, Nigeria',
    description:
      "Curious about creating documentation, code, or apps from your AsyncAPI files? Join me for a beginner-friendly walkthrough of the AsyncAPI Generator, which transforms AsyncAPI documents into functional outputs using customizable templates. We'll cover the basics of AsyncAPI and its importance in event-driven architectures. Then, explore the Generator, including its requirements (an AsyncAPI document and a template) and its output capabilities. Using simple analogies, we'll explain how templates serve as recipes and AsyncAPI documents as ingredients. We'll break down how templates are built, from simple components to advanced React-like logic, and see how they use the data in AsyncAPI files to produce meaningful results from markdown documentation to server code.",
    imgSrc: '/static/images/talks/lagos.jpg',
    href: 'https://youtu.be/J38sUCOTQTw?si=sF1KALvslfP6wN7y',
  },
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
