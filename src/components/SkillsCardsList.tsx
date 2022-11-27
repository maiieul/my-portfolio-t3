import type { StaticImageData } from "next/image";
import React from "react";
import Image from "next/image";
import { Rating } from "react-simple-star-rating";
import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid";
import clsx from "clsx";

interface Skill {
  name: string;
  level: number;
  image: string | StaticImageData;
}

export default function SkillsCardsList({
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
        "m-3 flex w-full max-w-7xl grid-cols-1 flex-col items-center transition"
      )}
    >
      {skills.map((skill: Skill, i: number) => (
        <li
          key={skill.name}
          className={clsx(
            (() => {
              if ((i + 1) % 2 === 0) {
                return "translate-x-14 bg-blue-50";
              } else {
                return " -translate-x-14";
              }
            })(),
            "m-3 grow cursor-pointer rounded-lg bg-white shadow transition duration-300 ease-in-out hover:scale-105 "
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
              <div className="flex items-center">
                <h3 className="truncate text-sm font-normal text-gray-900">
                  {skill.name}
                </h3>
              </div>
              <Rating
                readonly={true}
                initialValue={skill.level}
                allowFraction={true}
                fillIcon={<StarIconSolid className="inline-block h-5 w-5" />}
                fillColor="black"
                emptyIcon={<StarIconSolid className="inline-block h-5 w-5" />}
                /* Available Props */
              />
              {/* <div className="flex">{skill.level}</div> */}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

// import type { StaticImageData } from "next/image";
// import React, { useState } from "react";
// import Image from "next/image";
// import { Rating } from "react-simple-star-rating";
// import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid";
// import clsx from "clsx";

// interface Skill {
//   name: string;
//   level: number;
//   image: string | StaticImageData;
// }

// export default function SkillsCardsList({
//   skills,
//   className,
// }: {
//   skills: Skill[];
//   className?: string;
// }) {
//   const [isHovered, setIsHovered] = useState(false);
//   return (
//     <ul
//       role="list"
//       onMouseOver={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       className={clsx(
//         className,
//         "m-3 flex w-full max-w-7xl grid-cols-1 flex-col items-center"
//       )}
//     >
//       {skills.map((skill: Skill, i: number) => (
//         <li
//           key={skill.name}
//           className={clsx(
//             (() => {
//               if ((i + 1) % 2 === 0) {
//                 isHovered ? "-translate-x-16" : "translate-x-16 bg-blue-50";
//               } else {
//                 return " -translate-x-16 hover:translate-x-16";
//               }
//             })(),
//             "m-3 grow cursor-pointer rounded-lg bg-white shadow transition duration-500 ease-in-out hover:scale-105"
//           )}
//           // style={{ minWidth: "200px" }}
//         >
//           <div className="flex items-center justify-between space-x-4 p-4">
//             <Image
//               className="h-10 w-10 flex-shrink-0 rounded-lg"
//               src={skill.image}
//               alt="Picture of me"
//             />
//             <div className="flex-1 truncate">
//               <div className="flex items-center">
//                 <h3 className="truncate text-sm font-normal text-gray-900">
//                   {skill.name}
//                 </h3>
//               </div>
//               <Rating
//                 readonly={true}
//                 initialValue={skill.level}
//                 allowFraction={true}
//                 fillIcon={<StarIconSolid className="inline-block h-5 w-5" />}
//                 fillColor="black"
//                 emptyIcon={<StarIconSolid className="inline-block h-5 w-5" />}
//                 /* Available Props */
//               />
//               {/* <div className="flex">{skill.level}</div> */}
//             </div>
//           </div>
//         </li>
//       ))}
//     </ul>
//   );
// }
