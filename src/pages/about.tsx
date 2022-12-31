/* eslint-disable react/no-unescaped-entities */
import type { ElementType, ReactNode } from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import clsx from "clsx";

import { LinkedInIcon } from "public/icons/LinkedinIcon";
import { EnvelopeIcon } from "@heroicons/react/24/solid";

import thinking from "public/images/thinking.gif";
import { Transition } from "@headlessui/react";
import MeSummary from "@/markdown/MeSummary.mdx";

interface SocialLinkProps {
  className?: string;
  href: string;
  children: ReactNode;
  icon: ElementType;
  onClick?: () => void;
}

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: SocialLinkProps): JSX.Element {
  return (
    <li className={clsx(className, "flex")}>
      <Link
        href={href}
        className="group flex font-medium text-zinc-800 transition hover:text-red-500 dark:text-red-500 dark:hover:text-red-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-red-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  );
}

export default function About() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <Transition
      show={show}
      enter="transition-opacity duration-1000"
      enterFrom="opacity-0"
      enterTo="opacity-100"
    >
      <Head>
        <title>About - Maieul Chevalier</title>
        <meta
          name="description"
          content="Je m'appelle Maïeul et j'essaie de résoudre des gros problèmes."
        />
      </Head>
      <div className="min-w-screen flex justify-center">
        <div className="grid max-w-6xl grid-cols-1 gap-y-16 px-8 py-20 md:grid-cols-2 md:grid-rows-[auto_1fr] md:gap-y-12 md:px-16 md:py-24">
          <div className="hidden md:block md:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={thinking}
                alt=""
                className="h-72 w-auto rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="prose md:order-first md:row-span-2">
            <MeSummary />
          </div>
          <div className="md:ml-20">
            <ul role="list">
              {/* <SocialLink href="#" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink> */}
              <SocialLink
                href="https://www.linkedin.com/in/maieul-c-087655138/"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Reach out to me on Linkedin
              </SocialLink>
              <SocialLink
                href="mailto:maieul.chevalier@gmail.com"
                icon={EnvelopeIcon}
                className="mt-4"
                onClick={() =>
                  navigator.clipboard.writeText("maieul.chevalier@gmail.com")
                }
              >
                maieul.chevalier@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </div>
    </Transition>
  );
}
