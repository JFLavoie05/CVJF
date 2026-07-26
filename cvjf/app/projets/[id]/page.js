import { notFound } from 'next/navigation';
import Link from 'next/link';

const projets = [
    {
        id: 4,
        titre: "Musiquer",
        description: "Application web de gestion de salle de spectacle développée durant mon stage de 14 semaines chez Phlogiciel pour le client La Nuit des Temps.",
        text: "Durant mon stage de 14 semaines chez Phlogiciel, j'ai développé Musiquer, une application web complète de gestion de salle de spectacle pour le client La Nuit des Temps. L'application permet de créer et gérer des événements avec tous leurs détails (nom, date, heure, images, description), et d'y associer des employés, artistes et promoteurs. Le système inclut une authentification complète avec gestion des comptes utilisateurs, ainsi qu'une fonctionnalité d'amis entre les comptes. Le projet m'a permis de travailler sur une application de production réelle, avec un back-end Express/Node.js connecté à une base de données PostgreSQL déployée sur un serveur, et une interface construite avec React et le template Materio.",
        techno: ["React", "Node.js", "Express", "PostgreSQL", "Materio"],
        liens: [],
        type: "Stage",
        images: [],
    },
    {
        id: 1,
        titre: "Boutique en ligne",
        description: "Application web de vente en ligne avec gestion des produits, panier et paiement avec une API REST créée à l'aide de ASP.NET Core.",
        text: "Durant ma 2ᵉ année en informatique, j'ai dû réaliser un site web de vente en ligne avec des produits provenant d'une API REST que j'ai fait à l'aide d'ASP.NET Core. Le projet était satisfaisant à réaliser, car il m'a permis de mettre en pratique mes connaissances en ASP.NET Core, React, Next.js et API REST. Nous avions également à introduire différentes fonctionnalités comme la gestion du paiement avec Stripe, la gestion d'un panier, connecter le back-end et le front-end, et utiliser JSX.",
        techno: ["ASP.NET Core", "React", "Next.js", "API REST", "Bootstrap", "Stripe"],
        liens: [
            { label: "GitHub (API)", url: "https://github.com/JFLavoie05/Projet-Prog4" },
            { label: "GitHub (Web)", url: "https://github.com/JFLavoie05/Projet-WEB3" },
        ],
        type: "Académique",
        images: [],
        youtubeId: "v6K9ck548to"
    },
    {
        id: 2,
        titre: "Col Net en Blazor",
        description: "Un site web imitant le site officiel d'un établissement scolaire, développé en Blazor avec une base de données MySQL construite de A à Z.",
        text: "Dans ce projet, mon coéquipier et moi avons développé une application web en Blazor, imitant le site officiel d'un établissement scolaire. Ce fut un défi particulier, car nous devions apprendre à utiliser Blazor, une technologie que nous n'avions jamais abordée auparavant. L'absence d'assistance directe de notre professeur nous a poussés à effectuer nos propres recherches, ce qui a renforcé notre autonomie et notre capacité à résoudre des problèmes de manière indépendante. Durant le projet, nous avions également à construire notre propre base de données de A à Z et d'ensuite faire les différentes requêtes LinQ dont nous avions besoin.",
        techno: ["Blazor", "MySQL", "LinQ"],
        liens: [
            { label: "Voir sur GitHub", url: "https://github.com/DICJ/projet-colnet-jean-felix_jean-olivier_prog3" },
        ],
        type: "Académique",
        images: [],
    },
    {
        id: 3,
        titre: "SoCal Multi Time Building",
        description: "Site web pour un client, une école de formation de pilotes d'avion en Californie spécialisée en multi-moteurs.",
        text: "J'ai développé ce site web pour un client, SoCal Multi Time Building, une école de formation de pilotes basée en Californie du Sud spécialisée dans la formation multi-moteurs. Le projet m'a permis de travailler dans un contexte professionnel avec des exigences concrètes : présentation des services de formation, des aéronefs disponibles, des tarifs et des informations de contact. C'est une expérience qui m'a confronté aux réalités du développement web pour un client, incluant la gestion des retours et la livraison d'un produit fonctionnel et déployé.",
        techno: ["Next.js", "React", "CSS"],
        liens: [
            { label: "Visiter le site", url: "https://socalmultitimebuilding.com/", primary: true },
        ],
        type: "Client",
        live: true,
        images: [],
    }
];

export function generateStaticParams() {
    return projets.map((projet) => ({
        id: projet.id.toString(),
    }));
}

export default async function ProjetDetail({ params }) {
    const resolvedParams = await params;
    const id = parseInt(resolvedParams.id);
    const projet = projets.find((p) => p.id === id);

    if (!projet) return notFound();

    return (
        <div className="projet-detail-page" style={{ position: 'relative', zIndex: 1 }}>
            <div className="container py-5 text-light">

                <Link href="/projets" className="projet-back-link">
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Retour aux projets
                </Link>

                <div className="projet-detail-header">
                    <div className="d-flex align-items-center gap-3 flex-wrap mb-3">
                        {projet.type === "Client" ? (
                            <span className="project-badge project-badge-client">Projet client</span>
                        ) : projet.type === "Stage" ? (
                            <span className="project-badge project-badge-stage">Stage · 14 semaines</span>
                        ) : (
                            <span className="project-badge project-badge-academic">Académique</span>
                        )}
                        {projet.live && (
                            <span className="project-badge project-badge-live">
                                <span className="live-dot" />
                                Live
                            </span>
                        )}
                    </div>
                    <h1 className="projet-detail-title">{projet.titre}</h1>
                    <p className="projet-detail-desc">{projet.description}</p>
                </div>

                <div className="projet-detail-grid">
                    <div className="projet-detail-main">
                        <div className="projet-detail-card">
                            <h4 className="projet-section-label">À propos du projet</h4>
                            <p className="projet-detail-text">{projet.text}</p>
                        </div>

                        {projet.youtubeId && (
                            <div className="projet-detail-card mt-4">
                                <h4 className="projet-section-label">Démonstration</h4>
                                <div className="ratio ratio-16x9 mt-3 rounded overflow-hidden projet-video">
                                    <iframe
                                        src={`https://www.youtube.com/embed/${projet.youtubeId}?rel=0&modestbranding=1`}
                                        title={`YouTube ${projet.titre}`}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    />
                                </div>
                            </div>
                        )}

                        {projet.images.length > 0 && (
                            <div className="projet-detail-card mt-4">
                                <h4 className="projet-section-label">Captures d'écran</h4>
                                <div className="row g-3 mt-2">
                                    {projet.images.map((img, idx) => (
                                        <div className="col-md-6" key={idx}>
                                            <img src={img} alt={`Capture ${idx + 1}`} className="img-fluid rounded" style={{ border: '1px solid rgba(255,255,255,0.1)' }} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="projet-detail-sidebar">
                        <div className="projet-detail-card">
                            <h4 className="projet-section-label">Technologies</h4>
                            <div className="tech-tags mt-3">
                                {projet.techno.map((tech) => (
                                    <span key={tech} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                        </div>

                        {projet.liens && projet.liens.length > 0 && (
                            <div className="projet-detail-card mt-4">
                                <h4 className="projet-section-label">Liens</h4>
                                <div className="d-flex flex-column gap-3 mt-3">
                                    {projet.liens.map((lien) => (
                                        <a
                                            key={lien.url}
                                            href={lien.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`project-link w-100 justify-content-between ${lien.primary ? 'project-link-primary' : ''}`}
                                        >
                                            <span>{lien.label}</span>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
