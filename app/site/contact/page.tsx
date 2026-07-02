export default function Contact() {
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
            "url('/images/contact-banner.PNG')",
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
          Contactez-nous
        </h1>
      </div>

      <div
        className="
        max-w-3xl
        mx-auto
        py-24
        px-6
        "
      >
        <form
          className="
          bg-white
          p-10
          rounded-3xl
          shadow-2xl
          space-y-6
          "
        >
          <input
            type="text"
            placeholder="Nom complet"
            className="
            w-full
            p-4
            border
            rounded-xl
            "
          />

          <input
            type="email"
            placeholder="Adresse email"
            className="
            w-full
            p-4
            border
            rounded-xl
            "
          />

          <textarea
            rows={6}
            placeholder="Votre message"
            className="
            w-full
            p-4
            border
            rounded-xl
            "
          />

          <button
            className="
            w-full
            bg-blue-600
            text-white
            py-4
            rounded-xl
            font-bold
            hover:bg-blue-700
            transition
            "
          >
            Envoyer
          </button>
        </form>
      </div>

    </section>
  );
}