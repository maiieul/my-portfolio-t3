/* eslint-disable @next/next/no-img-element */
import { Fragment, useState } from "react";
import { Transition, Dialog } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import clsx from "clsx";
import profilePicture from "../../public/images/profile-picture.webp";
import Image from "next/image";
import { useRouter } from "next/router";

import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t } = useTranslation();
  console.log("t", t("nav.skills"));
  const router = useRouter();

  const [open, setOpen] = useState(false);
  console.log("router", router);

  function closePanel() {
    setOpen(false);
  }

  const links = {
    about: (
      <Link
        href="about-me"
        className={clsx(
          "cursor-pointer rounded-md px-2 font-medium",
          router.pathname === "/about-me"
            ? "font-medium text-gray-600 underline"
            : "font-medium text-black hover:text-gray-600 hover:underline"
        )}
      >
        {t("nav.about")}
      </Link>
    ),
    skills: (
      <Link
        href="skills"
        className={clsx(
          "cursor-pointer rounded-md px-2 font-medium",
          router.pathname === "/skills"
            ? "font-medium text-gray-600 underline"
            : "font-medium text-black hover:text-gray-600 hover:underline"
        )}
      >
        {t("nav.skills")}
      </Link>
    ),
    portfolio: (
      <Link
        href="portfolio"
        className={clsx(
          "cursor-pointer rounded-md px-2 font-medium",
          router.pathname === "/portfolio"
            ? "font-medium text-gray-600 underline"
            : "font-medium text-black hover:text-gray-600 hover:underline"
        )}
      >
        {t("nav.portfolio")}
      </Link>
    ),
    blog: (
      <Link
        href="blog"
        className={clsx(
          "cursor-pointer rounded-md px-2 font-medium",
          router.pathname === "/blog"
            ? "font-medium text-gray-600 underline"
            : "font-medium text-black hover:text-gray-600 hover:underline"
        )}
      >
        {t("nav.blog")}
      </Link>
    ),
  };

  return (
    <>
      <nav className="flex justify-center">
        <div className="absolute z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Image
                  className="h-8 w-8 cursor-pointer rounded-full"
                  src={profilePicture}
                  alt="Picture of me"
                  onClick={() => router.push("/")}
                />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {links.about}
                  {links.skills}
                  {links.portfolio}
                  {links.blog}
                </div>
              </div>
            </div>
            <div className="-mr-2 flex sm:hidden">
              {/* Mobile menu button */}
              <button
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/* Mobile menu, show/hide based on menu state. */}
      <div>
        <Transition.Root show={open} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closePanel}>
            <div className="fixed inset-0" />
            <div className="fixed inset-0 overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                  <Transition.Child
                    as={Fragment}
                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                    enterFrom="translate-x-full"
                    enterTo="translate-x-0"
                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                    leaveFrom="translate-x-0"
                    leaveTo="translate-x-full"
                  >
                    <Dialog.Panel className="pointer-events-auto w-screen max-w-xs">
                      <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                        <div className="px-4 sm:px-6">
                          <div className="flex items-start justify-between">
                            <Dialog.Title className="text-lg font-medium text-gray-900"></Dialog.Title>
                            <div className="ml-3 flex h-7 items-center">
                              <button
                                type="button"
                                className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                onClick={() => setOpen(false)}
                              >
                                <span className="sr-only">Close panel</span>
                                <XMarkIcon
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                />
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="mt-2" onClick={() => setOpen(false)}>
                          {links.about}
                        </div>
                        <div className="mt-2" onClick={() => setOpen(false)}>
                          {links.skills}
                        </div>
                        <div className="mt-2" onClick={() => setOpen(false)}>
                          {links.portfolio}
                        </div>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      </div>
    </>
  );
}
