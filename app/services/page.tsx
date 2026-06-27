export default function Services() {
  return (
   <section
  className="
    max-w-7xl
    mx-auto
    min-h-screen
    px-6
    py-16
  "
>
      <h1
        className="
        text-5xl
        font-bold
        text-center
        mb-30
        "
      >
        Nos Services
      </h1>

      <div
        className="
        grid
        md:grid-cols-3
        gap-20
        mb-50
        "
      >
        <div
          className="
          bg-white
          p-10
          rounded-3xl
          shadow-xl
          hover:-translate-y-3
          transition
          "
        >
          <h2>Développement Web</h2>

          <p>
            Création de sites et applications
            professionnelles.
          </p>
        </div>

        <div
          className="
          bg-white
          p-10
          rounded-3xl
          shadow-xl
          hover:-translate-y-3
          transition
          "
        >
          <h2>Intelligence Artificielle</h2>

          <p>
            Intégration d'outils IA avancés.
          </p>
        </div>

        <div
          className="
          bg-white
          p-10
          rounded-3xl
          shadow-xl
          hover:-translate-y-3
          transition
          "
        >
          <h2>Cloud & Bases de données</h2>

          <p>
            Déploiement sécurisé et scalable.
          </p>
        </div>
      </div>
    </section>
  );
}