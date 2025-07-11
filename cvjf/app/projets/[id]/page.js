import { notFound } from 'next/navigation';

const projets = [
    {
        id: 1,
        titre: "Boutique en ligne",
        description: "Application web de vente en ligne avec gestion des produits, panier et paiement avec une API REST créer à l'aide de ASP.NET Core.",
        text : "Durant ma 2ᵉ année en informatique, j'ai dû réaliser un site web de vente en ligne avec des produits provenant d'une API REST que j'ai fait à l'aide d'ASP.NET Core. Le projet était satisfaisant à réaliser, car il m'a permis de mettre en pratique mes connaissances en ASP.NET Core, React, Next.js et API REST.Nous avions également à introduire différentes fonctionnalités comme la gestion du paiement avec Stripe, la gestion d'un panier, connecter le back-end et le front-end, et utiliser JSX.",
        techno: ["ASP.NET Core", "React", "Next.js", "API REST", "Bootstrap", "Stripe"],
        lien: ["https://github.com/JFLavoie05/Projet-Prog4", "https://github.com/JFLavoie05/Projet-WEB3"],
        images: [""],
        video: "/VideoProjetBoutique.mp4" 
    },
    {
        id: 2,
        titre: "Col Net (site web) en Blazor",
        description: "Un site web immitant un site officiel d'une école ou d'un établissement produit en Blazor.",
        text : "Dans ce projet, mon coéquipier et moi avions la tâche de faire une application en utilisant Blazor. Ce projet a été particulièrement difficile, car nous devions apprendre Blazor, une manière de travailler que nous n'avions jamais fait auparavant. De plus, notre professeur refusait de nous aider et nous poussait à faire nos propres recherches, ce qui a grandement favorisé notre autonomie.",
        techno: ["Blazor", "MySQL, Linq"],
        lien: "https://github.com/DICJ/projet-colnet-jean-felix_jean-olivier_prog3",
        images: [""]
    }
];

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

            {projet.video && (
            <div className="mt-4">
                <h4>Vidéo de démonstration :</h4>
                <video controls className="w-100 rounded border mt-2">
                    <source src={projet.video} type="video/mp4" />
                    Votre navigateur ne supporte pas la lecture de vidéos.
                </video>
            </div>
            )}
        </div>
    );
}
