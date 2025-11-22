"use client"
import Link from 'next/link';
export default function Projets() {
    const projets = [
        {
            id: 1,
            titre: "Boutique en ligne",
            description: "Application web de vente en ligne avec gestion des produits, panier et paiement avec une API REST créer à l'aide de ASP.NET Core.",
            techno: ["ASP.NET Core", "React", "Next.js", "API REST", "Bootstrap", "Stripe"],
            lien: "https://github.com/JFLavoie05/hopital-app",
        },
        {
            id: 2,
            titre: "Col Net (site web) en Blazor",
            description: "Un site web immitant un site officiel d'une école ou d'un établissement produit en Blazor.",
            techno: ["Blazor", "MySQL, Linq"],
            lien: "https://github.com/DICJ/projet-colnet-jean-felix_jean-olivier_prog3",
            images: [""]
        }
    ];

    return (
    <div className="container py-5 text-light" style={{ position: 'relative', zIndex: 1 }}>
      <div className="text-center mb-5">
        <h2 className="projects-title">MES PROJETS</h2>
        <p className="lead" style={{ color: '#b0b0b0', maxWidth: '600px', margin: '0 auto' }}>
          Découvrez mes réalisations et les technologies que j'ai utilisées
        </p>
      </div>
      <div className="row g-4">
        {projets.map((projet, index) => (
          <div className="col-md-6 mb-4" key={projet.id}>
            <div className="project-card h-100 d-flex flex-column" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="project-card-header">
                <h3 className="project-title">{projet.titre}</h3>
              </div>

              <p className="project-description">{projet.description}</p>

              <div className="tech-section">
                <span className="tech-label">Technologies</span>
                <div className="tech-tags">
                  {projet.techno.map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>

              <div className="mt-auto pt-3">
                <Link
                  href={`/projets/${projet.id}`}
                  className="project-link"
                >
                  <span>Voir plus</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
