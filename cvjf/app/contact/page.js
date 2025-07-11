export default function Contact() {
  return (
    <div className="container text-light py-5 text-center">
      <h1 className="mb-3">Contact</h1>
      <p className="lead mb-4">Vous pouvez me contacter par e-mail ou sur LinkedIn.</p>

      <a href="/CV-Jean-Félix-Lavoie-2025.pdf" download className="btn btn-outline-light rounded-pill px-4 py-2 mb-5 fw-medium">
        📄 Télécharger mon CV
      </a>

      <div className="d-flex justify-content-center gap-4">
        <a href="https://www.linkedin.com/in/jean-f%C3%A9lix-lavoie-16aa94371/" target="_blank" rel="noopener noreferrer">
          <img src="/images/linkedin.png" alt="LinkedIn" className="contact-icon" />
        </a>
        <a href="https://github.com/JFLavoie05" target="_blank" rel="noopener noreferrer">
          <img src="/images/github.png" alt="GitHub" className="contact-icon" />
        </a>
        <a href="mailto:jeanfelix.lavoie@hotmail.com">
          <img src="/images/email.png" alt="Email" className="contact-icon" />
        </a>
      </div>
    </div>
  );
}