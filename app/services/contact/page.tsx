export default function Contact() {
  return (
    <section
      className="
      bg-white
      p-12
      rounded-3xl
      shadow-2xl
      max-w-3xl
      w-full
      "
    >
      <h1
        className="
        text-5xl
        font-bold
        mb-10
        "
      >
        Contactez-nous
      </h1>

      <form
        className="
        space-y-6
        "
      >
        <input
          type="text"
          placeholder="Votre nom"
          className="
          w-full
          p-4
          border
          rounded-xl
          "
        />

        <input
          type="email"
          placeholder="Votre email"
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
          "
        >
          Envoyer le message
        </button>
      </form>
    </section>
  );
}