// import React from 'react';

// const Hero: React.FC = () => {
//   return (
//     <section
//       className="h-screen w-full bg-cover bg-center bg-no-repeat py-10"
//       style={{
//         backgroundImage: "url('/images/home/hero1.webp')",
//       }}
//     >
//       <div className="flex h-full w-full items-end justify-center">
//         <h1 className="font-montserrat text-center text-xl font-[700] uppercase tracking-[4px] text-[#fff] md:text-2xl md:tracking-[6px]">
//           Explore
//         </h1>
//       </div>
//     </section>
//   );
// };
// export default Hero;

import React from 'react';

const Hero: React.FC = () => {
  return (
    <section
      className="relative h-screen w-full bg-cover bg-center bg-no-repeat py-10"
      style={{
        backgroundImage: "url('/images/home/hero1.webp')",
      }}
    >
      <div className="flex h-full w-full items-end justify-center">
        <div className="text-center">
          <h1 className="font-montserrat mb-8 text-xl font-[700] uppercase tracking-[4px] text-[#fff] md:text-2xl md:tracking-[6px]">
            Explore
          </h1>

          {/* Bouncing Down Arrow */}
          <div className="animate-bounce">
            <svg
              className="mx-auto h-8 w-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
