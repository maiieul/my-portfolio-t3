/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { Transition } from "@headlessui/react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import { LinkedInIcon } from "public/icons/LinkedinIcon";
import { EnvelopeIcon } from "@heroicons/react/24/solid";

import thinking from "public/images/thinking.gif";
import MeSummary from "@/markdown/MeSummary.mdx";
import BasicNotification from "@/components/BasicNotification";

import { EmailLink } from "@/components/EmailLink";

export default function About() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <>
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
                <li className="flex">
                  <Link
                    href="https://www.linkedin.com/in/maieul-c-087655138/"
                    className="group flex font-medium text-zinc-800 transition  hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-400"
                  >
                    <LinkedInIcon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-blue-400" />

                    <span className="ml-4">
                      Reach out to me on Linkedin
                      <ArrowTopRightOnSquareIcon className="ml-1 inline h-3 w-3" />
                    </span>
                  </Link>
                </li>
                <li className="mt-4 flex">
                  <EmailLink className="group flex cursor-pointer font-medium text-zinc-800 transition  hover:text-red-400 dark:text-red-400 dark:hover:text-red-400">
                    <EnvelopeIcon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-red-400" />
                    <span className="ml-4">Send me an email</span>
                    <span>
                      <ArrowTopRightOnSquareIcon className="ml-1 inline h-3 w-3" />
                    </span>
                  </EmailLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Transition>
      <BasicNotification text="Email copied to clipboard" />
    </>
  );
}
