/* eslint-disable react/no-unescaped-entities */
import type { ReactNode } from "react";
import type { StaticImageData } from "next/image";

import { useState, useEffect, useRef } from "react";
import Typewriter from "typewriter-effect/dist/core";
import Image from "next/image";
import { Rating } from "react-simple-star-rating";
import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid";
import { Transition } from "@headlessui/react";
import clsx from "clsx";

import javascript from "../../public/images/skills/javascript.png";
import typescript from "../../public/images/skills/typescript.svg";
import python from "../../public/images/skills/python.png";
import php from "../../public/images/skills/php.png";
import html from "../../public/images/skills/HTML5.png";
import xml from "../../public/images/skills/xml.svg";
import css from "../../public/images/skills/CSS3.png";
import sass from "../../public/images/skills/sass.svg";
import tailwind from "../../public/images/skills/tailwind.svg";
import materialui from "../../public/images/skills/materialui.svg";
import bootstrap from "../../public/images/skills/bootstrap.svg";
import react from "../../public/images/skills/react.png";
import next from "../../public/images/skills/next.svg";
import vue from "../../public/images/skills/vue.svg";
import nuxt from "../../public/images/skills/nuxt.svg";
import svelte from "../../public/images/skills/svelte.svg";
import solid from "../../public/images/skills/solid.svg";
import trpc from "../../public/images/skills/trpc.svg";

import graphQL from "../../public/images/skills/graphql.png";
import REST from "../../public/images/skills/REST.svg";
import postgreSQL from "../../public/images/skills/postgreSQL.svg";
import mySQL from "../../public/images/skills/mySQL.svg";
import neo4j from "../../public/images/skills/neo4j.png";
import mongoDB from "../../public/images/skills/mongoDB.png";
import redis from "../../public/images/skills/redis.png";
import elasticSearch from "../../public/images/skills/elasticSearch.svg";
import GCP from "../../public/images/skills/GCP.svg";
import AWS from "../../public/images/skills/aws.png";
import docker from "../../public/images/skills/docker.svg";
import kubernetes from "../../public/images/skills/kubernetes.png";
import firebase from "../../public/images/skills/firebase.png";
import supabase from "../../public/images/skills/supabase.png";
import planetscale from "../../public/images/skills/planetscale.svg";
import ddos from "../../public/images/skills/DDOS.webp";
import xss from "../../public/images/skills/XSS.webp";
import unitTest from "../../public/images/skills/unitTest.svg";
import integrationTest from "../../public/images/skills/integrationTest.svg";
import endToEndTests from "../../public/images/skills/end-to-end-tests.png";
import git from "../../public/images/skills/git.svg";
import github from "../../public/images/skills/github.svg";
import gitlab from "../../public/images/skills/gitlab.svg";
import VSCode from "../../public/images/skills/vscode.png";
import vim from "../../public/images/skills/vim.svg";
import nano from "../../public/images/skills/nano.svg";

import leanStartup from "../../public/images/skills/lean-startup.svg";
import agile from "../../public/images/skills/agile.svg";
import kanban from "../../public/images/skills/kanban.svg";
import gantt from "../../public/images/skills/gantt.svg";
import trello from "../../public/images/skills/trello.svg";
import jira from "../../public/images/skills/jira.svg";
import clickup from "../../public/images/skills/clickup.svg";
import notion from "../../public/images/skills/notion.svg";
import mindomo from "../../public/images/skills/mindomo.webp";
import gitmind from "../../public/images/skills/gitmind.webp";
import xmind from "../../public/images/skills/xmind.webp";
import processOn from "../../public/images/skills/processon.webp";

import SEO from "../../public/images/skills/SEO.svg";
import content from "../../public/images/skills/content.webp";
import ABTesting from "../../public/images/skills/ab-testing.svg";
import googleAnalytics from "../../public/images/skills/google-analytics.svg";
import googleAds from "../../public/images/skills/google-ads.webp";
import facebookAds from "../../public/images/skills/megaphone.svg";

