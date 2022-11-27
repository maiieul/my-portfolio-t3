/* eslint-disable react/no-unescaped-entities */
import { Transition } from "@headlessui/react";
import {
  ChatBubbleBottomCenterTextIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { useEffect, useState } from "react";

import webDevStack from "../../public/images/services/web-dev-stack.webp";
import example2 from "../../public/images/services/example2.png";
import { useRouter } from "next/router";

const transferFeatures = [
  {
    id: 1,
    name: "Compréhension de l'écosystème technique actuel",
    description:
      "Nous regarderons en détail quelles sont les options possibles à tous les niveaux : bases de données, cloud computing à la demande, DevOps, sécurité, langages, frameworks, tests, etc.",
    icon: GlobeAltIcon,
  },
  {
    id: 2,
    name: "Choix de la stack",
    description:
      "Une fois que nous aurons compris les tenants et les aboutissants de l'écosystème, nous pourrons choisir la stack la plus adaptée à votre projet.",
    icon: ScaleIcon,
  },
];
const communicationFeatures = [
  {
    id: 1,
    name: "Mobile notifications",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    id: 2,
    name: "Reminder emails",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: EnvelopeIcon,
  },
];

export default function Services() {
  const router = useRouter();
  useEffect(() => {
    router.push("/");
  }, [router]);

  // const [show, setShow] = useState(false);

  // useEffect(() => {
  //   setShow(true);
  // }, []);

  // return (
  //   <Transition
  //     show={show}
  //     enter="transition-opacity duration-1000"
  //     enterFrom="opacity-0"
  //     enterTo="opacity-100"
  //   >
  //     <div className="prose overflow-hidde py-16 lg:py-24">
  //       <div className="relative mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
  //         <div className="relative">
  //           <h1 className="whitespace-pre-line text-center text-xl font-medium italic leading-8 tracking-tight text-gray-600 sm:text-2xl">
  //             « Si j'avais demandé aux gens ce qu'ils voulaient, ils m'auraient
  //             dit un cheval plus rapide. »{"\n"}
  //             <span className="text-gray-900">— Henry Ford</span>
  //           </h1>
  //           <p className="mx-auto mt-4 max-w-3xl text-center text-gray-500">
  //             Précurseur du mouvement lean-startup, Ford n'a pas fait d'étude de
  //             marché pour construire la voiture. 100 ans plus tard, nous avons
  //             la chance d'avoir une méthode scientifique &#40;lean-startup&#41;
  //             pour construire des solutions innovantes qui répondent aux besoins
  //             du marché. C'est avec cette approche que je mène tous mes projets.
  //           </p>
  //         </div>

  //         {/* Section 1 */}
  //         <div className="relative lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
  //           <div className="relative">
  //             <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
  //               Workshop "Choisir sa stack"
  //             </h2>
  //             <p className="mt-3 text-gray-500">
  //               Bases de données, serveurs, APIs, frameworks, bibliothèques,
  //               etc., il n'y a que l'embaras du choix, mais comprendre
  //               l'écosystème technique actuel est un must si scaler plus vite
  //               que vos concurrents fait partie de vos objectifs et si vous ne
  //               voulez pas perdre de temps sur des technologies inadaptées.
  //             </p>
  //             <dl className="mt-10 space-y-10">
  //               {transferFeatures.map((item) => (
  //                 <div key={item.id} className="relative">
  //                   <dt>
  //                     <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-red-400 text-white">
  //                       <item.icon className="h-6 w-6" aria-hidden="true" />
  //                     </div>
  //                     <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
  //                       {item.name}
  //                     </p>
  //                   </dt>
  //                   <dd className="mt-2 ml-16 text-base text-gray-500">
  //                     {item.description}
  //                   </dd>
  //                 </div>
  //               ))}
  //             </dl>
  //           </div>
  //           <div className="relative -mx-4" aria-hidden="true">
  //             <Image
  //               className="relative mx-auto"
  //               src={webDevStack}
  //               alt="web developer stacks"
  //             />
  //           </div>
  //         </div>

  //         {/* Section 2 */}
  //         <div className="relative mt-12 sm:mt-16 lg:mt-24">
  //           <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:items-center lg:gap-8">
  //             <div className="lg:col-start-2">
  //               <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
  //                 Always in the loop
  //               </h2>
  //               <p className="mt-3 text-lg text-gray-500">
  //                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
  //                 Impedit ex obcaecati natus eligendi delectus, cum deleniti
  //                 sunt in labore nihil quod quibusdam expedita nemo.
  //               </p>

  //               <dl className="mt-10 space-y-10">
  //                 {communicationFeatures.map((item) => (
  //                   <div key={item.id} className="relative">
  //                     <dt>
  //                       <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
  //                         <item.icon className="h-6 w-6" aria-hidden="true" />
  //                       </div>
  //                       <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
  //                         {item.name}
  //                       </p>
  //                     </dt>
  //                     <dd className="mt-2 ml-16 text-base text-gray-500">
  //                       {item.description}
  //                     </dd>
  //                   </div>
  //                 ))}
  //               </dl>
  //             </div>

  //             <div className="relative -mx-4 mt-10 lg:col-start-1 lg:mt-0">
  //               <Image className="relative mx-auto" src={example2} alt="" />
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </Transition>
  // );
}
