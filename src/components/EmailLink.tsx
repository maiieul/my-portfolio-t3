import type { ReactNode } from "react";

import { showNotificationAtom } from "@/state/notifications";
import { useAtom } from "jotai";
import React from "react";

export function EmailLink({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const [, setShowNotification] = useAtom(showNotificationAtom);
  return (
    <a
      className={className}
      onClick={() => {
        window.navigator.clipboard.writeText("maieul.chevalier@gmail.com");
        setShowNotification(true);
      }}
    >
      {children}
    </a>
  );
}