import trademarkLaw from "../../public/images/skills/registered.png";
import corporateLaw from "../../public/images/skills/signPaper.png";
import labourLaw from "../../public/images/skills/labourLaw.png";
import contractLaw from "../../public/images/skills/contractLaw.webp";

import englishFlag from "../../public/images/skills/englishFlag.png";
import frenchFlag from "../../public/images/skills/frenchFlag.png";
import chineseFlag from "../../public/images/skills/chineseFlag.png";
import germanFlag from "../../public/images/skills/germanFlag.png";
import esperantoFlag from "../../public/images/skills/esperantoFlag.png";
import spanishFlag from "../../public/images/skills/spanishFlag.png";

// Ajouter du texte sur chaque section
// Ajouter "Soft Skills (Searching, Communicating, Teaching, Prototyping)

const programmingLanguages = [
  {
    name: "Javascript",
    level: 4,
    image: javascript,
  },
  {
    name: "Typescript",
    level: 3.5,
    image: typescript,
  },
  {
    name: "Python",
    level: 1,
    image: python,
  },
  {
    name: "PHP",
    level: 1,
    image: php,
  },
];

const markupLanguages = [
  {
    name: "HTML",
    level: 4.5,
    image: html,
  },
  {
    name: "XML",
    level: 3,
    image: xml,
  },
];

const UXUI = [
  {
    name: "CSS",
    level: 3.5,
    image: css,
  },
  {
    name: "SASS",
    level: 3.5,
    image: sass,
  },
  {
    name: "TailwindCSS",
    level: 5,
    image: tailwind,
  },
  {
    name: "TailwindUI",
    level: 5,
    image: tailwind,
  },
  {
    name: "MaterialUI",
    level: 5,
    image: materialui,
  },
  {
    name: "Bootstrap",
    level: 4,
    image: bootstrap,
  },
];
const frameworks = [
  {
    name: "React",
    level: 4,
    image: react,
  },
  {
    name: "NextJS",
    level: 4,
    image: next,
  },
  {
    name: "Vue",
    level: 3.5,
    image: vue,
  },
  {
    name: "NuxtJS",
    level: 3.5,
    image: nuxt,
  },
  {
    name: "Svelte",
    level: 3.5,
    image: svelte,
  },
  {
    name: "SvelteKit",
    level: 3.5,
    image: svelte,
  },
  {
    name: "Solid",
    level: 3,
    image: solid,
  },
  {
    name: "SolidStart",
    level: 3,
    image: solid,
  },
];
const APIs = [
  {
    name: "GraphQL",
    level: 4.5,
    image: graphQL,
  },
  {
    name: "REST",
    level: 4,
    image: REST,
  },
  {
    name: "TRPC",
    level: 4,
    image: trpc,
  },
];
const databases = [
  {
    name: "PostgreSQL",
    level: 4,
    image: postgreSQL,
  },
  {
    name: "MySQL",
    level: 4,
    image: mySQL,
  },
  {
    name: "Neo4j",
    level: 5,
    image: neo4j,
  },
  {
    name: "MongoDB",
    level: 4,
    image: mongoDB,
  },
  {
    name: "Redis",
    level: 5,
    image: redis,
  },
  {
    name: "ElasticSearch",
    level: 1,
    image: elasticSearch,
  },
];
const devops = [
  {
    name: "Google Cloud",
    level: 3.5,
    image: GCP,
  },
  {
    name: "AWS",
    level: 3.5,
    image: AWS,
  },
  {
    name: "Docker",
    level: 3.5,
    image: docker,
  },
  {
    name: "Kubernetes",
    level: 1.5,
    image: kubernetes,
  },
  {
    name: "Firebase",
    level: 3,
    image: firebase,
  },
  {
    name: "Supabase",
    level: 3,
    image: supabase,
  },
  {
    name: "PlanetScale",
    level: 5,
    image: planetscale,
  },
];
const security = [
  {
    name: "DDoS Prevention",
    level: 3.5,
    image: ddos,
  },
  {
    name: "XSS Prevention",
    level: 3,
    image: xss,
  },
];
const testing = [
  {
    name: "unit tests",
    level: 2.5,
    image: unitTest,
  },
  {
    name: "integration tests",
    level: 2.5,
    image: integrationTest,
  },
  {
    name: "end-to-end tests",
    level: 3,
    image: endToEndTests,
  },
];
const versionControl = [
  {
    name: "Git",
    level: 4,
    image: git,
  },
  {
    name: "GitHub",
    level: 4,
    image: github,
  },
  {
    name: "GitLab",
    level: 4,
    image: gitlab,
  },
];
const codeEditors = [
  {
    name: "VSCode",
    level: 4,
    image: VSCode,
  },
  {
    name: "Vim",
    level: 2,
    image: vim,
  },
  {
    name: "Nano",
    level: 3,
    image: nano,
  },
];

