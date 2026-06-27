export default function Blog() {
  return (
    <section
      className="
      max-w-6xl
      mx-auto
      "
    >
      <h1
        className="
        text-5xl
        font-bold
        mb-12
        "
      >
        Derniers Articles
      </h1>

      <div
        className="
        grid
        md:grid-cols-2
        gap-8
        "
      >
        <article
          className="
          bg-white
          rounded-3xl
          overflow-hidden
          shadow-xl
          "
        >
          <div className="h-48 bg-blue-200"></div>

          <div className="p-6">
            <h2 className="text-2xl font-bold">
              Découverte de Next.js
            </h2>

            <p className="text-gray-600 mt-4">
              Comprendre le framework React moderne.
            </p>
          </div>
        </article>

        <article
          className="
          bg-white
          rounded-3xl
          overflow-hidden
          shadow-xl
          "
        >
          <div className="h-48 bg-indigo-200"></div>

          <div className="p-6">
            <h2 className="text-2xl font-bold">
              Tailwind CSS
            </h2>

            <p className="text-gray-600 mt-4">
              Construire rapidement des interfaces.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}