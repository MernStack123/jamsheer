import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SectionHeader = ({
  title = 'MEET THE PHOTOGRAPHER',
  accentColor = 'bg-yellow-500',
}) => {
  return (
    <div className="bg-transparent px-6 md:px-12">
      <div className="flex items-center gap-4">
        <div className={`h-12 w-1 ${accentColor} md:w-1.5`}></div>

        <h2 className="text-xl font-bold uppercase tracking-wider text-white md:text-2xl">
          {title}
        </h2>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <section
      className="h-full w-full bg-cover bg-center bg-no-repeat py-16 md:py-28"
      style={{
        backgroundImage: "url('/images/home/about/bg.webp')",
      }}
    >
      <div className="relative z-20 flex h-full w-full flex-col items-center justify-center gap-6 md:flex-row">
        <div>
          <Image
            src={'/images/home/about/person.webp'}
            height={2560}
            width={2021}
            alt="wedding image"
            className="h-[300px] w-full rounded-2xl md:h-[500px]"
          />
        </div>
        <div className="flex flex-col items-start justify-start gap-6">
          <SectionHeader
            title="MEET THE PHOTOGRAPHER"
            accentColor="bg-yellow-500"
          />
          <h2 className="ml-6 text-3xl font-bold uppercase tracking-wider text-white md:ml-10 md:text-5xl">
            Jamsheer Maliyekkal
          </h2>
          <p className="font-manrope ml-6 max-w-[600px] text-base font-[500] text-[#ffff] md:ml-10 md:text-lg">
            Professional photographer and visual storyteller based in Kerala,
            India.
            <br />
            <br />I have a passion for capturing authentic moments and emotions,
            creating compelling visual narratives across multiple genres. My
            work encompasses intimate wedding photography, dynamic celebrity and
            portrait sessions, vibrant stage performances, sophisticated fashion
            photography, architectural interiors, and artistic food styling.
            Beyond the camera, I bring technical excellence in post-production
            with advanced retouching and color grading techniques. My approach
            combines artistic vision with professional craftsmanship, ensuring
            each frame I capture tells a story that resonates with depth,
            beauty, and lasting impact.
          </p>
          <Link
            className="font-montserrat ml-6 border-2 border-white bg-transparent px-5 py-3 text-sm font-[600] uppercase tracking-[1px] text-[#fff] hover:cursor-pointer hover:bg-white hover:text-black md:ml-10"
            href={'/about'}
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
