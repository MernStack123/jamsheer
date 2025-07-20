import Image from 'next/image';
import React from 'react';

const ImageSection: React.FC = () => {
  return (
    <section
      className="relative h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/home/images/bg.webp')",
      }}
    >
      <div className="absolute left-4 top-20 md:left-20">
        <Image
          src={'/images/home/images/1.webp'}
          height={2560}
          width={2021}
          alt="wedding image"
          className="h-[200px] w-full md:h-[500px]"
        />
      </div>
      <div className="absolute left-10 top-60 md:left-60 md:top-28 2xl:left-96">
        <Image
          src={'/images/home/images/6.webp'}
          height={2560}
          width={4000}
          alt="wedding image"
          className="h-[200px] w-full md:h-[500px]"
        />
      </div>
      <div className="absolute right-4 top-20 md:right-28">
        <Image
          src={'/images/home/images/2.webp'}
          height={2560}
          width={4000}
          alt="wedding image"
          className="h-[200px] w-full md:h-[500px]"
        />
      </div>
      <div className="absolute bottom-20 right-4 md:bottom-14 md:right-28">
        <Image
          src={'/images/home/images/5.webp'}
          height={2560}
          width={4000}
          alt="wedding image"
          className="h-[200px] w-full md:h-[250px]"
        />
      </div>

      <div className="absolute bottom-14 left-4 md:bottom-6 md:left-40 2xl:left-60">
        <Image
          src={'/images/home/images/3.webp'}
          height={2560}
          width={4000}
          alt="wedding image"
          className="h-[200px] w-full md:h-[250px]"
        />
      </div>
    </section>
  );
};

export default ImageSection;
