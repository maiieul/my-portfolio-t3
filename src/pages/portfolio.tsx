/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import dataAsso from "public/images/portfolio/data-asso.png";
import dataAssoViz from "public/images/portfolio/data-asso-viz.png";
import needForGoodDemo from "public/images/portfolio/need-for-good-demo.gif";
import community from "public/images/portfolio/community.webp";
import community2 from "public/images/portfolio/community2.webp";
import community3 from "public/images/portfolio/community3.webp";
import smartDemo from "public/images/portfolio/SMART-demo.gif";

import MemoryGameMarkdown from "@/markdown/MemoryGame.mdx";
import CommunityMarkdown from "@/markdown/Community.mdx";
import SMARTMarkdown from "@/markdown/SMART.mdx";
import NeedForGoodMarkdown from "@/markdown/NeedForGood.mdx";
import SmartBrainMarkdown from "@/markdown/SmartBrain.mdx";
import DataAssoMarkdown from "@/markdown/DataAsso.mdx";

export default function Portfolio() {
  return (
    <div className="overflow-hidden py-16">
      <div className="relative mx-auto max-w-xl px-3 lg:max-w-7xl lg:px-8">
        <div className="relative sm:mt-12 lg:mt-16">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:items-center lg:gap-24">
            <div className="lg:order-2">
              <div className="prose mt-3 text-gray-500">
                <SMARTMarkdown />
              </div>
            </div>

            <div className="flex flex-col items-center ">
              <a href="https://smart-steel.vercel.app/">
                <Image
                  src={smartDemo}
                  alt="Data Asso website"
                  className="mt-6 h-72 w-auto -rotate-3 cursor-pointer rounded-lg bg-zinc-100 object-cover dark:bg-zinc-800"
                />
              </a>
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
              <a href="https://data-asso.fr">
                <Image
                  src={dataAsso}
                  alt="Data Asso website"
                  className="w-auto bg-zinc-100 object-cover dark:bg-zinc-800"
                />
              </a>
            </div>
            <div className="mt-6 flex rotate-3 cursor-pointer items-center justify-center rounded-lg bg-white p-2 shadow-[0.5px_0.5px_10px_rgba(0,0,0,0.3)]">
              <a href="https://data-asso.fr">
                <Image
                  src={dataAssoViz}
                  alt="Data Asso website"
                  className="w-auto bg-zinc-100 object-cover dark:bg-zinc-800"
                />
              </a>
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

          <a href="https://need-for-good.vercel.app/">
            <Image
              src={needForGoodDemo}
              alt="need for good app demo"
              className="mt-10 h-72 w-auto -rotate-3 cursor-pointer rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800 lg:mt-0"
            />
          </a>
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
                  className=" absolute left-0 top-0 h-[720px] w-full overflow-hidden"
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
                className=" absolute left-0 top-0 h-[700px] w-full overflow-hidden"
                scrolling="no"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
