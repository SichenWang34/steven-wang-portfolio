import Link from 'next/link';
import Nav from '../components/Nav';
import SkillIcon from '../components/SkillIcon';

const projects = [
  {
    href: '/work/camera-arm',
    number: '01',
    year: 'YEAR 2 DESIGN · MIE243',
    title: 'Long-Reach Camera Motion Robot',
    meta: 'System architecture · SolidWorks · concept selection · mechanical design documentation',
    image: '/media/camera-arm-overview.png',
    alt: 'CAD overview of a long-reach camera motion robot'
  },
  {
    href: '/work/falls-lab',
    number: '02',
    year: 'YEAR 1 DESIGN · APS112',
    title: 'Falls Lab Perturbation Tile',
    meta: 'Research translation · actuator architecture · prototyping · test planning',
    image: '/media/falls-prototype.jpg',
    alt: 'Prototype of a floor perturbation tile'
  },
  {
    href: '/work/bahen-courtyard',
    number: '03',
    year: 'YEAR 1 DESIGN · APS111',
    title: 'Sustainable Bahen Courtyard',
    meta: 'Stakeholder analysis · requirements · ideation · decision matrices',
    image: '/media/aps111-floorplan.jpg',
    alt: 'Concept floor plan for the Bahen courtyard design'
  }
];

const experiences = [
  {
    href: '/work/trajekt',
    date: 'JUN 2026 — PRESENT',
    role: 'Test Engineering Intern',
    company: 'Trajekt Sports',
    location: 'Mississauga, ON · Part-time',
    image: '/media/trajekt-machine.jpg',
    imageAlt: 'Trajekt robotic pitching machine',
    visual: 'trajekt',
    summary: 'Test and validate robotic pitching systems through structured performance, repeatability, durability, and comparative hardware testing.',
    highlights: []
  },
  {
    href: '/work/utbiome-neurotech',
    date: 'SEP 2026 — PRESENT',
    role: 'Neurotech Lead',
    company: 'UT BIOME',
    location: 'University of Toronto · Ongoing',
    image: '/media/utbiome.png',
    imageAlt: 'UT BIOME logo',
    visual: 'utbiome',
    summary: 'Ongoing student design-team role exploring neurotechnology directions and shaping an engineering project from its earliest stage.',
    highlights: []
  },
  {
    href: '/work/kite-research',
    date: 'JUL 2025 — SEP 2025',
    role: 'Assistant Researcher',
    company: 'UHN · KITE Research Institute',
    location: 'Toronto, ON · Research',
    image: '/media/kite-ramp.jpg',
    imageAlt: 'KITE biomechanics lab ramp setup',
    visual: 'kite',
    summary: 'Supported footwear slipperiness and fall-risk research through experimental workflows, computer-vision dataset preparation, and lab documentation.',
    highlights: []
  }
];

