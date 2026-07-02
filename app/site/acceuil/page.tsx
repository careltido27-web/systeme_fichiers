import Link from "next/link";

export default function Home() {
  return (
    <section>

      {/* HERO SECTION */}

      <div
        className="
          relative
          min-h-screen
          bg-cover
          bg-center
          flex
          items-center
          justify-center
        "
        style={{
          backgroundImage:
            "url('/images/hero-bg.PNG')",
        }}
      >
        {/* Overlay */}

        <div
          className="
            absolute
            inset-0
            bg-black/70
          "
        />

        {/* Contenu */}

        <div
          className="
            relative
            z-10
            max-w-7xl
            mx-auto
            px-6
            text-center
          "
        >
          <span
            className="
              inline-block
              px-6
              py-3
              rounded-full
              bg-blue-600/20
              text-blue-300
              border
              border-blue-400/30
              font-semibold
              mb-8
            "
          >
            🚀 Solutions Digitales Nouvelle Génération
          </span>

          <h1
            className="
              text-white
              text-5xl
              md:text-7xl
              font-extrabold
              leading-tight
              mb-8
            "
          >
            Développons ensemble
            <br />
            votre avenir numérique
          </h1>

          <p
            className="
              text-xl
              text-gray-200
              max-w-3xl
              mx-auto
              mb-12
              leading-relaxed
            "
          >
            Nous concevons des applications web modernes,
            des plateformes intelligentes et des solutions
            cloud capables d'accompagner la croissance
            de votre entreprise.
          </p>

          <div
            className="
              flex
              flex-col
              sm:flex-row
              justify-center
              gap-6
            "
          >
            <Link
              href="/services"
              className="
                bg-blue-600
                text-white
                px-10
                py-4
                rounded-xl
                font-bold
                hover:bg-blue-700
                transition
              "
            >
              Découvrir nos services
            </Link>

            <Link
              href="/contact"
              className="
                bg-white
                text-gray-900
                px-10
                py-4
                rounded-xl
                font-bold
                hover:bg-gray-100
                transition
              "
            >
              Nous contacter
            </Link>
          </div>

          {/* Statistiques */}

          <div
            className="
              grid
              grid-cols-2
              md:grid-cols-4
              gap-6
              mt-20
            "
          >
            <div
              className="
                bg-white/10
                backdrop-blur-md
                rounded-2xl
                p-6
              "
            >
              <h3 className="text-4xl font-bold text-white">
                150+
              </h3>

              <p className="text-gray-300">
                Projets réalisés
              </p>
            </div>

            <div
              className="
                bg-white/10
                backdrop-blur-md
                rounded-2xl
                p-6
              "
            >
              <h3 className="text-4xl font-bold text-white">
                80+
              </h3>

              <p className="text-gray-300">
                Clients satisfaits
              </p>
            </div>

            <div
              className="
                bg-white/10
                backdrop-blur-md
                rounded-2xl
                p-6
              "
            >
              <h3 className="text-4xl font-bold text-white">
                24/7
              </h3>

              <p className="text-gray-300">
                Assistance
              </p>
            </div>

            <div
              className="
                bg-white/10
                backdrop-blur-md
                rounded-2xl
                p-6
              "
            >
              <h3 className="text-4xl font-bold text-white">
                99%
              </h3>

              <p className="text-gray-300">
                Disponibilité
              </p>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}