"use client"

export default function Contact() {
  return (
    <div className="container text-light py-5" style={{ position: 'relative', zIndex: 1 }}>
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">Contactez-moi</h2>
          <p className="contact-subtitle">
            N'hésitez pas à me contacter pour discuter de projets ou d'opportunités
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-cta">
            <a
              href="/CV_JeanFelix_Lavoie_2025.pdf"
              download
              className="cv-download-btn"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="cv-icon"
              >
                <path d="M12 15V3M12 15L8 11M12 15L16 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L2 19C2 20.1046 2.89543 21 4 21L20 21C21.1046 21 22 20.1046 22 19L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span>Télécharger mon CV</span>
            </a>
          </div>

          <div className="contact-divider">
            <span>Ou rejoignez-moi sur</span>
          </div>

          <div className="contact-social-grid">
            <a
              href="https://www.linkedin.com/in/jean-f%C3%A9lix-lavoie-16aa94371/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-card linkedin-card"
            >
              <img src="/images/linkedin.png" alt="LinkedIn" className="contact-icon" />
              <div className="social-card-info">
                <h4>LinkedIn</h4>
                <p>Réseau professionnel</p>
              </div>
            </a>

            <a
              href="https://github.com/JFLavoie05"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-card github-card"
            >
              <img src="/images/github.png" alt="GitHub" className="contact-icon" />
              <div className="social-card-info">
                <h4>GitHub</h4>
                <p>Projets et code</p>
              </div>
            </a>

            <a
              href="mailto:jeanfelix.lavoie@hotmail.com"
              className="contact-social-card email-card"
            >
              <img src="/images/email.png" alt="Email" className="contact-icon" />
              <div className="social-card-info">
                <h4>Email</h4>
                <p>Contact direct</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}