'use client';
import React from 'react';
import Image from 'next/image';
import { Link } from 'react-scroll/modules';
import { HiArrowDown } from 'react-icons/hi';

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center my-10 py-16 sm:py-32 md:flex-row md:space-x-4 md:text-left md:py-52 ">
        <div className="md:w-1/2 md:mt-2 md:text-7xl md:mt-0">
          <Image
            className="rounded-full shadow-2xl"
            src="/EvanImage.JPG"
            alt=""
            width={300}
            height={300}
            sizes="{max-width:100}"
          />
        </div>
        <div className="md:mt-2 md:2-3/5 md:pl-20">
          <h1 className="font-bold text-4xl mt-6">Hey, I&apos;m Evan!</h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I&apos;m an aspiring Year 3 Computer Science Student who enjoys
            creating software that enhances the lives of others.
          </p>
          <Link
            to="projects"
            className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
