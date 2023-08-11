import React from 'react';

const skills = [
  { skill: 'Python' },
  { skill: 'Javascript' },
  { skill: 'Java' },
  { skill: 'NextJs' },
  { skill: 'NodeJs' },
];

function AboutSection() {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">About Me</h1>
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        <div className="flex flex-col space-y-10 justify-center align-top item-stretch md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10">
          <div className="md:w-1/2">
            <h1 className="font-bold text-center text-2xl mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Evan and I am a self-motivated and curious year 3
              Computer Science student from National University of Singapore.
            </p>
            <br />
            <p>
              Through playing sports, video games and taking part in
              hackerthons, I am able to consistently challenge myself while
              having fun.
            </p>
            <br />
            <p>
              I believe that continuous self-improvement is an ongoing journey
              with boundless opportunities.
            </p>
          </div>
          <div className="md:w-1/2">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>

            <div className='flex flex-wrap flex-row justify-center md:justify-start'>
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
