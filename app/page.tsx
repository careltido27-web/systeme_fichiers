"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import Input from "@/composants/input";
import Button from "@/composants/button";


export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    if (!email || !password) {
      alert("Veuillez remplir tous les champs");
      return;
    }

    router.push("/site/accueil");
  }

  return (
    <main
      className="
      min-h-screen
      flex
      items-center
      justify-center
      px-6
      bg-linear-to-br
      from-slate-900
      via-blue-900
      to-indigo-900
      "
    >
      <div
        className="
        w-3xl
        max-w-md
        bg-white
        rounded-3xl
        p-10
        shadow-2xl
        "
      >
        <div className="text-center mb-8">
          <div
            className="
            w-20
            h-20
            mx-auto
            mb-5
            rounded-full
            bg-blue-600
            flex
            items-center
            justify-center
            text-white
            text-3xl
            font-bold
            "
          >
            T
          </div>

          <h1
            className="
            text-4xl
            font-bold
            text-slate-800
            mb-2
            "
          >
            Connexion
          </h1>

          <p className="text-slate-500">
            Accédez à votre espace TIDO
          </p>
        </div>

        <form
          onSubmit={handleLogin}
          className="
          flex
          flex-col
          gap-5
          "
        >
          <Input
            type="email"
            placeholder="Adresse email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <Input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <Button titre="Se connecter" type="submit" />
        </form>

        <div
          className="
          mt-8
          text-center
          text-sm
          text-slate-500
          "
        >
          © 2026 TIDO Solutions
        </div>
      </div>
    </main>
  );
}