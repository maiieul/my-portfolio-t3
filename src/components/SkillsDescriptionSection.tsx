import type { ReactNode } from "react";

export default function SkillsDescriptionSection({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      {children}
    </div>
  );
}
