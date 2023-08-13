import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SlideUp from './SlideUp';
import { BsGithub, BsArrowUpRightSquare } from 'react-icons/bs';

const projects = [
  {
    name: 'Food Randomizer',
    description:
      'Application that helps users decide what they should eat. Self-directed Software development project which received advanced level of achievement.',
    github: 'https://github.com/Evande1/indecisive-foodies',
  },
  {
    name: 'Running Application',
    description:
      'Application that helps link people of different backgrounds together through running. Collaborated with a team of 5 to build a React Native application that utilized Google Maps API. Presented to a panel of judges in DSTA Brainhack 2021 and won first out of 50 teams.',
    github: 'https://github.com/TJun-Jie/Reiss',
  },
  {
    name: 'Crowd Purchasing Application',
    description:
      'Application that collates orders of people staying near each other to save on carrier costs. Collaborated with a team of 5 to build a React Native application that utilized Firebase and React Native Gifted Chat to facilitate group buys. Presented to a panel of judges.',
    github: 'https://github.com/jinyangp/codeexp_2022',
  },
  
];

function ProjectSection() {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">Projects</h1>
      <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>

      <div className="flex flex-col space-y-28 ml-5 pb-5">
        {projects.map((item, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col animate-slideUpCubiBenzier animation-delay-1 md:flex-row md:space-x-12">
                  <div>
                    <h1 className="text-4xl font-bold mb-6">{item.name}</h1>
                    <p className="mb-4 text-xl leading-7 text-neutral-600 dark:text-neutral-400">
                      {item.description}
                    </p>
                    <div>
                      <Link href={item.github}>
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 translation-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ProjectSection;
