import Link from "next/link";

const basePath = process.env.NODE_ENV === 'production' ? '/CVJF' : '';

export default function Home() {
  return (
    <main className="home d-flex flex-column justify-content-center align-items-center text-center min-vh-100">
      <div className="profile-container mb-4">
        <Link href="/contact">
        <img src={`${basePath}/images/Photo JF 1.jpg`} alt="Jean-Félix Lavoie" className="profile-img" />
        </Link>
      </div>

      <h1 className="display-3 fw-bold text-white">Jean-Félix Lavoie</h1>
      <p className="fs-5">Finissant en technique de l'informatique</p>
    </main>
  );
}
