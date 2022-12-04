/* eslint-disable react/no-unescaped-entities */

import CodingChallenge14 from "@/markdown/CodingChallenge14.mdx";
import Image from "next/image";
import dataAsso from "public/images/portfolio/data-asso.png";
import dataAssoViz from "public/images/portfolio/data-asso-viz.png";

export default function Portfolio() {
  return (
    <div className="overflow-hidden py-32">
      <div className="relative mx-auto max-w-xl px-6 lg:max-w-7xl lg:px-8">
        <div className="relative">
          <h2 className=" whitespace-pre-line text-center font-serif text-3xl font-bold italic leading-8 tracking-tight text-gray-800 sm:text-4xl">
            The only source of knowledge is experience{"\n"}
            <span> — Albert Einstein</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl whitespace-pre-line text-center text-xl text-gray-500">
            After 5 years of web development, I feel proud of my experience and
            what I've learned from it. Having worked on big and small
            entrepreneurial projects, I've tremendously improved myself at
            designing, planning, and developing in an agile and lean-startup
            way.
            {"\n"}
            {"\n"}
            <strong>
              <u>Tips:</u>
            </strong>{" "}
            you can interact with a few projects directly on this page.
          </p>
        </div>

        <div className="mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-24">
          <div className="">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
              Coding Challenge 14 — ZTM
            </h3>
            <div className="prose mt-3 text-lg text-gray-500">
              <CodingChallenge14 />
            </div>
          </div>

          <div className="mt-6 flex justify-center rounded-lg bg-white shadow-[0.5px_0.5px_10px_rgba(0,0,0,0.3)]">
            <div className="relative h-[700px] w-full overflow-hidden">
              <iframe
                src="https://maieulchevalier.github.io/coding-challenge-14/"
                title="Coding Challenge 14"
                className=" absolute top-0 left-0 h-[700px] w-full overflow-hidden"
                scrolling="no"
              />
            </div>
          </div>
        </div>

        <div className="relative mt-12 sm:mt-16 lg:mt-24">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:items-center lg:gap-24">
            <div className="lg:order-2">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                Coding Challenge 14 — ZTM
              </h3>
              <div className="prose mt-3 text-lg text-gray-500">
                <CodingChallenge14 />
              </div>
            </div>

            <div className="mt-6 flex justify-center rounded-lg bg-white shadow-[0.5px_0.5px_10px_rgba(0,0,0,0.3)]">
              <div className="relative h-[700px] w-full overflow-hidden">
                <iframe
                  src="https://smart-steel.vercel.app/"
                  title="3D geo app POC"
                  className=" absolute top-0 left-0 h-[700px] w-full overflow-hidden"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-24">
          <div className="">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
              Coding Challenge 14 — ZTM
            </h3>
            <div className="prose mt-3 text-lg text-gray-500">
              <CodingChallenge14 />
            </div>
          </div>

          <div>
            <div className="mt-6 flex rotate-3 cursor-pointer items-center justify-center rounded-lg bg-white p-2 shadow-[0.5px_0.5px_10px_rgba(0,0,0,0.3)]">
              <Image
                src={dataAsso}
                alt="Data Asso website"
                className="w-auto bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
            <div className="mt-6 flex rotate-3 cursor-pointer items-center justify-center rounded-lg bg-white p-2 shadow-[0.5px_0.5px_10px_rgba(0,0,0,0.3)]">
              <Image
                src={dataAssoViz}
                alt="Data Asso website"
                className="w-auto bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
        </div>

        <div className="relative mt-12 sm:mt-16 lg:mt-24">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:items-center lg:gap-24">
            <div className="lg:order-2">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                Coding Challenge 14 — ZTM
              </h3>
              <div className="prose mt-3 text-lg text-gray-500">
                <CodingChallenge14 />
              </div>
            </div>

            <div className="mt-6 flex justify-center rounded-lg bg-white shadow-[0.5px_0.5px_10px_rgba(0,0,0,0.3)]">
              <div className="relative h-[720px] w-full overflow-hidden">
                <iframe
                  src="https://portfolio-smart-brain-boost.vercel.app/"
                  title="smart-brain app"
                  className=" absolute top-0 left-0 h-[720px] w-full overflow-hidden"
                  scrolling="no"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-24">
          <div className="">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
              Coding Challenge 14 — ZTM
            </h3>
            <div className="prose mt-3 text-lg text-gray-500">
              <CodingChallenge14 />
            </div>
          </div>

          <div className="mt-6 flex justify-center rounded-lg bg-white shadow-[0.5px_0.5px_10px_rgba(0,0,0,0.3)]">
            <div className="relative h-[700px] w-full overflow-hidden">
              <iframe
                src="https://maieulchevalier.github.io/coding-challenge-14/"
                title="Coding Challenge 14"
                className=" absolute top-0 left-0 h-[700px] w-full overflow-hidden"
                scrolling="no"
              />
            </div>
          </div>
        </div>

        <div className="relative mt-12 sm:mt-16 lg:mt-24">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:items-center lg:gap-24">
            <div className="lg:order-2">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                Coding Challenge 14 — ZTM
              </h3>
              <div className="prose mt-3 text-lg text-gray-500">
                <CodingChallenge14 />
              </div>
            </div>

            <div className="mt-6 flex justify-center rounded-lg bg-white shadow-[0.5px_0.5px_10px_rgba(0,0,0,0.3)]">
              <div className="relative h-[700px] w-full overflow-hidden">
                <iframe
                  src="https://smart-steel.vercel.app/"
                  title="3D geo app POC"
                  className=" absolute top-0 left-0 h-[700px] w-full overflow-hidden"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-24">
          <div className="">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
              Coding Challenge 14 — ZTM
            </h3>
            <div className="prose mt-3 text-lg text-gray-500">
              <CodingChallenge14 />
            </div>
          </div>

          <div className="mt-6 flex justify-center rounded-lg bg-white shadow-[0.5px_0.5px_10px_rgba(0,0,0,0.3)]">
            <div className="relative h-[700px] w-full overflow-hidden">
              <iframe
                src="https://maieulchevalier.github.io/coding-challenge-14/"
                title="Coding Challenge 14"
                className=" absolute top-0 left-0 h-[700px] w-full overflow-hidden"
                scrolling="no"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
