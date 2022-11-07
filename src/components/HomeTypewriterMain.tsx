import React, { useEffect, useRef } from "react";
import Typewriter from "typewriter-effect/dist/core";

export default function HomeTypewriterMain() {
  const typewriterRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const typewriter = new Typewriter(typewriterRef.current, {
      delay: 30,
      autoStart: true,
      cursor: "",
    });
    typewriter
      .pauseFor(6000)
      .typeString(
        "Avec mon profil international, mon expérience entrepreneuriale et mes compétences techniques dans le web,"
      )
      .pauseFor(800)
      .typeString(
        " je peux vous aider à construire votre projet web à fort potentiel et à augmenter vos chances de succès.<br><br>"
      )
      .pauseFor(1000)
      .typeString("<u>Mes services :</u><br>")
      .pauseFor(1000)
      .typeString(
        "<ul class='list-disc pl-4'><li>Workshop compréhension de l'écosystème technique actuel (bases de données, serveurs, APIs, frameworks, bibliothèques, etc.) + choix de la stack</li></ul>"
      )
      .pauseFor(1000)
      .typeString(
        "<ul class='list-disc pl-4'><li>Construction d'un MVP</li></ul>"
      )
      .pauseFor(1000)
      .typeString(
        "<ul class='list-disc pl-4'><li>Développement d'une solution web/mobile sur mesure (web app, API, UI/UX, etc.)</li></ul>"
      )
      .pauseFor(1000)
      .typeString(
        "<ul class='list-disc pl-4'><li>Mise en place d'un système Lean Startup + workshops</li></ul>"
      )
      .pauseFor(1000)
      .typeString(
        "<ul class='list-disc pl-4'><li>Mise en place d'un système Agile + workshops</li></ul>"
      )
      .pauseFor(1000)
      .typeString(
        "<ul class='list-disc pl-4'><li>Mise au point de votre stratégie marketing + branding</li></ul>"
      )
      .pauseFor(1000)
      .typeString(
        "<ul class='list-disc pl-4'><li>Internationalisation</li></ul>"
      )
      .pauseFor(1000)
      .typeString("<br><u>TJM:</u> 250€")
      .start();
  }, []);
  return (
    <ul
      ref={typewriterRef}
      className="py-1 text-base font-normal text-gray-800"
    />
  );
}
