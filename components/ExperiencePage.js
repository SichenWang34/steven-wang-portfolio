import Link from 'next/link';
import Nav from './Nav';

export default function ExperiencePage({ experience }) {
  return (
    <main>
      <Nav />
      <section className="experiencePageHero shell">
        <Link className="back" href="/#experience">← Experience</Link>
        <div className="experiencePageTopline">
          <p className="eyebrow">EXPERIENCE</p>
          <p className="experiencePageDate">{experience.date}</p>
        </div>
        <h1>{experience.role}</h1>
        <div className="experiencePageCompanyRow"><h2>{experience.company}</h2><p>{experience.location}</p></div>
      </section>

      <section className={`shell experiencePageHeroImage ${experience.heroContain ? 'contain' : ''}`}>
        <img src={experience.heroImage} alt={experience.heroAlt} />
        {experience.logo && <div className="experiencePageLogo"><img src={experience.logo} alt={experience.logoAlt || experience.company} /></div>}
      </section>

      <section className="shell experienceOverview">
        <div><p className="microLabel">Overview</p><h2>What I work on</h2></div>
        <div><p className="experienceOverviewLead">{experience.overview}</p><p className="experienceOverviewSub">{experience.suboverview}</p></div>
      </section>

      <section className="shell experienceMetrics">
        {experience.metrics.map(metric => <article key={metric.label}><p>{metric.label}</p><h3>{metric.value}</h3></article>)}
      </section>

      <section className="shell experienceResponsibilities">
        {experience.sections.map((section, idx) => (
          <article key={section.title}>
            <span>{String(idx+1).padStart(2,'0')}</span>
            <div><h3>{section.title}</h3><p>{section.body}</p></div>
          </article>
        ))}
      </section>

      {experience.gallery?.length > 0 && <section className="shell experienceGallery">
        {experience.gallery.map(item => <figure key={item.src}><div className={item.contain ? 'contain' : ''}><img src={item.src} alt={item.alt}/></div><figcaption>{item.caption}</figcaption></figure>)}
      </section>}

      <footer className="shell projectFooter"><Link href="/#experience">Back to experience</Link><span>© 2026 Steven Wang</span></footer>
    </main>
  );
}
