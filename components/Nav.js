import Link from 'next/link';

export default function Nav() {
  return (
    <header className="siteNav">
      <div className="shell navInner">
        <Link className="brand" href="/#top">Steven Wang</Link>
        <nav className="navLinks" aria-label="Primary navigation">
          <Link href="/#experience">Experience</Link>
          <Link href="/#projects">Projects</Link>
          <Link href="/#certificates">Certificates</Link>
          <Link href="/#skills">Skills</Link>
          <Link href="/#outside">Outside of Eng.</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
