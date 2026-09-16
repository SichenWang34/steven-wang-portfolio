export default function SkillIcon({ type }) {
  const common = { width: 46, height: 46, viewBox: '0 0 48 48', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', 'aria-hidden': true };

  if (type === 'solidworks') {
    return (
      <div className="brandMark solidworksMark" aria-label="SOLIDWORKS">
        <svg viewBox="0 0 72 54" role="img" aria-hidden="true">
          <path d="M8 34c7-2 12-7 14-14 2-7 5-10 11-10 5 0 9 3 11 7l-8 4c-1-2-2-3-4-3-2 0-3 1-4 4-3 10-10 17-20 20z" fill="currentColor"/>
          <path d="M37 18c4-5 9-8 15-8 7 0 12 4 12 10 0 7-6 12-15 12h-5l-3 10H29l7-24h1zm10 7h3c3 0 5-1 5-4 0-2-2-3-4-3-2 0-4 1-6 4l2 3z" fill="currentColor"/>
        </svg>
        <span>SOLIDWORKS</span>
      </div>
    );
  }

  if (type === 'fusion') {
    return (
      <div className="brandMark fusionMark" aria-label="Autodesk Fusion">
        <svg viewBox="0 0 56 56" role="img" aria-hidden="true">
          <path d="M9 10h33l-8 10H20l-4 6h15l-8 10H9V10Z" fill="currentColor"/>
          <path d="M32 20h15L31 46H16l16-26Z" fill="currentColor" opacity=".72"/>
        </svg>
        <span>FUSION</span>
      </div>
    );
  }

  if (type === 'python') {
    return (
      <div className="brandMark pythonMark" aria-label="Python">
        <svg viewBox="0 0 64 64" role="img" aria-hidden="true">
          <path d="M31 6c-12 0-12 5-12 5v10h13v3H14S6 23 6 34s8 11 8 11h7v-9s0-8 8-8h14s7 0 7-7v-8S51 6 31 6Z" fill="#3776AB"/>
          <circle cx="26" cy="14" r="2" fill="#fff"/>
          <path d="M33 58c12 0 12-5 12-5V43H32v-3h18s8 1 8-10-8-11-8-11h-7v9s0 8-8 8H21s-7 0-7 7v8s-1 7 19 7Z" fill="#FFD43B"/>
          <circle cx="38" cy="50" r="2" fill="#fff"/>
        </svg>
        <span>PYTHON</span>
      </div>
    );
  }

  if (type === 'matlab') {
    return (
      <div className="brandMark matlabMark" aria-label="MATLAB">
        <svg viewBox="0 0 64 64" role="img" aria-hidden="true">
          <defs>
            <linearGradient id="matlabWave" x1="0" x2="1" y1="1" y2="0">
              <stop offset="0" stopColor="#0076A8"/>
              <stop offset=".5" stopColor="#F28C28"/>
              <stop offset="1" stopColor="#C43C2B"/>
            </linearGradient>
          </defs>
          <path d="M7 42c9-3 12-19 19-26 4 2 7 9 11 10 6 2 10-4 20-9-7 9-11 20-15 31-5-10-8-16-12-18-6-3-11 8-23 12Z" fill="url(#matlabWave)"/>
        </svg>
        <span>MATLAB</span>
      </div>
    );
  }

  if (type === 'test') return (
    <svg {...common} className="skillSvg">
      <path d="M6 36h7l5-20 7 25 6-17 4 12h7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="36" cy="12" r="6" stroke="currentColor" strokeWidth="2.4"/>
      <path d="m33.5 12 1.8 1.8 3.5-4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  if (type === 'process') return (
    <svg {...common} className="skillSvg">
      <rect x="5" y="8" width="13" height="10" rx="2" stroke="currentColor" strokeWidth="2.2"/>
      <rect x="30" y="30" width="13" height="10" rx="2" stroke="currentColor" strokeWidth="2.2"/>
      <rect x="5" y="30" width="13" height="10" rx="2" stroke="currentColor" strokeWidth="2.2"/>
      <path d="M18 13h9v22h3M27 24H18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="m16 21 3 3-3 3" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  if (type === 'docs') return (
    <svg {...common} className="skillSvg">
      <path d="M7 9h14c4 0 7 2 7 6v24c0-4-3-6-7-6H7V9Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round"/>
      <path d="M41 9H31c-2 0-3 .5-4 1.5M28 39c0-4 3-6 7-6h6V21" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="m33 25 8-8 3 3-8 8-5 2 2-5Z" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  if (type === 'data') return (
    <svg {...common} className="skillSvg">
      <path d="M7 39V25h7v14M20 39V16h7v23M33 39V9h8v30" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round"/>
      <path d="M7 43h35" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
      <path d="m8 17 7-7 6 5 10-9" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  if (type === 'human') return (
    <svg {...common} className="skillSvg">
      <path d="M7 27h8l3-8 5 16 4-11 3 3h11" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M24 42C12 35 7 27 7 18c0-6 4-10 10-10 3 0 5 1 7 4 2-3 4-4 7-4 6 0 10 4 10 10 0 9-5 17-17 24Z" stroke="currentColor" strokeWidth="2.1" strokeLinejoin="round"/>
    </svg>
  );

  if (type === 'cards') return (
    <svg {...common} className="lifestyleSvg" viewBox="0 0 64 64">
      <rect x="12" y="10" width="36" height="48" rx="5" stroke="currentColor" strokeWidth="2.5" transform="rotate(-7 30 34)"/>
      <rect x="19" y="8" width="34" height="46" rx="5" stroke="currentColor" strokeWidth="2.5" transform="rotate(5 36 31)"/>
      <circle cx="36" cy="25" r="7" fill="currentColor" opacity=".28"/>
      <path d="M25 43c5-8 17-8 22 0" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M25 49h22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  );

  if (type === 'tutor') return (
    <svg {...common} className="lifestyleSvg" viewBox="0 0 64 64">
      <rect x="8" y="9" width="48" height="31" rx="3" stroke="currentColor" strokeWidth="2.5"/>
      <path d="M22 18h20M22 25h13" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="22" cy="50" r="6" stroke="currentColor" strokeWidth="2.5"/>
      <circle cx="43" cy="50" r="6" stroke="currentColor" strokeWidth="2.5"/>
      <path d="M28 51h9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M32 40v6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  );

  return (
    <svg {...common} className="skillSvg">
      <path d="M24 5 28.5 18H42l-11 8 4.2 13L24 31l-11.2 8L17 26 6 18h13.5L24 5Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round"/>
      <path d="m19 24 3 3 7-8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
