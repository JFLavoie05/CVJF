"use client"

export default function Competences() {
  const competencesData = [
    {
      title: "Compétences informatiques",
      items: [
        { label: "Système d'exploitation", value: "Windows, Windows Server, Linux (Ubuntu)" },
        { label: "Environnement", value: ".NET, Visual Studio, Visual Studio Code, VMware" },
        { label: "Langages de programmation", value: "C#, JavaScript, HTML, CSS, C++" },
        { label: "Frameworks", value: "jQuery, Bootstrap, SASS, React, Next.js" },
        { label: "Game engine", value: "Unreal Engine" },
        { label: "Serveurs", value: "IIS, DHCP, Active Directory, DNS, Fichiers, Docker" },
        { label: "Outils collaboratifs", value: "Microsoft 365 (Teams, OneDrive, Zoom, Discord)" }
      ]
    },
    {
      title: "Développement et soutien applicatif",
      items: [
        { value: "Utiliser des langages de programmation" },
        { value: "Résoudre des problèmes d'informatique avec les mathématiques" },
        { value: "Exploiter les principes de la programmation orientée objet" },
        { value: "Explorer un système de gestion de base de données" },
        { value: "Rédiger le développement d'applications natives avec base de données" },
        { value: "Effectuer le développement d'applications Web non transactionnelles" },
        { value: "Effectuer le développement d'applications Web transactionnelles" },
        { value: "Collaborer à la conception d'applications" }
      ]
    },
    {
      title: "Fonctions en milieu de travail",
      items: [
        { value: "Analyser les besoins, effectuer l'analyse fonctionnelle" },
        { value: "Effectuer la modélisation (traitement, logique, scénarios, etc.)" },
        { value: "Rédiger la documentation technique" },
        { value: "Développer, tester, corriger et déployer le code" },
        { value: "Maintenir les applications : correction, investigations, modifications" }
      ]
    },
    {
      title: "Intégration au milieu du travail",
      items: [
        { value: "Traiter l'information liée au travail" },
        { value: "Déploiement de serveurs, sécurité, réseaux" },
        { value: "Applications natives / Web / BD" },
        { value: "Adaptation aux technologies et collaboration" }
      ]
    }
  ];

  return (
    <div className="container text-light pt-5 mt-5" style={{ position: 'relative', zIndex: 1 }}>
      <div className="text-center mb-5">
        <h2 className="competences-main-title">MES COMPÉTENCES</h2>
        <p className="lead" style={{ color: '#b0b0b0', maxWidth: '700px', margin: '0 auto' }}>
          Un aperçu de mes compétences techniques et professionnelles
        </p>
      </div>

      <section className="competences-grid">
        {competencesData.map((section, index) => (
          <div key={index} className="competence-card" style={{ animationDelay: `${index * 0.1}s` }}>
            <h3 className="competence-card-title">{section.title}</h3>
            <ul className="competence-list">
              {section.items.map((item, idx) => (
                <li key={idx} className="competence-item">
                  {item.label ? (
                    <>
                      <span className="competence-label">{item.label}:</span>{" "}
                      <span className="competence-value">{item.value}</span>
                    </>
                  ) : (
                    <span className="competence-value">{item.value}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
}
