import Link from 'next/link';

export default function ProjectCard({ href, index, title, meta, variant = 'wide', children }) {
  return (
    <Link className={`projectCard ${variant}`} href={href}>
      <div className="projectVisual">{children}</div>
      <div className="projectMeta">
        <span>{index}</span>
        <div>
          <h3>{title}</h3>
          <p>{meta}</p>
        </div>
        <span className="arrow">↗</span>
      </div>
    </Link>
  );
}
