"use client";

import { useState } from "react";
import { createClient } from "@/libs/supabase/client";

export default function Home() {
  const supabase = createClient();

  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);

    const { error } = await supabase
      .from("contacts")
      .insert({
        nom,
        email,
        telephone,
        message,
      });

    setLoading(false);

    if (error) {
      alert("Erreur : " + error.message);
      console.error(error);
      return;
    }

    alert("Informations enregistrées avec succès");

    setNom("");
    setEmail("");
    setTelephone("");
    setMessage("");
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <form
        onSubmit={handleSubmit}
        className="w-[100px] h-[500px] max-w-lg bg-white p-4 m-2 rounded-xl shadow-lg space-y-4 mx-auto"
      >
        <h1 className="text-2xl font-bold text-center">
          FORMULAIRE De RENDEZ-VOUS
        </h1>
        <h4 className="text-lg font-semibold text-center">
          Veuillez remplir le formulaire ci-dessous pour prendre rendez-vous.
        </h4>
        <h4 className="text-lg font-semibold text-center">
          Nous vous contacterons dans les plus brefs délais.
        </h4>

        <input
          type="text"
          placeholder="Prenom"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          required
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="text"
          placeholder="Téléphone"
          value={telephone}
          onChange={(e) => setTelephone(e.target.value)}
          className="w-full border p-3 rounded-lg"
        />

        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          className="w-full border p-3 rounded-lg"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white p-3 rounded-lg"
        >
          {loading ? "Envoi..." : "Envoyer"}
        </button>
      </form>
    </main>
  );
}