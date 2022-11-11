import { useState, useEffect } from "react";
import SkillsCardList from "@/components/SkillsCardList";
import SkillsSubtitle from "@/components/SkillsSubtitle";

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
import firebase from "../../public/images/skills/firebase.png";
import supabase from "../../public/images/skills/supabase.png";
import GCP from "../../public/images/skills/GCP.svg";
import AWS from "../../public/images/skills/aws.png";
import docker from "../../public/images/skills/docker.svg";
import kubernetes from "../../public/images/skills/kubernetes.png";
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
import { Transition } from "@headlessui/react";

// Ajouter des images (ou du texte qui s'écrit tout seul) a gauche/droit de chanque section/sous-section

const programmingLanguages = [
  // Programming Languages
  {
    name: "Javascript/NodeJS",
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
    level: 5,
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
    level: 1,
    image: kubernetes,
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
    name: "tests unitaires",
    level: 2.5,
    image: unitTest,
  },
  {
    name: "test d'intégration",
    level: 2.5,
    image: integrationTest,
  },
  {
    name: "Tests end-to-end",
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
    level: 3,
    image: vim,
  },
  {
    name: "Nano",
    level: 4,
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
    name: "Méthode Agile",
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
    level: 3,
    image: jira,
  },
  {
    name: "ClickUp",
    level: 4.5,
    image: clickup,
  },
  {
    name: "Notion",
    level: 1,
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
    name: "Contenu",
    level: 4,
    image: content,
  },
  {
    name: "Tests A/B",
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
    name: "Droit des marques",
    level: 4,
    image: trademarkLaw,
  },
  {
    name: "Droit du travail",
    level: 3,
    image: labourLaw,
  },
  {
    name: "Droit des contrats",
    level: 3,
    image: contractLaw,
  },
  {
    name: "Droit des sociétés",
    level: 3,
    image: corporateLaw,
  },
];

const langues = [
  {
    name: "Français",
    level: 5,
    image: frenchFlag,
  },
  {
    name: "Anglais",
    level: 5,
    image: englishFlag,
  },
  {
    name: "Chinois",
    level: 5,
    image: chineseFlag,
  },
  {
    name: "Allemand",
    level: 3,
    image: germanFlag,
  },
  {
    name: "Esperanto",
    level: 2,
    image: esperantoFlag,
  },
  {
    name: "Espagnol",
    level: 1,
    image: spanishFlag,
  },
];

export default function Skills() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div className="px-10 pt-14 xl:flex xl:flex-col xl:items-center">
      <Transition
        show={show}
        enter="transition-opacity duration-1000"
        enterFrom="opacity-0"
        enterTo="opacity-100"
      >
        <div>
          <h1 className="mb-3 text-lg font-semibold sm:text-xl">
            Développement Web
          </h1>
          <SkillsSubtitle subtitle="Langages de programmation" />
          <SkillsCardList skills={programmingLanguages} />
          <SkillsSubtitle subtitle="Markup" />
          <SkillsCardList skills={markupLanguages} />
          <SkillsSubtitle subtitle="UI" />
          <SkillsCardList skills={UXUI} />
          <SkillsSubtitle subtitle="Frameworks" />
          <SkillsCardList skills={frameworks} />
          <SkillsSubtitle subtitle="APIs" />
          <SkillsCardList skills={APIs} />
          <SkillsSubtitle subtitle="Bases de données" />
          <SkillsCardList skills={databases} />
          <SkillsSubtitle subtitle="DevOps" />
          <SkillsCardList skills={devops} />
          <SkillsSubtitle subtitle="Sécurité" />
          <SkillsCardList skills={security} />
          <SkillsSubtitle subtitle="Tests" />
          <SkillsCardList skills={testing} />
          <SkillsSubtitle subtitle="Version Control" />
          <SkillsCardList skills={versionControl} />
          <SkillsSubtitle subtitle="Editeurs de code" />
          <SkillsCardList skills={codeEditors} />
          <h1 className="mb-3 text-lg font-semibold sm:text-xl">
            Gestion de projet
          </h1>
          <SkillsCardList skills={projectManagement} />
          <h1 className="mb-3 text-lg font-semibold sm:text-xl">Marketing</h1>
          <SkillsCardList skills={marketing} />
          <h1 className="mb-3 text-lg font-semibold sm:text-xl">Droit</h1>
          <SkillsCardList skills={law} />
          <h1 className="mb-3 text-lg font-semibold sm:text-xl">
            Communication
          </h1>
          <SkillsCardList skills={langues} />
        </div>
      </Transition>
    </div>
  );
}
