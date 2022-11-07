import React, { useEffect, useRef } from "react";
import Typewriter from "typewriter-effect/dist/core";

export default function HomeTypewriterTitle() {
  const typewriterRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const typewriter = new Typewriter(typewriterRef.current, {
      delay: 30,
      autoStart: true,
      cursor: "",
    });
    typewriter
      .typeString("Une vision à 360° pour faire décoller vos projets 🚀")
      .start();
  }, []);
  return (
    <div className="max-w-2xl">
      <span
        className="mt-14 max-w-2xl text-center text-4xl font-bold text-gray-800 sm:text-5xl md:text-6xl"
        ref={typewriterRef}
      />
    </div>
  );
}
