"use client"
import Link from 'next/link';

const projets = [
    {
        id: 3,
        titre: "SoCal Multi Time Building",
        description: "Site web pour un client, une école de formation de pilotes d'avion en Californie spécialisée en multi-moteurs. Le site présente les services de formation, les aéronefs disponibles et les tarifs.",
        techno: ["Next.js", "React", "CSS"],
        lien: "https://socalmultitimebuilding.com/",
        type: "Client",
        featured: true,
    },
    {
        id: 4,
        titre: "Musiquer",
        description: "Application web de gestion de salle de spectacle développée durant mon stage de 14 semaines chez Phlogiciel pour le client La Nuit des Temps.",
        techno: ["React", "Node.js", "Express", "PostgreSQL", "Materio"],
        type: "Stage",
    },
    {
        id: 1,
        titre: "Boutique en ligne",
        description: "Application web de vente en ligne avec gestion des produits, panier et paiement avec une API REST créée à l'aide de ASP.NET Core.",
        techno: ["ASP.NET Core", "React", "Next.js", "API REST", "Bootstrap", "Stripe"],
        lien: "https://github.com/JFLavoie05/hopital-app",
        type: "Académique",
    },
    {
        id: 2,
        titre: "Col Net en Blazor",
        description: "Un site web imitant le site officiel d'un établissement scolaire, développé en Blazor avec une base de données MySQL construite de A à Z.",
        techno: ["Blazor", "MySQL", "LinQ"],
        lien: "https://github.com/DICJ/projet-colnet-jean-felix_jean-olivier_prog3",
        type: "Académique",
    }
];

export default function Projets() {
    const featured = projets.find(p => p.featured);
    const others = projets.filter(p => !p.featured);

    return (
        <div className="container py-5 text-light" style={{ position: 'relative', zIndex: 1 }}>
            <div className="text-center mb-5">
                <h2 className="projects-title">MES PROJETS</h2>
                <p className="lead" style={{ color: '#b0b0b0', maxWidth: '600px', margin: '0 auto' }}>
                    Découvrez mes réalisations et les technologies que j'ai utilisées
                </p>
            </div>

            {featured && (
                <div className="mb-5">
                    <div className="project-card project-card-featured d-flex flex-column flex-md-row gap-4">
                        <div className="featured-accent" />
                        <div className="d-flex flex-column flex-grow-1">
                            <div className="d-flex align-items-center gap-3 mb-3 flex-wrap">
                                <span className="project-badge project-badge-client">Projet client</span>
                                <span className="project-badge project-badge-live">
                                    <span className="live-dot" />
                                    Live
                                </span>
                            </div>
                            <h3 className="project-title mb-2">{featured.titre}</h3>
                            <p className="project-description">{featured.description}</p>
                            <div className="tech-section">
                                <span className="tech-label">Technologies</span>
                                <div className="tech-tags">
                                    {featured.techno.map((t) => (
                                        <span key={t} className="tech-tag">{t}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="mt-auto pt-3 d-flex gap-3 flex-wrap">
                                <a
                                    href={featured.lien}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-link project-link-primary"
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                                        <path d="M12 2C12 2 8 7 8 12C8 17 12 22 12 22" stroke="currentColor" strokeWidth="2"/>
                                        <path d="M12 2C12 2 16 7 16 12C16 17 12 22 12 22" stroke="currentColor" strokeWidth="2"/>
                                        <path d="M2 12H22" stroke="currentColor" strokeWidth="2"/>
                                    </svg>
                                    <span>Visiter le site</span>
                                </a>
                                <Link href={`/projets/${featured.id}`} className="project-link">
                                    <span>Voir plus</span>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="row g-4">
                {others.map((projet, index) => (
                    <div className="col-md-6 mb-4" key={projet.id}>
                        <div className="project-card h-100 d-flex flex-column" style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className="d-flex align-items-center gap-2 mb-3">
                                {projet.type === "Stage" ? (
                                    <span className="project-badge project-badge-stage">Stage</span>
                                ) : (
                                    <span className="project-badge project-badge-academic">Académique</span>
                                )}
                            </div>
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
                                <Link href={`/projets/${projet.id}`} className="project-link">
                                    <span>Voir plus</span>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.5 15L12.5 10L7.5  5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
