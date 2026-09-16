import ProjectPage from '../../../components/ProjectPage';

const project = {
  index: '03',
  course: 'YEAR 1 DESIGN · APS111',
  title: 'Sustainable Bahen Courtyard',
  intro: 'A conceptual redesign of the University of Toronto Bahen courtyard focused on sustainable food access, inclusive gathering space, biodiversity, and lower environmental impact.',
  deck: 'This was an early design project where I learned to turn a broad stakeholder problem into structured requirements, generate alternatives, and justify a concept through documented decision methods.',
  heroImage: '/media/aps111-floorplan.jpg',
  heroAlt: 'Floor plan of the sustainable Bahen courtyard concept',
  facts: [
    { label: 'Course', value: 'APS111 · Engineering Strategies & Practice' },
    { label: 'Client', value: 'U of T Sustainability Office' },
    { label: 'Team', value: '6-person design team' },
    { label: 'Year', value: '2024' }
  ],
  skills: ['Stakeholder analysis','Service environment research','Requirements & FOCs','Structured brainstorming','Feasibility filtering','Multivoting','Graphical decision charts','Pugh method','Technical writing & revision'],
  sections: [
    { title: 'Define the real problem', body: 'The team framed the courtyard as more than a landscaping exercise: the design had to improve food access and social use while respecting accessibility, existing infrastructure, sustainability targets, nearby spaces, climate, and multiple stakeholder groups.' },
    { title: 'Generate broadly, select systematically', body: 'The team generated 60 initial ideas using structured brainstorming and other ideation methods. Concepts were consolidated, checked for feasibility, reduced through multivoting, and compared using a graphical decision chart before three alternatives moved forward.' },
    { title: 'My contribution', body: 'My documented contributions included stakeholder work, service-environment and requirements review, idea generation and selection, alternative-design editing, proposed specification review, reference and appendix work, and final-document proofing. It was where I started building a disciplined approach to team engineering documentation.' }
  ],
  evidenceTitle: 'A broad stakeholder problem made structured.',
  evidenceCopy: 'The team moved from stakeholder and service-environment research into requirements, 60 initial ideas, feasibility screening, multivoting, graphical comparison, and a final concept that could be justified against the design objectives.',
  processSteps: ['Stakeholders','Requirements','60 ideas','Feasibility screen','Multivoting','Concept selection'],
  gallery: [
    { src: '/media/aps111-selection.jpg', alt: 'Idea selection flow chart and graphical decision chart', caption: 'Selection process — 60 ideas narrowed through feasibility checks, multivoting, and a graphical decision chart.', wide: true },
    { src: '/media/aps111-floorplan.jpg', alt: 'Final sustainable courtyard floor plan', caption: 'Selected concept floor plan — renewable energy, food access, seating, bioswales, and inclusive spatial features.' }
  ]
};
export default function Page(){ return <ProjectPage project={project}/>; }
