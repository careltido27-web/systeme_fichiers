import Link from "next/link";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* HEADER */}
      <header className="header">

        <div className="logo">
          TIDO
        </div>

        <nav className="navbar">
          <Link href="/site/acceuil">Accueil</Link>
          <Link href="/site/services">Services</Link>
          <Link href="/site/blog">Blog</Link>
          <Link href="/site/contact">Contact</Link>
        </nav>

        <Link
          href="/site/formulaire"
          className="btn-header"
        >
          Commencer
        </Link>

      </header>

      {/* CONTENU */}
      <main className="main-content">
        {children}
      </main>

      {/* FOOTER */}
      <footer className="footer">

        <div className="footer-container">

          <div>
            <h3>TIDO</h3>

            <p>
              Développement Web,
              Intelligence Artificielle,
              Cloud Computing.
            </p>
          </div>

          <div>
            <h3>Navigation</h3>

            <ul>
              <li>Accueil</li>
              <li>Services</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3>Contact</h3>

            <p>contact@tido.com</p>

            <p>+237 600 00 00 00</p>

            <p>Douala - Cameroun</p>
          </div>

        </div>

        <div className="copyright">
          © 2026 TIDO Solutions
        </div>

      </footer>
    </>
  );
}