import React, { useEffect, useRef } from "react";
import Typewriter from "typewriter-effect/dist/core";

export default function HomeTypewriterSubtitle() {
  const typewriterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const typewriter = new Typewriter(typewriterRef.current, {
      delay: 30,
      autoStart: true,
      cursor: "",
    });
    typewriter
      .pauseFor(3000)
      .typeString(
        "Avec mon profil international, mon expérience entrepreneuriale et mes compétences en développement web,"
      )
      .pauseFor(600)
      .typeString(
        " je peux vous aider à voir l'ensemble du tableau et ainsi minimiser les risques d'échecs à toute étape de votre projet."
      )
      .start();
  }, []);
  return (
    <span
      ref={typewriterRef}
      className="text-xl font-medium text-gray-800 sm:text-2xl md:text-3xl"
    />
  );
}
