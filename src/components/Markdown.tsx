import type { ReactNode } from "react";

export const Markdown = ({ children }: { children: ReactNode }) => (
  <>{children}</>
);
const H1 = () => (
  <>
    <h1 className="text-center text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl md:text-left"></h1>
  </>
);

const H2 = () => (
  <>
    <h2 className="text-center text-xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-2xl md:text-left"></h2>
  </>
);

const H3 = () => (
  <>
    <h2 className="text-center text-lg font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-xl md:text-left"></h2>
  </>
);

const P = () => (
  <>
    <p className="text-justify font-bold tracking-tight text-zinc-800 dark:text-zinc-100 md:text-left"></p>
  </>
);

Markdown.H1 = H1;
Markdown.H2 = H2;
Markdown.H3 = H3;
Markdown.P = P;
