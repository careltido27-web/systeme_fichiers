export default function Blog() {
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
            "url('/images/blog-banner.PNG')",
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
          Blog & Actualités
        </h1>
      </div>

      <div
        className="
        max-w-7xl
        mx-auto
        py-24
        px-6
        grid
        md:grid-cols-3
        gap-10
        "
      >
        <article
          className="
          bg-white
          rounded-3xl
          shadow-xl
          overflow-hidden
          "
        >
          <div className="h-56 bg-blue-200"></div>

          <div className="p-8">
            <h2 className="text-2xl font-bold mb-4">
              Next.js 15
            </h2>

            <p className="text-gray-600">
              Les nouveautés du framework
              React moderne.
            </p>
          </div>
        </article>

        <article
          className="
          bg-white
          rounded-3xl
          shadow-xl
          overflow-hidden
          "
        >
          <div className="h-56 bg-indigo-200"></div>

          <div className="p-8">
            <h2 className="text-2xl font-bold mb-4">
              TypeScript
            </h2>

            <p className="text-gray-600">
              Sécuriser son code grâce au
              typage statique.
            </p>
          </div>
        </article>

        <article
          className="
          bg-white
          rounded-3xl
          shadow-xl
          overflow-hidden
          "
        >
          <div className="h-56 bg-cyan-200"></div>

          <div className="p-8">
            <h2 className="text-2xl font-bold mb-4">
              Intelligence Artificielle
            </h2>

            <p className="text-gray-600">
              Les tendances IA en 2025.
            </p>
          </div>
        </article>
      </div>

    </section>
  );
}