const projectManagement = [
  {
    name: "Lean Startup",
    level: 4.5,
    image: leanStartup,
  },
  {
    name: "Agile methodology",
    level: 4,
    image: agile,
  },
  {
    name: "Kanban",
    level: 5,
    image: kanban,
  },
  {
    name: "Gantt",
    level: 4,
    image: gantt,
  },
  {
    name: "Trello",
    level: 4,
    image: trello,
  },
  {
    name: "Jira",
    level: 2,
    image: jira,
  },
  {
    name: "ClickUp",
    level: 4.5,
    image: clickup,
  },
  {
    name: "Notion",
    level: 3.5,
    image: notion,
  },
  {
    name: "Mindomo",
    level: 5,
    image: mindomo,
  },
  {
    name: "Gitmind",
    level: 5,
    image: gitmind,
  },
  {
    name: "Xmind",
    level: 4.5,
    image: xmind,
  },
  {
    name: "ProcessOn",
    level: 5,
    image: processOn,
  },
];

const marketing = [
  {
    name: "SEO",
    level: 2.5,
    image: SEO,
  },
  {
    name: "Content",
    level: 4,
    image: content,
  },
  {
    name: "A/B Testing",
    level: 4,
    image: ABTesting,
  },
  {
    name: "GA",
    level: 3,
    image: googleAnalytics,
  },
  {
    name: "Google Ads",
    level: 3,
    image: googleAds,
  },
  {
    name: "Facebook Ads",
    level: 3,
    image: facebookAds,
  },
];

const law = [
  {
    name: "Trademark law",
    level: 4,
    image: trademarkLaw,
  },
  {
    name: "Labour Law",
    level: 3,
    image: labourLaw,
  },
  {
    name: "Contract law",
    level: 3,
    image: contractLaw,
  },
  {
    name: "Corporate law",
    level: 3,
    image: corporateLaw,
  },
];

const languages = [
  {
    name: "French",
    level: 5,
    image: frenchFlag,
  },
  {
    name: "English",
    level: 5,
    image: englishFlag,
  },
  {
    name: "Chinese",
    level: 5,
    image: chineseFlag,
  },
  {
    name: "German",
    level: 3,
    image: germanFlag,
  },
  {
    name: "Esperanto",
    level: 2,
    image: esperantoFlag,
  },
  {
    name: "Spanish",
    level: 1,
    image: spanishFlag,
  },
];

interface Skill {
  name: string;
  level: number;
  image: string | StaticImageData;
}

function DescriptionSection({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-full flex-col items-center justify-center font-serif text-lg">
      {children}
    </div>
  );
}

function DescriptionSectionTitle({
  subtitle,
  className,
}: {
  subtitle: string;
  className?: string;
}) {
  return (
    <h2
      className={clsx(className, "mt-6 text-2xl font-semibold text-gray-800")}
    >
      {subtitle}
    </h2>
  );
}