export default function Home() {
  return (
    <main>
      <Nav />

      <section className="homeHero shell" id="top">
        <div className="heroMain">
          <p className="heroKicker">Hi, I am</p>
          <h1>Steven Wang<span className="heroDot">.</span></h1>
          <p className="heroIdentity">Mechanical Engineering @ University of Toronto</p>
          <blockquote className="heroQuote">
            <p>“If you really want to be great at something you have to truly care about it. If you want to be great in a particular area, you have to obsess over it.”</p>
            <cite>— Kobe Bryant</cite>
          </blockquote>
          <p className="interestLabel">Interested in</p>
          <div className="heroTags" aria-label="Focus areas">
            <span>Startups</span><span>Robotics</span><span>Sports Tech</span><span>Bioengineering</span><span>Mechanical Design</span>
          </div>
          <p className="heroWelcome">Welcome to my personal portfolio, where I showcase my experience, projects, and engineering skills.</p>
          <div className="heroActions">
            <a href="#experience">Experience <span>↓</span></a>
            <a href="#projects">Projects <span>↓</span></a>
          </div>
        </div>

        <figure className="heroPortrait">
          <img src="/media/hero-stage.jpg" alt="Steven performing live on stage" />
          <figcaption><span>Outside the lab</span><strong>Hip-hop · live performance</strong></figcaption>
        </figure>
      </section>

      <section className="contentSection shell" id="experience">
        <div className="sectionTitleRow"><div><p className="microLabel">01</p><h2>Experience</h2></div><p className="sectionNote">A quick view of each role. Open a card for responsibilities, test work, research workflows, and details.</p></div>
        <div className="experienceIndex">
          {experiences.map((exp) => (
            <Link className="experienceCard" href={exp.href} key={exp.role}>
              <div className={`experienceCardVisual ${exp.visual}`}>
                <img src={exp.image} alt={exp.imageAlt} />
                {exp.visual === 'kite' && <div className="experienceCardLogo"><img src="/media/uhn-kite.png" alt="UHN KITE Research Institute logo" /></div>}
                {exp.visual === 'trajekt' && <div className="experienceCardWordmark">TRAJEKT</div>}
              </div>
              <div className="experienceCardBody">
                <div className="experienceCardTop">
                  <p className="experienceDate">{exp.date}</p>
                  <span className="experienceOpen">↗</span>
                </div>
                <h3>{exp.role}</h3>
                <p className="experienceCompany">{exp.company}</p>
                <p className="experienceCardSummary">{exp.summary}</p>
                <div className="experienceCardBottom">
                  <span>{exp.location}</span>
                  <strong>View experience</strong>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="contentSection shell" id="projects">
        <div className="sectionTitleRow"><div><p className="microLabel">02</p><h2>Projects</h2></div><p className="sectionNote">Independent case studies with the design process, engineering evidence, CAD, and documentation kept together.</p></div>
        <div className="projectList">
          {projects.map((project) => (
            <Link className="projectRow" href={project.href} key={project.title}>
              <div className="projectRowNumber">{project.number}</div>
              <div className="projectRowImage"><img src={project.image} alt={project.alt} /></div>
              <div className="projectRowCopy">
                <p className="projectYear">{project.year}</p>
                <h3>{project.title}</h3>
                <p>{project.meta}</p>
              </div>
              <span className="projectArrow">↗</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="contentSection shell" id="certificates">
        <div className="sectionTitleRow"><div><p className="microLabel">03</p><h2>Certificates</h2></div><p className="sectionNote">Reserved for verified credentials.</p></div>
        <div className="certificateEmpty">
          <p>Coming next.</p>
          <span>CAD and certification credentials will be added when ready.</span>
        </div>
      </section>

      <section className="contentSection shell" id="skills">
        <div className="sectionTitleRow"><div><p className="microLabel">04</p><h2>Skills</h2></div><p className="sectionNote">Tools matter. So do test discipline, documentation, and the decisions behind the design.</p></div>
        <div className="skillsCapabilityGrid">
          <article className="skillCard skillCad"><div className="skillBrandRow"><SkillIcon type="solidworks" /><SkillIcon type="fusion" /></div><h3>Mechanical CAD</h3><p>SolidWorks · Fusion 360 · assemblies · mechanisms · 2D engineering drawings · component interfaces</p></article>
          <article className="skillCard"><div className="skillIconWrap"><SkillIcon type="test" /></div><h3>Testing & troubleshooting</h3><p>Test matrices · repeatability · endurance · calibration · root-cause analysis · failure tracking</p></article>
          <article className="skillCard"><div className="skillIconWrap"><SkillIcon type="process" /></div><h3>Engineering decisions</h3><p>Requirements · stakeholder analysis · concept generation · feasibility checks · Pugh charts · weighted decision matrices</p></article>
          <article className="skillCard"><div className="skillIconWrap"><SkillIcon type="docs" /></div><h3>Team documentation</h3><p>Technical reports · design rationale · test plans · Gantt planning · revision control · final proofing · cross-team updates</p></article>
          <article className="skillCard"><div className="skillBrandRow dataBrands"><SkillIcon type="python" /><SkillIcon type="matlab" /></div><h3>Data & programming</h3><p>MATLAB · Python · C/C++ · Excel · Minitab · data cleaning · modelling and simulation</p></article>
          <article className="skillCard skillsEvidence"><div className="skillIconWrap"><SkillIcon type="human" /></div><h3>Human-centered hardware</h3><p>Most interested in physical systems that affect movement, training, safety, or recovery — especially in sports and health.</p></article>
        </div>
      </section>

      <section className="outsideSection" id="outside">
        <div className="shell outsideHeader">
          <div><p className="microLabel">05</p><h2>Outside of Engineering</h2></div>
        </div>
        <div className="shell outsideImpact"><p>Performing with my hip-hop band and playing basketball taught me to communicate under pressure, take responsibility for a team, and bring competitive energy into the way I engineer.</p></div>
        <div className="shell outsideStage">
          <figure className="outsideMusicHero">
            <img src="/media/music-stage-portrait.jpg" alt="Steven performing live on stage" />
            <figcaption><span>LIVE / TORONTO</span><strong>MUSIC</strong></figcaption>
            <div className="bandCaption"><span>HIP-HOP BAND LEAD · 2023 — PRESENT</span><p>I lead a small music group by organizing rehearsals, coordinating performances, and guiding creative direction — strengthening leadership, teamwork, and communication.</p></div>
          </figure>
          <div className="outsideSide">
            <article className="basketballCard">
              <div className="courtGraphic" aria-hidden="true"><span className="courtCircle"></span><span className="courtArc"></span></div>
              <p className="microLabel">HOOPS</p><h3>Basketball</h3><p className="outsideDateLine">Played competitively · 2023 — Present</p>
              <span className="scoreMark">24</span>
            </article>
            <article className="outsideTextCard iconCard"><div className="outsideMiniIcon"><SkillIcon type="cards" /></div><p className="microLabel">CARDS / BUSINESS</p><p className="outsideDateLine">2023 — Present</p><h3>Sports card trading</h3><p>Sourcing, pricing, negotiation, margin tracking, and fulfillment — a small market where details matter.</p></article>
            <article className="outsideTextCard iconCard"><div className="outsideMiniIcon"><SkillIcon type="tutor" /></div><p className="microLabel">TEACH</p><p className="outsideDateLine">2022 — Present</p><h3>Tutoring</h3><p>Math, physics, and chemistry support for 15+ students, plus university application guidance.</p></article>
          </div>
        </div>
        <div className="outsideTicker" aria-hidden="true"><span>STARTUPS / ENGINEERING / MUSIC / BASKETBALL / SPORTS TECH / BIO / BUILD / TEST / CREATE / </span><span>STARTUPS / ENGINEERING / MUSIC / BASKETBALL / SPORTS TECH / BIO / BUILD / TEST / CREATE / </span></div>
      </section>

      <section className="contactSection shell" id="contact">
        <div className="sectionTitleRow"><div><p className="microLabel">06</p><h2>Contact</h2></div><p className="sectionNote">LinkedIn and GitHub can slot in here when ready.</p></div>
        <div className="contactHero">
          <h3>Let&apos;s build<br/>something meaningful.</h3>
          <div className="contactDetails">
            <p className="microLabel">Get in touch</p>
            <a href="mailto:sichenwsc.wang@mail.utoronto.ca">sichenwsc.wang@mail.utoronto.ca <span>↗</span></a>
            <a href="tel:+16478225923">+1 647-822-5923 <span>↗</span></a>
            <a className="resumeDownload" href="/Steven-Wang-Resume.pdf" download>Download resume <span>↓</span></a>
            <p>Toronto, Canada</p>
          </div>
        </div>
      </section>

      <footer className="homeFooter shell"><span>Steven Wang</span><span>Mechanical Engineering · 2026</span></footer>
    </main>
  );
}
