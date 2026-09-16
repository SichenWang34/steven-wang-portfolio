import Link from 'next/link';
import Nav from './Nav';

export default function ProjectPage({ project }) {
  return (
    <main>
      <Nav />

      <section className="projectTitleHero shell">
        <Link className="back" href="/#projects">← Projects</Link>
        <p className="eyebrow">{project.index} / {project.course || 'PROJECT'}</p>
        <h1>{project.title}</h1>
      </section>

      <section className={`shell projectLeadImage ${project.heroCover ? 'coverImage' : ''}`}>
        <img src={project.heroImage} alt={project.heroAlt} />
      </section>

      <section className="shell projectOverview">
        <div><p className="microLabel">Overview</p><h2>Project overview</h2></div>
        <div className="projectOverviewCopy">
          <p className="projectIntro">{project.intro}</p>
          {project.deck && <p className="projectDeck">{project.deck}</p>}
        </div>
      </section>

      <section className="shell factsGrid factsGridHighlight">
        {project.facts.map((fact) => <div className="fact" key={fact.label}><p>{fact.label}</p><h3>{fact.value}</h3></div>)}
      </section>

      {project.skills?.length > 0 && <section className="shell projectSkills"><p className="microLabel">Engineering toolkit</p><div>{project.skills.map(skill => <span key={skill}>{skill}</span>)}</div></section>}

      <section className="shell storyGrid">
        {project.sections.map((section, idx) => <article className="storyBlock" key={section.title}><p className="eyebrow">0{idx+1}</p><h2>{section.title}</h2><p>{section.body}</p></article>)}
      </section>

      {project.processSteps?.length > 0 && (
        <section className="shell processSection">
          <div className="processHeading"><p className="microLabel">Design process</p><h2>{project.evidenceTitle || 'How the project moved forward.'}</h2><p>{project.evidenceCopy}</p></div>
          <div className="processStrip">
            {project.processSteps.map((step, idx) => <div className="processStep" key={step}><span>{String(idx+1).padStart(2,'0')}</span><strong>{step}</strong></div>)}
          </div>
        </section>
      )}

      {project.gallery?.length > 0 && (
        <section className="shell detailGallery">
          {project.gallery.map((image, idx) => <figure className={image.wide || idx === 0 ? 'galleryWide' : ''} key={image.src}><div className={image.cover ? 'galleryImage cover' : 'galleryImage'}><img src={image.src} alt={image.alt}/></div><figcaption><span>{String(idx+1).padStart(2,'0')}</span>{image.caption}</figcaption></figure>)}
        </section>
      )}

      {project.show3DNote && (
        <section className="shell modelReady">
          <div><p className="microLabel">Interactive 3D</p><h2>3D viewer slot ready.</h2></div>
          <p>When you send the CAD export, this section can switch from still images to a drag-to-rotate, zoomable model without changing the rest of the page.</p>
        </section>
      )}

      <footer className="shell projectFooter"><Link href="/#projects">Back to projects</Link><span>© 2026 Steven Wang</span></footer>
    </main>
  );
}
