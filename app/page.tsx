export default function Home() {
  return (
    <section
      className="
      max-w-7xl
      mx-auto
      flex
      flex-col
      items-center
      text-center
      gap-10
      "
    >
      <span
        className="
        bg-blue-100
        text-blue-600
        px-5
        py-2
        rounded-full
        font-semibold
        "
      >
        Bienvenue sur TIDO
      </span>

      <h1
        className="
        text-6xl
        font-extrabold
        "
      >
        Développons ensemble
        vos solutions numériques
      </h1>

      <p
        className="
        max-w-3xl
        text-xl
        text-gray-600
        "
      >
        Création de plateformes web,
        applications modernes,
        intelligence artificielle et
        automatisation des processus.
      </p>

      <div
        className="
        flex
        gap-5
        "
      >
        <button
          className="
          bg-blue-600
          text-white
          px-8
          py-4
          rounded-xl
          hover:scale-105
          transition
          "
        >
          Découvrir
        </button>

        <button
          className="
          border
          px-8
          py-4
          rounded-xl
          "
        >
          Contact
        </button>
      </div>
    </section>
  );
}