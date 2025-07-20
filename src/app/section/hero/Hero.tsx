import React from 'react';

const Hero: React.FC = () => {
  return (
    <section
      className="h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/home/hero1.webp')",
      }}
    >
      <div className="flex h-full w-full items-end justify-center pb-10">
        <h1 className="font-montserrat text-center text-xl font-[700] uppercase tracking-[4px] text-[#fff] md:text-2xl md:tracking-[6px]">
          Explore
        </h1>
      </div>
    </section>
  );
};
export default Hero;
