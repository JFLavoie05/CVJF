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
    <div className="container py-5 text-light">
      <h1 className="mb-4">MES PROJETS</h1>
      <div className="row">
        {projets.map((projet) => (
          <div className="col-md-6 mb-4" key={projet.id}>
            <Link href={`/projets/${projet.id}`} className="text-decoration-none">
              <div className="card p-4 bg-dark text-light h-100">
                <h5>{projet.titre}</h5>
                <p>{projet.description}</p>
                <strong>Technologies : </strong>
                <ul>
                  {projet.techno.map((techno) => (
                    <li key={techno}>{techno}</li>
                  ))}
                </ul>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
