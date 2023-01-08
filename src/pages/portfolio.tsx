/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import dataAsso from "public/images/portfolio/data-asso.png";
import dataAssoViz from "public/images/portfolio/data-asso-viz.png";
import needForGoodDemo from "public/images/portfolio/need-for-good-demo.gif";
import community from "public/images/portfolio/community.webp";
import community2 from "public/images/portfolio/community2.webp";
import community3 from "public/images/portfolio/community3.webp";
import smartDemo from "public/images/portfolio/SMART-demo.gif";
import smartDemo3 from "public/images/portfolio/SMART-demo3.gif";

import MemoryGameMarkdown from "@/markdown/MemoryGame.mdx";
import CommunityMarkdown from "@/markdown/Community.mdx";
import SMARTMarkdown from "@/markdown/SMART.mdx";
import NeedForGoodMarkdown from "@/markdown/NeedForGood.mdx";
import SmartBrainMarkdown from "@/markdown/SmartBrain.mdx";
import DataAssoMarkdown from "@/markdown/DataAsso.mdx";

export default function Portfolio() {
  return (
    <div className="overflow-hidden py-32">
      <div className="relative mx-auto max-w-xl px-6 lg:max-w-7xl lg:px-8">
        <div className="relative">
          <h2 className=" whitespace-pre-line text-center font-serif text-4xl font-bold italic leading-8 tracking-tight text-gray-800 sm:text-5xl">
            "The only source of knowledge is experience"{"\n"}
            <span> — Albert Einstein</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl whitespace-pre-line text-center text-xl text-gray-500">
            After 5 years working on projects big and small, I feel proud of my
            experience and everything I've learned from it. Thanks to all the
            hard work I've been putting in, I've tremendously improved myself at
            designing, planning, and executing with the lean-startup
            methodology.
            {"\n"}
            {"\n"}
            <strong>
              <u>Tips:</u>
            </strong>{" "}
            you can interact with a few projects directly on this page.
          </p>
        </div>

        <div className="relative mt-12 sm:mt-16 lg:mt-24">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:items-center lg:gap-24">
            <div className="lg:order-2">
              <div className="prose mt-3 text-gray-500">
                <SMARTMarkdown />
              </div>
            </div>

            <div className="flex flex-col items-center ">
              <Image
                src={smartDemo}
                alt="Data Asso website"
                className="mt-6 h-72 w-auto -rotate-3 cursor-pointer rounded-lg bg-zinc-100 object-cover dark:bg-zinc-800"
              />
              <Image
                src={smartDemo3}
                alt="Data Asso website"
                className=" mt-6 h-72 w-auto -rotate-3 cursor-pointer rounded-lg bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-24">
          <div className="">
            <div className="prose mt-3 text-gray-500">
              <DataAssoMarkdown />
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
              <div className="prose mt-3 text-gray-500">
                <CommunityMarkdown />
              </div>
            </div>

            <div>
              <div className="flex justify-center">
                <Image
                  src={community}
                  alt="need for good app demo"
                  className=" h-[600px] w-auto rotate-1 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                />
              </div>
              <div className="mt-5 flex justify-center">
                <Image
                  src={community2}
                  alt="need for good app demo"
                  className=" h-[600px] w-auto -rotate-1 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                />
              </div>
              <div className="mt-5 flex justify-center">
                <Image
                  src={community3}
                  alt="need for good app demo"
                  className=" h-[600px] w-auto rotate-1 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-24">
          <div className="">
            <div className="prose mt-3 text-gray-500">
              <NeedForGoodMarkdown />
            </div>
          </div>

          <Image
            src={needForGoodDemo}
            alt="need for good app demo"
            className="mt-10 h-72 w-auto -rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800 lg:mt-0"
          />
        </div>

        <div className="relative mt-12 sm:mt-16 lg:mt-24">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:items-center lg:gap-24">
            <div className="lg:order-2">
              <div className="prose mt-3 text-gray-500">
                <SmartBrainMarkdown />
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
            <div className="prose mt-3 text-gray-500">
              <MemoryGameMarkdown />
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
