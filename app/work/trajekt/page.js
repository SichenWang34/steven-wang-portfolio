import ExperiencePage from '../../../components/ExperiencePage';

const experience = {
  date: 'JUN 2026 — PRESENT',
  role: 'Test Engineering Intern',
  company: 'Trajekt Sports',
  location: 'Mississauga, ON · Part-time',
  heroImage: '/media/trajekt-field.jpg',
  heroAlt: 'Trajekt robotic pitching system test environment',
  overview: 'I test robotic pitching systems in the environment where hardware, controls, ball behavior, wear, and real operating conditions all interact. My job is to turn those interactions into structured tests and useful engineering evidence.',
  suboverview: 'The work ranges from performance and repeatability testing to long-duration cycling, mechanical troubleshooting, failure tracking, data analysis, and concise design feedback for the engineering team.',
  metrics: [
    { label: 'Role', value: 'Test Engineering Intern' },
    { label: 'Company', value: 'Trajekt Sports' },
    { label: 'Testing', value: 'Performance · Reliability · Durability' },
    { label: 'Environment', value: 'Robotics · Sports Technology' }
  ],
  sections: [
    { title: 'Performance & repeatability testing', body: 'Build and execute structured test matrices for baseline and comparative robot performance. I track repeatability, dispersion, calibration behavior, and changes caused by wheel, ball, material, and configuration differences so observations can be compared instead of treated as one-off impressions.' },
    { title: 'Durability & cycle testing', body: 'Run extended reliability and wear tests, including 10K+ cycle work, while logging failures, maintenance events, hardware changes, and operating conditions. The goal is not only to finish a cycle count, but to understand what degrades, when it changes, and what evidence is useful for the next design decision.' },
    { title: 'Mechanical troubleshooting', body: 'Investigate issues across wheel assemblies, ball handling, conveyors, uploaders, drive components, and contact surfaces. I reproduce failure modes, isolate likely mechanical causes, test practical changes, and communicate what is repeatable versus what still needs investigation.' },
    { title: 'Engineering communication', body: 'Turn test-floor observations into concise updates, plots, test notes, and actionable feedback. I keep results traceable enough that another engineer can understand the configuration, the failure, the evidence, and what changed between runs.' }
  ],
  gallery: [
    { src: '/media/trajekt-machine.jpg', alt: 'Trajekt robotic pitching machine', caption: 'Robotic pitching system — the hardware under test.' },
    { src: '/media/trajekt-sign.jpg', alt: 'Trajekt Sports sign', caption: 'Trajekt Sports · Mississauga.' },
    { src: '/media/trajekt-field.jpg', alt: 'Pitching robot test environment', caption: 'Testing in a real sports environment.' }
  ]
};

export default function Page(){ return <ExperiencePage experience={experience}/>; }
