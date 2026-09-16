import ProjectPage from '../../../components/ProjectPage';
const project = {
  index: '03',
  title: 'Engineering Drawings',
  intro: 'A selection of assembly breakdowns, component drawings, and detailed CAD work from the camera-robot project, showing how the concept was translated into manufacturable parts and interfaces.',
  heroImage: '/media/camera-arm-exploded.png',
  heroAlt: 'Exploded assembly drawing',
  facts: [
    { label: 'Tool', value: 'SolidWorks' },
    { label: 'Output', value: 'Parts · Assemblies · 2D Drawings' },
    { label: 'Focus', value: 'Communication · Manufacturability' },
    { label: 'Year', value: '2025' }
  ],
  sections: [
    { title: 'From assembly to detail', body: 'The drawing set communicates how the larger system decomposes into subassemblies, fasteners, interfaces, and individual manufactured parts.' },
    { title: 'Mechanical communication', body: 'Exploded views and detailed drawings make design intent easier to review and help connect CAD geometry to real assembly and fabrication decisions.' },
    { title: 'Documentation', body: 'The project included detailed part and assembly documentation so the mechanical design could be understood beyond the 3D model itself.' }
  ],
  gallery: [
    { src: '/media/wheel-exploded.png', alt: 'Wheel system exploded drawing', caption: 'Wheel system assembly' },
    { src: '/media/planet-carrier-drawing.png', alt: 'Planet carrier technical drawing', caption: 'Planet carrier drawing' },
    { src: '/media/camera-tongue-drawing.png', alt: 'Camera mounting tongue technical drawing', caption: 'Camera mounting tongue' },
    { src: '/media/frame-mechanism.png', alt: 'Frame mechanism CAD view', caption: 'Frame mechanism' }
  ],
  show3DNote: true
};
export default function Page(){ return <ProjectPage project={project}/>; }
