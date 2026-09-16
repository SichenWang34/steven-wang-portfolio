import ExperiencePage from '../../../components/ExperiencePage';

const experience = {
  date: 'SEP 2026 — PRESENT · ONGOING',
  role: 'Neurotech Lead',
  company: 'UT BIOME',
  location: 'University of Toronto · Student Design Team',
  heroImage: '/media/utbiome.png',
  heroAlt: 'UT BIOME logo',
  heroContain: true,
  overview: 'This is a new ongoing leadership role. I am currently in the early research and team-definition stage, helping shape what the neurotechnology group should build and how the work should be organized.',
  suboverview: 'Rather than presenting unfinished work as a completed project, this page tracks the role from its starting point: research, scope definition, team responsibilities, and the technical questions that will guide the first build.',
  metrics: [
    { label: 'Role', value: 'Neurotech Lead' },
    { label: 'Team', value: 'UT BIOME' },
    { label: 'Status', value: 'Ongoing · Early Stage' },
    { label: 'Focus', value: 'Neurotechnology · Biomedical Design' }
  ],
  sections: [
    { title: 'Research the space', body: 'Build foundational understanding of neurotechnology applications, sensing and human-interface problems, and the kinds of projects that are realistic for a student engineering team.' },
    { title: 'Define a useful project', body: 'Translate broad interest into a scoped technical problem with a clear user, engineering objective, constraints, and a build path that the team can actually execute.' },
    { title: 'Build the team workflow', body: 'Clarify responsibilities, identify the expertise the group needs, and create a shared process for research, documentation, prototyping, and design reviews.' },
    { title: 'Grow into the role', body: 'This role is intentionally shown as ongoing. The goal is to document the real progression from an early idea to a technical project as the team begins its work this term.' }
  ],
  gallery: [
    { src: '/media/utbiome.png', alt: 'UT BIOME branding', caption: 'University of Toronto Biomedical Engineering Design Team.' }
  ]
};

export default function Page(){ return <ExperiencePage experience={experience}/>; }
