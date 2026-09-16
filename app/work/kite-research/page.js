import ExperiencePage from '../../../components/ExperiencePage';

const experience = {
  date: 'JUL 2025 — SEP 2025',
  role: 'Assistant Researcher',
  company: 'UHN · KITE Research Institute',
  location: 'Toronto, ON · Research',
  heroImage: '/media/kite-ramp.jpg',
  heroAlt: 'KITE biomechanics ramp and gait research setup',
  logo: '/media/uhn-kite.png',
  logoAlt: 'UHN KITE Research Institute logo',
  overview: 'I supported research around footwear slipperiness, gait, fall risk, and slip detection by helping make experimental data collection consistent and usable.',
  suboverview: 'My work sat between the physical lab and the data workflow: preparing capture setups, organizing footwear and outsole information, supporting video and pressure-insole data collection, and preparing computer-vision datasets for downstream research.',
  metrics: [
    { label: 'Role', value: 'Assistant Researcher' },
    { label: 'Institute', value: 'UHN · KITE' },
    { label: 'Research', value: 'Footwear · Slip Detection · Gait' },
    { label: 'Tools', value: 'CVAT · Excel · MATLAB' }
  ],
  sections: [
    { title: 'Experimental data collection', body: 'Supported ramp-lab capture sessions and repeatable experimental procedures for footwear and slip-related research. This includes preparing the environment, documenting capture conditions, and helping keep visual and sensor data aligned with the physical trial.' },
    { title: 'Computer-vision dataset preparation', body: 'Used CVAT and organized video workflows to prepare research data for slip-detection and motion-analysis work. The emphasis is on clean labeling, repeatable conventions, and traceability back to the underlying trial.' },
    { title: 'Footwear & outsole documentation', body: 'Contributed to structured footwear / outsole records and image-capture workflows so physical samples can be compared consistently. This work connects experimental observations with searchable research metadata.' },
    { title: 'Research coordination', body: 'Maintained weekly notes, communicated setup details, and coordinated small tasks across the lab so research procedures remain understandable and repeatable for other team members.' }
  ],
  gallery: [
    { src: '/media/kite-lab.jpg', alt: 'KITE Falls Lab environment', caption: 'Falls Lab experimental environment.' },
    { src: '/media/kite-ramp.jpg', alt: 'KITE gait research ramp', caption: 'Ramp setup used for footwear and gait research.' },
    { src: '/media/falls-team.jpg', alt: 'Falls Lab design project team', caption: 'Engineering work connected to the same research environment.' }
  ]
};

export default function Page(){ return <ExperiencePage experience={experience}/>; }
