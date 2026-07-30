'use client'
import { useState } from 'react';
import Link from 'next/link';

const links = [
  { href: '/', label: 'Accueil' },
  { href: '/competences', label: 'Compétences' },
  { href: '/projets', label: 'Projets' },
  { href: '/contact', label: 'Contact' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav-header">
      <button
        className="nav-toggle"
        onClick={() => setOpen((o) => !o)}
        aria-label="Ouvrir le menu"
        aria-expanded={open}
      >
        <span className={`nav-toggle-bar ${open ? 'nav-toggle-bar-top' : ''}`} />
        <span className={`nav-toggle-bar ${open ? 'nav-toggle-bar-hidden' : ''}`} />
        <span className={`nav-toggle-bar ${open ? 'nav-toggle-bar-bottom' : ''}`} />
      </button>
      <nav className={`nav-links ${open ? 'nav-links-open' : ''}`}>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="nav-link"
            onClick={() => setOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
