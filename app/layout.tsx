import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "TIDO Website",
  description: "Site multi-pages Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <header className="header">
  <div className="logo">
    TIDO
  </div>

  <nav className="navbar">
    <Link href="/">Accueil</Link>
    <Link href="/services">Services</Link>
    <Link href="/blog">Blog</Link>
    <Link href="/contact">Contact</Link>
  </nav>

  <button className="cta-button">
    Commencer
  </button>
</header>

        <main className="main-content">
          {children}
        </main>

        <footer className="footer">
  <div className="footer-grid">

    <div>
      <h3>TIDO</h3>
      <p>
        Solutions Web, IA et Développement
        moderne.
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
    </div>

  </div>

  <div className="copyright">
    © 2026 TIDO
  </div>
</footer>
      </body>
    </html>
  );
}