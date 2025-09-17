import { notFound } from 'next/navigation';
const prefix = process.env.NODE_ENV === 'production' ? '/CVJF' : '';
const projets = [
    {
        id: 1,
        titre: "Boutique en ligne",
        description: "Application web de vente en ligne avec gestion des produits, panier et paiement avec une API REST créer à l'aide de ASP.NET Core.",
        text : "Durant ma 2ᵉ année en informatique, j'ai dû réaliser un site web de vente en ligne avec des produits provenant d'une API REST que j'ai fait à l'aide d'ASP.NET Core. Le projet était satisfaisant à réaliser, car il m'a permis de mettre en pratique mes connaissances en ASP.NET Core, React, Next.js et API REST.Nous avions également à introduire différentes fonctionnalités comme la gestion du paiement avec Stripe, la gestion d'un panier, connecter le back-end et le front-end, et utiliser JSX.",
        techno: ["ASP.NET Core", "React", "Next.js", "API REST", "Bootstrap", "Stripe"],
        lien: ["https://github.com/JFLavoie05/Projet-Prog4", "https://github.com/JFLavoie05/Projet-WEB3"],
        images: [""],
        youtubeId: "v6K9ck548to"
    },
    {
        id: 2,
        titre: "Col Net (site web) en Blazor",
        description: "Un site web immitant un site officiel d'une école ou d'un établissement produit en Blazor.",
        text : "Dans ce projet, mon coéquipier et moi avons développé une application web en Blazor, imitant le site officiel d’un établissement scolaire. Ce fut un défi particulier, car nous devions apprendre à utiliser Blazor, une technologie que nous n’avions jamais abordée auparavant. L’absence d’assistance directe de notre professeur nous a poussés à effectuer nos propres recherches, ce qui a renforcé notre autonomie et notre capacité à résoudre des problèmes de manière indépendante. Durant le projet, nous avions également à construire notre propre base de donnés de A - Z et d'ensuite faire les différentes requêtes LinQ que nous avions besoins.",
        techno: ["Blazor", "MySQL, LinQ"],
        lien: "https://github.com/DICJ/projet-colnet-jean-felix_jean-olivier_prog3",
        images: [""]
    }
];

export function generateStaticParams() {
  return projets.map((projet) => ({
    id: projet.id.toString(),
  }));
}

export default function ProjetDetail({ params }) {
    const id = parseInt(params.id);
    const projet = projets.find((p) => p.id === id);

    if (!projet) {
        return notFound();
    }

    return (
        <div className="container py-5 text-light">
            <h1>{projet.titre}</h1>
            <p>{projet.description}</p>
            <p>{projet.text}</p>

            <h4>Technologies utilisées :</h4>
            <ul>
                {projet.techno.map((tech) => (
                    <li key={tech}>{tech}</li>
                ))}
            </ul>

            {projet.lien && projet.lien !== "#" && projet.id !== 1 && (
                <a href={projet.lien} target="_blank" className="btn btn-outline-light my-3">Voir sur GitHub</a>
            )}

            {projet.lien && projet.lien !== "#" && projet.id == 1 && (
                <>
                    <a href={projet.lien[0]} target="_blank" className="btn btn-outline-light my-3">Voir sur GitHub (API)</a>
                    <a href={projet.lien[1]} target="_blank" className="btn btn-outline-light my-3">Voir sur GitHub (Web)</a>
                </>
            )}

            {projet.images.filter(img => img && img.trim() !== "").length > 0 && (
                <>
                    <div className="row">
                        {projet.images.map((img, idx) => (
                            <div className="col-md-6 my-2" key={idx}>
                                <img src={img} alt={`Capture ${idx + 1}`} className="img-fluid rounded border" />
                            </div>
                        ))}
                    </div>
                </>
            )}

            {projet.youtubeId && (
                <div className="mt-4">
                <h4>Vidéo de démonstration :</h4>
                <div className="ratio ratio-16x9 mt-2 rounded border overflow-hidden">
                <iframe
                    src={`https://www.youtube.com/embed/${projet.youtubeId}?rel=0&modestbranding=1`}
                    title={`YouTube ${projet.titre}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
                </div>
                </div>
            )}
        </div>
    );
}
