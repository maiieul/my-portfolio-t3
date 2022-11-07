import React, { useEffect, useRef } from "react";
import Typewriter from "typewriter-effect/dist/core";

export default function HomeTypewriterMain() {
  const typewriterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const typewriter = new Typewriter(typewriterRef.current, {
      delay: 30,
      autoStart: true,
      cursor: "",
    });
    typewriter
      .pauseFor(5000)
      .typeString(
        "Avec mon profil international, mon expérience entrepreneuriale et mes compétences techniques dans le web, je peux vous aider à construire votre projet web à fort potentiel et augmenter vos chances de succès.<br>"
      )
      .pauseFor(500)
      .typeString("Mes services :<br>")
      .pauseFor(500)
      .typeString(
        "- 👨‍💻 Compréhension de l'écosystème technique actuel (bases de données, serveurs, APIs, frameworks, bibliothèques, etc.) + choix de la stack<br>"
      )
      .pauseFor(500)
      .typeString("- 📱 Construction d'un MVP<br>")
      .pauseFor(500)
      .typeString("- 📊 Développement d'une solution web/mobile sur mesure<br>")
      .pauseFor(500)
      .typeString(
        "- 📈 Mise en place d'un système Lean Startup + workshops<br>"
      )
      .pauseFor(500)
      .typeString("- 📚 Mise en place d'un système Agile + workshops<br>")
      .start();
  }, []);
  return (
    <span
      ref={typewriterRef}
      className="py-1 text-base font-normal text-gray-800"
    />
  );
}
