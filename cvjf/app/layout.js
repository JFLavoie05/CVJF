import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import CircularFavicon from './CircularFavicon';
import Nav from './Nav';

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <title>CV Jean-Félix Lavoie</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet"></link>
      </head>
      <body>
        <CircularFavicon src="/images/jf drawing 3.png" />
        <Nav />
        {children}
      </body>
    </html>
  );
}
