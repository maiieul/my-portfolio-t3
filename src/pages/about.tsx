/* eslint-disable react/no-unescaped-entities */
import { Fragment } from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { Transition } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import {
  ArrowTopRightOnSquareIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import { LinkedInIcon } from "public/icons/LinkedinIcon";
import { EnvelopeIcon } from "@heroicons/react/24/solid";

import thinking from "public/images/thinking.gif";
import MeSummary from "@/markdown/MeSummary.mdx";

export default function About() {
  const [show, setShow] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  if (showNotification) {
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  }

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
                  <div
                    className="group flex cursor-pointer font-medium text-zinc-800 transition  hover:text-red-400 dark:text-red-400 dark:hover:text-red-400"
                    onClick={() => {
                      setShowNotification(true);
                      navigator.clipboard.writeText(
                        "maieul.chevalier@gmail.com"
                      );
                    }}
                  >
                    <EnvelopeIcon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-red-400" />
                    <span className="ml-4">Send me an email</span>
                    <span>
                      <ArrowTopRightOnSquareIcon className="ml-1 inline h-3 w-3" />
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Transition>
      <>
        {/* Global notification live region, render this permanently at the end of the document */}
        <div
          aria-live="assertive"
          className="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"
        >
          <div className="flex h-full w-full items-end justify-end space-y-4">
            {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
            <Transition
              show={showNotification}
              as={Fragment}
              enter="transform ease-out duration-300 transition"
              enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
              enterTo="translate-y-0 opacity-100 sm:translate-x-0"
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="p-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <CheckCircleIcon
                        className="h-6 w-6 text-green-400"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="ml-3 w-0 flex-1 pt-0.5">
                      <p className="text-sm font-medium text-gray-900">
                        Email copied to clipboard
                      </p>
                    </div>
                    <div className="ml-4 flex flex-shrink-0">
                      <button
                        type="button"
                        className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        onClick={() => {
                          setShowNotification(false);
                        }}
                      >
                        <span className="sr-only">Close</span>
                        <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Transition>
          </div>
        </div>
      </>
    </>
  );
}
