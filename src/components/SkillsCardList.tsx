import type { StaticImageData } from "next/image";
import React from "react";
import Image from "next/image";
import { Rating } from "react-simple-star-rating";
import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid";

interface Skill {
  name: string;
  level: number;
  image: string | StaticImageData;
}

export default function SkillsCardList({ skills }: { skills: Skill[] }) {
  return (
    <ul
      role="list"
      className=" mb-8 grid max-w-7xl grid-cols-1 gap-6  xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      {skills.map((skill: Skill) => (
        <li
          key={skill.name}
          className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
        >
          <div className="flex w-full items-center justify-between space-x-4 p-4">
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
