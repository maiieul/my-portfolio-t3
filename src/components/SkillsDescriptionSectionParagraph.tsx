import React, { useEffect, useRef } from "react";
import Typewriter from "typewriter-effect/dist/core";

export default function SkillsDescriptionSectionParagraph() {
  const typewriterRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const typewriter = new Typewriter(typewriterRef.current, {
      delay: 40,
      autoStart: true,
    });
    typewriter
      .typeString(
        "Avec mon profil international, mon expérience entrepreneuriale et mes compétences techniques dans le web,"
      )

      .start();
  }, []);
  return <p ref={typewriterRef}></p>;
}