function SkillsCardsList({
  skills,
  className,
}: {
  skills: Skill[];
  className?: string;
}) {
  return (
    <ul
      role="list"
      className={clsx(
        className,
        "flex grid-cols-1 flex-wrap justify-center pt-6 transition sm:grid-cols-2 lg:grid-cols-4"
      )}
    >
      {skills.map((skill: Skill, i: number) => (
        <li
          key={skill.name}
          className={clsx(
            (() => {
              if ((i + 1) % 2 === 0) {
                return "translate-x-10 min-[528px]:translate-x-0";
              } else {
                return " -translate-x-10 min-[528px]:-translate-x-0";
              }
            })(),
            "m-3 min-w-[200px] cursor-pointer rounded-lg bg-white shadow transition duration-300 ease-in-out hover:scale-105"
          )}
          // style={{ minWidth: "200px" }}
        >
          <div className="flex items-center justify-between space-x-4 p-4">
            <Image
              className="h-10 w-10 flex-shrink-0 rounded-lg"
              src={skill.image}
              alt="Picture of me"
            />
            <div className="flex-1 truncate">
              <div className="flex flex-col items-start justify-start">
                <h3 className="truncate text-sm font-normal text-gray-900">
                  {skill.name}
                </h3>
                <Rating
                  readonly={true}
                  initialValue={skill.level}
                  allowFraction={true}
                  fillIcon={<StarIconSolid className="inline-block h-5 w-5" />}
                  fillColor="black"
                  emptyIcon={<StarIconSolid className="inline-block h-5 w-5" />}
                  /* Available Props */
                />
              </div>
              {/* <div className="flex">{skill.level}</div> */}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

function DescriptionSectionTypewriter({
  textToBeTyped,
}: {
  textToBeTyped: string;
}) {
  const typewriterRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const typewriter = new Typewriter(typewriterRef.current, {
      delay: 40,
      autoStart: true,
      cursor: "",
    });
    typewriter
      .typeString(textToBeTyped)

      .start();
  }, [textToBeTyped]);
  return <p ref={typewriterRef} className="pt-2"></p>;
}

export default function Skills() {
  const [show, setShow] = useState(false);

  const devWebRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <Transition
      show={show}
      enter="transition-opacity duration-500"
      enterFrom="opacity-0"
      enterTo="opacity-100"
    >
      <div className="flex items-center justify-center">
        <div className="w-full max-w-7xl px-10 py-16 text-center">
          <h2
            ref={devWebRef}
            className="mb-3 pt-6 text-4xl font-semibold sm:text-5xl"
          >
            Web development
          </h2>
          <div>
            <DescriptionSection>
              <DescriptionSectionTitle subtitle="Programming languages" />
              <DescriptionSectionTypewriter textToBeTyped="I love using typescript for the safety nets it provides." />
            </DescriptionSection>
            <SkillsCardsList skills={programmingLanguages} />
          </div>
          <hr className="m-auto mt-12 mb-12 w-1/2" />
          <div>
            <DescriptionSection>
              <DescriptionSectionTitle subtitle="Markup" />
              <p className="pt-3">
                <span className="font-medium text-sky-600">&#60;</span>
                <span className="text-red-700">p</span>
                <span className="font-medium text-sky-600">&#62;</span>
                HTML is more powerful than what most people think.
                <span className="font-medium text-sky-600">&#60;</span>
                <span className="text-red-700 ">p</span>
                <span className="font-medium text-sky-600">&#62;</span>
              </p>
            </DescriptionSection>
            <SkillsCardsList
              className="sm:order-first"
              skills={markupLanguages}
            />
          </div>
          <hr className="m-auto mt-12 mb-12 w-1/2" />
          <div>
            <DescriptionSection>
              <DescriptionSectionTitle subtitle="UI" />
              <p className="pt-3 font-serif italic">Tailwind Rocks!</p>
            </DescriptionSection>
            <SkillsCardsList skills={UXUI} />
          </div>
          <hr className="m-auto mt-12 mb-12 w-1/2" />
          <div>
            <DescriptionSection>
              <DescriptionSectionTitle subtitle="Frameworks" />
              <p className="pt-3">
                <span className="font-medium text-sky-600">&#60;</span>
                <span className="text-yellow-500">WhoWins</span>
                <span className="font-medium text-sky-600">&#62;</span>
                React's still my favorite for its rich ecosystem. I can use Vue
                if needed. I find Svelte beautiful to write. Solid is really
                solid.
                <span className="font-medium text-sky-600">&#60;/</span>
                <span className="text-yellow-500">WhoWins</span>
                <span className="font-medium text-sky-600">&#62;</span>
              </p>
            </DescriptionSection>
            <SkillsCardsList className="sm:order-first" skills={frameworks} />
          </div>
          <hr className="m-auto mt-12 mb-12 w-1/2" />
          <div>
            <DescriptionSection>
              <DescriptionSectionTitle subtitle="APIs" />
              <p className="pt-3">tRPC is incredible for starting up!</p>
            </DescriptionSection>
            <SkillsCardsList skills={APIs} />
          </div>
          <hr className="m-auto mt-12 mb-12 w-1/2" />
          <div>
            <DescriptionSection>
              <DescriptionSectionTitle subtitle="Databases" />
              <p className="pt-3">
                Relational, graph, document or key/value stores, I know them
                pretty well.
              </p>
            </DescriptionSection>
            <SkillsCardsList className="sm:order-first" skills={databases} />
          </div>
          <hr className="m-auto mt-12 mb-12 w-1/2" />
          <div>
            <DescriptionSection>
              <DescriptionSectionTitle subtitle="DevOps" />
              <p className="pt-3">
                I cut my teeth on AWS but recently got seduced by serverless.
              </p>
            </DescriptionSection>
            <SkillsCardsList skills={devops} />
          </div>
          <hr className="m-auto mt-12 mb-12 w-1/2" />
          <div>
            <DescriptionSection>
              <DescriptionSectionTitle subtitle="Security" />
            </DescriptionSection>
            <SkillsCardsList className="sm:order-first" skills={security} />
          </div>
          <hr className="m-auto mt-12 mb-12 w-1/2" />
          <div>
            <DescriptionSection>
              <DescriptionSectionTitle subtitle="Testing" />
              <p className="pt-3">
                Testing isn't my greatest strength. I believe 98% of bugs can be
                avoided with typescript and trpc.
              </p>
            </DescriptionSection>
            <SkillsCardsList skills={testing} />
          </div>
          <hr className="m-auto mt-12 mb-12 w-1/2" />
          <div>
            <DescriptionSection>
              <DescriptionSectionTitle subtitle="Version Control" />
            </DescriptionSection>
            <SkillsCardsList
              className="sm:order-first"
              skills={versionControl}
            />
          </div>
          <hr className="m-auto mt-12 mb-12 w-1/2" />
          <div>
            <DescriptionSection>
              <DescriptionSectionTitle subtitle="Code editors" />
            </DescriptionSection>
            <SkillsCardsList skills={codeEditors} />
          </div>
          <hr className="m-auto mt-12 mb-12 w-1/2" />
          <div>
            <h2 className="pt-12 text-4xl font-semibold sm:text-5xl">
              Project Management
            </h2>
            <SkillsCardsList skills={projectManagement} />
          </div>
          <hr className="m-auto mt-12 mb-12 w-1/2" />
          <div>
            <h2 className="pt-12 text-4xl font-semibold sm:text-5xl">
              Marketing
            </h2>
            <SkillsCardsList skills={marketing} />
          </div>
          <hr className="m-auto mt-12 mb-12 w-1/2" />
          <div>
            <h2 className="pt-12 text-4xl font-semibold sm:text-5xl">Law</h2>
            <SkillsCardsList skills={law} />
          </div>
          <hr className="m-auto mt-12 mb-12 w-1/2" />
          <div>
            <h2 className="pt-12 text-4xl font-semibold sm:text-5xl">
              Communication
            </h2>
            <SkillsCardsList skills={languages} />
          </div>
        </div>
      </div>
    </Transition>
  );
}
