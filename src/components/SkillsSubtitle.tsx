import clsx from "clsx";
import React from "react";

export default function SkillsSubtitle({
  subtitle,
  className,
}: {
  subtitle: string;
  className?: string;
}) {
  return (
    <h2
      className={clsx(
        className,
        "mt-6 text-xl font-semibold text-gray-800 sm:mt-0"
      )}
    >
      {subtitle}
    </h2>
  );
}
