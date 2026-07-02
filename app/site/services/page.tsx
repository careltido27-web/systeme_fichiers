export default function Services() {
  return (
    <section className="w-full">

      <div
        className="
        h-[450px]
        bg-cover
        bg-center
        flex
        items-center
        justify-center
        relative
        "
        style={{
          backgroundImage:
            "url('/images/services-banner.PNG')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <h1
          className="
          relative
          text-white
          text-6xl
          font-bold
          z-10
          "
        >
          Nos Services
        </h1>
      </div>

      <div
        className="
        max-w-7xl
        mx-auto
        py-24
        px-6
        "
      >
        <div
          className="
          grid
          md:grid-cols-3
          gap-10
          "
        >
          <div
            className="
            bg-white
            p-10
            rounded-3xl
            shadow-xl
            hover:-translate-y-2
            transition
            "
          >
            <h2 className="text-2xl font-bold mb-4">
              Développement Web
            </h2>

            <p className="text-gray-600">
              Création de plateformes web
              modernes avec Next.js,
              React et TypeScript.
            </p>
          </div>

          <div
            className="
            bg-white
            p-10
            rounded-3xl
            shadow-xl
            hover:-translate-y-2
            transition
            "
          >
            <h2 className="text-2xl font-bold mb-4">
              Intelligence Artificielle
            </h2>

            <p className="text-gray-600">
              Développement de solutions IA,
              automatisation et chatbots.
            </p>
          </div>

          <div
            className="
            bg-white
            p-10
            rounded-3xl
            shadow-xl
            hover:-translate-y-2
            transition
            "
          >
            <h2 className="text-2xl font-bold mb-4">
              Cloud & Data
            </h2>

            <p className="text-gray-600">
              Déploiement sécurisé,
              bases de données et cloud.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}