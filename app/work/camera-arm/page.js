import ProjectPage from '../../../components/ProjectPage';

const project = {
  index: '01',
  course: 'YEAR 2 DESIGN · MIE243',
  title: 'Long-Reach Camera Motion Robot',
  intro: 'A low-cost, long-reach camera motion system for beginner cinematographers and advanced hobbyists, developed from requirements through concept selection, subsystem iteration, CAD, and engineering documentation.',
  deck: 'The goal was not only to make an arm that moves — it was to balance reach, payload, stiffness, motion freedom, portability, cost, safety, and manufacturability as one system.',
  heroImage: '/media/camera-arm-overview.png',
  heroAlt: 'CAD overview of the camera motion robot',
  facts: [
    { label: 'Role', value: 'Team Lead · CAD Technician' },
    { label: 'Tool', value: 'SolidWorks' },
    { label: 'Architecture', value: 'Mobile base · rigid arm · 3-axis gimbal' },
    { label: 'Result', value: '92% · Top 5%' }
  ],
  skills: ['System architecture','Requirements engineering','SolidWorks assemblies','Pugh selection','Weighted decision matrices','Material selection','DOF analysis','Engineering drawings','Technical documentation'],
  sections: [
    { title: 'Turn the brief into requirements', body: 'I helped translate a broad cinematography problem into measurable engineering specifications around reach, payload, motion, camera envelope, safety, power, portability, and user operation. That created a basis for comparing concepts instead of selecting a design by appearance.' },
    { title: 'Select, then iterate', body: 'Candidate architectures were filtered through feasibility checks and a Pugh comparison. After selecting the strongest architecture, the system was decomposed into wheels, body, arm, and camera mounting so specific shortcomings — including tipping risk, motion repeatability, backlash, and adjustment speed — could be addressed.' },
    { title: 'Document the design', body: 'Beyond the final CAD, the work included subsystem selection, material trade studies, degree-of-freedom analysis, assembly breakdowns, and 2D drawings. I treated documentation as part of the engineering output, not something added after the design was finished.' }
  ],
  evidenceTitle: 'From requirements to detailed mechanical design.',
  evidenceCopy: 'The work followed a documented engineering path: define measurable requirements, compare architectures, iterate subsystem weaknesses, select materials and motion strategy, then communicate the final design through assemblies and drawings.',
  processSteps: ['Requirements','Architecture','Pugh selection','Subsystem iteration','Materials & DOF','CAD + drawings'],
  gallery: [
    { src: '/media/camera-arm-exploded.png', alt: 'Exploded assembly view of the camera robot', caption: 'Exploded system assembly — structure, arm, mobility, and camera mechanism.', wide: true },
    { src: '/media/mie243-iteration.jpg', alt: 'Design iteration process chart from the MIE243 report', caption: 'Design iteration map — shortcomings were tied to subsystem-level changes.' },
    { src: '/media/mie243-pugh.jpg', alt: 'Pugh chart comparing camera robot concepts', caption: 'Pugh chart — concept selection against engineering criteria.' },
    { src: '/media/mie243-materials.jpg', alt: 'Material decision matrix from camera robot report', caption: 'Weighted material decision matrix used for the main structure.' },
    { src: '/media/mie243-dof.jpg', alt: 'Degree of freedom analysis for camera robot', caption: 'Degree-of-freedom analysis for base, arm, and gimbal motion.' },
    { src: '/media/arm-transmission-exploded.png', alt: 'Exploded arm transmission assembly', caption: 'Arm transmission and gearbox breakdown.' },
    { src: '/media/camera-gimbal-exploded.png', alt: 'Exploded gimbal assembly', caption: 'Camera gimbal assembly and serviceable interfaces.' }
  ],
  show3DNote: true
};
export default function Page(){ return <ProjectPage project={project}/>; }
