import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import Link from 'next/link';

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <title>CV Jean-Félix Lavoie</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet"></link>
      </head>
      <body>
        <header className="nav-header d-flex justify-content-center gap-5 py-4 px-3 border-bottom border-dark">
          <Link href="/" className="nav-link">Accueil</Link>
          <Link href="/competences" className="nav-link">Compétences</Link>
          <Link href="/projets" className="nav-link">Projets</Link>
          <Link href="/contact" className="nav-link">Contact</Link>
        </header>
        {children}
      </body>
    </html>
  );
}
