import ProjectPage from '../../../components/ProjectPage';

const project = {
  index: '02',
  course: 'YEAR 1 DESIGN · APS112',
  title: 'Falls Lab Perturbation Tile',
  intro: 'A floor-integrated concept for KITE’s Falls Lab designed to introduce controlled, unexpected rotational perturbations during walking and support gait-stability research.',
  deck: 'The project connected a real research need to actuator selection, mechanical architecture, safety constraints, prototype planning, and test documentation.',
  heroImage: '/media/falls-prototype.jpg',
  heroAlt: 'Physical prototype of the floor perturbation system',
  heroCover: true,
  facts: [
    { label: 'Role', value: 'Research Lead · CAD Technician Lead' },
    { label: 'Client', value: 'KITE Falls Lab · Dr. Stephen Perry' },
    { label: 'Prototype', value: '1/5 scale · actuator-driven' },
    { label: 'Year', value: '2025' }
  ],
  skills: ['Client requirements','Stakeholder analysis','Actuator selection','Mechanical concept design','Prototype planning','Test planning','Pugh evaluation','Gantt scheduling','Team documentation'],
  sections: [
    { title: 'Research need → engineering problem', body: 'The team translated a gait-research need into a device that could rotate beneath a walking participant in two longitudinal axes while remaining controlled, adjustable, and difficult to anticipate. The lab environment, participant safety, and existing force-platform setup shaped the constraints.' },
    { title: 'Develop the DASA concept', body: 'The selected Dynamic Adjustable Support Actuators (DASA) architecture used multiple actuators beneath a platform to create controllable angular perturbations. My work included research and CAD leadership, and the prototype plan assigned me responsibility for the linear-actuator servo motors.' },
    { title: 'Plan evidence before building', body: 'The report defined a scaled prototype, target displacements and angles, assembly steps, a test sheet, and a team Gantt schedule. That planning connected the concept to something the team could actually assemble, measure, and evaluate.' }
  ],
  evidenceTitle: 'Research need translated into a testable mechanism.',
  evidenceCopy: 'The design process moved from client and lab requirements into concept comparison, the DASA actuator architecture, a scaled prototype plan, scheduling, and a documented test approach.',
  processSteps: ['Research requirements','Concept generation','Pugh evaluation','DASA architecture','Prototype planning','Test planning'],
  gallery: [
    { src: '/media/aps112-dasa.jpg', alt: 'DASA actuator architecture from APS112 report', caption: 'DASA architecture — actuator placement and planar rotation concept.', wide: true },
    { src: '/media/falls-prototype-alt.jpg', alt: 'Physical perturbation tile prototype being operated', caption: 'Physical prototype — servo-driven scaled test build.', cover: true },
    { src: '/media/aps112-prototype-sketch.jpg', alt: 'Prototype wiring and assembly sketch', caption: 'Prototype sketch — mechanical stack, servos, Arduino, and power connection.' },
    { src: '/media/aps112-gantt.jpg', alt: 'Team Gantt chart for prototype work', caption: 'Team planning — prototype build, material gathering, assembly, and test window.' },
    { src: '/media/aps112-pugh.jpg', alt: 'Pugh chart comparing perturbation designs', caption: 'Pugh evaluation — DASA compared with alternate concepts and the current solution.' },
    { src: '/media/kite-ramp.jpg', alt: 'KITE Falls Lab ramp and gait research environment', caption: 'Research environment — KITE biomechanics and gait testing lab.', cover: true },
    { src: '/media/falls-team.jpg', alt: 'Project team photo', caption: 'Project team after the design and prototype work.', cover: true }
  ]
};
export default function Page(){ return <ProjectPage project={project}/>; }
